
export interface IButton {
    label: string;
    disabled?: boolean;
    backgroundColor: string;
    borderRadius: string;
    textStyle: string;
    width?: string;
    padding?: string;
    borderColor?:string
  }
  export interface RadioButtonProps {
    options: string[];
    gapOfRadio?: string;
    onChange: (value: string) => void;
    selectedValue?: string;
    optionStyles?: string;
  }
  