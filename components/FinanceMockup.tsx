import React from "react";
import { cn } from "@/lib/utils";
import MockSidebar from "@/components/MockSidebar";

const metrics = [
  { label: "Pajamos", value: "257 936 €", delta: "+4,2%", up: true },
  { label: "Atlyginimai", value: "41 969 €", delta: "-2,1%", up: false },
  { label: "Pelnas", value: "215 967 €", delta: "+6,7%", up: true },
];

const chartLines = [
  { label: "Pajamos", color: "stroke-emerald-500", dot: "fill-emerald-500", points: [34, 28, 36, 24, 30, 20, 28, 18, 24] },
  { label: "Atlyginimai", color: "stroke-orange-400", dot: "fill-orange-400", points: [62, 58, 64, 56, 60, 54, 58, 52, 56] },
  { label: "Pelnas", color: "stroke-blue-500", dot: "fill-blue-500", points: [86, 80, 88, 78, 84, 74, 80, 70, 76] },
];

const locations = [
  { name: "Vilnius Užupis", value: "85 823 €", delta: "+6,2%", up: true, spark: "stroke-violet-500", points: [18, 14, 16, 10, 13, 8, 11, 6] },
  { name: "Senamiestis", value: "63 969 €", delta: "+3,1%", up: true, spark: "stroke-emerald-500", points: [16, 13, 15, 11, 14, 9, 12, 7] },
  { name: "Kaunas", value: "56 271 €", delta: "-1,4%", up: false, spark: "stroke-orange-400", points: [10, 13, 11, 15, 12, 16, 14, 17] },
  { name: "Klaipėda", value: "51 873 €", delta: "+2,4%", up: true, spark: "stroke-blue-500", points: [17, 14, 16, 12, 15, 10, 13, 9] },
];

const insights = [
  { border: "border-orange-400", text: "Galima dublikata sąskaita — Mondezz" },
  { border: "border-red-500", text: "Kaina kilo 23% — patikrink tiekėją" },
  { border: "border-emerald-500", text: "Pelningiausia savaitė šį mėnesį" },
];

const laborBars = [62, 78, 54, 86, 70, 58];

const toPolyline = (points: number[], width: number) =>
  points.map((y, i) => `${(i / (points.length - 1)) * width},${y}`).join(" ");

export const FinanceMockup = () => {
  return (
    <div className="relative w-[760px] h-[540px] select-none">

      {/* AI insights card — top right */}
      <div className="absolute -top-6 -right-6 z-20 w-[250px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4 flex flex-col gap-3">
        <p className="text-[12px] font-semibold text-black tracking-wide uppercase font-mono">AI įžvalgos</p>
        {insights.map((insight) => (
          <div key={insight.text} className={cn("border-l-2 pl-2.5", insight.border)}>
            <p className="text-[11px] text-zinc-700 leading-snug">{insight.text}</p>
          </div>
        ))}
      </div>

      {/* Main app card */}
      <div className="absolute inset-x-0 top-[52px] bottom-[52px] bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden flex">
        <MockSidebar active="Apžvalga" />

        <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
          <div>
            <p className="text-[13px] font-semibold text-black">Apžvalga</p>
            <p className="text-[10px] text-zinc-400">Visų restoranų finansinė suvestinė — birželis</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-zinc-100 px-3 py-2">
                <p className="text-[10px] text-zinc-500">{metric.label}</p>
                <div className="flex items-baseline gap-1.5">
                  <p className="text-[17px] font-semibold text-zinc-900 leading-tight">{metric.value}</p>
                  <span className={cn("text-[9px] font-medium", metric.up ? "text-emerald-600" : "text-red-500")}>{metric.delta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Line chart */}
          <div className="rounded-xl border border-zinc-100 p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-zinc-800">Finansinė apžvalga</p>
              <div className="flex items-center gap-2">
                {chartLines.map((line) => (
                  <div key={line.label} className="flex items-center gap-1">
                    <div className={cn("w-1.5 h-1.5 rounded-full", line.dot.replace("fill-", "bg-"))} />
                    <span className="text-[9px] text-zinc-500">{line.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 520 100" className="w-full h-[96px]">
              {[25, 50, 75].map((y) => (
                <line key={y} x1="0" y1={y} x2="520" y2={y} className="stroke-zinc-100" strokeWidth="1" />
              ))}
              {chartLines.map((line) => (
                <g key={line.label}>
                  <polyline points={toPolyline(line.points, 520)} fill="none" className={line.color} strokeWidth="1.5" />
                  {line.points.map((y, i) => (
                    <circle key={i} cx={(i / (line.points.length - 1)) * 520} cy={y} r="2" className={line.dot} />
                  ))}
                </g>
              ))}
            </svg>
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-1.5">
            <p className="text-[11px] font-medium text-zinc-800">Pajamos pagal restoraną</p>
            <div className="grid grid-cols-4 gap-2">
              {locations.map((loc) => (
                <div key={loc.name} className="rounded-xl border border-zinc-100 px-2.5 py-2 flex flex-col gap-1">
                  <p className="text-[9px] text-zinc-500 truncate">{loc.name}</p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-[13px] font-semibold text-zinc-900 leading-tight">{loc.value}</p>
                  </div>
                  <span className={cn("text-[8px] font-medium", loc.up ? "text-emerald-600" : "text-red-500")}>{loc.delta} vs. praėjęs mėn.</span>
                  <svg viewBox="0 0 100 24" className="w-full h-[20px]">
                    <polyline points={toPolyline(loc.points, 100)} fill="none" className={loc.spark} strokeWidth="1.5" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Labor cost card — bottom left */}
      <div className="absolute -bottom-4 -left-4 z-20 w-[210px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4">
        <p className="text-[12px] font-semibold text-black mb-1">Darbo sąnaudų dalis</p>
        <p className="text-[10px] text-zinc-500 mb-2">nuo pajamų, birželis</p>
        <div className="flex items-end justify-between gap-3">
          <p className="text-[28px] font-semibold text-zinc-900 leading-none">23,4%</p>
          <div className="flex items-end gap-1 h-[36px]">
            {laborBars.map((height, i) => (
              <div key={i} className="w-[9px] bg-blue-500 rounded-sm" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FinanceMockup;
