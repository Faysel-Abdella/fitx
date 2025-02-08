import Image from "next/image";
import React from "react";

interface ProfilePreviewProps {
  imageSrc: string;
  name: string;
  stats: {
    label: string;
    weight: string;
  }[];
}

const ProfilePreview = ({ imageSrc, name, stats }: ProfilePreviewProps) => {
  return (
    <div className="flex items-center justify-around rounded-[10px] bg-white">
      <div className="flex flex-col gap-2 items-center">
        <Image
          alt="Profile Picture"
          src={imageSrc}
          width={58}
          height={58}
          className="rounded-full object-cover"
        />
        <p className="font-bold whitespace-nowrap text-[#4D4D4D]">{name}</p>
      </div>

      <div className="flex flex-col flex-1 gap-3 justify-center ml-2 items-center">
        <p className="font-bold text-[#4D4D4D] ">e1RM</p>
        <div className="flex  justify-between items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 h-[58px] px-4 mx-1 justify-center bg-[#F5F5F5]  rounded-[4px] text-center"
            >
              <p className="font-semibold text-[#B3B3B3] whitespace-nowrap   text-xs">
                {stat.label}
              </p>
              <p className="font-bold text-[#4D4D4D] text-base">
                {stat.weight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
