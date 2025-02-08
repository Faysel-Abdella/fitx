"use client";

import { Button, Textarea } from "@heroui/react";
import { SimpleVideo } from "./SimpleVideo";
export default function WorkoutCard() {
  return (
    <div className="w-full max-w-md overflow-hidden">
      <SimpleVideo />

      <div className="flex gap-3 my-5">
        <div className="bg-white flex-1 px-2 py-3 rounded-lg flex justify-center items-center">
          <p className="text-sm text-[#4D4D4D]">aRPE</p>
        </div>
        <div className="bg-white flex-1 px-2 py-3 rounded-lg flex justify-center items-center">
          <p className="text-sm text-[#4D4D4D]">
            중량 <span className="font-medium mx-1 text-[#22B892]">150</span> kg
          </p>
        </div>
      </div>

      <h3 className="text-xs font-bold my-3">선수 코멘트</h3>
      <div className="text-xs h-[70px] bg-white px-3 flex items-center rounded-lg text-[#4D4D4D]">
        운동 중 엉덩이 만이 아래서 움직임을 멈추어지지 못했어요. 네비부터는 다시
        철저히 할꺼요
      </div>

      <h3 className="text-xs font-bold mt-3 mb-2">코치 피드백</h3>

      <Textarea
        placeholder="운동 중 50자 시한 작성 (최대 50자)"
        classNames={{
          base: "bg-white round-lg",
          input: "resize-y min-h-[100px]",
        }}
        variant="bordered"
        className="rounded-xl"
      />
      <div className="text-end p-1 text-xs text-[#4D4D4D]">0/50</div>

      <Button
        color={"primary"}
        className="w-full mt-48 py-2 font-bold rounded-full"
      >
        저장
      </Button>
    </div>
  );
}
