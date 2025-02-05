'use client'
import Calendar from "@/components/Calendar";
import Header from "@/components/Header";
import ProfilePreview from "@/components/ProfilePreview";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
 
const bodyData = [
  [<Image src={'/tick.svg'} alt="" width={14} height={14}/>, "1", "4","80 kg", "7", "2분"],
  [<Image src={'/tick.svg'} alt="" width={14} height={14}/>,"2", "5", "80 kg", "7", "2분"],
];
const bodyData2 = [
  [<Image src={'/tick.svg'} alt="" width={14} height={14}/>, "1", "4","57 kg", "5", "2분"],
  
];

const headerData = ["", "세트", "횟수", "중량", "RPE","휴식"];
const pages = () => {
  const router=useRouter()
  const handleroute=()=>{
    console.log('Button clicked');
    router.push("/admin/exercise-program/template/playerdetails/addexercise")
  }
  return (
    <div>
      <Header title="프로그램 구성" />
      <div className="mt-5">
        <ProfilePreview
          imageSrc="/Profile.svg"
          name="이재은 선수"
          stats={[
            { label: "스쿼트", weight: "280kg" },
            { label: "벤치프레스", weight: "145kg" },
            { label: "데드리프트", weight: "329kg" },
          ]}
        />
      </div>
      <div className="flex flex-col p-5 mt-5 bg-white rounded-[10px]">
        <p className="text-[#4D4D4D] font-bold mb-[14px]">달력</p>
        <Calendar />
        <div className="flex justify-center mt-5">
          <button onClick={handleroute} className="py-[15px] bg-[#006BFF] text-white min-w-[378px] rounded-[100px]">
            시작하기
          </button>
        </div>
        <div className="flex gap-5 mt-5 ">
          <div className="p-[14px] rounded-[10px] w-full bg-[#F5F5F5]">
            <div className="flex gap-[8px]">
              <Image src='/tick.svg' alt="" width={14} height={10}/>
              <p className="text-[#A1A1A1] ">스쿼트</p>
            </div>
            <section>
        <table className="w-full">
          <thead>
            <tr>
              {headerData.map((data, index) => (
                <th key={index} className="text-[#D1D1D1] text-xs px-3 py-2">
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2 text-sm text-[#A1A1A1] text-center">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
          </div>
          <div className="p-[14px] rounded-[10px] h-fit w-full bg-[#F5F5F5]">
            <div className="flex gap-[8px]">
              <Image src='/tick.svg' alt="" width={14} height={10}/>
              <p className="text-[#4D4D4D] ">벤치프레스</p>
            </div>
            <section>
        <table className="w-full">
          <thead>
            <tr>
              {headerData.map((data, index) => (
                <th key={index} className="text-[#D1D1D1] text-xs px-3 py-2">
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyData2.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2 text-sm text-[#A1A1A1] text-center">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
          </div>
          <div className="p-[14px] h-fit rounded-[10px] w-full bg-[#F5F5F5]">
            <div className="flex gap-[8px]">
              <Image src='/tick.svg' alt="" width={14} height={10}/>
              <p className="text-[#4D4D4D] ">데드리프트</p>
            </div>
            <section>
        <table className="w-full">
          <thead>
            <tr>
              {headerData.map((data, index) => (
                <th key={index} className="text-[#D1D1D1] text-xs px-3 py-2">
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyData2.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2 text-sm text-[#A1A1A1] text-center">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pages;
