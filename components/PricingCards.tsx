"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface PricingFeature { text: string; }
interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: string | number;
  annualPrice: string | number;
  isCustom?: boolean;
  isFree?: boolean;
  ctaText: string;
  ctaHref: string;
  features: PricingFeature[];
  badge?: string;
  bgColor: string;
}

const pricingData: PricingTier[] = [
  {
    name: "Free",
    description: "Pradėkite nemokamai — be jokių įsipareigojimų.",
    monthlyPrice: 0, annualPrice: 0,
    isFree: true,
    ctaText: "Pradėti nemokamai", ctaHref: "/contact/sales",
    bgColor: "bg-white",
    features: [
      { text: "Iki 5 darbuotojų" },
      { text: "Grafikų kūrimas ir valdymas" },
      { text: "Komandos žinutės" },
      { text: "1 restorano lokacija" },
      { text: "Pagalba el. paštu" },
    ],
  },
  {
    name: "Core",
    description: "Pilnas valdymas augančiam restoranui.",
    monthlyPrice: 79, annualPrice: 65,
    ctaText: "Gauti demo", ctaHref: "/contact/sales",
    badge: "Populiariausias", bgColor: "bg-[#F2ECE8]",
    features: [
      { text: "Viską iš Free, ir daugiau:" },
      { text: "Iki 30 darbuotojų" },
      { text: "Skaitmeniniai dokumentai ir parašai" },
      { text: "Automatiniai pamainos priminimai" },
      { text: "Darbuotojų rolės ir prieigos lygiai" },
      { text: "Bazinės ataskaitos ir statistika" },
      { text: "Prioritetinė pagalba per pokalbių langą" },
    ],
  },
  {
    name: "Pro",
    description: "Išplėstas valdymas restoranų tinklams ir didelėms komandoms.",
    monthlyPrice: 169, annualPrice: 139,
    ctaText: "Gauti demo", ctaHref: "/contact/sales",
    bgColor: "bg-[#E8EDF3]",
    features: [
      { text: "Viską iš Core, ir daugiau:" },
      { text: "Neriboti darbuotojai" },
      { text: "Kelios lokacijos iš vieno pulto" },
      { text: "Išplėstinė analitika ir ataskaitos" },
      { text: "Patvirtinimo grandinės pagal skyrius" },
      { text: "Tiekėjų valdymas" },
      { text: "API prieiga ir integracijos" },
      { text: "Paskirtas paskyros vadovas" },
    ],
  },
];

export const PricingCards: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <div className="flex flex-col items-center gap-[32px] bg-[#FAFAFA] py-[40px] px-[40px] w-full font-sans">
      <div data-animate className="flex items-center gap-[12px] h-[36.7px]">
        <div className={cn("transition-opacity duration-200", !isAnnual ? "opacity-100" : "opacity-50")}>
          <span className="text-[19px] font-medium text-[#222222] tracking-[-0.19px]">Mėnesinis mokėjimas</span>
        </div>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className={cn("relative w-[64px] h-[36.7px] rounded-[20px] p-[4px] transition-all duration-300 ease-in-out", isAnnual ? "bg-[#40B844]" : "bg-[rgba(0,0,0,0.6)]")}
          aria-label="Toggle pricing"
        >
          <div className={cn("w-[28.7px] h-[28.7px] bg-white rounded-[20px] transition-transform duration-300 ease-in-out", isAnnual ? "translate-x-[27px]" : "translate-x-0")} />
        </button>
        <div className={cn("transition-opacity duration-200", isAnnual ? "opacity-100" : "opacity-50")}>
          <span className="text-[19px] font-medium text-[#222222] tracking-[-0.19px]">Metinis mokėjimas</span>
        </div>
        {isAnnual && (
          <span className="text-[13px] font-mono tracking-[0.78px] uppercase bg-[#40B844] text-white px-[10px] py-[4px] rounded-[8px]">
            Sutaupykite ~20%
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] max-w-[1600px] w-full">
        {pricingData.map((tier, idx) => (
          <div key={idx} data-animate data-delay={String(idx)} className={cn("flex flex-col gap-[96px] p-[40px] pb-[64px] rounded-[16px] overflow-hidden min-h-[1100px]", tier.bgColor)}>
            <div className="flex flex-col gap-[32px] min-h-[150px] relative">
              <div className="flex justify-between items-start">
                <h3 className="text-[32px] font-bold text-black tracking-[-0.64px] leading-[38.4px]">{tier.name}</h3>
                {tier.badge && (
                  <div className="flex items-center gap-[3px] bg-[rgba(255,255,255,0.5)] px-[13px] py-[8px] rounded-[8px]">
                    <span className="text-[12px] font-mono tracking-[0.72px] text-[#222222] uppercase">{tier.badge}</span>
                  </div>
                )}
              </div>
              <p className="text-[19px] text-[#222222] leading-[26.6px] tracking-[-0.19px]">{tier.description}</p>
            </div>
            <div className="flex flex-col gap-[48px]">
              <div className="w-full h-[1px] bg-black opacity-15" />
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-end gap-[10px] h-[58px]">
                  {tier.isFree ? (
                    <>
                      <h2 className="text-[58px] font-normal text-black tracking-[-2.32px] leading-[58px]">0 €</h2>
                      <span className="text-[17px] text-[#222222] leading-[23.8px] mb-[8px]">/mėn.</span>
                    </>
                  ) : (
                    <>
                      <h2 className="text-[58px] font-normal text-black tracking-[-2.32px] leading-[58px]">
                        {isAnnual ? tier.annualPrice : tier.monthlyPrice} €
                      </h2>
                      <span className="text-[17px] text-[#222222] leading-[23.8px] mb-[8px]">/mėn.</span>
                    </>
                  )}
                </div>
                {!tier.isFree && (
                  <p className="text-[15px] text-[#222222] opacity-50 tracking-[-0.15px]">
                    {isAnnual ? "skaičiuojama metiškai" : "skaičiuojama kas mėnesį"}
                  </p>
                )}
              </div>
              <a href={tier.ctaHref} className="group relative flex items-center justify-center bg-black rounded-[64px] py-[16px] px-[34px] transition-all duration-200 hover:opacity-80">
                <span className="text-[19px] text-white font-medium tracking-[-0.19px]">{tier.ctaText}</span>
              </a>
            </div>
            <div className="flex flex-col gap-[20px]">
              {tier.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-[12px]">
                  <div className="flex-shrink-0 w-[28px] h-[28px] flex items-center justify-center">
                    <div className="w-[24px] h-[24px] bg-[#40B844] rounded-full flex items-center justify-center p-[3px]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[19px] text-black leading-[26.6px] tracking-[-0.19px]">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
