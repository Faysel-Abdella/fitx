import { Image } from "@heroui/react";
import React from "react";
import searchIcon from "@/app/assets/Search Icon.svg";

export const SearchInput = ({
  placeholder,
  onClick,
  iconAlign = "left",
}: {
  placeholder: string;
  inputWrapper?: string;
  iconAlign?: string;
  onClick: () => void;
}) => {
  return (
    <div
      className={`flex ${
        iconAlign === "right" ? "justify-between" : ""
      } py-[8px] px-[14px] rounded-[100px]  bg-[#F5F5F5] items-center text-[14px] font-[400] text-[#333333] `}
    >
      <button onClick={() => onClick}>
        {iconAlign === "left" && (
          <Image
            src={searchIcon.src}
            width={16}
            height={16}
            alt={"searchIcon"}
          />
        )}
      </button>
      <input
        className={
          "placeholder:text-[#ABAFB7] w-full focus:outline-none  bg-[#F5F5F5]"
        }
        placeholder={placeholder}
      />
      <button onClick={() => onClick}>
        {iconAlign === "right" && (
          <Image
            src={searchIcon.src}
            width={16}
            height={16}
            alt={"searchIcon"}
          />
        )}
      </button>
    </div>
  );
};
