'use client'
import Header from "@/components/Header";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const ExerciseProgramManagement = () => {
  const router=useRouter()
  const handleRoute=()=>(
    router.push("/admin/exercise-program/exercise-program-management/addTemplate")
  )
  return <div>
    <Header title="템플릿 관리"/>
    <div className="flex justify-between items-center mt-5">
      <div className="flex gap-5">
        <h1 className="text-black">muba</h1>
 <button className="py-[10px] px-[20px] bg-[#4D4D4D] rounded-[5px]">삭제</button> 
      </div>
      <button onClick={handleRoute} className="py-[15px] rounded-[100px] bg-[#006BFF] w-[270px]">운동 템플릿 추가</button>
    </div>
    <div className="flex flex-col mt-[10px]">
      <div className=" flex gap-[10px]">

      </div>
    </div>
  </div>;
};

export default ExerciseProgramManagement;
