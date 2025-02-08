import React from "react";
import { Select, SelectItem } from "@heroui/react";

const DropDown = ({
  options,
  defaultSelectedKeys,
  selectStyles,
  insideStyles,
  selectContainerStyles,
}: {
  options: { key: string; label: string }[];
  defaultSelectedKeys: string;
  selectStyles?: string;
  selectContainerStyles?:string
  insideStyles?: string;
}) => {
  return (
    <div className={`flex ${selectContainerStyles} items-center`}>
      <div className={`${selectContainerStyles}`}>
        <Select
          classNames={{
            mainWrapper: [
              `${selectStyles} border-1 border-[#D2D5D6]  rounded-[5px] text-mainGray`,
            ],
            trigger: [`${insideStyles}   bg-[#ffffff] rounded-[5px] `],
            value: ["text-[15px] "],
          }}
          disallowEmptySelection={true}
          defaultSelectedKeys={[defaultSelectedKeys]}
          aria-label="Toggle selection"
        >
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default DropDown;