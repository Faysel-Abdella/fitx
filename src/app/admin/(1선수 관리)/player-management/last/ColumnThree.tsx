"use client";

import { Dumbbell, Flag } from "lucide-react";
import MenuItem from "./MenuItem";

export const ColumnThree = () => {
  return (
    <div className="w-full">
      {/* Placeholder Header */}
      <div className="flex gap-5 mb-6">
        <MenuItem
          icon={<Dumbbell className="w-5 h-5" />}
          text="대시보드"
          href="/dashboard"
          className="flex-1"
        />
        <MenuItem
          icon={<Flag className="w-5 h-5" />}
          text="캘린더"
          href="/calendar"
          className="flex-1"
        />
      </div>

      {/* Section Title */}
      <div className="flex justify-between  mx-2 font-bold mb-3">
        <div className=" text-[#4D4D4D] text-xl ">부상</div>
        <div className=" text-mainBlue text-base">저장</div>
      </div>

      <textarea
        placeholder="placeholder"
        defaultValue="부상 내용을 입력해 주세요"
        className="bg-white resize-y min-h-[94px] w-full mx-auto text-sm text-[#A1A1A1]  rounded-lg shadow-md p-3 focus:outline-none"
      />

      <div className="flex justify-between my-6  mx-2 font-bold mb-3">
        <div className=" text-[#4D4D4D] text-xl ">선수 메모</div>
        <div className=" text-mainBlue text-base">저장</div>
      </div>

      <textarea
        placeholder="placeholder"
        defaultValue="부상 내용을 입력해 주세요"
        className="bg-white resize-y min-h-[200px] w-full mx-auto text-sm text-[#A1A1A1]  rounded-lg shadow-md p-3 focus:outline-none"
      />
    </div>
  );
};
