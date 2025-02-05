"use client";

import { useState } from "react";
import { Exercise, ExerciseSet } from "./type";
import {
  EllipsisHorizontalIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Modal from "@/components/modals/Modal";
import AddTemplateModal from "./components/AddTemplateModal";
import { useDisclosure } from "@heroui/react";
import Header from "@/components/Header";
export default function ExerciseForm() {
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
    <>
      <Header title="템플릿 추가" />
      <div className="max-w-3xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Exercise Selection Input */}
          <div className="relative">
            <div className="flex items-center w-full cursor-pointer">
              <input
                type="text"
                value={exercise.name}
                placeholder="운동 선택"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                readOnly
              />
              <ChevronRightIcon
                className="w-5 h-5 text-gray-400 absolute right-3"
                onClick={onOpen}
              />
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <AddTemplateModal />
              </Modal>
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
                + 세트 추가
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <button
              type="submit"
              className=" py-4 w-[270px] bg-[#006BFF] text-white font-medium rounded-[100px] hover:bg-blue-600 transition-colors"
            >
              추가
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
