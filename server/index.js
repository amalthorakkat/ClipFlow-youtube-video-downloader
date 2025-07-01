const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const downloadRoutes = require("./routes/download");

const allowedOrigins = [
  "https://clip-flow-youtube-video-downloader.vercel.app",
  "https://clip-flow-youtube-video-dow-git-68171b-amal-thorakkats-projects.vercel.app",
  "https://clip-flow-youtube-video-downloader-qnfwhpuz3.vercel.app",
];

const app = express();
app.use(
  cors({
    // origin: "http://localhost:5173",
    // origin: "https://clip-flow-youtube-video-downloader-qnfwhpuz3.vercel.app",
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    allowedHeaders: ["Content-Type"],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api", downloadRoutes);

// MongoDB Connection
connectDB();

app.get("/api/health", (req, res) => res.json({ status: "server running" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
