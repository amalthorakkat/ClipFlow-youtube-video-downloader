import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://clipflow-youtube-video-downloader.onrender.com/api",
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL:
//     import.meta.env.VITE_API_BASE_URL ||
//     "https://clipflow-youtube-video-downloader.onrender.com/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });

// export default axiosInstance;
