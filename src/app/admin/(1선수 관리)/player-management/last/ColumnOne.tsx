"use client";

import { Progress } from "@heroui/react";
import { Ellipsis } from "lucide-react";
import { NutritionCircle } from "./NutritionCircle";

export const ColumnOne = () => {
  return (
    <div className="h-full ">
      <div className="bg-white p-15 mb-5">this component will come</div>

      {/* Available Days Section */}
      <div className="text-base text-[#4D4D4D] font-bold mb-3">
        운동 가능 요일
      </div>

      {/* Weekly Calendar Section */}

      <div className="w-full p-4 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-[#F5F5F5] flex-1 text-textBlack p-3 rounded-lg">
          <div className="flex gap-4 border-b border-[#DEDEDE] pb-5">
            <NutritionCircle
              value="0,000"
              unit="kcal"
              label="칼로리"
              color="#5D5D5D"
            />
            <NutritionCircle
              value="000"
              unit="g"
              label="탄수화물"
              color="#01A4F8"
            />
            <NutritionCircle
              value="000"
              unit="g"
              label="단백질"
              color="#00C9B9"
            />
            <NutritionCircle
              value="000"
              unit="g"
              label="지방"
              color="#9A65F6"
            />
          </div>

          <div className="flex justify-between  text-sm font-medium  pt-4">
            <div className=" flex-1 text-center border-r border-[#DEDEDE]">
              물 000ml
            </div>
            <div className=" flex-1 text-center">염분 000mg</div>
          </div>
        </div>
        {/* another section */}

        <div className="bg-[#F5F5F5] flex-1 text-textBlack p-6 rounded-lg my-6">
          <div className="flex justify-between text-textBlack">
            <div className="text-sm font-bold">
              <span className="text-mainBlue mr-1">식사</span>
              오전 08:00
            </div>
            <Ellipsis />
          </div>
          <p className="text-[#A1A1A1]">
            칼로리 000kcal
            <br /> 탄 00g・단 00g・지 00g
            <br /> 물 000ml・염분00mg
          </p>
        </div>

        {/* another section again */}

        <div className="bg-[#F5F5F5] flex-1 text-textBlack p-6 rounded-lg my-6">
          <div className="flex justify-between text-textBlack">
            <div className="text-sm font-bold">
              <span className="text-[#22B892] mr-1">식사</span>
              오후 02:00
            </div>
            <Ellipsis />
          </div>
          <p className="text-[#A1A1A1]">
            칼로리 000kcal
            <br /> 탄 00g・단 00g・지 00g
            <br /> 물 000ml・염분00mg
          </p>
        </div>

        {/* last parts */}
      </div>

      {/* Weekly Calendar Section */}
      {/* Available Days Section */}
      <div className="text-base text-[#4D4D4D] font-bold my-5">
        운동 가능 요일
      </div>
      <div className="w-full p-4 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="text-sm font-bold text-textBlack my-2">대면코칭</div>
        <div className="bg-[#F5F5F5] border-[2px] border-[#006BFF] flex-1 text-textBlack p-6 rounded-lg">
          <div className="flex flex-col gap-1  text-[#A1A1A1]">
            <p className="font-semibold">온라인코칭</p>
            <p className="text-black text-lg font-bold">ULTIMATE PLAN</p>
            <p>최근 결제일 : 2024년 08월 18일</p>
            <p>다음 결제일 : 2024년 09월 18일</p>
          </div>
        </div>
        {/* another section */}

        <div className="text-sm font-bold text-textBlack mt-4 mb-2">
          대면코칭
        </div>
        <div className="bg-[#F5F5F5] border-[2px] border-[#006BFF] flex-1 text-textBlack p-6 rounded-lg">
          <div className="space-y-1">
            <h3 className="text-mainGray  font-medium">대면코칭 </h3>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold my-2">
                <span className="text-mainBlue">4</span>
                <span className="text-black font-bold">/5회</span>
              </p>
              <p className="text-mainGray">~2024년 11월 03일</p>
            </div>

            <Progress aria-label="Loading..." className="max-w-md" value={80} />
          </div>
        </div>
        <div className="bg-[#F5F5F5] flex-1 text-textBlack p-6 my-5 rounded-lg">
          <div className="space-y-1">
            <h3 className="text-[#000000] text-lg font-bold">오후 2:30 </h3>
            <h3 className="text-mainGray  font-medium">
              2024년 08월 16일 (금)
            </h3>
          </div>
        </div>
        <div className="bg-[#F5F5F5] flex-1 text-textBlack p-6 mb-8 rounded-lg">
          <div className="space-y-1">
            <h3 className="text-[#000000] text-lg font-bold">오후 2:30 </h3>
            <h3 className="text-mainGray  font-medium">
              2024년 08월 16일 (금)
            </h3>
          </div>
        </div>

        {/* another section again */}

        {/* last parts */}
      </div>
    </div>
  );
};
