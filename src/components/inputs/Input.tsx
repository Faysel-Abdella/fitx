import {Input} from "@heroui/input";
import React from "react";
import { IInput } from "./type";

const TextInput = ({
  labelColor = "text-[#A3A6AB]",
  label,
  labelWidth = "w-[130px]",
  type,
  containerStyle,
  placeholder,
  height = "",
  inputWrapper,
  ...rest
}: IInput) => {
  return (
    <div
      className={`flex  w-full justify-center items-center ${containerStyle}`}
    >
      {label && (
        <label className={`${labelColor} text-[14px] font-[400] ${labelWidth}`}>
          {label}
        </label>
      )}
      <Input
        classNames={{
          mainWrapper: ` "w-full ${height}"`,
          input:
            "placeholder:text-[#A3A6AB] placeholder:text-[13px] px-[0px] py-[12px]",
          label: "text-gray-500",
          inputWrapper: `${inputWrapper}`,
        }}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
