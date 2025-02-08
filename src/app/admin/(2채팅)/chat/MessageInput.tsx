"use client";
import { Send } from "lucide-react"; // Using Lucide icons

const MessageInput = () => {
  return (
    <div className="border-t bg-[#ffffff] pb-12 pt-3 px-4">
      <div className="flex items-center p-3">
        {/* Input field */}
        <input
          type="text"
          placeholder="메시지 입력"
          className="flex-1 bg-[#F5F5F5] py-3 px-6 rounded-l-2xl text-base focus:outline-none placeholder-[#A1A1A1]"
        />

        {/* Send button */}
        <div className="cursor-pointer bg-[#F5F5F5] py-3 pl-3 pr-5 rounded-r-2xl">
          <Send className="w-6 h-6 bg-[#F5F5F5]  opacity-60 cursor-pointer ml-2" />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
