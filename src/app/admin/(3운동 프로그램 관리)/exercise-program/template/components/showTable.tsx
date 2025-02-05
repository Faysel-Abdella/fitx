"use client";

import { useState } from "react";
import { DataTable } from "../components/data-table";
import { Pagination } from "../components/pagination";
import { Badge } from "./bagdge";
import { User } from "@/app/admin/(3운동 프로그램 관리)/exercise-program/template/types/type";
import { users } from "../types/data";
import Link from "next/link";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = [
    {
      header: "번호",
      key: "id",
    },
    {
      header: "이름",
      key: "name",
      render: (value: string, row: User) => (
        <div className="flex items-center gap-2">
          {value}
          {row.isNew && <Badge variant="new">NEW</Badge>}
        </div>
      ),
    },
    {
      header: "국가",
      key: "country",
      render: (value: string) => (
        <img
          src={`https://flagcdn.com/w20/${value.toLowerCase()}.png`}
          alt={value}
          className="w-5 h-5"
        />
      ),
    },
    {
      header: "플랜",
      key: "plan",
    },
    {
      header: "대회참여 여부",
      key: "hasSubscription",
      render: (value: boolean) =>
        value ? <Badge variant="subscription">대회참여</Badge> : null,
    },
    {
      header: "구성하기",
      key: "action",
      render: (value: string) => (
        <button className="text-blue-500 underline underline-offset-1 hover:text-blue-600">
          <Link href={"/admin/exercise-program/template/playerdetails"}>{value}</Link>
        </button>
      ),
    },
  ];

  const totalPages = Math.ceil(users.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRowsPerPage = Number.parseInt(e.target.value);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page when changing rows per page
  };

  return (
    <>
      <div className="w-full bg-white mx-auto p-[40px] mt-5 rounded-[20px]">
        <div className="mb-4 flex justify-between items-center ">
          <h2 className="text-lg font-medium">총 {users.length}명</h2>
          <select
            className="p-2 border-1 bg-white rounded-lg"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={10}>10개씩 보기</option>
            <option value={20}>20개씩 보기</option>
            <option value={50}>50개씩 보기</option>
          </select>
        </div>

        <DataTable columns={columns} data={currentUsers} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <div className="flex justify-center mt-5">
        <button className=" py-3 px-4 bg-[#006BFF] text-white font-medium rounded-[100px] w-[270px] hover:bg-[#006BFF] transition-colors">
          추가
        </button>
      </div>
    </>
  );
}
