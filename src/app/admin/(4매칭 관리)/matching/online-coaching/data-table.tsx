"use client";

import DropDown from "@/components/dropDown/DropDown";
import TextInput from "@/components/inputs/Input";
import Modal from "@/components/modals/Modal";
import { useDisclosure } from "@heroui/react";
import { useState } from "react";

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

import { sampleData } from "./type/data";
import React from "react";

const Option = [
  { key: "1", label: "전체 보기" },
  { key: "2", label: "전체 보기" },
  { key: "3", label: "전체 보기" },
];
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
  const pages = Math.ceil(sampleData.length / rowsPerPage);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Define onClose function for modal
  const onClose = () => onOpenChange();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return sampleData.slice(start, end);
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
    <div className="w-full bg-white p-[40px] rounded-[20px] flex flex-col space-y-5">
      {/* Header */}
      <div className=" flex items-center justify-between">
        <p className="text-[#4D4D4D] font-bold">총 00건</p>
        <div className="flex gap-4">
          <DropDown
            options={Option}
            defaultSelectedKeys={Option[0].key}
            selectStyles="w-[124px] bg-white"
            selectContainerStyles="w-full"
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
      </div>

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
            <TableColumn>휴대전화번호</TableColumn>
            <TableColumn>아이디</TableColumn>
            <TableColumn>신청 일시</TableColumn>
            <TableColumn>승인 일시</TableColumn>
            <TableColumn>상태</TableColumn>
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
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.requestDate}</TableCell>
                <TableCell>{row.approvalDate}</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    {row.status === "confirmed" ? (
                      <span className="text-[#006BFF] underline underline-offset-1">
                        확정(매칭)
                      </span>
                    ) : row.status === "rejected" ? (
                      <span className="text-[#BE5F5F]">거절</span>
                    ) : null}
                    {row.status === "pending" && (
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => {}}
                          className="px-3 py-1 border-1  border-[#4D4D4D] text-sm text-white bg-[#4D4D4D] rounded-[5px] "
                        >
                          승인
                        </button>
                        <button
                          onClick={onOpen}
                          className="px-3 py-1 text-sm border-1 border-[#4D4D4D] text-black rounded-[5px] hover:bg-gray-50"
                        >
                          거절
                        </button>
                      </div>
                    )}
                    {row.status === "Ends" && (
                      <span className="text-black">매칭 종료</span>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        paddingHorizontal="px-0"
        radius="rounded-[5px]"
      >
        {/* <ModalContent /> */}

        <div className="bg-white rounded-[20px] h-fit w-full  flex flex-col gap-5 justify-between overflow-hidden">
          {/* Modal Content */}
          <div className="flex flex-col space-y-5 p-[16px]">
            <div className="flex flex-col  justify-center items-center gap-[4px] flex-grow">
              <p className="text-[#4D4D4D] text-[20px] font-medium">거절</p>
              <p className="text-[#4D4D4D] text-[16px]">
                거절 사유를 입력해주세요.
              </p>
            </div>
            <div className="w-[95%] flex   mx-auto">
              <TextInput
                placeholder="입력"
                type="text"
                containerStyle="bg-#F2F2F2"
              />
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex   w-full border-t border-[#DCDCDC] divide-x divide-[#DCDCDC]">
            <button className="w-1/2 py-[11px] text-[#0A84FF] text-center">
              취소
            </button>
            <button
              className="w-1/2 py-[11px] text-[#0A84FF] text-center"
              onClick={onClose}
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
