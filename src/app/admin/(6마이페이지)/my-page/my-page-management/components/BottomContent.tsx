"use client";
import TextInput from "@/components/inputs/Input";
import Image from "next/image";
import React from "react";

const BottomContent = () => {
  return (
    <div className="p-5 rounded-[20px] bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <p className="text-[#4D4D4D] font-bold text-lg">수업료</p>
        <button className="py-2 px-5 bg-[#4D4D4D] text-white rounded-[5px]">
          저장
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6">
        {/* First Fee Row */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Icon Box */}
          <div className="flex flex-col gap-2 justify-center items-center bg-[#006BFF] py-2 px-6 rounded-[15px]">
            <Image src={"/video.svg"} alt="video" width={40} height={35} />
            <p className="text-lg text-white font-bold">온라인</p>
          </div>
          {/* Fee Input */}
          <div className="flex flex-col gap-2   flex-1">
            <p className="text-[#4D4D4D] font-bold">온라인코칭비</p>
            <div className="flex items-center w-1/4 gap-2">
              <TextInput
                placeholder="300,000"
                type="text"
                inputWrapper="bg-white border border-[#DCDCDC]"
              />
              <p className="text-[#4D4D4D] font-bold">원</p>
            </div>
            <div className="flex items-center gap-2 w-1/4 justify-end">
              <p className="text-sm text-[#4D4D4D]">
                예상 정산 금액{" "}
                <span className="text-[#006BFF] text-sm">234,567원</span>
              </p>
              <Image src={"/error.svg"} alt="error" width={17} height={17} />
            </div>
          </div>
        </div>

        {/* Second Fee Row */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Icon Box */}
          <div className="flex flex-col gap-2 justify-center items-center bg-[#9D9D9D] py-2 px-6 rounded-[15px]">
            <Image src={"/smileface.svg"} alt="smileface" width={52} height={35} />
            <p className="text-lg text-white font-bold">온라인</p>
          </div>
          {/* Multiple Fee Options */}
          <div className="flex flex-wrap gap-6 flex-1">
            {/* Option: 원데이(1회권) */}
            <div className="flex flex-col gap-2  ">
              <p className="text-[#4D4D4D] font-bold">원데이(1회권)</p>
              <div className="flex items-center w-full gap-2">
                <TextInput
                  placeholder="120,000"
                  type="text"
                  inputWrapper="bg-white border border-[#DCDCDC]"
                />
                <p className="text-[#4D4D4D] font-bold">원</p>
              </div>
              <div className="flex items-center  w-full gap-2 justify-end">
                <p className="text-sm text-[#4D4D4D]">
                  예상 정산 금액{" "}
                  <span className="text-[#006BFF] text-sm">114,567원</span>
                </p>
                <Image src={"/error.svg"} alt="error" width={17} height={17} />
              </div>
            </div>
            {/* Option: 3회권 */}
            <div className="flex flex-col gap-2 min-w-[150px]">
              <p className="text-[#4D4D4D] font-bold">3회권</p>
              <div className="flex items-center gap-2">
                <TextInput
                  placeholder="350,000"
                  type="text"
                  inputWrapper="bg-white border border-[#DCDCDC]"
                />
                <p className="text-[#4D4D4D] font-bold">원</p>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <p className="text-sm text-[#4D4D4D]">
                  예상 정산 금액{" "}
                  <span className="text-[#006BFF] text-sm">314,567원</span>
                </p>
                <Image src={"/error.svg"} alt="error" width={17} height={17} />
              </div>
            </div>
            {/* Option: 4회권 */}
            <div className="flex flex-col gap-2 min-w-[150px]">
              <p className="text-[#4D4D4D] font-bold">4회권</p>
              <div className="flex items-center gap-2">
                <TextInput
                  placeholder="450,000"
                  type="text"
                  inputWrapper="bg-white border border-[#DCDCDC]"
                />
                <p className="text-[#4D4D4D] font-bold">원</p>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <p className="text-sm text-[#4D4D4D]">
                  예상 정산 금액{" "}
                  <span className="text-[#006BFF] text-sm">414,567원</span>
                </p>
                <Image src={"/error.svg"} alt="error" width={17} height={17} />
              </div>
            </div>
            {/* Option: 5회권 */}
            <div className="flex flex-col gap-2 min-w-[150px]">
              <p className="text-[#4D4D4D] font-bold">5회권</p>
              <div className="flex items-center gap-2">
                <TextInput
                  placeholder="550,000"
                  type="text"
                  inputWrapper="bg-white border border-[#DCDCDC]"
                />
                <p className="text-[#4D4D4D] font-bold">원</p>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <p className="text-sm text-[#4D4D4D]">
                  예상 정산 금액{" "}
                  <span className="text-[#006BFF] text-sm">514,567원</span>
                </p>
                <Image src={"/error.svg"} alt="error" width={17} height={17} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomContent;
