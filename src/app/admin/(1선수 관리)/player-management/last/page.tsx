import React from "react";
import { ColumnOne } from "./ColumnOne";
import { ColumnTwo } from "./ColumnTwo";
import { ColumnThree } from "./ColumnThree";
import { Button } from "@heroui/react";

export default function Page() {
  return (
    <div>
      <div className=" ">
        <div className="flex mb-12 justify-end gap-[24px]">
          <p className="underline underline-offset-1 text-[#007AFF]">
            세션 연장 새로고침
          </p>
          <p className="text-[#A0A0A0]">로그아웃</p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[30px] my-4 text-[#4D4D4D]">
            상세보기
          </h1>
          <Button color="primary" className="px-4 py-6  font-bold rounded-full">
            운동기록 Excel 다운로드
          </Button>
        </div>
      </div>

      <div className="flex  gap-5 mt-8 mx-0  ">
        <div className="">
          <ColumnOne />
        </div>
        <div className=" flex-1">
          <ColumnTwo />
        </div>
        <div className=" flex-1">
          <ColumnThree />
        </div>
      </div>
    </div>
  );
}
