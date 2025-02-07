"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { date: "12.30", weight: 140 },
  { date: "12.31", weight: 100 },
  { date: "1.1", weight: 150 },
  { date: "1.2", weight: 125 },
  { date: "1.3", weight: 100 },
  { date: "1.4", weight: 130 },
  { date: "1.5", weight: 130 },
];

export default function WeightChart() {
  const lastWeight = data[data.length - 1].weight;

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            tickMargin={10} // extra padding on top of x-axis labels
          />
          <YAxis
            domain={[50, 175]}
            ticks={[50, 75, 100, 125, 150, 175]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            tickFormatter={(value) => `${value}kg`}
            tickMargin={10}
          />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#01A4F8"
            strokeWidth={2}
            dot={{ r: 4, fill: "white", stroke: "#01A4F8", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
          <ReferenceLine
            y={lastWeight}
            stroke="#01A4F8"
            strokeDasharray="3 3"
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
