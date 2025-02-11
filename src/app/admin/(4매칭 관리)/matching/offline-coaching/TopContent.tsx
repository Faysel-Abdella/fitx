"use client";
import DropDownWithLabel from "@/components/dropDown/DropDownwithlabel";
import Header from "@/components/Header";
// import TextInput from "@/components/inputs/Input";
import { Button } from "@heroui/react";
import React from "react";

const TopContent = () => {
  return (
    <header>
      <Header title="대면 코칭 매치 현황 및 관리" />
      <main className="mt-6 rounded-[20px] bg-white px-5 py-6 my-4">
        <div className="flex justify-between  h-[40px] items-center">
          <div className="flex  items-center space-x-4">
            <label
              htmlFor="memberName"
              className=" text-[#323232] font-bold text-base "
            >
              회원명
            </label>
            <input
              type="text"
              id="memberName"
              placeholder="이름"
              className="flex-1 px-3 h-[40px] w-[280px] text-sm border border-[#DCDCDC] rounded-md focus:outline-none"
            />
          </div>
          <DropDownWithLabel
            title="Plan"
            options={[
              { key: "plan1", label: "이용 중인 Plan" },
              { key: "plan2", label: "이용 중인 Plan" },
            ]}
            defaultSelectedKeys="plan1"
            insideStyles="text-[#9D9D9D] w-[250px] h-[40px]  "
            titleStyles="text-[#323232] font-bold text-base"
          />
          <DropDownWithLabel
            title="국가"
            options={[
              { key: "plan1", label: "국가명" },
              { key: "plan2", label: "국가명" },
            ]}
            defaultSelectedKeys="plan2"
            insideStyles="text-[#9D9D9D] w-[250px] h-[40px]  "
            titleStyles="text-[#323232] font-bold text-base"
          />
          <Button className="bg-[#4D4D4D] ml-6 text-white rounded-md">
            템플릿
          </Button>
        </div>
      </main>
    </header>
  );
};

export default TopContent;
