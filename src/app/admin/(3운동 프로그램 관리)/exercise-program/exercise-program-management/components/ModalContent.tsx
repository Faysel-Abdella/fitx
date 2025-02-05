import React from "react";

const ModalContent = () => {
  return (
    <div className="bg-white rounded-[20px] w-full h-[150px] flex flex-col justify-between overflow-hidden">
  {/* Modal Content */}
  <div className="flex flex-col justify-center items-center gap-[4px] flex-grow">
    <p className="text-[#4D4D4D] text-[16px] font-medium">삭제</p>
    <p className="text-[#4D4D4D] text-[14px]">운동 템플릿을 삭제합니다</p>
  </div>

  {/* Bottom Buttons */}
  <div className="flex w-full border-t border-[#DCDCDC] divide-x divide-[#DCDCDC]">
    <button className="w-1/2 py-[11px] text-[#0A84FF] text-center">
      취소
    </button>
    <button className="w-1/2 py-[11px] text-[#F53636] text-center">
      삭제
    </button>
  </div>
</div>

  
  );
};

export default ModalContent;
