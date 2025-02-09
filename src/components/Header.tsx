import React from "react";
interface headerProps {
  title: string;
}
const Header = ({ title }: headerProps) => {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex justify-end gap-[24px]">
        <p className="underline underline-offset-1 text-[#007AFF]">
          세션 연장 새로고침
        </p>
        <p className="text-[#A0A0A0]">로그아웃</p>
      </div>
      <div>
        <h1 className="font-bold text-[30px] my-4 text-[#4D4D4D]">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
