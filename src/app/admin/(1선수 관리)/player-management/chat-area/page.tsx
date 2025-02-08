import React from "react";
import ChatInterface from "./chatInterface";
import Scheduler from "./Scheduler";
import WorkoutCard from "./WorkoutCard";
import Header from "@/components/Header";

const ChatArea = () => {
  return (
    <section>
      <Header title="피드백" />
      <div className="flex gap-6 mt-8 items-stretch">
        <div className="w-[30%] flex-1 ">
          <Scheduler />
        </div>
        <div>
          <WorkoutCard />
        </div>
        <div className="w-[70%] flex-1">
          <ChatInterface />
        </div>
      </div>
    </section>
  );
};

export default ChatArea;
