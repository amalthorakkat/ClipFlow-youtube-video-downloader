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
const mongoose = require("mongoose");

const urlEncode = (url) => {
  try {
    return encodeURIComponent(url).replace(/'/g, "%27").replace(/"/g, "%22");
  } catch (error) {
    console.error("Error in urlEncode: ", error.message);
    return url;
  }
};

// MongoDB schema for caching
const VideoSchema = new mongoose.Schema({
  url: { type: String, unique: true },
  title: String,
  thumbnail: String,
  formats: Array,
  duration: Number,
  publishedAt: String,
  createdAt: { type: Date, expires: "24h", default: Date.now },
});
const Video = mongoose.model("Video", VideoSchema);

// Exponential backoff with increased retries and delay
const exponentialBackoff = async (fn, retries = 5, delay = 2000) => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0 && error.message.includes("429")) {
      const randomDelay = delay + Math.random() * 200; // Randomize to avoid synchronized retries
      console.log(`Retrying in ${randomDelay}ms due to 429 error...`);
      await new Promise((resolve) => setTimeout(resolve, randomDelay));
      return exponentialBackoff(fn, retries - 1, delay * 2);
    }
    throw error;
  }
};

const getMediaInfo = async (req, res) => {
  let { url } = req.body;
  try {
    // Strip playlist parameters
    url = url.replace(/&list=.*$/, "");
    if (!ytdl.validateURL(url)) {
      return res.status(400).json({ error: "Invalid YouTube URL" });
    }

    // Check cache
    const cached = await Video.findOne({ url });
    if (cached) {
      console.log(`Returning cached data for URL: ${url}`);
      return res.status(200).json(cached);
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
    // Cache the result
    await Video.create({ url, ...data });
    res.json(data);
  } catch (error) {
    console.error("Error in getMediaInfo:", error.message, error.stack);
    res.status(error.message.includes("429") ? 429 : 500).json({
      error: error.message.includes("429") ? "Too Many Requests. Please try again later." : "Failed to fetch media info",
      details: error.message,
    });
  }
};

const proxyDownload = async (req, res) => {
  const { url, title } = req.query;
  try {
    if (!url) {
      return res.status(400).json({ error: "No URL provided" });
    }
    const response = await axios.get(url, { responseType: "stream" });
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="ClipFlow-${urlEncode(title || "downloaded-media")}${url.includes("audio") ? ".mp3" : ".mp4"}`
    );
    response.data.pipe(res);
  } catch (error) {
    console.error("Error in proxyDownload:", error.message);
    res.status(500).json({ error: "Failed to proxy media", details: error.message });
  }
};

module.exports = { getMediaInfo, proxyDownload };