"use client";
import image from "@/assets/icons/recordIcon.svg";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { ImageIcon, Images, Send } from "lucide-react"; // Using Lucide icons
import Image from "next/image";
import { useRef, useState } from "react";

const MessageInput = () => {
  const [recording, setRecording] = useState<boolean>(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  // Ref for the hidden file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle file selection
  const handleFileSelection = () => {
    console.log("File selection triggered");
    fileInputRef.current?.click(); // Trigger the hidden file input
  };

  // Handle file change event
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      console.log("Selected file:", files[0]);
      // Process the file as needed (e.g., upload, preview, etc.)
    }
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
        <Dropdown className="p-0">
          <DropdownTrigger>
            <div className="flex items-center gap-2 cursor-pointer bg-[#F5F5F5] py-3 ">
              <ImageIcon className="w-6 h-6 opacity-60" />
            </div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Media options"
            className="bg-[#5B5B5B] shadow-md p-2 rounded-md "
          >
            <DropdownItem
              key="media-record-2"
              onClick={handleFileSelection}
              // className="hover:border-[#FF0000] border-none hover:bg-inherit"
              classNames={{
                base: "hover:border-[#FF0000] border-none hover:bg-inherit",
                // list: "p-24",
                description: "p-24",
              }}
            >
              <div className="flex  gap-12 items-center text-white hover:border-[#FF0000] font-semibold  ">
                <p className="text-base mr-12 ">앨범</p>
                <Images className="w-4 h-4 " />
              </div>
            </DropdownItem>
            <DropdownItem
              key="screen-record"
              onClick={handleScreenRecord}
              className="hover:border-[#FF0000]"
            >
              <div className="flex flex-1 items-center text-white font-semibold   ">
                <p className="text-base mr-12">비디오 코칭</p>
                <Image src={image} alt="Video coaching icon" />
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* Send button */}
        <div className="cursor-pointer bg-[#F5F5F5] py-3 pl-3 pr-5 rounded-r-2xl">
          <Send className="w-6 h-6 bg-[#F5F5F5]  opacity-60 cursor-pointer ml-2" />
        </div>
      </div>
      {/* Recording status message */}
      {recording && (
        <p className="text-green-500 mt-2 text-sm">Recording in progress...</p>
      )}

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default MessageInput;
