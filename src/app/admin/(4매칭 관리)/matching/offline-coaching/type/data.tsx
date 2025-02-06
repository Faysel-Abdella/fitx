import React from "react";
import { UserData, TableColumn } from "./type";

export const sampleData: UserData[] = [
  {
    id: 10,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 10시 00분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "pending",
  },
  {
    id: 9,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 10시 00분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "confirmed",
  },
  {
    id: 8,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 16시 30분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "pending",
  },
  {
    id: 7,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 10시 00분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "pending",
  },
  {
    id: 6,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 16시 30분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "rejected",
  },
  {
    id: 5,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 10시 00분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "pending",
  },
  {
    id: 4,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 16시 30분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "pending",
  },
  {
    id: 3,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 10시 00분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "rejected",
  },
  {
    id: 2,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 16시 30분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "",
  },
  {
    id: 1,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 10시 00분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "",
  },
  {
    id: 11,
    name: "홍길동",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 10시 00분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "",
  },
];
export const sampleData2: UserData[] = [
  {
    id: 3,
    name: "전우치",
    nationality:"대한민국",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 10시 00분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "pending",
  },
  {
    id: 2,
    name: "전우치",
    nationality:"미국",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 10시 00분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "confirmed",
  },
  {
    id: 1,
    name: "전우치",
    nationality:"캐나다",
    phone: "01011111111",
    userId: "ghdrlfehdwjs",
    requestDate: "2025-11-18 10시 00분",
    approvalDate: (
      <div className="flex justify-center items-center">
        <p>아직 시작한지 얼마...</p>
        <p className="text-[#006BFF] underline underline-offset-1">더보기</p>
      </div>
    ),
    status: "confirmed",
  },
]

export const columns: TableColumn<UserData>[] = [
  { key: "id", header: "번호", width: "80px" },
  { key: "name", header: "이름" },
  { key: "phone", header: "휴대전화번호" },
  { key: "userId", header: "아이디" },
  { key: "requestDate", header: "신청 일시" },
  { key: "approvalDate", header: "승인 일시" },
  { key: "status", header: "상태" },
];
export const columns2: TableColumn<UserData>[] = [
  { key: "id", header: "번호", width: "80px" },
  { key: "name", header: "이름" },
  { key: "nationality", header: "국적" },
  { key: "phone", header: "휴대전화번호" },
  { key: "userId", header: "아이디" },
  { key: "requestDate", header: "신청 일시" },
  { key: "approvalDate", header: "승인 일시" },
  { key: "status", header: "상태" },
];
