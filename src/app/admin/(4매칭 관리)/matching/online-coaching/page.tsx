import React from "react";
import TopContent from "./components/TopContent";
import ShowTable from "./components/showTable";

const OfflineCoaching = () => {
  return (
    <>
      <div className="mb-5 mx-auto w-[98%]">
        <TopContent />
      </div>
      <ShowTable/>
    </>
  );
};

export default OfflineCoaching;