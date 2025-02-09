"use client";
import Header from "@/components/Header";
import {
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {
  Exercise,
  ExerciseSet,
} from "../../../exercise-program-management/addTemplate/type";

import { Textarea, useDisclosure } from "@heroui/react";
import TextInput from "@/components/inputs/Input";
import Modal from "@/components/modals/Modal";
import AddExerciseModal from "./components/AddExerciseModal";
import Image from "next/image";

const ADDExercise = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [exercise, setExercise] = useState<Exercise>({
    name: "",
    sets: [{ id: 1, reps: "", rpe: "", weight: "", rest: "" }],
  });

  const addSet = () => {
    setExercise((prev) => ({
      ...prev,
      sets: [
        ...prev.sets,
        {
          id: prev.sets.length + 1,
          reps: "",
          rpe: "",
          weight: "",
          rest: "",
        },
      ],
    }));
  };

  const updateSet = (id: number, field: keyof ExerciseSet, value: string) => {
    setExercise((prev) => ({
      ...prev,
      sets: prev.sets.map((set) =>
        set.id === id ? { ...set, [field]: value } : set
      ),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted exercise:", exercise);
  };

  return (
    <div>
      <Header title="운동 추가하기" />
      <div className="w-[60%] mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Exercise Selection Input */}
          <div className="w-full py-[15px] bg-white rounded-[100px] flex justify-center items-center">
            <button onClick={onOpen} className="text-[#006BFF] font-bold">시작하기</button>
            <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            paddingHorizontal="px-0"
            radius="rounded-[5px]"
            modalWidthInPercent=" max-w-[100%]"
            background_color="bg-[#F5F5F5]"
          >
            <AddExerciseModal cancel={onOpenChange} />
          </Modal>
          </div>
          <div className="relative">
            <div className="flex items-center w-full cursor-pointer">
              <input
                type="text"
                value={exercise.name}
                placeholder="운동 선택"
                className="w-full p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                readOnly
              />
              <ChevronRightIcon className="w-5 h-5 text-gray-400 absolute right-3" />
    
            </div>
          </div>

          {/* Sets Table */}
          <div className="overflow-x-auto p-[14px] bg-white">
            <table className="w-full">
              <thead>
                <tr className="text-center">
                  <th className="flex justify-center pb-4 font-normal text-[#A1A1A1] ">
                    세트
                  </th>
                  <th className="pb-4 font-normal text-[#A1A1A1]">횟수</th>
                  <th className="pb-4 font-normal text-[#A1A1A1]">RPE</th>
                  <th className="pb-4 font-normal text-[#A1A1A1]">중량(kg)</th>
                  <th className="pb-4 font-normal text-[#A1A1A1]">휴식(분)</th>
                  <th className="pb-4 font-normal text-[#A1A1A1]"></th>
                </tr>
              </thead>
              <tbody>
                {exercise.sets.map((set) => (
                  <tr key={set.id} className="group">
                    <td className="px-[20px] py-[11px] text-[#4D4D4D]">
                      {set.id}
                    </td>
                    <td className="py-2 px-2">
                      <input
                        type="text"
                        value={set.reps}
                        onChange={(e) =>
                          updateSet(set.id, "reps", e.target.value)
                        }
                        className="w-full px-[20px] py-[11px] h-[67px] bg-[#F5F5F5] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-2 px-2">
                      <input
                        type="text"
                        value={set.rpe}
                        onChange={(e) =>
                          updateSet(set.id, "rpe", e.target.value)
                        }
                        className="w-full px-[20px] py-[11px] h-[67px] bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-2 px-2">
                      <input
                        type="text"
                        value={set.weight}
                        onChange={(e) =>
                          updateSet(set.id, "weight", e.target.value)
                        }
                        className="w-full px-[20px] py-[11px] h-[67px] bg-[#F5F5F5] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-2 px-2">
                      <input
                        type="text"
                        value={set.rest}
                        onChange={(e) =>
                          updateSet(set.id, "rest", e.target.value)
                        }
                        className="w-full px-[20px] py-[11px] h-[67px] bg-[#F5F5F5] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-2">
                      <button
                        type="button"
                        className="p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <EllipsisHorizontalIcon className="w-5 h-5 text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex  justify-center items-center">
              <button
                type="button"
                onClick={addSet}
                className="text-[#006BFF] text-center hover:text-blue-600 text-sm font-medium"
              >
              <div className="flex gap-1">
                <Image src={'/plus.svg'} alt="plus" width={11} height={11} />
                <p className="">세트 추가</p>
              </div>
                
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="font-bold text-[#4D4D4D] text-xs">코멘트 (선택)</p>
            <Textarea
              placeholder="운동 중 특이사항 작성 (최대 50자)"
              minRows={5}
              classNames={{
                inputWrapper: "bg-white",
              }}
            />
            <p className="text-[#A1A1A1] text-xs text-end">0 / 50</p>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="font-bold text-[#4D4D4D] text-xs">링크 (선택)</p>
            <TextInput
              placeholder="링크 입력"
              type="text"
              inputWrapper="bg-white"
            />
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <button
              type="submit"
              className=" w-full py-[15px] bg-[#006BFF] text-white font-medium rounded-[100px] hover:bg-blue-600 transition-colors"
            >
              추가
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ADDExercise;
