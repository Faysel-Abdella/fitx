import React from "react";
import Scheduler from "./Scheduler";
import WorkoutCard from "./WorkoutCard";

const ChatArea = () => {
  return (
    <div className="flex gap-6 mt-8 items-stretch">
      <div className="w-[30%]  ">
        <Scheduler />
      </div>
      <div className="w-[35%]">
        <WorkoutCard />
      </div>
    </div>
  );
};

export default ChatArea;
