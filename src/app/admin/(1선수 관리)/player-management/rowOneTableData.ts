type StatusVariant =
  | "active-notification"
  | "inactive"
  | "outline"
  | "active"
  | "text-only";

interface WeeklyExerciseStatus {
  [day: string]: StatusVariant;
}

const STATUS: { [key: string]: StatusVariant } = {
  COMPLETED: "active",
  NOT_COMPLETED: "inactive",
  SCHEDULED: "outline",
  MISSED: "text-only",
  FEEDBACK: "active-notification",
};

const KOREAN_DAYS = ["월", "화", "수", "목", "금", "토", "일"];

const statuses: StatusVariant[] = [
  STATUS.COMPLETED,
  STATUS.SCHEDULED,
  STATUS.NOT_COMPLETED,
  STATUS.MISSED,
  STATUS.FEEDBACK,
];

function getDeterministicStatus(
  dayIndex: number,
  rowIndex: number
): StatusVariant {
  // Use both row and day indices to vary the assignment per row without randomness
  return statuses[(dayIndex + rowIndex) % statuses.length];
}

const demo = [
  {
    id: 0,
    number: 1,
    name: "이재은",
    plan: "PRO PLAN",
    weeklyExerciseStatus: Object.fromEntries(
      KOREAN_DAYS.map((_, dayIndex) => [
        KOREAN_DAYS[dayIndex],
        statuses[dayIndex % statuses.length],
      ])
    ) as WeeklyExerciseStatus,
    exerciseProgram: "운동 프로그램",
    viewDetails: "상세보기",
  },
];

const rowOneTableData = Array.from({ length: 70 }, (_, rowIndex) => ({
  ...demo[0],
  id: rowIndex + 1,
  number: rowIndex + 1,
  weeklyExerciseStatus: Object.fromEntries(
    KOREAN_DAYS.map((day, dayIndex) => [
      day,
      getDeterministicStatus(dayIndex, rowIndex),
    ])
  ) as WeeklyExerciseStatus,
}));

export default rowOneTableData;
