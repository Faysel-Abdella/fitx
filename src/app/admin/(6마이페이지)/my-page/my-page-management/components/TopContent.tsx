"use client";
import DropDown from "@/components/dropDown/DropDown";
import Header from "@/components/Header";
import TextInput from "@/components/inputs/Input";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

const Options = [
  { key: "1", label: "여성" },
  { key: "2", label: "여성" },
  { key: "3", label: "여성" },
];
const Options2 = [
  { key: "1", label: "대한민국" },
  { key: "2", label: "대한민국" },
  { key: "3", label: "대한민국" },
];

const TopContent = () => {
  return (
    <div>
      <Header title="내 정보 관리" />
      {/* Responsive container */}
      <div className="  mx-auto px-4">
        <div className="flex mt-10 flex-col space-y-5 p-5 rounded-[20px] bg-white">
          <p className="text-[#4D4D4D] font-bold text-lg">내 정보 수정</p>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            {/* Profile Column */}
            <div className="flex flex-col items-center gap-5">
              <div className="w-40 md:w-auto">
                <Image
                  src={"/gymgirl.svg"}
                  alt="gymgirl"
                  width={195}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#006BFF]">
                  <Image src={"/edit.svg"} alt="edit" width={15} height={15} />
                </div>
                <p className="text-sm text-[#4D4D4D]">사진 수정</p>
              </div>
            </div>

            {/* Form Column */}
            <div className="flex flex-col gap-5 w-full">
              {/* Top Row */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-1 w-full md:w-1/3">
                  <p className="text-[#4D4D4D] font-bold">이름</p>
                  <TextInput
                    placeholder="허은정"
                    type="text"
                    inputWrapper="border border-[#DCDCDC] bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full md:w-1/3">
                  <p className="text-[#4D4D4D] font-bold">영문 이름</p>
                  <TextInput
                    placeholder="Eunjung Heo"
                    type="text"
                    inputWrapper="border border-[#DCDCDC] bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full md:w-1/3">
                  <p className="text-[#4D4D4D] font-bold">성별</p>
                  <DropDown
                    options={Options2}
                    defaultSelectedKeys={Options2[0].key}
                      selectContainerStyles="w-full"
                  />
                </div>
              </div>

              {/* Middle Row */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-1 w-full md:w-1/3">
                  <p className="text-[#4D4D4D] font-bold">이메일</p>
                  <TextInput
                    placeholder="eunjung00@google.com"
                    type="text"
                    inputWrapper="border border-[#DCDCDC] bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full md:w-1/3">
                  <div className="flex justify-between">
                    <p className="text-[#4D4D4D] font-bold">휴대폰 번호</p>
                    <p className="text-sm text-[#006BFF]">인증번호 발송</p>
                  </div>
                  <TextInput
                    placeholder="010-1234-5678"
                    type="text"
                    inputWrapper="border border-[#DCDCDC] bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full md:w-1/3">
                  <p className="text-[#4D4D4D] font-bold">인증번호</p>
                  <TextInput
                    placeholder="36542"
                    type="text"
                    inputWrapper="border border-[#DCDCDC] bg-white"
                  />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col md:flex-row gap-5 items-center">
                <div className="flex flex-col gap-1 w-full md:w-1/3">
                  <p className="text-[#4D4D4D] font-bold">성별</p>
                  <DropDown
                    options={Options2}
                    defaultSelectedKeys={Options2[0].key}
                  
                    selectContainerStyles="w-full "
                  />
                </div>
                <div className="flex flex-col gap-1 w-full md:w-1/3">
                  <p className="text-[#4D4D4D] font-bold">생년월일</p>
                  <TextInput
                    placeholder="05/17/1993"
                    type="text"
                    inputWrapper="border border-[#DCDCDC] bg-white"
                  />
                </div>
                <div className="w-full md:w-1/3 flex justify-end">
                  <button className="py-2 px-5 rounded bg-[#4D4D4D] text-white">
                    저장
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-5 gap-12">
            <div className="flex items-center gap-5">
              <Image src={"/lock.svg"} alt="lock" width={17} height={17} />
              <p className="text-sm text-[#4D4D4D] font-semibold">비밀번호변경</p>
              <Image
                src={"/chevroletright.svg"}
                alt="chevroletright"
                width={17}
                height={17}
              />
            </div>
            <div className="flex items-center gap-5">
              <Image src={"/document.svg"} alt="document" width={17} height={17} />
              <p className="text-sm text-[#4D4D4D] font-semibold">코치 소개글</p>
              <Image
                src={"/chevroletright.svg"}
                alt="chevroletright"
                width={17}
                height={17}
              />
            </div>
            <div className="flex items-center gap-5">
              <Image src={"/user.svg"} alt="user" width={17} height={17} />
              <p className="text-sm text-[#4D4D4D] font-semibold">회원탈퇴</p>
              <Image
                src={"/chevroletright.svg"}
                alt="chevroletright"
                width={17}
                height={17}
              />
            </div>
            <div className="flex items-center gap-5">
              <Image src={"/qrcode.svg"} alt="qrcode" width={17} height={17} />
              <p className="text-sm text-[#4D4D4D] font-semibold">팀 코드</p>
              <Image
                src={"/chevroletright.svg"}
                alt="chevroletright"
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
