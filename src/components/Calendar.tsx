/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export interface Task {
  date: number;
  title: string;
}

interface CalendarProps {
  defaultTasks: Task[];
}

export default function Calendar({ defaultTasks }: CalendarProps) {
  const today = new Date();

  // Memoize the default tasks to avoid unnecessary re-renders.
  const memoizedDefaultTasks = useMemo(() => defaultTasks, [defaultTasks]);

  // All hook calls below won't be flagged by ESLint.
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [tasks, setTasks] = useState<Task[]>(memoizedDefaultTasks);
  const [selectedDay, setSelectedDay] = useState<number | null>(
    today.getDate()
  );
  const [newTask, setNewTask] = useState<string>("");
  const [inputVisible, setInputVisible] = useState<boolean>(false);

  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const isToday = (day: number) =>
    today.getDate() === day &&
    today.getMonth() === currentMonth.getMonth() &&
    today.getFullYear() === currentMonth.getFullYear();

  const isPastDate = (day: number) => {
    if (currentMonth.getFullYear() < today.getFullYear()) return true;
    if (currentMonth.getFullYear() > today.getFullYear()) return false;
    if (currentMonth.getMonth() < today.getMonth()) return true;
    if (currentMonth.getMonth() > today.getMonth()) return false;
    return day < today.getDate();
  };

  const hasTask = (day: number) => tasks.some((task) => task.date === day);

  const previousMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
    setSelectedDay(null);
    setInputVisible(false);
  };

  const nextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
    setSelectedDay(null);
    setInputVisible(false);
  };

  const handleDayClick = (day: number) => {
    if (isPastDate(day)) return;
    if (selectedDay === day && inputVisible) {
      setInputVisible(false);
    } else {
      setSelectedDay(day);
      setInputVisible(true);
    }
  };

  const addTask = () => {
    if (selectedDay && newTask.trim() && !isPastDate(selectedDay)) {
      setTasks([...tasks, { date: selectedDay, title: newTask.trim() }]);
      setNewTask("");
      setInputVisible(false);
    }
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth);

  const monthName = currentMonth.toLocaleString("ko-KR", { month: "long" });
  const year = currentMonth.toLocaleString("ko-KR", { year: "numeric" });

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(
      <div key={`empty-${i}`} className="h-32 sm:h-40 md:h-48 lg:h-56" />
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    let dayBg = "";
    if (isPastDate(day)) {
      dayBg = hasTask(day) ? "bg-[#D1D1D1] text-[#4D4D4D]" : "bg-[#F2F2F2]";
    } else {
      if (hasTask(day)) dayBg = "bg-black text-white";
    }

    const dayClasses = `
      h-32 sm:h-40 md:h-48 lg:h-56 border border-gray-200 p-2 transition-colors
      rounded-[13px]
      ${!isPastDate(day) ? "cursor-pointer" : ""}
      ${dayBg}
      ${isToday(day) ? "ring-2 ring-blue-500" : ""}
      ${selectedDay === day ? "ring-2 ring-green-500" : ""}
    `.trim();

    days.push(
      <div key={day} className={dayClasses} onClick={() => handleDayClick(day)}>
        <span className="font-medium text-lg">{day}</span>
        {hasTask(day) && (
          <div className="mt-1 text-sm">
            {tasks
              .filter((task) => task.date === day)
              .map((task, index) => (
                <div key={index} className="truncate">
                  {task.title}
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={previousMonth}
          className="p-2 hover:bg-gray-100 rounded-full"
          aria-label="이전 달"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-semibold">
          {year} {monthName}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full"
          aria-label="다음 달"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-5 mb-4">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day} className="text-center font-medium py-2 text-lg">
            {day}
          </div>
        ))}
        {days}
      </div>

      {inputVisible && selectedDay !== null && !isPastDate(selectedDay) && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">{selectedDay}일 작업</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onBlur={() => setInputVisible(false)}
              className="flex-grow border rounded px-3 py-2 text-lg"
              placeholder="새 작업 추가"
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 text-lg"
            >
              <Plus className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
