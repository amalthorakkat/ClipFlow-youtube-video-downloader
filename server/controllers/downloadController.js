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

const getMediaInfo = async (req, res) => {
  const { url } = req.body;
  try {
    if (!ytdl.validateURL(url)) {
      return res.status(400).json({ error: "Invalid Youtube URL" });
    }

    console.log("Fetching info for URL:", url);
    const info = await ytdl.getInfo(url);
    console.log("Info fetched successfully!");

    const seenItags = new Set();
    const formats = info.formats
      .filter((format) => {
        if (
          format.mimeType.includes("video/mp4") ||
          format.mimeType.includes("audio")
        ) {
          const mimeType = format.mimeType.split(";")[0];
          const codecs =
            format.mimeType.split('codecs="')[1]?.split('"')[0] || "";
          const key = `${format.itag}-${mimeType}-${codecs}`;

          if (!seenItags.has(key)) {
            seenItags.add(key);
            return true;
          }
          return false;
        }
        return false;
      })
      .map((format) => ({
        itag: format.itag,
        quality: format.qualityLabel || "audio",
        mimeType: format.mimeType.split(";")[0],
        url: urlEncode(format.url),
      }));

    res.json({
      title: info.videoDetails.title,
      formats,
    });
  } catch (error) {
    console.error("Error in getMediaInfo: ", error.message, error.stack);
    console.log(error.stack);
    res
      .status(500)
      .json({ error: "Failed to fetch media info", details: error.message });
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
      'attachment; filename="downloaded-media.mp4"'
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
