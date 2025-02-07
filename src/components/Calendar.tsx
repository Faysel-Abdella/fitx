import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Calendar = () => {
  return (
    <div className="flex flex-col gap-[30px] border-1 border-[#DCDCDC] bg-white rounded-[10px] px-[18px] pt-[18px] pb-[43px]">
      <div className="flex items-center">
        <ChevronLeftIcon className="w-4 h-4" />
        <p className="font-bold text-[#000000] text-lg">1월</p>
        <ChevronRightIcon className="w-4 h-4" />
      </div>
      <div className="flex flex-col gap-[15px]">
        <div className="flex gap-[16px]">
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">1</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <div className="flex flex-col items-center">
              <p className="font-bold text-black">2</p>
              <p className="text-[#4D4D4DB2]">스쿼트</p>
              <p className="text-[#4D4D4DB2]">벤치프레스</p>
            </div>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-black border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <div className="flex flex-col items-center">
              <p className="font-bold text-white">3</p>
              <p className="text-white">스쿼트</p>
              <p className="text-white">벤치프레스</p>
              <p className="text-white">데드리프트</p>
            </div>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">4</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">5</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">6</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">7</p>
          </div>
        </div>
        <div className="flex gap-[16px]">
        <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">8</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">9</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">10</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">11</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">12</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">13</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">14</p>
          </div>
        </div>
        <div className="flex gap-[16px]">
        <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">15</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">16</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">17</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">18</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">19</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">20</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">21</p>
          </div>
        </div>
        <div className="flex gap-[16px]">
        <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">22</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">23</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">24</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">25</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">26</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">27</p>
          </div>
          <div className="flex justify-center w-full h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">28</p>
          </div>
        </div>
        <div className="flex gap-[16px]">
        <div className="flex justify-center w-[14%] h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">29</p>
          </div>
          <div className="flex justify-center w-[14%] h-[159px] bg-[#DCDCDC61] border-1 border-[#EEEEEE] rounded-[13px] pt-[13px]">
            <p className="font-bold text-black">30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
