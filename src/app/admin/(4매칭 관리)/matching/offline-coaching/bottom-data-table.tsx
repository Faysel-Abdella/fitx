"use client";

import { useState } from "react";

import { TableColumn, UserData } from "./type/type";
import { columns2 } from "./type/data";

interface DataTableProps {
  data: UserData[];
  columns: TableColumn<UserData>[];

  onApprove?: (id: number) => void;
  onReject?: (id: number) => void;
}

export function BottomDataTable({ data }: DataTableProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

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

  return (
    <div className="w-full bg-white p-[40px] rounded-[20px] flex flex-col space-y-5">
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
              {columns2.map((column) => (
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
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleSelectRow(row.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                {columns2.map((column) => (
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
    </div>
  );
}
