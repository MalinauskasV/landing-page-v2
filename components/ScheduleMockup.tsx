import React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, CalendarDays, ArrowLeftRight } from "lucide-react";
import MockSidebar from "@/components/MockSidebar";

interface Shift {
  day: number;
  start: string;
  end: string;
  color: string;
}

interface Employee {
  name: string;
  hours: string;
  avatarColor: string;
  conflict?: boolean;
  shifts: Shift[];
}

const SHIFT_INDIGO = "bg-indigo-100 text-indigo-700 border border-indigo-200";
const SHIFT_VIOLET = "bg-violet-100 text-violet-700 border border-violet-200";
const SHIFT_BLUE = "bg-blue-100 text-blue-700 border border-blue-200";
const SHIFT_SICK = "bg-pink-50 text-pink-500 border border-pink-200";
const SHIFT_CONFLICT = "bg-red-100 text-red-700 border border-red-200";

const groups: { role: string; employees: Employee[] }[] = [
  {
    role: "Barmenas",
    employees: [
      {
        name: "Dovydas Petraitis", hours: "40h / 372 €", avatarColor: "bg-indigo-400",
        shifts: [
          { day: 1, start: "17:00", end: "01:00", color: SHIFT_INDIGO },
          { day: 2, start: "13:00", end: "21:00", color: SHIFT_INDIGO },
          { day: 3, start: "14:00", end: "22:00", color: SHIFT_INDIGO },
          { day: 6, start: "13:00", end: "21:00", color: SHIFT_INDIGO },
        ],
      },
      {
        name: "Edgaras Pakalnis", hours: "16h / 236 €", avatarColor: "bg-emerald-400",
        shifts: [
          { day: 5, start: "LIGA", end: "", color: SHIFT_SICK },
          { day: 6, start: "12:00", end: "20:00", color: SHIFT_INDIGO },
        ],
      },
      {
        name: "Jonas Lukšė", hours: "8h / 88 €", avatarColor: "bg-red-400", conflict: true,
        shifts: [{ day: 1, start: "19:00", end: "03:00", color: SHIFT_CONFLICT }],
      },
      {
        name: "Marius Šimkus", hours: "16h / 174 €", avatarColor: "bg-orange-400",
        shifts: [
          { day: 1, start: "13:00", end: "21:00", color: SHIFT_INDIGO },
          { day: 5, start: "13:00", end: "21:00", color: SHIFT_INDIGO },
        ],
      },
    ],
  },
  {
    role: "Hostas",
    employees: [
      {
        name: "Indrė Stankevičiūtė", hours: "32h / 320 €", avatarColor: "bg-violet-400",
        shifts: [
          { day: 3, start: "14:00", end: "22:00", color: SHIFT_VIOLET },
          { day: 4, start: "14:00", end: "22:00", color: SHIFT_VIOLET },
          { day: 6, start: "LIGA", end: "", color: SHIFT_SICK },
        ],
      },
      {
        name: "Ugnė Kondrotaitė", hours: "16h / 176 €", avatarColor: "bg-pink-400",
        shifts: [
          { day: 2, start: "14:00", end: "22:00", color: SHIFT_VIOLET },
          { day: 5, start: "17:00", end: "01:00", color: SHIFT_VIOLET },
        ],
      },
    ],
  },
  {
    role: "Padavėjas",
    employees: [
      {
        name: "Austėja Vilkaitė", hours: "24h / 228 €", avatarColor: "bg-blue-400",
        shifts: [
          { day: 2, start: "12:00", end: "20:00", color: SHIFT_BLUE },
          { day: 5, start: "12:00", end: "20:00", color: SHIFT_BLUE },
        ],
      },
      {
        name: "Lina Bagdonienė", hours: "16h / 152 €", avatarColor: "bg-cyan-400",
        shifts: [
          { day: 3, start: "17:00", end: "01:00", color: SHIFT_BLUE },
          { day: 6, start: "13:00", end: "21:00", color: SHIFT_BLUE },
        ],
      },
    ],
  },
];

const days = ["P\n25", "A\n26", "T\n27", "K\n28", "P\n29", "Š\n30", "S\n31"];

const alerts = [
  { border: "border-red-500", text: "1 konfliktas grafike — Jonas Lukšė" },
  { border: "border-orange-400", text: "2 atostogų prašymai laukia tvirtinimo" },
  { border: "border-blue-500", text: "Marius Šimkus — viršvalandžiai šią savaitę" },
];

const ShiftCell = ({ shift }: { shift?: Shift }) => {
  if (!shift) return <td className="border-r border-zinc-100 w-[64px]" />;
  return (
    <td className="border-r border-zinc-100 w-[64px] px-1 py-1">
      <div className={cn("rounded-md px-1.5 py-1 text-center text-[9px] font-medium leading-tight", shift.color)}>
        {shift.start === "LIGA" ? (
          <span>LIGA</span>
        ) : (
          <>
            <div>{shift.start}</div>
            <div className="opacity-70">{shift.end}</div>
          </>
        )}
      </div>
    </td>
  );
};

