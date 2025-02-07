import TextInput from "@/components/inputs/Input";
import React from "react";

const FindPasswordModal = () => {
  return (
    <div className="flex flex-col  py-10 rounded-[5px]">
      <div className="flex items-center justify-center flex-col gap-[54px]">
        <h2 className="text-[#333333] font-bold  text-4xl ">비밀번호 찾기</h2>
        <p className="text-[#333333]">
          가입하실 때 입력한 아이디, 이름, 이메일주소를 입력해주세
        </p>
      </div>
      <div className="flex mt-10 flex-col gap-[14px]">
        <div className="flex flex-col gap-1">
          <p className="text-[#333333]">아이디</p>
          <TextInput
            placeholder="6~12자 소문자/숫자 입력"
            type="text"
            inputWrapper="bg-[#FAFAFA] border-1 border-[#FAFAFA]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#333333]">이름</p>
          <TextInput
            placeholder="최소 두 글자 이상 입력"
            type="text"
            inputWrapper="bg-[#FAFAFA] border-1 border-[#FAFAFA]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#333333]">이메일 주소</p>
          <TextInput
            placeholder="이메일 @ 도메인 입력"
            type="text"
            inputWrapper="bg-[#FAFAFA] border-1 border-[#FAFAFA]"
          />
        </div>
      </div>
      <div className="mt-10">
        <button className="w-[400px] py-4 rounded-[10px] bg-[#000000] text-white">
          확인
        </button>
      </div>

      <p className="mt-5 text-sm text-center text-[#FF0000]">
        이름, 이메일주소와 일치하는 아이디를 메일로 전달드렸습니다.
      </p>
    </div>
  );
};

export default FindPasswordModal;
