import { ChevronRight } from "lucide-react";
import type { FC, ReactNode } from "react";

interface MenuItemProps {
  icon: ReactNode;
  text: string;
  className?: string;
}

const MenuItem: FC<MenuItemProps> = ({ icon, text, className = "" }) => {
  return (
    <div
      className={`flex items-center justify-between h-[120px] p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex flex-col justify-center gap-3">
        <div className="text-[#4D4D4D]">{icon}</div>
        <span className="text-sm font-medium text-[#4D4D4D]">{text}</span>
      </div>
      <ChevronRight className="w-6 h-6 text-[#4D4D4D]" />
    </div>
  );
};

export default MenuItem;
