"use client"
import { useState } from "react"

interface ToggleRadioProps {
  label?: string
  // If 'checked' is provided, the component acts as a controlled component.
  checked?: boolean 
  onChange?: (checked: boolean) => void
  className?: string
}

export function ToggleRadio({
  label,
  checked,
  onChange,
  className = "",
}: ToggleRadioProps) {
  // Use internal state only when 'checked' prop is undefined (uncontrolled mode)
  const [internalChecked, setInternalChecked] = useState(false)
  const isChecked = checked !== undefined ? checked : internalChecked

  const handleClick = () => {
    const newValue = !isChecked
    if (checked === undefined) {
      setInternalChecked(newValue)
    }
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
      {label && <span className="text-sm text-[#4d4d4d] font-semibold">{label}</span>}
    </label>
  )
}
