import React from "react";
import { cn } from "@/lib/utils";
import {
  LayoutGrid, Calendar, Users, CheckSquare, Truck,
  MessageCircle, FileText, Wrench, UtensilsCrossed, ShieldCheck,
} from "lucide-react";

const MAIN_ITEMS = [
  { icon: LayoutGrid, label: "Apžvalga" },
  { icon: Calendar, label: "Grafikas" },
  { icon: Users, label: "Personalas" },
  { icon: CheckSquare, label: "Užduotys" },
  { icon: Truck, label: "Pristatymai" },
];

const SECONDARY_ITEMS = [
  { icon: MessageCircle, label: "Pokalbiai", badge: "31" },
  { icon: FileText, label: "Dokumentai" },
  { icon: Wrench, label: "Įranga" },
  { icon: UtensilsCrossed, label: "Meniu" },
  { icon: ShieldCheck, label: "Maisto sauga" },
];

interface MockSidebarProps {
  active: string;
}

export const MockSidebar = ({ active }: MockSidebarProps) => (
  <div className="w-[140px] shrink-0 border-r border-zinc-100 flex flex-col py-3 px-2 gap-0.5">
    <div className="flex items-center gap-2 px-2 py-1.5 mb-2">
      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
        <span className="text-white text-[8px] font-bold">E</span>
      </div>
      <span className="text-[11px] font-semibold text-black">EventCast</span>
    </div>
    {MAIN_ITEMS.map(({ icon: Icon, label }) => (
      <div key={label} className={cn("flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px]", label === active ? "bg-zinc-100 font-medium text-black" : "text-zinc-500")}>
        <Icon className="w-3.5 h-3.5 shrink-0" />
        {label}
      </div>
    ))}
    <div className="my-1 border-t border-zinc-100" />
    {SECONDARY_ITEMS.map(({ icon: Icon, label, badge }) => (
      <div key={label} className={cn("flex items-center justify-between px-2 py-1.5 rounded-lg text-[11px]", label === active ? "bg-zinc-100 font-medium text-black" : "text-zinc-500")}>
        <div className="flex items-center gap-2">
          <Icon className="w-3.5 h-3.5 shrink-0" />
          {label}
        </div>
        {badge && <span className="bg-blue-500 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-medium">{badge}</span>}
      </div>
    ))}
  </div>
);

export default MockSidebar;
