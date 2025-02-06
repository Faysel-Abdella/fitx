"use client";

interface StatusIndicatorProps {
  variant:
    | "active-notification"
    | "inactive"
    | "outline"
    | "active"
    | "text-only";
  text: string;
}

export default function StatusIndicator({
  variant,
  text,
}: StatusIndicatorProps) {
  return (
    <div className="relative inline-flex">
      {/* Main badge container */}
      <div
        className={`
          w-[48px] h-[48px] flex items-center justify-center  font-bold rounded-full
          ${variant === "active-notification" && "bg-[#006BFF] text-white"}
          ${variant === "inactive" && "bg-[#DCDCDC] text-[#A0A0A0]"}
          ${
            variant === "outline" &&
            "border-[2px] border-[#006BFF] text-[#006BFF] bg-transparent"
          }
          ${variant === "active" && "bg-[#006BFF] text-white"}
          ${variant === "text-only" && "bg-inherit text-[#D1D1D1] text-xl "}
        `}
      >
        {text}
        {/* Notification dot for "active-notification" variant */}
        {variant === "active-notification" && (
          <div className="absolute top-[2px] right-[2px] w-3 h-3 rounded-full bg-[#FF3B30]" />
        )}
      </div>
    </div>
  );
}
