"use client";
import React from "react";
import TopContent from "./components/TopContent";
import ShowTable from "./components/showTable";
import Calendar from "@/components/Calendar";
import { columns, sampleData2 } from "./type/data";
import { BottomDataTable } from "./components/bottom-data-table";

const page = () => {
  return (
    <>
      <div className="mb-5 mx-auto w-[98%]">
        <TopContent />
      </div>
      <ShowTable />
      <div className="flex flex-col p-5 mt-5 mx-auto w-[98%] bg-white rounded-[10px]">
        <p className="text-[#4D4D4D] font-bold ml-7 mb-[14px]">달력</p>
        <div className="mx-auto w-[95%]">
          <Calendar />
        </div>

        <div className="w-full">
          <BottomDataTable data={sampleData2} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default page;
