"use client";
import ProfilePreview from "@/components/ProfilePreviewNew";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircleMore,
  Video,
} from "lucide-react";
import { useState } from "react";

import image from "../../../../assets/Profile.svg";

const scores = [
  { score: 5, total: 5, label: "근본틱" },
  { score: 4, total: 5, label: "스트레스" },
  { score: 1, total: 5, label: "에너지" },
  { score: 3, total: 5, label: "기분" },
  { score: 5, total: 5, label: "수면" },
  { score: 5, total: 5, label: "피로도" },
];

const sets2 = [
  {
    label: "1세트",
    hasVideo: false,
    hasChat: false,
    hasIndicator: false,
  },
  {
    label: "2세트",
    hasVideo: true,
    hasChat: false,
    hasIndicator: true,
  },
];

const sets = [
  {
    label: "1세트",
    hasVideo: true,
    hasChat: true,
    hasIndicator: true,
  },
  {
    label: "2세트",
    hasVideo: false,
    hasChat: false,
    hasIndicator: false,
  },
  {
    label: "3세트",
    hasVideo: true,
    hasChat: false,
    hasIndicator: true,
  },
];

export default function Scheduler() {
  const [activeDate, setActiveDate] = useState(new Date());

  // Shift the active day by a number of days
  const changeDay = (days: number) => {
    const newDate = new Date(activeDate);
    newDate.setDate(newDate.getDate() + days);
    setActiveDate(newDate);
  };

  // Get a fresh startDate (3 days before activeDate)
  const startDate = new Date(activeDate);
  startDate.setDate(activeDate.getDate() - 3);

  // Format weekday abbreviation in Korean
  const getDayAbbrev = (date: Date) =>
    date.toLocaleDateString("ko-KR", { weekday: "short" });

  // Calculate week number (basic version)
  const weekNumber = Math.ceil(activeDate.getDate() / 7);

  // for the seven days
  const weekDays = ["월", "화", "수", "목", "금", "토", "일"];
  const [activeDays, setActiveDays] = useState<number[]>([]);

  const handleDayClick = (index: number) => {
    setActiveDays((prevActiveDays) => {
      // Check if the index is already active
      if (prevActiveDays.includes(index)) {
        // If active, remove it from the array
        return prevActiveDays.filter((dayIndex) => dayIndex !== index);
      } else {
        // If inactive, add it to the array
        return [...prevActiveDays, index];
      }
    });
  };

  return (
    <div className="h-full ">
      <Card>
        <CardBody className="p-4">
          <ProfilePreview
            imageSrc={image}
            name="Jane Doe"
            stats={[
              { label: "Workouts", weight: "12" },
              { label: "e1RM", weight: "150kg" },
              { label: "Sessions", weight: "8" },
            ]}
          />
        </CardBody>
      </Card>
      {/* Available Days Section */}
      <div className="text-base text-[#4D4D4D] font-bold my-5">
        운동 가능 요일
      </div>

      <Card className="mb-4">
        <CardBody className="p-4">
          <div className="flex justify-between px-8">
            {weekDays.map((day, index) => {
              const isActive = activeDays.includes(index);
              return (
                <div
                  key={index}
                  onClick={() => handleDayClick(index)}
                  className={`flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[rgba(34,184,146,0.1)] text-[rgb(34,184,146)] hover:bg-[rgba(34,184,146,0.2)]"
                      : "text-[#A1A1A1] hover:bg-gray-200"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>

      {/* Weekly Calendar Section */}
      <Card>
        <CardBody className="p-4">
          <div className="text-base text-[#4D4D4D] mb-1 font-bold">
            주차 운동
          </div>
          <div className="flex justify-between items-center">
            <Button
              isIconOnly
              variant="light"
              className="p-1 bg-[#F5F5F5]"
              onClick={() => changeDay(-1)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <span className="text-base text-[#4D4D4D] font-bold">
              {activeDate.getFullYear()}년 {activeDate.getMonth() + 1}월{" "}
              {weekNumber}주차
            </span>
            <Button
              isIconOnly
              variant="light"
              className="p-1 bg-[#F5F5F5]"
              onClick={() => changeDay(1)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-7 pb-4 border-b    gap-2 mt-4">
            {Array.from({ length: 7 }, (_, i) => {
              // Create a new date based on startDate
              const day = new Date(startDate);
              day.setDate(startDate.getDate() + i);
              // Compare using timestamp for reliability
              const isActive = day.getTime() === activeDate.getTime();

              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  {/* Day Abbreviation */}
                  <span className="text-center text-mainGray text-[10px] block">
                    {getDayAbbrev(day)}
                  </span>
                  {/* Circular Date Container */}
                  <div
                    className={`h-[30px] w-[30px] cursor-pointer hover:bg-[#F5F5F5]  flex items-center justify-center rounded-full mt-1 ${
                      isActive
                        ? "bg-mainBlue text-white border border-mainBlue"
                        : "bg-white text-[#767676]"
                    }`}
                    onClick={() => setActiveDate(new Date(day))}
                  >
                    <span className="text-xs font-medium">{day.getDate()}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {/* another section */}
          <div className="flex justify-between my-5 items-start max-w-3xl px-2 py-3 bg-[#F5F5F5] rounded-lg">
            {scores.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[40px]"
              >
                <div className="flex items-baseline gap-0.5 text-gray-600">
                  <span className="text-lg font-medium">{item.score}</span>
                  <span className="text-sm">/</span>
                  <span className="text-xs text-mainGray">{item.total}</span>
                </div>
                <span className="text-[10px]  text-mainGray mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          {/* another section again */}

          <div className="flex items-center justify-between mb-4 my-2">
            <span className="text-base text-[#4D4D4D] font-bold">피드백</span>
            <p className="text-mainBlue">완료</p>
          </div>

          {/* last parts */}

          <div className=" bg-[#F5F5F5] rounded-lg px-5 py-4 space-y-2">
            <div className="flex items-center justify-between py-3 mb-3 border-b  border-[#D1D1D1]   relative">
              <div className="flex items-center gap-2">
                <span className="text-[#4D4D4D] text-sm font-medium">
                  스쿼트
                </span>
                <div className="flex items-center gap-1.5">
                  <Video className="w-6 h-5 text-[#A1A1A1]" />

                  <MessageCircleMore className="w-6 h-5 text-[#A1A1A1]" />
                </div>
              </div>

              <div className="absolute right-2 top-1 -translate-y-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </div>
            {sets.map((set, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 h-[48px] bg-white rounded-lg shadow-sm relative"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#4D4D4D] text-sm font-medium">
                    {set.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {set.hasVideo && (
                      <Video className="w-6 h-5 text-[#A1A1A1]" />
                    )}
                    {set.hasChat && (
                      <MessageCircleMore className="w-6 h-5 text-[#A1A1A1]" />
                    )}
                  </div>
                </div>
                {set.hasIndicator && (
                  <div className="absolute right-2 top-1 translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full" />
                )}
              </div>
            ))}
          </div>
          <div className=" bg-[#F5F5F5] rounded-lg px-5 py-4 my-6 space-y-2">
            <div className=" py-3 mb-3 border-b  border-[#D1D1D1]">
              <span className="text-[#4D4D4D] text-base ">데드리프트</span>
            </div>
            {sets2.map((set, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 h-[48px] bg-white rounded-lg shadow-sm relative"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#4D4D4D] text-sm font-medium">
                    {set.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {set.hasVideo && (
                      <Video className="w-6 h-5 text-[#A1A1A1]" />
                    )}
                    {set.hasChat && (
                      <MessageCircleMore className="w-6 h-5 text-[#A1A1A1]" />
                    )}
                  </div>
                </div>
                {set.hasIndicator && (
                  <div className="absolute right-2 top-1 translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
