"use client"

import { useState } from "react"

interface ToggleRadioProps {
  name?: string
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
}

export function ToggleRadio({
  name,
  label,
  checked: defaultChecked = false,
  onChange,
  className = "",
}: ToggleRadioProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked)

  const handleClick = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange?.(newValue)
  }

  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer ${className}`}>
      <div className="relative flex items-center justify-center" onClick={handleClick}>
        <div
          className={`w-4 h-4 border rounded-full transition-colors
            ${isChecked ? "border-blue-500 bg-white" : "border-gray-300 bg-white"}`}
        >
          {isChecked && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full" />
          )}
        </div>
      </div>
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  )
}

