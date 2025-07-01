import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Video,
  Music,
  Loader2,
  Upload,
} from "lucide-react";
import axiosInstance from "../../config/axiosInstance";
import { useTranslation } from "react-i18next";
import { toast, Toaster } from "react-hot-toast";

const formatDuration = (seconds) => {
  if (!seconds) return "N/A";
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};

const formatDate = (isoDate) => {
  if (!isoDate) return "N/A";
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const LinkPaste = ({ onDownload }) => {
  const { t } = useTranslation();
  const [url, setUrl] = useState("");
  const [mediaInfo, setMediaInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (mediaInfo && !isExiting) {
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    } else if (!mediaInfo) {
      setIsVisible(false);
    }
  }, [mediaInfo, isExiting]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMediaInfo(null);
    setIsVisible(false);
    setIsExiting(false);
    try {
      const response = await axiosInstance.post("/download", { url });
      setMediaInfo(response.data);
      setIsLoading(false);
      toast.success("Fetching completed", {
        style: {
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        position: "top-center",
        duration: 3000,
      });
    } catch (error) {
      toast.error("Invalid link", {
        style: {
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "#f87171",
          borderRadius: "8px",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        position: "top-center",
        duration: 4000,
      });
      setIsLoading(false);
    }
  };

  const handleDownload = (formatUrl, title) => {
    setIsExiting(true);
    const link = document.createElement("a");
    link.href = `http://localhost:5000/api/proxy?url=${formatUrl}`;
    link.download = `${title.replace(/[^a-zA-Z0-9]/g, "_")}.mp4`;
    link.click();
    toast.success("Download started", {
      style: {
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "#fff",
        borderRadius: "8px",
        padding: "12px 16px",
        fontSize: "14px",
        fontWeight: "500",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      position: "top-center",
      duration: 3000,
    });
    setTimeout(() => {
      // setMediaInfo(null);
      e.preventDefault();
      setIsExiting(false);
      onDownload();
    }, 600);
  };

  if (mediaInfo) {
    console.log("Formats:", mediaInfo.formats);
    console.log("Thumbnail:", mediaInfo.thumbnail);
    console.log("Duration:", mediaInfo.duration);
    console.log("Published At:", mediaInfo.publishedAt);
  }

  const videoFormats = mediaInfo
    ? mediaInfo.formats.filter((format) =>
        format.mimeType.includes("video/mp4")
      )
    : [];
  const audioFormats = mediaInfo
    ? mediaInfo.formats.filter((format) => format.mimeType.includes("audio"))
    : [];

  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Toaster />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          <form onSubmit={handleSubmit}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  {t("title")}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto px-2">
                  {t("subtitle")}
                </p>
              </div>

              <div className="max-w-xl mx-auto px-2">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-1.5 sm:p-2">
                    <div className="flex flex-col sm:flex-row items-stretch gap-2">
                      <input
                        className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 outline-none min-w-0 rounded-lg sm:rounded-none sm:rounded-l-lg"
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder={t("placeholder")}
                      />
                      <button
                        className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg sm:rounded-r-lg px-4 sm:px-5 py-2.5 sm:py-3 font-medium transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                            <span className="hidden sm:inline">
                              {t("processing")}
                            </span>
                            <span className="sm:hidden">...</span>
                          </>
                        ) : (
                          <>
                            <span className="hidden sm:inline">
                              {t("downloadButton")}
                            </span>
                            <span className="sm:hidden">
                              {t("downloadButtonShort")}
                            </span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Media Info Section */}
      {mediaInfo && (
        <div
          className={`max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 mt-10 transition-all duration-600 ease-in-out ${
            isVisible && !isExiting
              ? "animate-slide-down"
              : isExiting
              ? "animate-slide-up"
              : "opacity-0 translate-y-[-50px]"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Thumbnail and Title */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {mediaInfo.thumbnail ? (
                  <div
                    className={`relative group ${
                      isVisible && !isExiting
                        ? "animate-slide-down delay-100"
                        : isExiting
                        ? "animate-slide-up delay-100"
                        : "opacity-0 translate-y-[-30px]"
                    }`}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <img
                      src={mediaInfo.thumbnail}
                      alt={mediaInfo.title}
                      className="relative w-full max-h-48 sm:max-h-64 object-cover rounded-lg sm:rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-full h-48 sm:h-64 bg-gray-700/20 rounded-lg sm:rounded-xl animate-pulse shadow-lg ${
                      isVisible && !isExiting
                        ? "animate-slide-down delay-100"
                        : isExiting
                        ? "animate-slide-up delay-100"
                        : "opacity-0 translate-y-[-30px]"
                    }`}
                  ></div>
                )}
                <div
                  className={
                    isVisible && !isExiting
                      ? "animate-slide-down delay-200"
                      : isExiting
                      ? "animate-slide-up delay-200"
                      : "opacity-0 translate-y-[-30px]"
                  }
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight line-clamp-2 text-center">
                    {mediaInfo.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 text-center">
                    Duration: {formatDuration(mediaInfo.duration)} | Uploaded: {formatDate(mediaInfo.publishedAt)}
                    
                  </p>
                </div>
              </div>

              {/* Download Options */}
              <div
                className={`space-y-4 sm:space-y-6 md:space-y-8 ${
                  isVisible && !isExiting
                    ? "animate-slide-down delay-300"
                    : isExiting
                    ? "animate-slide-up delay-300"
                    : "opacity-0 translate-y-[-30px]"
                }`}
              >
                {/* Video Formats */}
                {videoFormats.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 md:mb-6">
                      <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-md">
                        <Video className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                        {t("videoSection")}
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {videoFormats.map((format, index) => (
                        <div
                          key={`${format.itag}-${index}`}
                          className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300 group"
                        >
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3">
                            <div className="text-gray-300 min-w-0">
                              <div className="font-semibold text-white text-xs sm:text-sm md:text-base">
                                {format.quality}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-400 truncate">
                                ({format.mimeType})
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                handleDownload(format.url, mediaInfo.title)
                              }
                              className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-md font-medium transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 group-hover:scale-105 shadow-md text-xs sm:text-sm md:text-base whitespace-nowrap"
                            >
                              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{t("download")}</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Audio Formats */}
                {audioFormats.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 md:mb-6">
                      <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-md">
                        <Music className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                        {t("audioSection")}
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {audioFormats.map((format, index) => (
                        <div
                          key={`${format.itag}-${index}`}
                          className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300 group"
                        >
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3">
                            <div className="text-gray-300 min-w-0">
                              <div className="font-semibold text-white text-xs sm:text-sm md:text-base">
                                {format.quality}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-400 truncate">
                                ({format.mimeType})
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                handleDownload(format.url, mediaInfo.title)
                              }
                              className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-md font-medium transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 group-hover:scale-105 shadow-md text-xs sm:text-sm md:text-base whitespace-nowrap"
                            >
                              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{t("download")}</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkPaste;
