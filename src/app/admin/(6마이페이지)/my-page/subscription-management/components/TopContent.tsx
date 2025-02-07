"use client";
import DropDown from "@/components/dropDown/DropDown";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
const Options1 = [
  { key: "1", label: "2024년" },
  { key: "2", label: "2024년" },
  { key: "3", label: "2024년" },
];
const Options2 = [
  { key: "1", label: "12월" },
  { key: "2", label: "12월" },
  { key: "3", label: "12월" },
];
const TopContent = () => {
  return (
    <div>
      <Header title="결제/구독/정산 관리" />
      <div className=" py-5 px-10 bg-white rounded-[5px] ">
        <p className="text-[#4D4D4D] font-bold">플랜/정산 관리</p>
        <div className="flex mt-5 justify-between items-center w-[50%]">
          <p className="text-lg text-[#2B2B2B] font-bold">플랜</p>
          <p className="text-lg text-[#2B2B2B] font-bold">정산 금액</p>
        </div>
        <div className="flex mt-4 items-center gap-[210px]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-[10px]">
              <Image src={"/user.svg"} alt="user" width={60} height={60} />
              <div className="flex flex-col">
                <p className="text-[#2B2B2B] semi-bold">등록된 선수 </p>
                <p className="text-[#2B2B2B] font-bold"> 총 14명 </p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image src={"/camera.svg"} alt="camera" width={60} height={60} />
              <div className="flex flex-col">
                <p className="text-[#2B2B2B] semi-bold">1인당 금액 </p>
                <p className="text-[#2B2B2B] font-bold"> 5,000원 </p>
              </div>
            </div>
          </div>
          <div className="flex  flex-col space-y-5">
            <div className="flex items-center gap-4">
              <DropDown
                options={Options1}
                defaultSelectedKeys={Options1[0].key}
                selectStyles="w-[117px] bg-white"
              />
              <DropDown
                options={Options2}
                defaultSelectedKeys={Options2[0].key}
                selectStyles="w-[117px] bg-white"
              />
              <div className="flex gap-1">
                <p className="text-[24px] text-[#2B2B2B] font-bold">
                  2,750,000원
                </p>
                <Image src={"/error.svg"} alt="error" width={14} height={14} />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex gap-1">
                <Image
                  src={"/document.svg"}
                  alt="document"
                  width={17}
                  height={17}
                />
                <p className="text-sm text-[#4D4D4D] font-semibold">
                  혜택 안내
                </p>
              </div>
              <Image
                src={"/chevroletright.svg"}
                alt="chevrolet"
                width={17}
                height={17}
              />
              <div className="flex gap-1">
                <Image
                  src={"/calendar.svg"}
                  alt="calendar"
                  width={17}
                  height={17}
                />
                <p className="text-sm text-[#4D4D4D] font-semibold">
                  계좌 관리
                </p>
              </div>
              <Image
                src={"/chevroletright.svg"}
                alt="chevrolet"
                width={17}
                height={17}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
