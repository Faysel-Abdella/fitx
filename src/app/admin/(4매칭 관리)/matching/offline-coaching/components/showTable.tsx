'use client'
import { DataTable } from "../components/data-table"
import { columns, sampleData } from "../type/data"



export default function ShowTable() {
  const handleApprove = (id: number) => {
    console.log("Approved:", id)
  }

  const handleReject = (id: number) => {
    console.log("Rejected:", id)
  }

  return (
    <div className="min-w-full mx-auto p-4">
      <DataTable
        data={sampleData}
        columns={columns}
        totalItems={100}
        onApprove={handleApprove}
        onReject={handleReject}
        
      />
    </div>
  )
}

