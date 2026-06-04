"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  X,
  Briefcase,
  AlertCircle,
  Download,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Plus,
  ArrowRight,
  Check,
} from "lucide-react";
import ExpenseTrackingCard from "./ExpenseTrackingCard";

const ExpenseTrackingMockup = () => (
  <div className="w-[760px] bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-6">
    <div className="flex justify-between items-center">
      <p className="text-[19px] font-medium text-black">Darbo laiko tabelis</p>
      <div className="w-9 h-9 bg-[#E8EDF3] rounded-full flex items-center justify-center">
        <X className="w-4 h-4 text-black" />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      {[
        { label: "Tomas Paulauskas", cat: "Virėjas", status: "Patvirtinta", amount: "160 val.", color: "bg-emerald-500" },
        { label: "Inga Žukauskaitė", cat: "Padavėja", status: "Vėlavimas", amount: "148 val.", color: "bg-orange-500", checked: true },
        { label: "Mantas Grigas", cat: "Baristas", status: "Patvirtinta", amount: "172 val.", color: "bg-emerald-500" },
        { label: "Rūta Kazlauskienė", cat: "Virėja", status: "Laukiama", amount: "155 val.", color: "bg-blue-500" },
        { label: "Paulius Stankus", cat: "Vadybininkas", status: "Patvirtinta", amount: "180 val.", color: "bg-emerald-500" },
      ].map((row, i) => (
        <div key={i} className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-3 w-[250px]">
            <div className={cn("w-5 h-5 rounded border flex items-center justify-center", row.checked ? "bg-blue-600 border-blue-600" : "bg-slate-50 border-slate-200")}>
              {row.checked && <Check className="w-3 h-3 text-white" />}
            </div>
            <span className="text-[13px] text-zinc-900">{row.label}</span>
          </div>
          <div className="flex items-center gap-2 w-[150px]">
            <div className="w-4 h-4 bg-zinc-200 rounded" />
            <span className="text-[13px] text-zinc-900">{row.cat}</span>
          </div>
          <div className="w-[100px]">
            <div className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium w-fit border",
              row.status === "Approved" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
              row.status === "Flagged" ? "bg-orange-50 text-orange-700 border-orange-200" :
              "bg-blue-50 text-blue-700 border-blue-200")}>
              <div className={cn("w-2 h-2 rounded-full", row.color)} />
              {row.status}
            </div>
          </div>
          <span className="text-[13px] font-medium text-zinc-900 w-[80px] text-right">{row.amount}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
      <div className="flex items-center gap-2 text-orange-600">
        <AlertCircle size={18} />
        <span className="text-[15px] font-medium">1 neatitikimas</span>
      </div>
      <button className="bg-blue-600 text-white px-10 py-2.5 rounded-full text-[15px] font-medium">
        Peržiūrėti
      </button>
    </div>
  </div>
);

const BudgetOversightMockup = () => (
  <div className="w-[760px] bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-6">
    <div className="flex justify-between items-center">
      <p className="text-[19px] font-medium text-black">Biudžeto kontrolė</p>
      <div className="w-9 h-9 bg-[#E8EDF3] rounded-full flex items-center justify-center">
        <X className="w-4 h-4 text-black" />
      </div>
    </div>
    <div className="flex flex-col gap-4">
      {[
        { dept: "Marketing", spent: "$43,789", total: "$49,700", pct: 87, color: "bg-purple-500" },
        { dept: "Design", spent: "$24,713", total: "$38,300", pct: 64, color: "bg-emerald-500" },
        { dept: "Sales", spent: "$11,244", total: "$29,800", pct: 38, color: "bg-rose-500" },
        { dept: "Finance", spent: "$42,700", total: "$44,300", pct: 96, color: "bg-blue-500", active: true },
        { dept: "HR", spent: "$13,300", total: "$20,900", pct: 63, color: "bg-orange-500" },
        { dept: "Ops", spent: "$16,870", total: "$31,100", pct: 54, color: "bg-zinc-500" },
      ].map((row, i) => (
        <div key={i} className={cn("flex items-center justify-between py-2 px-3 rounded-xl transition-all", row.active && "bg-slate-50 ring-1 ring-slate-200")}>
          <div className="flex items-center gap-3 w-[180px]">
            <div className={cn("w-4 h-4 rounded-[4px]", row.color)} />
            <span className="text-[16px] font-medium text-zinc-900">{row.dept}</span>
          </div>
          <span className="text-[13px] text-zinc-500 w-[150px]">{row.spent} / {row.total}</span>
          <div className="flex items-center gap-3 flex-1">
            <div className="h-3 bg-zinc-100 rounded-full flex-1 overflow-hidden">
              <div className={cn("h-full rounded-full", row.color)} style={{ width: `${row.pct}%` }} />
            </div>
            <span className="text-[13px] font-medium text-zinc-900 w-10">{row.pct}%</span>
          </div>
          <MoreHorizontal className="text-zinc-300 ml-4" size={18} />
        </div>
      ))}
    </div>
  </div>
);

const ReportsMockup = () => (
  <div className="w-[760px] bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-8">
    <div className="flex justify-between items-center">
      <p className="text-[19px] font-medium text-black">Jūsų ataskaitos</p>
      <div className="flex gap-2">
        <div className="w-9 h-9 bg-[#E8EDF3] rounded-full flex items-center justify-center opacity-50">
          <ChevronLeft className="w-5 h-5 text-black" />
        </div>
        <div className="w-9 h-9 bg-[#E8EDF3] rounded-full flex items-center justify-center">
          <ChevronRight className="w-5 h-5 text-black" />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {[
        { title: "Darbo kaštai", report: "Darbo kaštų ataskaita - Q2", date: "Liepa 18, 2025", color: "bg-purple-500" },
        { title: "Kategorijų analizė", report: "Kaštų paskirstymas - Birželis 2025", date: "Liepa 3, 2025", color: "bg-blue-500" },
      ].map((card, i) => (
        <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className={cn("w-2.5 h-2.5 rounded-full", card.color)} />
            <span className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider">{card.title}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[17px] font-medium text-zinc-900">{card.report}</p>
            <p className="text-[13px] text-zinc-400">{card.date}</p>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <MoreHorizontal size={16} className="text-zinc-400" />
            </div>
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <Download size={16} className="text-zinc-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center">
      <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full text-[15px] font-medium">
        Generuoti ataskaitą <Plus size={16} />
      </button>
    </div>
  </div>
);

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: "feature-1",
      navLabel: "Tabeliai ir darbo laikas",
      description: (<><strong className="font-semibold">Stebėkite kiekvieno darbuotojo darbo laiką</strong> realiuoju laiku. EventCast automatiškai surenka duomenis, žymi neatitikimus ir paruošia tabelius patvirtinimui — be Excel ir rankinių skaičiavimų.</>),
      illustration: <ExpenseTrackingCard />,
    },
    {
      id: "feature-2",
      navLabel: "Išmani biudžeto kontrolė",
      description: (<><strong className="font-semibold">Nustatykite lanksčius biudžetus</strong> komandai, skyriams ar vietoms. EventCast seka sąnaudas realiuoju laiku, siunčia ankstyvus įspėjimus ir padeda išlikti plane be spėlionių.</>),
      illustration: <BudgetOversightMockup />,
    },
    {
      id: "feature-3",
      navLabel: "Ataskaitos vienu mygtuku",
      description: (<><strong className="font-semibold">Generuokite ataskaitas per sekundes</strong> — nuo darbo kaštų iki kategorijų analizės. Eksportuokite payroll duomenis arba leiskite EventCast automatiškai generuoti įžvalgas.</>),
      illustration: <ReportsMockup />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const cards = sectionRef.current.querySelectorAll(".feature-card");
      const midpoint = window.innerHeight / 2;
      cards.forEach((card, index) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        if (rect.top <= midpoint && rect.bottom > midpoint) {
          setActiveFeature(index);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-[120px] px-10 flex flex-col items-center gap-16 overflow-visible" id="features">
      <div className="w-full max-w-[1600px] flex flex-row items-start gap-4">
        <div className="flex-1 hidden lg:block" />
        <div className="flex-[2] flex flex-col gap-6">
          <h2 className="text-[58px] leading-[1.2] font-normal tracking-[-2.9px] text-black max-w-[780px]">
            Viskas vienoje platformoje — nuo tabelių iki sąskaitų
          </h2>
        </div>
      </div>

      <div className="w-full max-w-[1600px] flex flex-row items-start gap-4">
        <div className="flex-1 sticky top-[200px] h-fit hidden lg:flex flex-col gap-2">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={cn("flex items-center gap-2 py-1 transition-all duration-300 cursor-pointer", activeFeature === index ? "opacity-100" : "opacity-40")}
              onClick={() => {
                const el = document.getElementById(feature.id);
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {activeFeature === index && <ArrowRight className="w-4 h-4 text-black" />}
              </div>
              <p className="text-[21px] font-normal text-black whitespace-nowrap">{feature.navLabel}</p>
            </div>
          ))}
        </div>

        <ul className="flex-[2] flex flex-col gap-12 w-full">
          {features.map((feature) => (
            <li key={feature.id} id={feature.id} className="feature-card flex flex-col w-full min-h-[80vh]" style={{ scrollMarginTop: "120px" }}>
              {feature.description === null ? (
                <div className="w-full rounded-2xl overflow-hidden">
                  {feature.illustration}
                </div>
              ) : (
                <>
                  <div className="w-full h-[780px] bg-[#E8EDF3] rounded-2xl flex items-center justify-center overflow-hidden relative">
                    {feature.illustration}
                  </div>
                  <div className="w-full max-w-[580px] py-10">
                    <p className="text-[21px] leading-[1.4] text-[#222222]">{feature.description}</p>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
