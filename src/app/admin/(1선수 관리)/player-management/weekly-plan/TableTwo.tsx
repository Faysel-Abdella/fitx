import { Check } from "lucide-react";
import React from "react";

interface TableTwoProps {
  title: string;
  color: string;
}

const TableTwo: React.FC<TableTwoProps> = ({ title, color }) => {
  const headers: string[] = ["세트", "횟수", "중량", "휴식(분)"];
  const data: (number | string)[][] = [
    [2, 5, "80 kg", 2],
    [1, 4, "80 kg", 2],
  ];

  return (
    <div className="rounded-md mx-8 bg-[#F5F5F5] p-4 overflow-hidden">
      {/* Title with dynamic Check icon and title */}
      <div className="flex items-center text-lg font-bold mb-2">
        <Check color={color} className="w-6 h-6" />
        <span className="ml-2">{title}</span>
      </div>

      {/* Header Row */}
      <div className="flex mx-6 text-[#767676] text-sm pb-2">
        {headers.map((header, idx) => (
          <div key={idx} className="flex-1 text-center font-medium">
            {header}
          </div>
        ))}
      </div>

      {/* Data Rows */}
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex mx-6 text-sm font-semibold text-[#2B2B2B] py-2"
        >
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="flex-1 text-center">
              {cell}
            </div>
          ))}
        </div>
      ))}

      {/* Comment Section */}
      <div className="pt-4 mt-2 mx-6 text-[#2B2B2B] font-bold border-t border-[#9D9D9D] text-sm">
        코멘트 영역
      </div>
    </div>
  );
};

export default TableTwo;
