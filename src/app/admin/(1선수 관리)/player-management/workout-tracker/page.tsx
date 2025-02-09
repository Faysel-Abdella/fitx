import React from "react";
import Scheduler from "./Scheduler";
import WorkoutCard from "./WorkoutCard";
import Header from "@/components/Header";

const ChatArea = () => {
  return (
    <div>
      <Header title="피드백" />{" "}
      <div className="flex gap-6 mt-8 items-stretch">
        <div className="w-[33%%]  ">
          <Scheduler />
        </div>
        <div className="w-[45%]">
          <WorkoutCard />
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
