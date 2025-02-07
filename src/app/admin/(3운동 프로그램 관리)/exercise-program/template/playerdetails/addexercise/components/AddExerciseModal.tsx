import Template from "@/components/templateComponent/Template";
import { useRouter } from "next/navigation";
import React from "react";
interface addexerciseProps {
    cancel: () => void;
}
const AddExerciseModal = ({cancel}:addexerciseProps) => {
    const router =useRouter()
    const handleroute=()=>{
        router.push('/admin/exercise-program/template/playerdetails/addexercise/addexercise')
    }
  return (
    <div className="flex flex-col gap-5 rounded-[10px]   p-5">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg text-[#4D4D4D]">템플릿 선택</p>
        <button onClick={cancel} className="text-[#4D4D4D] text-lg font-bold">X</button>
      </div>

      <div className="flex flex-col ">
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
      <div className="flex justify-center items-center">
        <button onClick={handleroute} className="py-[15px] w-[405px] rounded-[100px] bg-[#006BFF] text-white">선택</button>
      </div>
    </div>
  );
};

export default AddExerciseModal;
