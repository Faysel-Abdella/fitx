import type React from "react"

interface BadgeProps {
  variant?: "new" | "subscription"
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = "new", children, className = "" }: BadgeProps) {
  const variants = {
    new: "bg-red-50 text-red-600 border-red-100",
    subscription: "bg-emerald-50 text-emerald-600 border-emerald-100",
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

