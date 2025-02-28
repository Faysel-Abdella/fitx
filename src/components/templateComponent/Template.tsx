"use client"
import { ToggleRadio } from "../buttons/RadioButton"; // Import your RadioButton component

interface TemplateProps {
  title: string;
  // New optional props for controlled selection:
  selected?: boolean;
  onToggle?: (checked: boolean) => void;
}

const bodyData = [
  ["1", "4", "80 kg", "7", "2분"],
  ["2", "5", "80 kg", "7", "2분"],
];

const headerData = ["세트", "횟수", "중량", "RPE", "휴식"];

const Template: React.FC<TemplateProps> = ({ title, selected, onToggle }) => {
  return (
    <div className="flex w-full flex-col gap-[14px] p-[14px] rounded-[10px] bg-white">
      <div className="flex gap-[14px]">
        {/* Pass the controlled props to ToggleRadio */}
        <ToggleRadio label={title} checked={selected} onChange={onToggle} />
      </div>
      <section>
        <table className="w-full">
          <thead>
            <tr>
              {headerData.map((data, index) => (
                <th key={index} className="text-[#A1A1A1] text-xs px-5 py-2">
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-5 py-2 text-sm text-[#4D4D4D] text-center">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Template;
