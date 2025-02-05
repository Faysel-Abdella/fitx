"use client";

import leftArrow from "@/assets/icons/leftArrow.svg";
import rightArrow from "@/assets/icons/rightArrow.svg";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";

export default function WeeklyPlan() {
  const days = Array.from({ length: 7 }, (_, i) => i + 1);
  const selectedDay = 3;
  const tasks = [
    {
      title: "스케줄",
      subtitle: "3개의 스케줄 (아직 비어있음)",
    },
    {
      title: "매치/토너먼트",
      subtitle: "3개의 매치 (준비 중)",
    },
    {
      title: "테스트 콘텐츠",
      subtitle: "3개의 테스트 (완료됨)",
    },
  ];

  // Modal state management
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="my-16 px-8 py-10 bg-white rounded-lg h-[700px] shadow-md max-w-[82rem] mx-auto">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-[#4D4D4D]">달력</h2>
      </div>

      {/* Week Plan */}
      <div className="mb-8 border-1 rounded-xl p-6 border-[#DCDCDC]">
        <h3 className="text-xl font-bold text-[#000000] mb-4 flex items-center gap-2">
          <span>
            <Image src={leftArrow || "/placeholder.svg"} alt={""} />
          </span>
          1월 1주차
          <span>
            <Image src={rightArrow || "/placeholder.svg"} alt={""} />
          </span>
        </h3>
        <div className="grid grid-cols-7 gap-4 pt-4">
          {days.map((day) => (
            <div
              key={day}
              className={`
                border rounded-lg p-4 flex flex-col justify-between 
                ${day === selectedDay ? "border-blue-500" : "border-gray-200"}
                ${
                  day === selectedDay
                    ? "bg-white text-[#006BFF]"
                    : "bg-white text-gray-900"
                }
                transition-all duration-300 ease-in-out
              `}
            >
              <div className="font-bold text-black text-center">{day}</div>
              {day === selectedDay && (
                <div className="space-y-2 mt-2">
                  {tasks.map((task, index) => (
                    <div key={index} className="text-xs">
                      <div className="font-bold text-[#006BFF]">
                        {task.title}
                      </div>
                      <div className="text-gray-500 text-[10px] mt-1">
                        {task.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add Exercise Button */}
      <div className="flex justify-center mt-16">
        <Button
          color={"primary"}
          className="w-[420px] py-2 font-bold rounded-full"
          onPress={onOpen} // Open the modal when clicked
        >
          운동 추가하기
        </Button>
      </div>

      {/* Exercise Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent className="max-w-5xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center mt-3 mr-6 justify-between gap-1">
                <div>운동 추가하기</div>

                <Button
                  className="bg-[#4D4D4D] text-white rounded-md"
                  onPress={onClose}
                >
                  템플릿
                </Button>
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <div className="rounded-md bg-[#F5F5F5] border ml-[10rem] mr-[5rem] overflow-hidden">
                  <div className="flex  font-medium text-sm  bg-gray-100 ">
                    <div className="flex-1 text-center p-4">시도</div>
                    <div className="flex-1 p-4">회수</div>
                    <div className="flex-1 p-4">평균</div>
                    <div className="flex-1 p-4">총점(hr)</div>
                    <div className="flex-1 p-4">중간값</div>
                  </div>

                  <div className="flex  text-sm ">
                    <div className="flex-1 text-center p-4">1</div>
                    <div className="flex-1 p-4">3</div>
                    <div className="flex-1 p-4">7</div>
                    <div className="flex-1 p-4">90</div>
                    <div className="flex-1 p-4">2</div>
                  </div>
                  <div className="flex  text-sm ">
                    <div className="flex-1 text-center p-4">2</div>
                    <div className="flex-1 p-4">3</div>
                    <div className="flex-1 p-4">7</div>
                    <div className="flex-1 p-4">90</div>
                    <div className="flex-1 p-4">2</div>
                  </div>
                  <div className="flex  text-sm ">
                    <div className="flex-1 text-center p-4">3</div>
                    <div className="flex-1 p-4">2</div>
                    <div className="flex-1 p-4">5</div>
                    <div className="flex-1 p-4">80</div>
                    <div className="flex-1 p-4">2</div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center items-center">
                <Button
                  className="bg-[#4D4D4D] text-white rounded-md"
                  onPress={onClose}
                >
                  저장
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
