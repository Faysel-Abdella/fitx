"use client";

import type React from "react";
import { useState } from "react";

interface VideoMessageProps {
  message: string;
}

const VideoMessage: React.FC<VideoMessageProps> = ({ message }) => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  // Using a reliable sample video from Cloudinary
  const videoSrc = "/video/sample.mp4";

  return (
    <div className="flex items-start space-x-3">
      <div className="w-8 h-8 bg-gray-300 rounded-full" />
      <div className="max-w-[65%] space-y-2">
        <div className="bg-[#141414] rounded-tr-[14px] rounded-tl-[2px] rounded-br-[14px] rounded-bl-[14px] px-[12px] py-[12px]">
          <video
            controls
            className="w-full rounded-lg"
            onError={handleVideoError}
            suppressHydrationWarning
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {videoError && (
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Video unavailable
            </div>
          )}
          <p className="text-sm mt-2 text-white">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoMessage;
