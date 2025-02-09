"use client";

import leftArrow from "@/assets/icons/leftArrow.svg";
import rightArrow from "@/assets/icons/rightArrow.svg";
import Header from "@/components/Header";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import Table from "./ModalTable";
import DropDownWithLabel from "@/components/dropDown/DropDownwithlabel";
import TableTwo from "./TableTwo";

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
  // For the second (template) modal
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  return (
    <section>
      <Header title="운동프로그램" />
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
              border rounded-lg p-4 flex flex-col justify-between cursor-pointer
              ${day === selectedDay ? "border-mainBlue" : "border-[#E9E9E9]"}
              ${
                day === selectedDay
                  ? "bg-white text-[#006BFF] font-medium"
                  : "bg-white text-gray-900"
              }
              transition-all duration-280 ease-in-out
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
          {/* Set max height to 95vh so content can expand up to 95% of the viewport height before scrolling */}
          <ModalContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
            {(onClose) => (
              <>
                <ModalHeader className="flex items-center mt-2 mr-4 justify-between gap-1">
                  <div>운동 추가하기</div>
                  <Button
                    className="bg-[#4D4D4D] text-white rounded-md"
                    onPress={onOpen2}
                  >
                    템플릿
                  </Button>
                </ModalHeader>
                <ModalBody>
                  <div className="flex justify-between ml-6 mr-12 h-[40px] items-center">
                    <DropDownWithLabel
                      title="카테고리"
                      options={[
                        { key: "plan1", label: "파워리프트" },
                        { key: "plan2", label: "파워리프트" },
                      ]}
                      defaultSelectedKeys="plan1"
                      insideStyles="text-[#9D9D9D] w-[280px] h-[40px]"
                      titleStyles="text-[#323232] mr-10 font-bold text-base"
                    />
                    <DropDownWithLabel
                      title="운동 선택"
                      options={[
                        { key: "plan1", label: "운동 선택" },
                        { key: "plan2", label: "운동 선택" },
                      ]}
                      defaultSelectedKeys="plan1"
                      insideStyles="text-[#9D9D9D] w-[280px] h-[40px]"
                      titleStyles="text-[#323232] mr-10 font-bold text-base"
                    />
                  </div>

                  <div className="flex mx-6 my-4 h-[40px] items-center space-x-9">
                    <label
                      htmlFor="memberName"
                      className="text-[#323232] font-bold text-base"
                    >
                      회원명
                    </label>
                    <input
                      type="text"
                      id="memberName"
                      placeholder="이름"
                      className="px-3 h-[40px] w-[280px] text-sm border border-[#D2D5D6] rounded-[5px] text-mainGray focus:outline-none"
                    />
                  </div>

                  {/* Table Component */}
                  <Table />

                  <div className="flex items-start gap-3 mx-6 mr-11 my-4">
                    <label
                      htmlFor="memberComment"
                      className="text-[#323232] font-bold whitespace-nowrap text-base"
                    >
                      코멘트(선택)
                    </label>
                    <Textarea
                      id="memberComment"
                      placeholder="운동 중 특이사항 작성 (최대 50자)"
                      variant="bordered"
                      className="w-full min-w-[200px] focus:outline-none"
                    />
                  </div>

                  <div className="mx-6 h-[40px] my-3 items-center">
                    <DropDownWithLabel
                      title="템플릿"
                      options={[
                        { key: "plan1", label: "저장" },
                        { key: "plan2", label: "저장" },
                      ]}
                      defaultSelectedKeys="plan1"
                      insideStyles="text-[#9D9D9D] w-[280px] h-[40px]"
                      titleStyles="text-[#323232] mr-[50px] font-bold text-base"
                    />
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

        {/* Second (Template) Modal */}
        <Modal
          isOpen={isOpen2}
          onClose={onClose2}
          classNames={{ closeButton: "text-lg" }}
        >
          <ModalContent className="max-w-lg">
            {(onClose2) => (
              <>
                <ModalHeader className="flex items-center justify-between">
                  템플릿
                </ModalHeader>
                <ModalBody>
                  {/* Body */}
                  <div className="space-y-8">
                    <TableTwo title="스쿼트" color="#006BFF" />
                    <TableTwo title="벤치프레스" color="#A0A0A0" />
                  </div>
                </ModalBody>
                <ModalFooter className="flex justify-center items-center">
                  <Button
                    className="bg-[#4D4D4D] mb-6 mt-3 text-white rounded-md"
                    onPress={onClose2}
                  >
                    저장
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
}