export const ScheduleMockup = () => {
  return (
    <div className="relative w-[760px] h-[540px] select-none">

      {/* Alert card — top left */}
      <div className="absolute -top-6 -left-6 z-20 w-[285px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4 flex flex-col gap-3">
        <p className="text-[12px] font-semibold text-black tracking-wide uppercase font-mono">Aktyvūs įspėjimai</p>
        {alerts.map((alert) => (
          <div key={alert.text} className={cn("border-l-2 pl-2.5", alert.border)}>
            <p className="text-[11px] text-zinc-700 leading-snug">{alert.text}</p>
          </div>
        ))}
      </div>

      {/* Main app card */}
      <div className="absolute inset-x-0 top-[52px] bottom-[52px] bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden flex">
        <MockSidebar active="Grafikas" />

        {/* Schedule grid */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <table className="w-full text-[10px] border-collapse">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="w-[110px] text-left px-3 py-2 text-zinc-400 font-normal" />
                {days.map((d, i) => (
                  <th key={i} className="w-[64px] text-center py-2 text-zinc-600 font-medium border-r border-zinc-100 whitespace-pre leading-tight">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <React.Fragment key={group.role}>
                  <tr><td colSpan={8} className="px-3 py-1 text-[9px] font-semibold tracking-widest text-zinc-400 uppercase bg-zinc-50 border-b border-zinc-100">{group.role}</td></tr>
                  {group.employees.map((emp) => (
                    <tr key={emp.name} className={cn("border-b border-zinc-50", emp.conflict && "bg-red-50")}>
                      <td className="px-2 py-1 border-r border-zinc-100">
                        <div className="flex items-center gap-1.5">
                          <div className={cn("w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white", emp.avatarColor)}>
                            {emp.name.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <div>
                            <div className={cn("font-medium leading-tight", emp.conflict ? "text-red-700" : "text-zinc-800")}>
                              {emp.conflict ? emp.name : emp.name.split(" ")[0]}
                            </div>
                            {emp.conflict ? (
                              <div className="flex items-center gap-1 text-[8px] text-red-600">
                                <AlertTriangle className="w-2.5 h-2.5" />
                                <span>Konfliktas</span>
                              </div>
                            ) : (
                              <div className="text-zinc-400 text-[8px]">{emp.hours}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      {days.map((_, dayIdx) => (
                        <ShiftCell key={dayIdx} shift={emp.shifts.find((s) => s.day === dayIdx + 1)} />
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabelis card — bottom left */}
      <div className="absolute -bottom-4 -left-4 z-20 w-[210px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4">
        <div className="flex items-center gap-2 mb-3">
          <CalendarDays className="w-4 h-4 text-zinc-500" />
          <p className="text-[12px] font-semibold text-black">Tabelis — Birželis</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-[10px] text-zinc-500">Suvesta</p>
            <p className="text-[18px] font-semibold text-blue-600 leading-tight">103 val.</p>
          </div>
          <div>
            <p className="text-[10px] text-zinc-500">Atlyginimas</p>
            <p className="text-[18px] font-semibold text-emerald-600 leading-tight">956 €</p>
          </div>
        </div>
      </div>

      {/* Shift swap card — top right */}
      <div className="absolute -top-6 -right-6 z-20 w-[270px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="w-4 h-4 text-zinc-500" />
          <p className="text-[12px] font-semibold text-black">Pamainos keitimai</p>
        </div>
        {[
          { from: "Marius Šimkus", to: "Domas A.", date: "05-23, št · 14:00–22:00", status: "Patvirtinta", color: "bg-emerald-100 text-emerald-700" },
          { from: "Ieva Petrikaitė", to: "Lina B.", date: "06-02, an · 15:00–23:00", status: "Atmesta", color: "bg-red-100 text-red-600" },
          { from: "Edgaras Pakalnis", to: "Nojus Š.", date: "05-30, št · 11:00–19:00", status: "Patvirtinta", color: "bg-emerald-100 text-emerald-700" },
        ].map((swap, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <div className="flex -space-x-1 shrink-0">
                {[swap.from, swap.to].map((name, ni) => (
                  <div key={ni} className={cn("w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white",
                    ["bg-indigo-400","bg-emerald-400","bg-violet-400","bg-orange-400","bg-pink-400","bg-blue-400"][i * 2 + ni]
                  )}>
                    {name[0]}
                  </div>
                ))}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-medium text-zinc-800 truncate">{swap.from} → {swap.to}</p>
                <p className="text-[9px] text-zinc-400">{swap.date}</p>
              </div>
            </div>
            <span className={cn("shrink-0 text-[9px] font-medium px-2 py-0.5 rounded-full", swap.color)}>{swap.status}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ScheduleMockup;
