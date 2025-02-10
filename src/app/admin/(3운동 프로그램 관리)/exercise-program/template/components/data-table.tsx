"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User } from "@/app/admin/(3운동 프로그램 관리)/exercise-program/template/types/type";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Checkbox,
} from "@heroui/react";
import HeaderDropDown from "@/components/HeaderDropDown";

import { Badge } from "./bagdge";

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

export function DataTable() {
  const viewOptions = [
    { key: "10", label: "10개씩 보기" },
    { key: "20", label: "20개씩 보기" },
    { key: "50", label: "50개씩 보기" },
    { key: "100", label: "100개씩 보기" },
  ];

  const viewOptionsDefault = viewOptions[0].key;
  const [viewValue, setViewValue] = useState(viewOptionsDefault);
  const [page, setPage] = useState(1);
  const rowsPerPage = parseInt(viewValue);
  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return users.slice(start, end);
  }, [page, rowsPerPage]);

  // State to track selected rows
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Check if all rows on the page are selected
  const allSelected =
    items.length > 0 &&
    items.every((row) => selectedRows.includes(row.id as number));

  // Handle header checkbox click (Select/Deselect all)
  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows(
        selectedRows.filter((id) => !items.some((row) => row.id === id))
      );
    } else {
      setSelectedRows([
        ...selectedRows,
        ...items.map((row) => row.id as number),
      ]);
    }
  };

  // Handle row checkbox click (toggle selection)
  const handleRowSelect = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <section>
      <div className="bg-white p-10 rounded-[20px] mt-9">
        <header className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00명</p>
          <div className="flex items-center gap-3">
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[100px]"
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
          </div>
        </header>
        <article className="mt-[30px]">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center",
              ],
              td: ["text-center font-normal text-base text-[#363941]"],
            }}
            bottomContent={
              <div className="flex w-full justify-center mt-8">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn className="flex justify-center items-center">
                <Checkbox
                  onChange={handleSelectAll}
                  isSelected={allSelected}
                  className="size-[14px] rounded-[2px] bg-transparent"
                />
              </TableColumn>
              <TableColumn>번호</TableColumn>
              <TableColumn>이름</TableColumn>
              <TableColumn>국가</TableColumn>
              <TableColumn>플랜</TableColumn>
              <TableColumn>대회참여 여부</TableColumn>
              <TableColumn>구성하기</TableColumn>
            </TableHeader>

            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className="text-center size-[14px] rounded-[2px]"
                      onChange={() => handleRowSelect(row.id as number)}
                      isSelected={selectedRows.includes(row.id as number)}
                    />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <div></div>
                    {row.name}
                    {row.isNew && <Badge variant="new">NEW</Badge>}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center">
                      <Image
                        src={`https://flagcdn.com/w20/${row.country.toLowerCase()}.png`}
                        alt={row.country}
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{row.plan}</TableCell>
                  <TableCell>
                    {row.hasSubscription && (
                      <Badge variant="subscription">NEW</Badge>
                    )}
                  </TableCell>
                  <TableCell>{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </div>
    </section>
  );
}
