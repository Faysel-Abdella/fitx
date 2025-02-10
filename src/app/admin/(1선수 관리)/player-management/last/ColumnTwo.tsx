"use client";

import bench from "@/assets/icons/bench.svg";
import lift from "@/assets/icons/lift.svg";
import squat from "@/assets/icons/squat.svg";
import { Card, CardBody } from "@heroui/card";
import { CalendarDays, ChartNoAxesCombined } from "lucide-react";
import Image from "next/image";
import WeightChart from "./Chart";
import MenuItem from "./MenuItem";

interface WeightData {
  rm: number;
  weight: string;
}

const weightData: WeightData[] = [
  { rm: 1, weight: "000kg" },
  { rm: 2, weight: "-" },
  { rm: 3, weight: "000kg" },
  { rm: 4, weight: "00kg" },
  { rm: 5, weight: "000kg" },
  { rm: 6, weight: "-" },
  { rm: 7, weight: "000kg" },
  { rm: 8, weight: "00kg" },
  { rm: 9, weight: "000kg" },
  { rm: 10, weight: "-" },
];

export const ColumnTwo = () => {
  return (
    <div className="h-full">
      {/* Placeholder Header */}
      <div className="flex gap-5 mb-6">
        <MenuItem
          icon={<ChartNoAxesCombined className="w-5 h-5" />}
          text="대시보드"
          className="flex-1"
        />
        <MenuItem
          icon={<CalendarDays className="w-5 h-5" />}
          text="캘린더"
          className="flex-1"
        />
      </div>

      {/* Section Title */}
      <div className="text-xl text-[#4D4D4D] font-bold mb-3">목표</div>

      <Card fullWidth>
        <CardBody className="p-4">
          {/* Exercise Icons */}
          <div className="flex gap-2 mb-6">
            <div className="flex-1 bg-[#F5F5F5] flex flex-col items-center justify-center p-4 text-textBlack font-bold rounded-lg">
              <Image src={squat} alt="스쿼트" className="w-10 h-10 mb-2" />
              <p className="text-center whitespace-nowrap">벤치프레스</p>
              <p className="text-center whitespace-nowrap">100 kg</p>
            </div>
            <div className="flex-1 bg-[#F5F5F5] flex flex-col items-center justify-center p-4 text-textBlack font-bold rounded-lg">
              <Image src={bench} alt="벤치프레스" className="w-10 h-10 mb-2" />
              <p className="text-center whitespace-nowrap">벤치프레스</p>
              <p className="text-center whitespace-nowrap">100 kg</p>
            </div>
            <div className="flex-1 bg-[#F5F5F5] flex flex-col items-center justify-center p-4 text-textBlack font-bold rounded-lg">
              <Image src={lift} alt="데드리프트" className="w-10 h-10 mb-2" />
              <p className="text-center whitespace-nowrap">데드리프트</p>
              <p className="text-center whitespace-nowrap">100 kg</p>
            </div>
          </div>

          {/* Exercise Titles */}
          <div className="flex mb-6">
            <div className="flex-1 bg-[#E9F8F4] text-center text-[#22B892] p-4 rounded-lg">
              스쿼트
            </div>
            <div className="flex-1 p-4 text-center">벤치프레스</div>
            <div className="flex-1 p-4 text-center">데드리프트</div>
          </div>

          {/* Weight Chart */}
          <div className="bg-[#F5F5F5] rounded-lg p-4 mb-6">
            <WeightChart />
          </div>

          {/* Custom "Table" using divs */}
          <div className="overflow-x-auto mb-5">
            {/* Table Header */}
            <div className="flex bg-white rounded-t-lg">
              <div className="flex-1 text-center text-[#767676] font-medium p-3">
                RM
              </div>
              <div className="flex-1 text-center text-[#767676]  font-medium p-3">
                최고중량
              </div>
            </div>
            {/* Table Rows */}
            {weightData.map((row) => (
              <div
                key={row.rm}
                className={`flex text-center p-3 rounded-lg ${
                  row.rm % 2 === 0 ? "bg-white" : "   bg-[#F5F5F5]"
                }`}
              >
                <div className="flex-1">{row.rm}</div>
                <div className="flex-1">{row.weight}</div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
