import React from "react";
import { Select, SelectItem } from "@heroui/react";

const DropDownWithLabel = ({
  title,
  options,
  defaultSelectedKeys,
  titleStyles,
  selectStyles,
  insideStyles,
  selectContainerStyles,
}: {
  title: string;
  options: { key: string; label: string }[];
  defaultSelectedKeys: string;
  titleStyles?: string;
  selectStyles?: string;
  selectContainerStyles?: string;
  insideStyles?: string;
}) => {
  return (
    <div className={`flex ${selectContainerStyles}  items-center`}>
      <h4
        className={`${titleStyles}  text-mainBlack mr-4 text-base text-nowrap`}
      >
        {title}
      </h4>
      <div className={`${selectContainerStyles}`}>
        <Select
          classNames={{
            mainWrapper: [
              `${selectStyles} border-1 border-[#D2D5D6]  rounded-[5px] `,
            ],
            trigger: [`${insideStyles}  bg-[#ffffff] rounded-[5px] `],
            value: ["text-[15px]"],
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

export default DropDownWithLabel;
