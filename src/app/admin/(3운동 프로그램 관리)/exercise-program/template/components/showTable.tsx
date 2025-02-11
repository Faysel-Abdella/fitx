"use client";

import { useState } from "react";
import { DataTable } from "../components/data-table";
import { Pagination } from "../components/pagination";
import { Badge } from "./bagdge";
import {
  TableColumn,
  User,
} from "@/app/admin/(3운동 프로그램 관리)/exercise-program/template/types/type";
import Link from "next/link";
import Image from "next/image";
import DropDown from "@/components/dropDown/DropDown";

// Dummy data for testing (100 users)
const users: User[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  country: index % 2 === 0 ? "US" : "kr", // Using "US" and "kr" as country codes
  plan: index % 2 === 0 ? "PRO PLAN" : "ULTIMATE PLAN",
  hasSubscription: index % 3 === 0,
  action: "자세히보기",
  isNew: index % 5 === 0,
}));

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const columns: TableColumn<User>[] = [
    {
      header: "번호",
      key: "id",
    },
    {
      header: "이름",
      key: "name",
      render: (value, row) => (
        <div className="flex items-center gap-2">
          {value as string}
          {row.isNew && <Badge variant="new">NEW</Badge>}
        </div>
      ),
    },
    {
      header: "국가",
      key: "country",
      render: (value) => {
        if (typeof value === "string") {
          return (
            <Image
              src={`https://flagcdn.com/w20/${value.toLowerCase()}.png`}
              alt={value}
              width={20}
              height={20}
              className="h-5 w-5"
            />
          );
        }
        return null; // or a fallback image if not a string
      },
    },
    {
      header: "플랜",
      key: "plan",
    },
    {
      header: "대회참여 여부",
      key: "hasSubscription",
      render: (value) =>
        value ? <Badge variant="subscription">대회참여</Badge> : null,
    },
    {
      header: "구성하기",
      key: "action",
      render: (value) => (
        <button className="text-[#006BFF] underline underline-offset-1 hover:text-[#006BFF]">
          <Link href={"/admin/exercise-program/template/playerdetails"}>
            {value as string}
          </Link>
        </button>
      ),
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(users.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  return (
    <div className="min-w-full my-6">
      <div className="py-4 px-5 rounded-tl-lg rounded-tr-lg bg-white flex justify-between items-center">
        <h2 className="text-lg font-medium">총 {users.length}명</h2>

        <DropDown
          options={[
            { key: "total", label: "10개씩 보기" },
            { key: "active", label: "20개씩 보기" },
            { key: "inactive", label: "30개씩 보기" },
          ]}
          defaultSelectedKeys="total"
          insideStyles="w-[128px] h-[40px]"
        />
      </div>

      <DataTable columns={columns} data={currentUsers} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <div className="flex justify-center mt-4">
        <button className="min-w-[270px] py-3 px-4 bg-[#006BFF] text-white font-medium rounded-[100px] hover:bg-[#006BFF] transition-colors">
          추가
        </button>
      </div>
    </div>
  );
}
