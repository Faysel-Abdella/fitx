import { ToggleRadio } from "@/components/buttons/RadioButton";
import { SearchInput } from "@/components/inputs/SearchInput";
import React from "react";

const AddTemplateModal = () => {
  return (
    <div className="p-5  w-full">
      <div className="flex justify-center items-center mb-5">
        <p className="font-bold text-[20px]">운동 검색</p>
      </div>
      <SearchInput iconAlign="right" placeholder="운동명 입력" onClick={() => ""} />
      <div className="p-5 flex justify-between border-b-1 border-[#F5F5F5]">
        <div className="flex flex-col">
          <p className="text-sm text-[#4D4D4D] font-semibold">스쿼트</p>
          <p className="text-xs text-[#A1A1A1]">Squat</p>
        </div>
        <ToggleRadio />
      </div>
      <div className="p-5 flex justify-between">
        <div className="flex flex-col">
          <p className="text-sm text-[#4D4D4D] font-semibold">벤치프레스</p>
          <p className="text-xs text-[#A1A1A1]">Bench Press</p>
        </div>
        <ToggleRadio />
      </div>
      <div className="p-5 flex justify-between border-b-1 border-[#F5F5F5]">
        <div className="flex flex-col">
          <p className="text-sm text-[#4D4D4D] font-semibold">데드리프트</p>
          <p className="text-xs text-[#A1A1A1]">DeadLift</p>
        </div>
        <ToggleRadio />
      </div>
      <div className="p-5 flex justify-between border-b-1 border-[#F5F5F5]">
        <div className="flex flex-col">
          <p className="text-sm text-[#4D4D4D] font-semibold">스쿼트</p>
          <p className="text-xs text-[#A1A1A1]">Squat</p>
        </div>
        <ToggleRadio />
      </div>
      <div className="p-5 flex justify-between border-b-1 border-[#F5F5F5]">
        <div className="flex flex-col">
          <p className="text-sm text-[#4D4D4D] font-semibold">벤치프레스</p>
          <p className="text-xs text-[#A1A1A1]">Bench Press</p>
        </div>
        <ToggleRadio />
      </div>
      <div className="p-5 flex justify-between border-b-1 border-[#F5F5F5]">
        <div className="flex flex-col">
          <p className="text-sm text-[#4D4D4D] font-semibold">스쿼트</p>
        </div>
        <ToggleRadio />
      </div>
    </div>
  );
};

export default AddTemplateModal;
