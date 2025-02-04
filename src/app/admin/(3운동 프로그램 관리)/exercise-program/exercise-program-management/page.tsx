"use client";
import { RadioButton } from "@/components/buttons/RadioButton";
import Header from "@/components/Header";
import TextInput from "@/components/inputs/Input";
import Modal from "@/components/modals/Modal";
import Template from "@/components/templateComponent/Template";
import { Button, useDisclosure } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ModalContent from "./components/ModalContent";

const ExerciseProgramManagement = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const handleRoute = () =>
    router.push(
      "/admin/exercise-program/exercise-program-management/addTemplate"
    );
  return (
    <div className=" ">
      <Header title="템플릿 관리" />
      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-5">
          <RadioButton
            options={["전체 선택"]}
            selectedValue={selectedOption}
            onChange={(selected) => setSelectedOption(selected)}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
          <button
            onClick={onOpen}
            className="py-[10px] px-[20px] bg-[#4D4D4D] text-white rounded-[5px]"
          >
            삭제
          </button>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            children={<ModalContent/>}
            paddingHorizontal="px-0"
            raduis="rounded-[5px]"
          />
        </div>
        <button
          onClick={handleRoute}
          className="py-[15px] rounded-[100px] bg-[#006BFF] text-white w-[270px]"
        >
          운동 템플릿 추가
        </button>
      </div>
      <div className="flex flex-col mt-[20px]">
        <div className=" flex gap-[20px]">
          <Template title="스쿼트" />
          <Template title="데드리프트" />
          <Template title="벤치프레스" />
        </div>
      </div>
      <div className="flex flex-col mt-[20px]">
        <div className=" flex gap-[20px]">
          <Template title="스쿼트" />
          <Template title="스쿼트" />
          <Template title="데드리프트" />
        </div>
      </div>
      <div className="flex flex-col mt-[20px]">
        <div className=" flex gap-[20px]">
          <Template title="데드리프트" />
          <Template title="벤치프레스" />
          <Template title="벤치프레스" />
        </div>
      </div>
    </div>
  );
};

export default ExerciseProgramManagement;
