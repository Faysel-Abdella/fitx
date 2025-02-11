"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import DropDown from "@/components/dropDown/DropDown";

import { TableColumn, UserData } from "./type/type";

interface DataTableProps {
  data: UserData[];
  columns: TableColumn<UserData>[];
  totalItems?: number;
  onApprove?: (id: number) => void;
  onReject?: (id: number) => void;
  pagination?: boolean;
}

const Option = [
  { key: "1", label: "전체 보기" },
  { key: "2", label: "전체 보기" },
  { key: "3", label: "전체 보기" },
];
export function DataTable({
  data,
  columns,
  totalItems = 0,
  pagination = true,
}: DataTableProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  const toggleSelectRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing rows per page
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
          />
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="flex items-center text-sm text-gray-600 bg-white border-1 border-[#DCDCDC] rounded-[5px] cursor-pointer"
          >
            <option value={10}>10개씩 보기</option>
            <option value={20}>20개씩 보기</option>
            <option value={50}>50개씩 보기</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F5F5F5]">
            <tr>
              <th className=" w-12 px-4 py-3">
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={toggleSelectAll}
                  className="rounded border-gray-300"
                />
              </th>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-3 text-center text-sm font-medium text-gray-600 whitespace-nowrap"
                  style={column.width ? { width: column.width } : undefined}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data
              .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
              .map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => toggleSelectRow(row.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  {columns.map((column) => (
                    <td
                      key={`${row.id}-${column.key}`}
                      className="text-center px-4 py-3 text-sm whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      {column.key === "status" ? (
                        <div className="flex justify-center">
                          {row.status === "confirmed" ? (
                            <span className="text-[#006BFF] underline underline-offset-1">
                              확정
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
                                onClick={() => {}}
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
                      ) : (
                        row[column.key as keyof UserData]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex justify-center p-4 border-t">
          <nav className="flex items-center gap-1">
            {/* Previous Button */}
            <button
              className="p-1 disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-400" />
            </button>

            {/* Dynamic Pagination Buttons */}
            {Array.from(
              { length: Math.ceil(totalItems / rowsPerPage) },
              (_, i) => i + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 text-sm rounded ${
                  currentPage === page
                    ? "text-blue-600 font-bold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              className="p-1 disabled:opacity-50"
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, Math.ceil(totalItems / rowsPerPage))
                )
              }
              disabled={currentPage === Math.ceil(totalItems / rowsPerPage)}
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
