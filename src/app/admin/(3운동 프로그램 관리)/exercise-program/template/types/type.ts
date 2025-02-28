import type { ReactNode } from "react"

export interface TableColumn<T> {
  header: string
  key: keyof T
  render?: (value: T[keyof T], row: T) => ReactNode
}

export interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  className?: string
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export interface User {
  id: number
  name: string
  isNew?: boolean
  country: string
  plan: string
  hasSubscription?: boolean
  action?: string
}

