const express = require("express");
const router = express.Router();
const {
  getMediaInfo,
  proxyDownload,
} = require("../controllers/downloadController");

router.post("/download", getMediaInfo);
router.get("/proxy", proxyDownload);

module.exports = router;
