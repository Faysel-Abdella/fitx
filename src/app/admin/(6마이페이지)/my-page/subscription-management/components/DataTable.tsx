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
import React, { useState } from "react";
import tableData from "../data/tableData";
import HeaderDropDown from "@/components/HeaderDropDown";
import DropDown from "@/components/dropDown/DropDown";

const Options1 = [
  { key: "1", label: "전체 보기" },
  { key: "2", label: "전체 보기" },
  { key: "3", label: "전체 보기" },
];

const DataTable = () => {
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
  const pages = Math.ceil(tableData.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return tableData.slice(start, end);
  }, [page, rowsPerPage]);

  // State to track selected rows
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Check if all rows on the page are selected
  const allSelected =
    items.length > 0 && items.every((row) => selectedRows.includes(row.number));

  // Handle header checkbox click (Select/Deselect all)
  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows(
        selectedRows.filter((id) => !items.some((row) => row.number === id))
      );
    } else {
      setSelectedRows([...selectedRows, ...items.map((row) => row.number)]);
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
          <p className="font-bold text-mainBlack">결제 및 정산 내역</p>
          <div className="flex items-center gap-3">
            <DropDown
              options={Options1}
              defaultSelectedKeys={Options1[0].key}
              selectStyles="w-[124px] bg-white"
            />
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
              <TableColumn>플랜</TableColumn>
              <TableColumn>금액</TableColumn>
              <TableColumn>발생 시간</TableColumn>
              <TableColumn>구분</TableColumn>
            </TableHeader>

            <TableBody>
              {items.map((row) => (
                <TableRow key={row.number} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className="text-center size-[14px] rounded-[2px]"
                      onChange={() => handleRowSelect(row.number)}
                      isSelected={selectedRows.includes(row.number)}
                    />
                  </TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.flan}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.occuurenceTime}</TableCell>
                  <TableCell>{row.division}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </div>
    </section>
  );
};

export default DataTable;
