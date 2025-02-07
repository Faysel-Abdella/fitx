"use client";
import { useState } from "react";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { ImageIcon, Video, Monitor, Send } from "lucide-react"; // Using Lucide icons

const MessageInput = () => {
  const [recording, setRecording] = useState<boolean>(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  // Handle file selection (placeholder for now)
  const handleFileSelection = () => {
    console.log("File selection triggered");
    // You can open a file picker here using <input type="file" />
  };

  // Handle screen recording
  const handleScreenRecord = async () => {
    try {
      const stream: MediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });
      setMediaStream(stream);
      startRecording(stream);
    } catch (error) {
      console.error("Error accessing screen recording:", error);
    }
  };

  // Start recording logic
  const startRecording = (stream: MediaStream) => {
    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (event: BlobEvent) => {
      if (event.data.size > 0) {
        setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
      }
    };

    recorder.onstop = () => {
      setRecording(false);
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      console.log("Recording stopped. Video URL:", url);
      // Optionally, you can display or download the video here
    };

    recorder.start();
    setRecording(true);

    return () => {
      recorder.stop();
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    };
  };

  return (
    <div className="border-t bg-[#ffffff] pb-12 pt-3 px-4">
      <div className="flex items-center p-3">
        {/* Input field */}
        <input
          type="text"
          placeholder="메시지 입력"
          className="flex-1 bg-[#F5F5F5] py-3 px-6 rounded-l-2xl text-base focus:outline-none placeholder-[#A1A1A1]"
        />

        {/* Media options dropdown */}
        <Dropdown>
          <DropdownTrigger>
            <div className="flex items-center gap-2 cursor-pointer bg-[#F5F5F5] py-3 ">
              <ImageIcon className="w-6 h-6 opacity-60" />
            </div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Media options"
            className="bg-white shadow-md rounded-md w-48"
          >
            <DropdownItem key="media-record-2" onClick={handleFileSelection}>
              <div className="flex items-center gap-2 px-4 py-2 ">
                <Video className="w-4 h-4 mr-2" />
                <p className="text-sm">Select Media</p>
              </div>
            </DropdownItem>
            <DropdownItem key="screen-record" onClick={handleScreenRecord}>
              <div className="flex items-center gap-2 px-4 py-2 ">
                <Monitor className="w-4 h-4 mr-2" />
                <p className="text-sm">Screen Record</p>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Send button */}
        <div className=" cursor-pointer bg-[#F5F5F5] py-3 pl-3 pr-5 rounded-r-2xl">
          <Send className="w-6 h-6 bg-[#F5F5F5]  opacity-60 cursor-pointer ml-2" />
        </div>
      </div>

      {/* Recording status message */}
      {recording && (
        <p className="text-green-500 mt-2 text-sm">Recording in progress...</p>
      )}
    </div>
  );
};

export default MessageInput;
