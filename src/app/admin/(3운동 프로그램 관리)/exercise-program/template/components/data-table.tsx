"use client"

import React from "react"
import type { TableProps } from "@/app/admin/(3운동 프로그램 관리)/exercise-program/template/types/type"

export function DataTable<T extends { id: number | string }>({ columns, data, className = "" }: TableProps<T>) {
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key.toString()} className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={`${row.id}-${column.key.toString()}`}
                    className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap"
                  >
                    {renderCellContent(column, row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function renderCellContent<T>(column: TableProps<T>["columns"][number], row: T): React.ReactNode {
  if (column.render) {
    return column.render(row[column.key as keyof T], row)
  }

  const value = row[column.key as keyof T]

  if (React.isValidElement(value)) {
    return value
  }

  if (typeof value === "object" && value !== null) {
    return JSON.stringify(value)
  }

  return String(value)
}

