// const ytdl = require("@distube/ytdl-core");
// const axios = require("axios");

// const urlEncode = (url) => {
//   try {
//     return encodeURIComponent(url).replace(/'/g, "%27").replace(/"/g, "%22");
//   } catch (error) {
//     console.error("Error in urlEncode: ", error.message);
//     return url;
//   }
// };

// const getMediaInfo = async (req, res) => {
//   const { url } = req.body;
//   try {
//     if (!ytdl.validateURL(url)) {
//       return res.status(400).json({ error: "Invalid YouTube URL" });
//     }
//     console.log("Fetching info for URL:", url);
//     const info = await ytdl.getInfo(url);
//     console.log("Info fetched successfully!");
//     const formatsMap = new Map();
//     info.formats
//       .filter(
//         (format) =>
//           format.mimeType.includes("video/mp4") ||
//           format.mimeType.includes("audio")
//       )
//       .forEach((format) => {
//         const mimeType = format.mimeType.split(";")[0];
//         const key = format.qualityLabel || mimeType;
//         const current = formatsMap.get(key);
//         if (
//           !current ||
//           (format.audioBitrate &&
//             format.audioBitrate > (current.audioBitrate || 0))
//         ) {
//           formatsMap.set(key, format);
//         }
//       });
//     const formats = Array.from(formatsMap.values())
//       .map((format) => ({
//         itag: format.itag,
//         quality:
//           format.qualityLabel ||
//           (format.audioBitrate ? `${format.audioBitrate}kbps` : "audio"),
//         mimeType: format.mimeType.split(";")[0],
//         url: urlEncode(format.url),
//       }))
//       .sort((a, b) => {
//         if (a.mimeType.includes("video") && b.mimeType.includes("video")) {
//           const qualityA = parseInt(a.quality) || 0;
//           const qualityB = parseInt(b.quality) || 0;
//           return qualityB - qualityA;
//         }
//         if (a.mimeType.includes("audio") && b.mimeType.includes("audio")) {
//           const bitrateA = parseInt(a.quality) || 0;
//           const bitrateB = parseInt(b.quality) || 0;
//           return bitrateB - bitrateA;
//         }
//         return a.mimeType.includes("video") ? -1 : 1;
//       });

//     const thumbnail = info.videoDetails.thumbnails.reduce(
//       (prev, curr) =>
//         prev.width * prev.height > curr.width * curr.height ? prev : curr,
//       {}
//     );

//     const duration = info.videoDetails.lengthSeconds;
//     const publishedAt = info.videoDetails.publishDate;

//     res.json({
//       title: info.videoDetails.title,
//       thumbnail: thumbnail.url || "",
//       formats,
//       duration,
//       publishedAt,
//     });
//   } catch (error) {
//     console.error("Error in getMediaInfo:", error.message, error.stack);
//     res
//       .status(500)
//       .json({ error: "Failed to fetch media info", details: error.message });
//   }
// };

// const proxyDownload = async (req, res) => {
//   const { url } = req.query;
//   try {
//     if (!url) {
//       return res.status(400).json({ error: "No URL provided" });
//     }
//     const response = await axios.get(url, { responseType: "stream" });

//     res.setHeader(
//       "Content-Disposition",
//       'attachment; filename="ClipFlow-downloaded-media.mp4"'
//     );
//     response.data.pipe(res);
//   } catch (error) {
//     console.error("Error in proxyDownload:", error.message);
//     res
//       .status(500)
//       .json({ error: "Failed to proxy media", details: error.message });
//   }
// };

// module.exports = { getMediaInfo, proxyDownload };



const ytdl = require("@distube/ytdl-core");
const axios = require("axios");

const urlEncode = (url) => {
  try {
    return encodeURIComponent(url).replace(/'/g, "%27").replace(/"/g, "%22");
  } catch (error) {
    console.error("Error in urlEncode: ", error.message);
    return url;
  }
};

// Exponential backoff helper
const exponentialBackoff = async (fn, retries = 3, delay = 1000) => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0 && error.message.includes("429")) {
      const randomDelay = delay + Math.random() * 100; // Randomize to avoid synchronized retries
      await new Promise((resolve) => setTimeout(resolve, randomDelay));
      return exponentialBackoff(fn, retries - 1, delay * 2);
    }
    throw error;
  }
};

const getMediaInfo = async (req, res) => {
  const { url } = req.body;
  try {
    if (!ytdl.validateURL(url)) {
      return res.status(400).json({ error: "Invalid YouTube URL" });
    }
    console.log("Fetching info for URL:", url);
    const getInfo = async () => {
      const info = await ytdl.getInfo(url);
      const formatsMap = new Map();
      info.formats
        .filter(
          (format) =>
            format.mimeType.includes("video/mp4") ||
            format.mimeType.includes("audio")
        )
        .forEach((format) => {
          const mimeType = format.mimeType.split(";")[0];
          const key = format.qualityLabel || mimeType;
          const current = formatsMap.get(key);
          if (
            !current ||
            (format.audioBitrate &&
              format.audioBitrate > (current.audioBitrate || 0))
          ) {
            formatsMap.set(key, format);
          }
        });
      const formats = Array.from(formatsMap.values())
        .map((format) => ({
          itag: format.itag,
          quality:
            format.qualityLabel ||
            (format.audioBitrate ? `${format.audioBitrate}kbps` : "audio"),
          mimeType: format.mimeType.split(";")[0],
          url: urlEncode(format.url),
        }))
        .sort((a, b) => {
          if (a.mimeType.includes("video") && b.mimeType.includes("video")) {
            const qualityA = parseInt(a.quality) || 0;
            const qualityB = parseInt(b.quality) || 0;
            return qualityB - qualityA;
          }
          if (a.mimeType.includes("audio") && b.mimeType.includes("audio")) {
            const bitrateA = parseInt(a.quality) || 0;
            const bitrateB = parseInt(b.quality) || 0;
            return bitrateB - bitrateA;
          }
          return a.mimeType.includes("video") ? -1 : 1;
        });

      const thumbnail = info.videoDetails.thumbnails.reduce(
        (prev, curr) =>
          prev.width * prev.height > curr.width * curr.height ? prev : curr,
        {}
      );

      return {
        title: info.videoDetails.title,
        thumbnail: thumbnail.url || "",
        formats,
        duration: parseInt(info.videoDetails.lengthSeconds) || 0,
        publishedAt: info.videoDetails.publishDate || "N/A",
      };
    };

    const data = await exponentialBackoff(getInfo);
    console.log("Info fetched successfully!");
    res.json(data);
  } catch (error) {
    console.error("Error in getMediaInfo:", error.message, error.stack);
    res.status(error.message.includes("429") ? 429 : 500).json({
      error:
        error.message.includes("429")
          ? "Too Many Requests. Please try again later."
          : "Failed to fetch media info",
      details: error.message,
    });
  }
};

const proxyDownload = async (req, res) => {
  const { url } = req.query;
  try {
    if (!url) {
      return res.status(400).json({ error: "No URL provided" });
    }
    const response = await axios.get(url, { responseType: "stream" });
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="ClipFlow-${urlEncode(
        req.query.title || "downloaded-media"
      )}.mp4"`
    );
    response.data.pipe(res);
  } catch (error) {
    console.error("Error in proxyDownload:", error.message);
    res
      .status(500)
      .json({ error: "Failed to proxy media", details: error.message });
  }
};

module.exports = { getMediaInfo, proxyDownload };