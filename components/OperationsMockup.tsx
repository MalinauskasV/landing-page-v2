import React from "react";
import { cn } from "@/lib/utils";
import { Truck, Package, TrendingDown, TrendingUp } from "lucide-react";
import MockSidebar from "@/components/MockSidebar";

const temperatureChecks = [
  { name: "Šaldytuvas virtuvė", location: "Klaipėda", range: "+2…+8 °C" },
  { name: "Šaldiklis", location: "Klaipėda", range: "-22…-16 °C" },
  { name: "Šaldytuvas", location: "Užupis", range: "+2…+8 °C" },
  { name: "Šaldytuvas", location: "Senamiestis", range: "+2…+8 °C" },
  { name: "Šaldytuvas", location: "Kaunas", range: "+2…+8 °C" },
];

const kanbanColumns = [
  { label: "Nauji", orders: [{ source: "Wolt", amount: "24,90 €" }, { source: "Bolt", amount: "18,40 €" }] },
  { label: "Ruošiama", orders: [{ source: "Bolt", amount: "32,60 €" }] },
  { label: "Paruošta", orders: [{ source: "Wolt", amount: "41,20 €" }] },
  { label: "Atsiimta", orders: [{ source: "Wolt", amount: "15,80 €" }] },
];

const warehouseMetrics = [
  { value: "30", label: "SKU" },
  { value: "6", label: "kategorijos" },
  { value: "538.72 €", label: "atsargų vertė" },
  { value: "9", label: "žemo kiekio" },
];

const warehouseProducts = [
  { name: "Alyvuogių aliejus 5L", price: "38,40 €", up: true },
  { name: "Mocarela 1kg", price: "6,90 €", up: false },
  { name: "Jautienos išpjova", price: "21,30 €", up: true },
];

export const OperationsMockup = () => {
  return (
    <div className="relative w-[760px] h-[540px] select-none">

      {/* Deliveries kanban card — top right */}
      <div className="absolute -top-6 -right-6 z-20 w-[310px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-zinc-500" />
          <p className="text-[12px] font-semibold text-black">Pristatymai</p>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {kanbanColumns.map((column) => (
            <div key={column.label} className="flex flex-col gap-1.5">
              <p className="text-[8px] font-semibold tracking-widest text-zinc-400 uppercase">{column.label}</p>
              {column.orders.map((order, i) => (
                <div key={i} className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-1.5 flex flex-col gap-1">
                  <span className={cn("text-[8px] font-semibold text-white px-1.5 py-0.5 rounded-full w-fit", order.source === "Wolt" ? "bg-blue-600" : "bg-emerald-500")}>
                    {order.source}
                  </span>
                  <span className="text-[9px] font-medium text-zinc-800">{order.amount}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main app card */}
      <div className="absolute inset-x-0 top-[52px] bottom-[52px] bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden flex">
        <MockSidebar active="Maisto sauga" />

        {/* Temperature checks */}
        <div className="flex-1 p-4 flex flex-col gap-2 border-r border-zinc-100 overflow-hidden">
          <div className="mb-1">
            <p className="text-[13px] font-semibold text-black">Maisto sauga — HACCP</p>
            <p className="text-[10px] text-zinc-400">Šios dienos temperatūrų patikros</p>
          </div>
          {temperatureChecks.map((check, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl border border-zinc-100 px-3 py-2">
              <div>
                <p className="text-[11px] font-medium text-zinc-800 leading-tight">{check.name}</p>
                <p className="text-[9px] text-zinc-400">{check.location} · {check.range}</p>
              </div>
              <button className="text-[9px] font-medium text-zinc-700 border border-zinc-200 rounded-full px-2.5 py-1">
                Pridėti datą
              </button>
            </div>
          ))}
        </div>

        {/* Quick check form */}
        <div className="w-[200px] shrink-0 p-4 bg-zinc-50/50 flex flex-col justify-end gap-3">
          <p className="text-[12px] font-semibold text-black">Greita patikra</p>
          <div className="flex flex-col gap-1">
            <p className="text-[9px] text-zinc-500">Įranga</p>
            <div className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-[10px] text-zinc-800">Šaldytuvas virtuvė</div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[9px] text-zinc-500">Temperatūra</p>
            <div className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-[10px] text-zinc-800 flex items-center justify-between">
              <span>4,2</span>
              <span className="text-zinc-400">°C</span>
            </div>
          </div>
          <button className="bg-black text-white text-[10px] font-medium rounded-full py-2">
            Išsaugoti įrašą
          </button>
          <p className="text-[9px] text-zinc-400">Paskutinė patikra — 08:15, norma</p>
        </div>
      </div>

      {/* Warehouse card — bottom left */}
      <div className="absolute -bottom-4 -left-4 z-20 w-[240px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-zinc-500" />
          <p className="text-[12px] font-semibold text-black">Sandėlis</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {warehouseMetrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-[14px] font-semibold text-zinc-900 leading-tight">{metric.value}</p>
              <p className="text-[9px] text-zinc-500">{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-100 pt-2 flex flex-col gap-1.5">
          {warehouseProducts.map((product) => (
            <div key={product.name} className="flex items-center justify-between gap-2">
              <p className="text-[10px] text-zinc-700 truncate">{product.name}</p>
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[10px] font-medium text-zinc-900">{product.price}</span>
                {product.up
                  ? <TrendingUp className="w-3 h-3 text-red-500" />
                  : <TrendingDown className="w-3 h-3 text-emerald-600" />}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default OperationsMockup;
