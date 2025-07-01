import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://clipflow-youtube-video-downloader.onrender.com/api",
  // baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
