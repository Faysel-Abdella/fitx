"use client";
import {
  Checkbox,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React, { useState, useMemo } from "react";
import StatusIndicator from "./Badge";
import rowOneTableData from "@/app/admin/(1선수 관리)/player-management/rowOneTableData";
import Link from "next/link";
import Header from "@/components/Header";
import { HeaderArea } from "./header";
import DropDown from "@/components/dropDown/DropDown";

// Define the status type (if not already defined)
type StatusVariant =
  | "active-notification"
  | "inactive"
  | "outline"
  | "active"
  | "text-only";

// Define WeeklyExerciseStatus interface
interface WeeklyExerciseStatus {
  [day: string]: StatusVariant;
}

// Define a type for each row in the table
interface RowData {
  id: number;
  number: number;
  name: string;
  plan: string;
  weeklyExerciseStatus: WeeklyExerciseStatus;
  exerciseProgram: string;
  viewDetails: string;
}

const PlayerManagement = () => {
  // Pagination Logic
  const [page, setPage] = useState<number>(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(rowOneTableData.length / rowsPerPage);

  // Compute current page data
  const items: RowData[] = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return rowOneTableData.slice(start, end) as RowData[];
  }, [page, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <section className="font-noto">
      <Header title="관리 회원 리스트" />
      <HeaderArea />

      <main className="mt-8 rounded-[20px] bg-white px-5 py-6">
        <div className="flex justify-between px-3">
          <p className="text-[#4D4D4D]  font-bold">총 00명</p>
          <DropDown
            options={[
              { key: "total", label: "총 00명" },
              { key: "active", label: "활성 회원" },
              { key: "inactive", label: "비활성 회원" },
            ]}
            defaultSelectedKeys="total"
            insideStyles=" w-[128px] h-[40px]  "
          />
        </div>
        <article>
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[50px] text-center",
              ],
              td: [
                "px-6 text-center font-normal h-[64] text-base text-[#363941]",
              ],
            }}
            bottomContent={
              <div className="mt-8 flex w-full justify-center">
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
              <TableColumn className="flex py-4 px-4  items-center justify-center">
                <Checkbox
                  onClick={() => {
                    if (allListCheckedPageNumbers.includes(page)) {
                      setAllListCheckedPageNumbers(
                        allListCheckedPageNumbers.filter(
                          (number) => number !== page
                        )
                      );
                      setClickedRowIds(
                        clickedRowIds.filter(
                          (id) => !items.map((item) => item.number).includes(id)
                        )
                      );
                    } else {
                      setClickedRowIds([
                        ...clickedRowIds,
                        ...items.map((item) => item.number),
                      ]);
                      setAllListCheckedPageNumbers([
                        ...allListCheckedPageNumbers,
                        page,
                      ]);
                    }
                  }}
                  className="size-[14px] rounded-[2px] bg-transparent"
                  isSelected={allListCheckedPageNumbers.includes(page)}
                />
              </TableColumn>
              <TableColumn className="py-2 text-center text-grayText">
                번호
              </TableColumn>
              <TableColumn className="py-2 text-center text-grayText">
                이름
              </TableColumn>
              <TableColumn className="py-2 text-center text-grayText">
                플랜
              </TableColumn>
              <TableColumn
                colSpan={7}
                className="py-2 text-center text-grayText"
              >
                주간 운동 현황
              </TableColumn>
              <TableColumn className="py-2 text-center text-grayText">
                운동 프로그램
              </TableColumn>
              <TableColumn className="py-2 text-center text-grayText">
                상세보기
              </TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow
                  key={row.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <TableCell>
                    <Checkbox
                      className="size-[14px]  rounded-[2px] text-center"
                      onClick={() => {
                        if (clickedRowIds.includes(row.number)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.number)
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, row.number]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(row.number)}
                    />
                  </TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.plan}</TableCell>
                  <TableCell colSpan={7}>
                    <div className="flex justify-between items-center">
                      {Object.entries(row.weeklyExerciseStatus).map(
                        ([day, status]) => (
                          <StatusIndicator
                            key={day}
                            variant={status}
                            text={day}
                          />
                        )
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-[#006BFF] font-medium underline cursor-pointer">
                      <Link href="/admin/player-management/weekly-plan">
                        {row.exerciseProgram}
                      </Link>
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-[#006BFF] font-medium underline cursor-pointer">
                      <Link href="/admin/player-management/last">
                        {row.viewDetails}
                      </Link>
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>
    </section>
  );
};

export default PlayerManagement;
