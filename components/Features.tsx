"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import ScheduleMockup from "@/components/ScheduleMockup";
import FinanceMockup from "@/components/FinanceMockup";
import OperationsMockup from "@/components/OperationsMockup";

const MockupScaler = ({ children }: { children: React.ReactNode }) => (
  <div className="scale-[0.35] sm:scale-[0.6] md:scale-[0.8] lg:scale-75 xl:scale-95 2xl:scale-100">
    {children}
  </div>
);

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: "feature-1",
      navLabel: "Grafikai ir darbuotojai",
      bgColor: "bg-[#E8EDF3]",
      description: (<><strong className="font-semibold">Sudarykite grafikus be konfliktų</strong> — EventCast automatiškai aptinka persidengimus ir viršvalandžius, darbuotojai patys siūlo pamainų mainus, o tabeliai ir atlyginimai susiskaičiuoja patys.</>),
      illustration: <MockupScaler><ScheduleMockup /></MockupScaler>,
    },
    {
      id: "feature-2",
      navLabel: "Finansai ir analitika",
      bgColor: "",
      description: (<><strong className="font-semibold">Matykite visų restoranų finansus realiuoju laiku</strong> — pajamos, atlyginimai ir pelnas pagal lokaciją, darbo sąnaudų dalis, o AI įžvalgos pastebi dublikatus ir kainų šuolius anksčiau už jus.</>),
      illustration: <MockupScaler><FinanceMockup /></MockupScaler>,
    },
    {
      id: "feature-3",
      navLabel: "Operacijos",
      bgColor: "bg-[#E8EDF3]",
      description: (<><strong className="font-semibold">Valdykite kasdienes operacijas vienoje vietoje</strong> — HACCP temperatūrų žurnalas, Wolt ir Bolt užsakymai tiesiai į Syrve POS, sandėlio likučiai ir žemo kiekio įspėjimai.</>),
      illustration: <MockupScaler><OperationsMockup /></MockupScaler>,
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
            Viskas vienoje platformoje — nuo grafikų iki sąskaitų
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
              <div className={cn("w-full h-[300px] sm:h-[460px] md:h-[600px] lg:h-[640px] xl:h-[780px] rounded-2xl flex items-center justify-center overflow-hidden relative", feature.bgColor)}>
                {feature.illustration}
              </div>
              <div className="w-full max-w-[580px] py-10">
                <p className="text-[21px] leading-[1.4] text-[#222222]">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
