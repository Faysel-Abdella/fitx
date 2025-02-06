import type React from "react"

export interface TableColumn {
  key: string
  header: string
  width?: string
  render?: (value: any, row: any) => React.ReactNode
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

