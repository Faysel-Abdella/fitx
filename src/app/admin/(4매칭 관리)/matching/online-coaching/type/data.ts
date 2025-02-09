import { UserData, TableColumn } from "./type";

export const sampleData: UserData[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  // For example, every 3rd entry is "confirmed" with an approval date; others are pending.
  const isConfirmed = id % 3 === 0;
  return {
    id,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 16:12:40",
    approvalDate: isConfirmed ? "2025-11-18 16:12:40" : "-",
    status: isConfirmed ? "confirmed" : "pending",
  };
});

export const columns: TableColumn<UserData>[] = [
  { key: "id", header: "번호", width: "80px" },
  { key: "name", header: "이름" },
  { key: "phone", header: "휴대전화번호" },
  { key: "userId", header: "아이디" },
  { key: "requestDate", header: "신청 일시" },
  { key: "approvalDate", header: "승인 일시" },
  { key: "status", header: "상태" },
];
