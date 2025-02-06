import React from "react";
import { ColumnOne } from "./ColumnOne";
import { ColumnTwo } from "./ColumnTwo";
import { ColumnThree } from "./ColumnThree";
export default function Page() {
  return (
    <div className="flex  gap-5 mt-8 mx-0  ">
      <div className=" flex-1">
        <ColumnOne />
      </div>
      <div className=" flex-1">
        <ColumnTwo />
      </div>
      <div className=" flex-1">
        <ColumnThree />
      </div>
    </div>
  );
}
