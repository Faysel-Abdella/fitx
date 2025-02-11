"use client";
import React from "react";
import TopContent from "./TopContent";
import ShowTable from "./showTable";
import Calendar from "@/components/Calendar";
import { columns, sampleData2 } from "./type/data";
import { BottomDataTable } from "./bottom-data-table";
import { Task } from "@/components/Calendar";

const page = () => {
  const today = new Date();
  const firstDefaultTasks: Task[] = [
    { date: today.getDate(), title: "홍길동(10 : 30)" },
    { date: today.getDate(), title: "임꺽정(14 : 30)" },
    { date: today.getDate(), title: "전우치(16 : 30)" },
    { date: today.getDate() - 1, title: "김철수(12 : 30)" },
    { date: today.getDate() - 1, title: "박영수(15 : 00)" },
  ];
  return (
    <>
      <div className="mb-5 mx-auto w-[98%]">
        <TopContent />
      </div>
      <ShowTable />
      <div className="flex flex-col p-5 mt-5 mx-auto w-[98%] bg-white rounded-[10px]">
        <p className="text-[#4D4D4D] font-bold ml-7 mb-[14px]">달력</p>
        <div className="mx-auto w-[95%]">
          <Calendar defaultTasks={firstDefaultTasks} />
        </div>

        <div className="w-full">
          <BottomDataTable data={sampleData2} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default page;
