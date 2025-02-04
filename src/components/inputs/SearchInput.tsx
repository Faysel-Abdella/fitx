import { Image } from "@heroui/react";
import React from "react";
import searchIcon from "@/app/assets/Search Icon.svg";

export const SearchInput = ({
  placeholder,
  inputWrapper,
  onClick,
}: {
  placeholder: string;
  inputWrapper?:string
  onClick: () => void;
}) => {
  return (
    <div className={`flex py-[8px] px-[14px] rounded-[10px]  bg-[#F5F5F5] items-center text-[14px] font-[400] text-[#333333] gap-2`}
>
         <button onClick={() => onClick}>
        <Image src={searchIcon.src} width={16} height={16} alt={"searchIcon"} />
      </button>
      <input
        className={"placeholder:text-[#ABAFB7] focus:outline-none  bg-[#F5F5F5]"}
        placeholder={placeholder}
        
      />
     
    </div>
  );
};
