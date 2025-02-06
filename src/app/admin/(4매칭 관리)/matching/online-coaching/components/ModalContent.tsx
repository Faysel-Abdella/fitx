import TextInput from "@/components/inputs/Input";
import React from "react";

const ModalContent = () => {
  return (
    <div className="bg-white rounded-[20px] h-fit w-full  flex flex-col gap-5 justify-between overflow-hidden">
      {/* Modal Content */}
      <div className="flex flex-col space-y-5 p-[16px]">
        <div className="flex flex-col  justify-center items-center gap-[4px] flex-grow">
          <p className="text-[#4D4D4D] text-[20px] font-medium">거절</p>
          <p className="text-[#4D4D4D] text-[16px]">
            거절 사유를 입력해주세요.
          </p>
        </div>
        <div className="w-[95%] flex   mx-auto">
          <TextInput
            placeholder="입력"
            type="text"
            containerStyle="bg-#F2F2F2"
          />
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex   w-full border-t border-[#DCDCDC] divide-x divide-[#DCDCDC]">
        <button className="w-1/2 py-[11px] text-[#0A84FF] text-center">
          취소
        </button>
        <button className="w-1/2 py-[11px] text-[#0A84FF] text-center">
          확인
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
