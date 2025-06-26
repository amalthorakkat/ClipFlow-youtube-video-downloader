import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import axiosInstance from "../../config/axiosInstance";

const LinkPaste = () => {
  const [url, setUrl] = useState("");
  const [mediaInfo, setMediaInfo] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/download", { url });
      setMediaInfo(response.data);
    } catch (error) {
      setError(error.response?.data?.error || "Failed to fetch media info");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (formatUrl, title) => {
    const link = document.createElement("a");
    link.href = `http://localhost:5000/api/proxy?url=${formatUrl}`;
    link.download = `${title.replace(/[^a-zA-Z0-9]/g, "_")}.mp4`;
    link.click();
  };

  if (mediaInfo) {
    console.log("Formats", mediaInfo.formats);
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#101828] text-white flex items-center justify-center flex-col h-[250px]">
          <h1 className="text-[25px] font-medium">Youtube Video Downloader</h1>
          <div className="border bg-white text-black w-[300px] flex items-center justify-center rounded-[5px] mt-5">
            <input
              className="outline-none h-full w-full pl-2"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube link here"
            />
            <button
              className="text-white bg-black h-9 w-9 flex items-center justify-center text-2xl"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
              ) : (
                <IoMdArrowRoundForward />
              )}
            </button>
          </div>
        </div>
      </form>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {mediaInfo && (
        <div className="mt-6 mx-auto max-w-md">
          <h2 className="text-xl font-semibold truncate">{mediaInfo.title}</h2>
          {videoFormats.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-medium">Video Formats</h3>
              <ul className="mt-2 space-y-2">
                {videoFormats.map((format, index) => (
                  <li
                    key={`${format.itag}-${index}`}
                    className="flex justify-between items-center border p-2 rounded"
                  >
                    <span>
                      {format.quality} ({format.mimeType})
                    </span>
                    <button
                      onClick={() =>
                        handleDownload(format.url, mediaInfo.title)
                      }
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    >
                      Download
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {audioFormats.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-medium">Audio Formats</h3>
              <ul className="mt-2 space-y-2">
                {audioFormats.map((format, index) => (
                  <li
                    key={`${format.itag}-${index}`}
                    className="flex justify-between items-center border p-2 rounded"
                  >
                    <span>
                      {format.quality} ({format.mimeType})
                    </span>
                    <button
                      onClick={() =>
                        handleDownload(format.url, mediaInfo.title)
                      }
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    >
                      Download
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LinkPaste;
