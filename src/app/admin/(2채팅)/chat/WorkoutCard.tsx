"use client";

import { Card, CardBody } from "@heroui/card";
import { CircleAlert, MessageCircleMore } from "lucide-react";

export default function WorkoutCard() {
  return (
    <div>
      <Card className="w-[320px]">
        <CardBody className="p-4">
          {/* Header */}
          <div className=" font-normal text-[#4D4D4D] mt-2 mb-4">
            스쿼트 <span className="text-mainGray">5회•80kg•RPE 7</span>
          </div>

          {/* Video Player */}
          <video controls className="w-full rounded-lg">
            <source src="https://your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Chat Messages */}
          <div className="space-y-3 my-3">
            {/* Coach Message */}
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-2">
                <MessageCircleMore className="text-[#22B892] " />
                <div className="text-[#22B892] font-medium whitespace-nowrap">
                  코치
                </div>
              </div>
              <p className="text-[#4D4D4D] ">
                어려움 경우, 230-250kg 사이의 무게로 진행해주세요.
              </p>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-2">
                <MessageCircleMore className="text-[#006BFF]" />
                <div className="text-[#006BFF] font-medium whitespace-nowrap">
                  코치
                </div>
              </div>
              <p className="text-[#4D4D4D] ">
                조금 여유로운 것 같습니다. 중량해도 될 것 같습니다. 다음에는
                280kg으로 하겠습니다.
              </p>
            </div>
          </div>

          {/* Reference Link */}
          <div className="flex items-center gap-2 text-sm text-[#4D4D4D]">
            <span className="font-bold ">참고 링크</span>
            <span className="">https://www.link.com</span>
          </div>
        </CardBody>
      </Card>
      <Card className="w-[320px] my-5">
        <CardBody className="p-4">
          <CircleAlert className="text-[#A1A1A1] w-5 h-5" />
          <p className="text-[#A1A1A1] text-sm pt-2">
            OOO,OOO,OOO,OOO 확장자의 영상만 업로드 가능합니다.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
