"use client";

import { Image as ImageIcon, Monitor, Send, Video } from "lucide-react";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import myGym from "@/assets";
import audio from "@/assets";
import Image from "next/image";

const chatBubbleStyles =
  "rounded-tl-[14px] rounded-tr-[2px] rounded-br-[14px] rounded-bl-[14px] px-[12px] py-[12px]";

export default function ChatInterface() {
  return (
    <div className="flex flex-col rounded-lg  h-full gap-24 bg-white">
      {/* Chat Messages */}
      <div className="flex-1  p-6 space-y-2">
        {/* User Message (right-aligned) */}
        {/* message one */}
        <div className="flex justify-end ">
          <div
            className={` ${chatBubbleStyles} bg-mainBlue text-white gap-[3px]`}
          >
            <p className="text-sm">오늘 운동 영상입니다.</p>
          </div>
        </div>
        {/* message two */}
        <div className="flex justify-end">
          <div className="max-w-[65%] bg-mainBlue  text-white rounded-tl-[14px] rounded-tr-[2px] rounded-br-[14px] rounded-bl-[14px] px-[12px] py-[12px] gap-[5px]">
            <p className="text-sm">피드백 부탁드려요</p>
          </div>
        </div>
        {/* message three */}
        <div className="flex justify-end">
          <Image
            className="w-60 h-40"
            src={myGym.myGym}
            alt="the girls image"
          />
        </div>

        <div className="flex items-start space-x-3">
          {/* Placeholder for profile image */}
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <div className="max-w-[65%] bg-[#141414] rounded-tr-[14px] rounded-tl-[2px] rounded-br-[14px] rounded-bl-[14px] px-[12px] py-[12px]">
            <p className="text-sm text-white">
              넷워크짐에 등록 주셔서 고마움 드리며 앞으로 늘 건 강하시고,
              네트워크짐 안전 훈련하며 살아 늘 건 항하자.
            </p>
          </div>
        </div>

        {/* User Response (right-aligned) */}
        <div className="flex justify-end">
          <div className="max-w-[65%] bg-mainBlue text-white rounded-tl-[14px] rounded-tr-[2px] rounded-br-[14px] rounded-bl-[14px] px-[12px] py-[12px] gap-[10px]">
            <p className="text-sm">
              알겠습니다. 더 안정적으로 유지하도록 하겠습니다.
            </p>
          </div>
        </div>

        {/* Video Message (left-aligned) */}
        <div className="flex items-start space-x-3">
          {/* Placeholder for profile image */}
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <div className="max-w-[65%] space-y-2">
            <div className="bg-[#141414] rounded-tr-[14px] rounded-tl-[2px] rounded-br-[14px] rounded-bl-[14px] px-[12px] py-[12px]">
              <video controls className="w-full rounded-lg">
                <source src="https://your-video-url.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-sm mt-2 text-white">
                넷워크짐에 등록 주셔서 고마움 드리며 앞으로 늘 건 강하시고,
                네트워크짐 안전 훈련하며 살아 늘 건 항하자.
              </p>
            </div>
          </div>
        </div>

        {/* Audio Message (left-aligned) */}
        <div className="flex items-start space-x-3">
          {/* Placeholder for profile image */}
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <Image src={audio.audio} alt="audio" />
        </div>
      </div>

      {/* Message input */}
      <div className="border-t bg-[#ffffff] pb-12  pt-3 px-4">
        <div className="flex items-center p-3">
          <input
            type="text"
            placeholder="메시지 입력"
            className="flex-1 bg-[#F5F5F5] py-3 px-6 rounded-l-2xl text-base focus:outline-none placeholder-[#A1A1A1]"
          />
          <div className="flex items-center gap-2  bg-[#F5F5F5] py-3 px-6 rounded-r-2xl">
            <Dropdown>
              <DropdownTrigger>
                <div className="flex items-center gap-2 cursor-pointer">
                  <ImageIcon className="w-6 h-6 opacity-60" />
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Media options">
                <DropdownItem key="media-record-2">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 mr-2" />
                    <p>select Media</p>
                  </div>
                </DropdownItem>
                <DropdownItem key="screen-record">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 mr-2" />
                    <p>Screen Record</p>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Send className="w-6 h-6 opacity-60 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
