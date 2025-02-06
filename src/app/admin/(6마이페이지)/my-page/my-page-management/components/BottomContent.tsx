import TextInput from "@/components/inputs/Input";
import Image from "next/image";
import React from "react";

const BottomContent = () => {
  return (
    <div className="  p-5 rounded-[20px] bg-white">
      <div className="flex items-center justify-between">
        <p className="text-[#4D4D4D] font-bold">수업료</p>
        <button className="py-[10px] px-[20px] bg-[#4D4D4D] text-white rounded-[5px]">
          저장
        </button>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex items-center gap-[55px]">
          <div className="flex flex-col gap-[3px] justify-center items-center bg-[#006BFF] py-[10px] px-[30px] rounded-[15px]">
            <Image src={"/video.svg"} alt="video" width={40} height={35} />
            <p className="text-lg text-white font-bold">온라인</p>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="text-[#4D4D4D] font-bold">온라인코칭비</p>
            <div className="flex items-center gap-[5px]">
              <TextInput
                placeholder="300,000"
                type="text"
                inputWrapper="bg-white border-1 border-[#DCDCDC]"
              />
              <p className="text-[#4D4D4D] font-bold">원</p>
            </div>
            <div className="flex items-center gap-[4px] justify-end">
              <p className="text-[4D4D4D] text-sm">
                예상 정산 금액{" "}
                <span className="text-[#006BFF] text-sm ">234,567원</span>
              </p>
              <Image
                    src={"/error.svg"}
                    alt="error "
                    width={17}
                    height={17}
                  />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[55px]">
          <div className="flex flex-col gap-[3px] justify-center items-center bg-[#9D9D9D] py-[10px] px-[30px] rounded-[15px]">
            <Image
              src={"/smileface.svg"}
              alt="smileface"
              width={52}
              height={35}
            />
            <p className="text-lg text-white font-bold">온라인</p>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-[4px]">
              <p className="text-[#4D4D4D] font-bold">원데이(1회권)</p>
              <div className="flex items-center gap-[5px]">
                <TextInput
                  placeholder="120,000"
                  type="text"
                  inputWrapper="bg-white border-1 border-[#DCDCDC]"
                />
                <p className="text-[#4D4D4D] font-bold">원</p>
              </div>
              <div className="flex items-center gap-[4px] justify-end">
                <p className="text-[4D4D4D] text-sm">
                  예상 정산 금액
                  <span className="text-[#006BFF] text-sm ">114,567원</span>
                </p>
                <Image
                    src={"/error.svg"}
                    alt="error "
                    width={17}
                    height={17}
                  />
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-[#4D4D4D] font-bold">3회권</p>
              <div className="flex items-center gap-[5px]">
                <TextInput
                  placeholder="350,000"
                  type="text"
                  inputWrapper="bg-white border-1 border-[#DCDCDC]"
                />
                <p className="text-[#4D4D4D] font-bold">원</p>
              </div>
              <div className="flex items-center gap-[4px] justify-end">
                <p className="text-[4D4D4D] text-sm">
                  예상 정산 금액
                  <span className="text-[#006BFF] text-sm ">314,567원</span>
                </p>
                <Image
                    src={"/error.svg"}
                    alt="error "
                    width={17}
                    height={17}
                  />
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-[#4D4D4D] font-bold">4회권</p>
              <div className="flex items-center gap-[5px]">
                <TextInput
                  placeholder="450,000"
                  type="text"
                  inputWrapper="bg-white border-1 border-[#DCDCDC]"
                />
                <p className="text-[#4D4D4D] font-bold">원</p>
              </div>
              <div className="flex gap-[4px] items-center justify-end">
                <p className="text-[4D4D4D] text-sm">
                  예상 정산 금액
                  <span className="text-[#006BFF] text-sm ">414,567원</span>
                </p>
                <Image
                    src={"/error.svg"}
                    alt="error "
                    width={17}
                    height={17}
                  />
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-[#4D4D4D] font-bold">5회권</p>
              <div className="flex items-center gap-[5px]">
                <TextInput
                  placeholder="550,000"
                  type="text"
                  inputWrapper="bg-white border-1 border-[#DCDCDC]"
                />
                <p className="text-[#4D4D4D] font-bold">원</p>
              </div>
              <div className="flex gap-[4px] items-center justify-end">
                <p className="text-[4D4D4D] text-sm">
                  예상 정산 금액
                  <span className="text-[#006BFF] text-sm ">514,567원</span>
                </p>
               
                  <Image
                    src={"/error.svg"}
                    alt="error "
                    width={17}
                    height={17}
                  />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomContent;
