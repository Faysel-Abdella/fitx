"use client";
import DropDownWithLabel from "@/components/dropDown/DropDownwithlabel";
import Header from "@/components/Header";
import TextInput from "@/components/inputs/Input";
import React from "react";
const Options1 = [
  { key: "1", label: "이용 중인 Plan" },
  { key: "2", label: "이용 중인 Plan" },
  { key: "3", label: "이용 중인 Plan" },
];
const Options2 = [
  { key: "1", label: "국가명" },
  { key: "2", label: "국가명" },
  { key: "3", label: "국가명" },
];
const TopContent = () => {
  return (
  
      <header>
        <Header title="프로그램 구성" />
        <div className="flex gap-[137px] px-[40px] py-[30px] bg-white rounded-[20px] mt-5">
          <div className="flex gap-[70px]">
            <TextInput
              placeholder="이름"
              type="text"
              label="회원명"
              labelColor="text-[#4D4D4D] font-bold  "
              inputWrapper="bg-white border-1 border-[#D2D5D6]  rounded-[5px] text-mainGray"
              labelWidth="min-w-[50px]"
            />
            <DropDownWithLabel
              options={Options1}
              defaultSelectedKeys={Options1[0].key}
              title="Plan"
              selectStyles="w-[215px] bg-white"
              titleStyles="min-w-[41px] text-[#4D4D4D] font-bold"
              insideStyles="bg-white hover:bg-white"
            />
            <DropDownWithLabel
              options={Options2}
              defaultSelectedKeys={Options2[0].key}
              title="국가"
              selectStyles="w-[215px] bg-white"
              titleStyles="min-w-[41px] text-[#4D4D4D] font-bold"
            />
          </div>
          <div>
            <button className="py-[10px] px-[20px] bg-[#4D4D4D] text-[white] rounded-[5px]">
              검색
            </button>
          </div>
        </div>
      </header>
   
  );
};

export default TopContent;
