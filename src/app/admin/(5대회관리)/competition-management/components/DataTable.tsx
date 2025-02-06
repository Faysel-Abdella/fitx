"use client";

import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@heroui/react";
import React, { useState } from "react";
import row4Column1 from "../data/tableData";
import HeaderDropDown from "@/components/HeaderDropDown";
import Modal from "@/components/modals/Modal";
import ViewDetailModal from "./ViewDetailModal";
import CompetitionDetailsModal from "./CompetitionDetailsModal";

const DataTable = () => {
  const {
    isOpen: isDeleteBtn,
    onOpen: onDeleteBtn,
    onOpenChange: onDeleteBtnChange,
  } = useDisclosure();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const viewOptions = [
    {
      key: "10",
      label: "10개씩 보기",
    },
    {
      key: "20",
      label: "20개씩 보기",
    },
    {
      key: "50",
      label: "50개씩 보기",
    },
    {
      key: "100",
      label: "100개씩 보기",
    },
  ];

  const viewOptionsDefault = viewOptions[0].key;

  const [viewValue, setViewValue] = useState(viewOptionsDefault);

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);

  const pages = Math.ceil(row4Column1.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return row4Column1.slice(start, end);
  }, [page, row4Column1, viewValue, rowsPerPage]);

  // Selection Logi
  return (
    <section>
      <div className="bg-white p-10 rounded-[20px] mt-9">
        <header className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-3">
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[100px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <button className="w-[75px] h-[42px] bg-[#9D9D9D] rounded-[5px] text-white">
              삭제
            </button>
          </div>
        </header>
        <article className="mt-[30px] ">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center",
              ],
              td: ["  text-center font-normal text-base text-[#363941] "],
            }}
            bottomContent={
              <div className="flex w-full justify-center  mt-8">
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
              <TableColumn>번호</TableColumn>
              <TableColumn>아이디</TableColumn>
              <TableColumn>이름</TableColumn>
              <TableColumn>휴대폰번호</TableColumn>
              <TableColumn>로그인</TableColumn>
              <TableColumn>가입일</TableColumn>
              <TableColumn>차단 해제</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row, index) => (
                <TableRow key={index} className="border-b-1">
                  <TableCell>{row.number}</TableCell>
                  <TableCell>
                    {<div className="w-[130px] h-[107px] bg-[#FFE8E8]"></div>}
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={onDeleteBtn}
                      className="text-[#006BFF] underline underline-offset-1"
                    >
                      {row.competionName}
                    </button>{" "}
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>
                    <button
                      onClick={onOpen}
                      className="text-[#006BFF] underline underline-offset-1"
                    >
                      {row.memberEngagement}
                    </button>{" "}
                  </TableCell>
                  <TableCell>{row.dDay}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        paddingHorizontal="px-0"
        radius="rounded-[5px]"
      >
        <ViewDetailModal />
      </Modal>
      <Modal
        isOpen={isDeleteBtn}
        onOpenChange={onDeleteBtnChange}
        paddingHorizontal="px-0"
        radius="rounded-[5px]"
      >
        <CompetitionDetailsModal />
      </Modal>
    </section>
  );
};

export default DataTable;
