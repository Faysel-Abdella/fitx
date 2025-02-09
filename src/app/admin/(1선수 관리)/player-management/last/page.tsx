import React from "react";
import { ColumnOne } from "./ColumnOne";
import { ColumnTwo } from "./ColumnTwo";
import { ColumnThree } from "./ColumnThree";
import Header from "@/components/Header";
export default function Page() {
  return (
    <div>
      <Header title="상세보기" />
      <div className="flex  gap-5 mt-8 mx-0  ">
        <div className="">
          <ColumnOne />
        </div>
        <div className=" flex-1">
          <ColumnTwo />
        </div>
        <div className=" flex-1">
          <ColumnThree />
        </div>
      </div>
    </div>
  );
}
