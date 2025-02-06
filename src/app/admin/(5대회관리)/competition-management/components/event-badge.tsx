interface EventBadgeProps {
    daysLeft: number
  }
  
  export function EventBadge({ daysLeft }: EventBadgeProps) {
    return (
      <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium bg-[#E5FF7D] text-black rounded-full">
        D-{daysLeft}
      </span>
    )
  }
  
  