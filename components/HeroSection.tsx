import React from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

const heroMetrics = [
  { label: "Pajamos", value: "257 936 €", delta: "+4,2%", up: true },
  { label: "Atlyginimai", value: "41 969 €", delta: "-2,1%", up: false },
  { label: "Pelnas", value: "215 967 €", delta: "+6,7%", up: true },
];

const heroChartLines = [
  { color: "stroke-emerald-500", points: [44, 36, 46, 32, 40, 26, 36, 24, 30] },
  { color: "stroke-orange-400", points: [78, 72, 80, 70, 76, 66, 72, 64, 70] },
  { color: "stroke-blue-500", points: [108, 100, 110, 98, 104, 92, 100, 88, 94] },
];

const toPolyline = (points: number[], width: number) =>
  points.map((y, i) => `${(i / (points.length - 1)) * width},${y}`).join(" ");

const HeroDashboardCard = () => (
  <div className="w-full h-[360px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col text-left">
    <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-100">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">E</span>
        </div>
        <span className="text-[12px] font-semibold text-black">EventCast — Apžvalga</span>
      </div>
      <div className="flex items-center gap-1.5">
        {["Vilnius Užupis", "Senamiestis", "Kaunas", "Klaipėda"].map((location, i) => (
          <span key={location} className={cn("text-[10px] px-2.5 py-1 rounded-full", i === 0 ? "bg-zinc-100 font-medium text-black" : "text-zinc-500")}>
            {location}
          </span>
        ))}
      </div>
    </div>
    <div className="px-5 pt-4 grid grid-cols-3 gap-3">
      {heroMetrics.map((metric) => (
        <div key={metric.label} className="rounded-xl border border-zinc-100 px-4 py-3">
          <p className="text-[11px] text-zinc-500">{metric.label}</p>
          <div className="flex items-baseline gap-2">
            <p className="text-[20px] font-semibold text-zinc-900 leading-tight">{metric.value}</p>
            <span className={cn("text-[10px] font-medium", metric.up ? "text-emerald-600" : "text-red-500")}>{metric.delta}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="px-5 py-4 flex-1">
      <svg viewBox="0 0 840 130" className="w-full h-full" preserveAspectRatio="none">
        {[32, 64, 96].map((y) => (
          <line key={y} x1="0" y1={y} x2="840" y2={y} className="stroke-zinc-100" strokeWidth="1" />
        ))}
        {heroChartLines.map((line, i) => (
          <polyline key={i} points={toPolyline(line.points, 840)} fill="none" className={line.color} strokeWidth="2" />
        ))}
      </svg>
    </div>
  </div>
);

export const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      title = "Vienas darbo valdymo įrankis. Visam restoranui.",
      description = "EventCast padeda restoranams valdyti darbuotojus, grafikus, dokumentus, komunikaciją ir operacijas vienoje platformoje — be Excel ir chaoso.",
      primaryCtaText = "Gauti demo",
      primaryCtaHref = "/contact/sales",
      secondaryCtaText = "Sužinoti daugiau",
      secondaryCtaHref = "/contact",
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className="relative w-full h-[calc(100vh-104px)] min-h-[600px] flex flex-col justify-end items-center overflow-hidden bg-black text-white pb-[120px] px-10 rounded-[24px] mx-[20px] mt-[84px] mb-[20px]"
        style={{ width: "calc(100% - 40px)" }}
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video
            src="/media/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center gap-8 max-w-[1600px] w-full">
          <div className="flex flex-col items-center gap-4 text-center max-w-[900px]">
            <h1 data-animate className="text-[80px] leading-[88px] font-light tracking-[-4px] font-sans text-white">
              {title}
            </h1>
            <p data-animate data-delay="1" className="text-[21px] leading-[29.4px] font-normal text-white/90 max-w-[660px]">
              {description}
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 w-full">
            <a
              data-animate
              data-delay="2"
              href={primaryCtaHref}
              className="group relative flex items-center justify-center h-[58.6px] px-[34px] bg-white rounded-[64px] transition-all duration-300 hover:opacity-[0.856]"
            >
              <span className="text-[19px] font-normal tracking-[-0.19px] text-black">
                {primaryCtaText}
              </span>
            </a>

            <a
              data-animate
              data-delay="3"
              href={secondaryCtaHref}
              className="group relative flex items-center justify-center h-[58.6px] px-[34px] bg-white/15 backdrop-blur-[16px] rounded-[64px] transition-all duration-300 hover:opacity-[0.856]"
            >
              <span className="text-[19px] font-normal tracking-[-0.19px] text-white">
                {secondaryCtaText}
              </span>
            </a>
          </div>

          {/* Dashboard preview — lower half clipped by the hero edge */}
          <div data-animate data-delay="4" className="hidden lg:block w-full max-w-[900px] mt-6 -mb-[300px]">
            <HeroDashboardCard />
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
