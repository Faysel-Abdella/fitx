import React from "react";
import TopContent from "./components/TopContent";
import ShowTable from "./components/showTable";

const OfflineCoaching = () => {
  return (
    <>
      <div className="mb-5">
        <TopContent />
      </div>
      <div> <ShowTable/></div>
     
    </>
  );
};

export default OfflineCoaching;