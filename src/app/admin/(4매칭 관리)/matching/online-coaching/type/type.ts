import type React from "react"

export interface TableColumn<T> {
  key: keyof T
  header: string
  width?: string
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

export interface UserData {
  id: number
  name: string
  phone: string
  userId: string
  requestDate: string
  approvalDate?: string
  status: "pending" | "approved" | "rejected" | "confirmed" | string
}

