import Image from "next/image"
import type React from "react"

interface BadgeProps {
  variant?: "new" | "subscription"
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = "new", children, className = "" }: BadgeProps) {
  const variants = {
    new: " text-[#F53636] ",
    subscription: "bg-[#E9F8F4] text-[#22B892] ",
  }

  return (
    <span
      className={`inline-flex  gap-1 items-center px-2 py-1 text-xs font-medium rounded-[4px]  ${variants[variant]} ${className}`}
    >
      {variant==="subscription" &&<Image src={'/cup.svg'} alt="cup" width={11} height={11}/>}
      {children}
    </span>
  )
}

