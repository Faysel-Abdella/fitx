interface NutritionCircleProps {
  value: string;
  label: string;
  color: string;
  unit: string;
}

export function NutritionCircle({
  value,
  label,
  color,
  unit,
}: NutritionCircleProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-[70px] h-[70px] flex items-center justify-center rounded-full border-[5px] `}
        style={{ borderColor: color }}
      >
        <div className="text-center">
          <div className="text-sm font-medium text-textBlack">{value}</div>
          <div className="text-xs">{unit}</div>
        </div>
      </div>
      <span className="mt-2 text-sm text-mainGray">{label}</span>
    </div>
  );
}
