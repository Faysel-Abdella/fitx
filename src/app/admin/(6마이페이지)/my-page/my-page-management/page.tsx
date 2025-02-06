import React from "react";
import TopContent from "./components/TopContent";
import BottomContent from "./components/BottomContent";

const MyPageManagement = () => {
  return <div>
    <TopContent/>
    <div className="mt-5">
      <BottomContent/>
    </div>
  </div>;
};

export default MyPageManagement;
