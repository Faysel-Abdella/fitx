"use client";
import Header from "@/components/Header";
import Modal from "@/components/modals/Modal";
import Template from "@/components/templateComponent/Template";
import { useDisclosure } from "@heroui/react";
import { useRouter } from "next/navigation";
import ModalContent from "./components/ModalContent";
import { ToggleRadio } from "@/components/buttons/RadioButton";
import React, { useState } from "react";

const ExerciseProgramManagement = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const handleRoute = () =>
    router.push(
      "/admin/exercise-program/exercise-program-management/addTemplate"
    );

  // Global "전체 선택" state
  const [globalSelect, setGlobalSelect] = useState(false);

  // Individual Template selection state variables for each instance
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);
  const [selected7, setSelected7] = useState(false);
  const [selected8, setSelected8] = useState(false);
  const [selected9, setSelected9] = useState(false);

  // Handler for "전체 선택" toggle
  const handleSelectAll = (checked: boolean) => {
    setGlobalSelect(checked);
    setSelected1(checked);
    setSelected2(checked);
    setSelected3(checked);
    setSelected4(checked);
    setSelected5(checked);
    setSelected6(checked);
    setSelected7(checked);
    setSelected8(checked);
    setSelected9(checked);
  };

 
  const handleIndividualToggle = (
    index: number,
    checked: boolean
  ) => {
   
    switch (index) {
      case 1:
        setSelected1(checked);
        break;
      case 2:
        setSelected2(checked);
        break;
      case 3:
        setSelected3(checked);
        break;
      case 4:
        setSelected4(checked);
        break;
      case 5:
        setSelected5(checked);
        break;
      case 6:
        setSelected6(checked);
        break;
      case 7:
        setSelected7(checked);
        break;
      case 8:
        setSelected8(checked);
        break;
      case 9:
        setSelected9(checked);
        break;
      default:
        break;
    }
   
    if (!checked) {
      setGlobalSelect(false);
    }
  };

  return (
    <div className=" ">
      <Header title="템플릿 관리" />
      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-5">
          <ToggleRadio
            label="전체 선택"
            checked={globalSelect}
            onChange={handleSelectAll}
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
            paddingHorizontal="px-0"
            radius="rounded-[5px]"
            modalWidthInPercent="w-[300px]"
          >
            <ModalContent />
          </Modal>
        </div>
        <button
          onClick={handleRoute}
          className="py-[15px] rounded-[100px] bg-[#006BFF] text-white w-[270px]"
        >
          운동 템플릿 추가
        </button>
      </div>
      <div className="flex flex-col mt-[20px]">
        <div className="flex gap-[20px]">
          {/* Row 1 */}
          <Template
            title="스쿼트"
            selected={selected1}
            onToggle={(checked) => handleIndividualToggle(1, checked)}
          />
          <Template
            title="데드리프트"
            selected={selected2}
            onToggle={(checked) => handleIndividualToggle(2, checked)}
          />
          <Template
            title="벤치프레스"
            selected={selected3}
            onToggle={(checked) => handleIndividualToggle(3, checked)}
          />
        </div>
      </div>
      <div className="flex flex-col mt-[20px]">
        <div className="flex gap-[20px]">
          {/* Row 2 */}
          <Template
            title="스쿼트"
            selected={selected4}
            onToggle={(checked) => handleIndividualToggle(4, checked)}
          />
          <Template
            title="스쿼트"
            selected={selected5}
            onToggle={(checked) => handleIndividualToggle(5, checked)}
          />
          <Template
            title="데드리프트"
            selected={selected6}
            onToggle={(checked) => handleIndividualToggle(6, checked)}
          />
        </div>
      </div>
      <div className="flex flex-col mt-[20px]">
        <div className="flex gap-[20px]">
          {/* Row 3 */}
          <Template
            title="데드리프트"
            selected={selected7}
            onToggle={(checked) => handleIndividualToggle(7, checked)}
          />
          <Template
            title="벤치프레스"
            selected={selected8}
            onToggle={(checked) => handleIndividualToggle(8, checked)}
          />
          <Template
            title="벤치프레스"
            selected={selected9}
            onToggle={(checked) => handleIndividualToggle(9, checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseProgramManagement;
