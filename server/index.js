const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const downloadRoutes = require("./routes/download");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    allowedHeaders:['Content-Type'],
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
