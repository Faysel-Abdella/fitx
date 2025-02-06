"use client";
import DropDown from "@/components/dropDown/DropDown";
import Header from "@/components/Header";
import TextInput from "@/components/inputs/Input";
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
    <>
      <Header title="내 정보 관리" />
      <div className="flex flex-col  space-y-[9px] p-5 rounded-[20px] bg-white">
        <p className="text-[#4D4D4D] font-bold">내 정보 수정</p>
        <div className="flex justify-center"></div>
        <div className="flex justify-center flex-wrap gap-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <Image
              src={"/gymgirl.svg"}
              alt="gymgirl"
              width={195}
              height={150}
            />
            <div className="flex gap-2">
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#006BFF]">
                <Image src={"/edit.svg"} alt="edit" width={15} height={15} />
              </div>
              <p className="text-sm text-[#4D4D4D]">사진 수정</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-[#4D4D4D] font-bold">이름</p>
                <TextInput
                  placeholder="허은정"
                  type="text"
                  inputWrapper="border border-[#DCDCDC] bg-white"
                  width="w-[320px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#4D4D4D] font-bold">이메일</p>
                <TextInput
                  placeholder="eunjung00@google.com"
                  type="text"
                  inputWrapper="border border-[#DCDCDC] bg-white"
                  width="w-[320px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#4D4D4D] font-bold">성별</p>
                <DropDown
                  options={Options}
                  defaultSelectedKeys={Options[0].key}
                  insideStyles="w-[320px]"
                />
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-[#4D4D4D] font-bold">영문 이름</p>
                <TextInput
                  placeholder="Eunjung Heo"
                  type="text"
                  inputWrapper="border border-[#DCDCDC] bg-white"
                  width="w-[320px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="text-[#4D4D4D] font-bold">휴대폰 번호</p>
                  <p className="text-sm text-[#006BFF]">인증번호 발송</p>
                </div>
                <TextInput
                  placeholder="010-1234-5678"
                  type="text"
                  inputWrapper="border border-[#DCDCDC] bg-white"
                  width="w-[320px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#4D4D4D] font-bold">생년월일</p>
                <TextInput
                  placeholder="05/17/1993"
                  type="text"
                  inputWrapper="border border-[#DCDCDC] bg-white"
                  width="w-[320px]"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-[#4D4D4D] font-bold">성별</p>
                <DropDown
                  options={Options2}
                  defaultSelectedKeys={Options2[0].key}
                  insideStyles="w-[320px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#4D4D4D] font-bold">인증번호</p>
                <TextInput
                  placeholder="36542"
                  type="text"
                  inputWrapper="border border-[#DCDCDC] bg-white"
                  width="w-[320px]"
                />
              </div>
              <div className="flex justify-end">
                <button className="py-[10px] px-5 rounded-[5px] bg-[#4D4D4D] text-white">
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-5 gap-12">
          <div className="flex gap-5">
            <Image src={"/lock.svg"} alt="lock" width={17} height={17} />
            <p className="text-sm text-[#4D4D4D] font-semibold">비밀번호변경</p>
            <Image
              src={"/chevroletright.svg"}
              alt="chevroletright"
              width={17}
              height={17}
              
            />
          </div>
          <div className="flex gap-5">
            <Image src={"/document.svg"} alt="document" width={17} height={17} />
            <p className="text-sm text-[#4D4D4D] font-semibold">코치 소개글</p>
            <Image
              src={"/chevroletright.svg"}
              alt="chevroletright"
              width={17}
              height={17}
            />
          </div>
          <div className="flex gap-5">
            <Image src={"/user.svg"} alt="user" width={17} height={17} />
            <p className="text-sm text-[#4D4D4D] font-semibold">회원탈퇴</p>
            <Image
              src={"/chevroletright.svg"}
              alt="chevroletright"
              width={17}
              height={17}
            />
          </div>
          <div className="flex gap-5">
            <Image src={"/qrcode.svg"} alt="lock" width={17} height={17} />
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
    </>
  );
};

export default TopContent;
