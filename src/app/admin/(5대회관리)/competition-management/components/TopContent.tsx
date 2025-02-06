import Header from "@/components/Header";
import TextInput from "@/components/inputs/Input";
import React from "react";

const TopContent = () => {
  return (
    <>
      <Header title="대회 관리" />
      <div className="flex justify-between items-center mt-[40px] py-[30px] px-[40px] rounded-[20px] bg-white">
        <TextInput
          placeholder="이름"
          type="text"
          label="회원명"
          labelColor="text-[#323232] font-bold"
          containerStyle="w-[280px] "
          labelWidth="w-[60px]"
          inputWrapper="border-1 rounded-[5px] border-[#DCDCDC] bg-white"
         
          
        />
        <button className="py-[10px] px-[20px] w-[181px] text-white bg-[#4D4D4D] rounded-[5px]">
          검색
        </button>
      </div>
    </>
  );
};

export default TopContent;
