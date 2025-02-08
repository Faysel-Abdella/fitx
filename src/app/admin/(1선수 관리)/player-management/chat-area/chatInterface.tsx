"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import MessageInput from "./MessageInput";
import { SimpleVideo } from "./SimpleVideo";
import VideoMessage from "./VideoMessage";

// Dynamically import ReactPlayer to prevent SSR hydration issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const chatBubbleStyles =
  "rounded-tl-[14px] rounded-tr-[2px] rounded-br-[14px] rounded-bl-[14px] px-[12px] py-[12px]";

export default function ChatInterface() {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    setAudioUrl(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    );
  }, []);

  return (
    <div className="flex flex-col rounded-lg h-full gap-24 bg-white">
      {/* Chat Messages */}
      <div className="flex-1 p-6 space-y-2">
        {/* User Messages */}
        <div className="flex justify-end">
          <div className={`${chatBubbleStyles} bg-mainBlue text-white`}>
            <p className="text-sm">오늘 운동 영상입니다.</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className={`${chatBubbleStyles} bg-mainBlue text-white`}>
            <p className="text-sm">피드백 부탁드려요</p>
          </div>
        </div>
        <div className="flex justify-end">
          {/* Video Player */}
          <div className="w-[70%]">
            <SimpleVideo />
          </div>
        </div>

        {/* Received Message */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <div className={`${chatBubbleStyles} bg-[#141414] text-white`}>
            <p className="text-sm">
              넷워크짐에 등록 주셔서 고마움 드리며 앞으로 늘 건강하시고,
              네트워크짐 안전 훈련하며 살아 늘 건강하자.
            </p>
          </div>
        </div>

        {/* User Response */}
        <div className="flex justify-end">
          <div className={`${chatBubbleStyles} bg-mainBlue text-white`}>
            <p className="text-sm">
              알겠습니다. 더 안정적으로 유지하도록 하겠습니다.
            </p>
          </div>
        </div>

        {/* Video Message */}
        <VideoMessage message="넷워크짐에 등록 주셔서 고마움 드리며 앞으로 늘 건강하시고, 네트워크짐 안전 훈련하며 살아 늘 건강하자." />

        {/* Audio Message with ReactPlayer */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          {audioUrl && (
            <ReactPlayer
              url={audioUrl}
              playing={false}
              controls
              height="50px"
              width="80%"
            />
          )}
        </div>
      </div>

      {/* Message Input */}
      <MessageInput />
    </div>
  );
}
