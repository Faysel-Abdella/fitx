import { Button as NButton } from "@heroui/react";
import { IButton } from "./type";

export const Button = ({
    padding = "",
    label,
    disabled = false,
    backgroundColor,
    borderRadius,
    textStyle,
    borderColor,
    width,
    onPress, // Accept onPress
    ...rest
  }: IButton & { onPress?: () => void }) => { // Extend props to allow onPress
    return (
      <NButton
        disabled={disabled}
        className={`${borderRadius} ${borderColor} ${padding} ${width ? width : "w-full"} ${
          disabled ? "bg-[#ABAFB7]" : backgroundColor
        } ${textStyle}`}
        onClick={onPress} // Map onPress to onClick
        {...rest}
      >
        {label}
      </NButton>
    );
  };
  
