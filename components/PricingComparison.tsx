import React from "react";

interface PlanHeader { name: string; description: string; ctaText: string; ctaHref: string; }
interface FeatureRow { name: string; values: (string | boolean)[]; }
interface FeatureSection { title: string; features: FeatureRow[]; }

const plans: PlanHeader[] = [
  { name: "Free", description: "Pradėkite nemokamai — be jokių įsipareigojimų.", ctaText: "Pradėti", ctaHref: "/contact/sales" },
  { name: "Core", description: "Pilnas valdymas augančiam restoranui.", ctaText: "Gauti demo", ctaHref: "/contact/sales" },
  { name: "Pro", description: "Išplėstas valdymas restoranų tinklams.", ctaText: "Gauti demo", ctaHref: "/contact/sales" },
];

const comparisonData: FeatureSection[] = [
  {
    title: "Darbuotojų valdymas",
    features: [
      { name: "Darbuotojų skaičius", values: ["Iki 5", "Iki 30", "Neribota"] },
      { name: "Grafikų kūrimas ir redagavimas", values: [true, true, true] },
      { name: "Pamainų prašymai ir keitimai", values: [true, true, true] },
      { name: "Rolės ir prieigos lygiai", values: [false, true, true] },
      { name: "Automatiniai pamainos priminimai", values: [false, true, true] },
      { name: "Kelios lokacijos", values: [false, false, true] },
    ],
  },
  {
    title: "Dokumentai ir sutartys",
    features: [
      { name: "Skaitmeniniai dokumentai", values: [false, true, true] },
      { name: "El. parašai", values: [false, true, true] },
      { name: "Dokumentų archyvas", values: [false, "30 dienų", "Neribota"] },
      { name: "Darbo sutarčių šablonai", values: [false, true, true] },
      { name: "Automatinis dokumentų siuntimas", values: [false, false, true] },
    ],
  },
  {
    title: "Komunikacija",
    features: [
      { name: "Komandos žinutės", values: [true, true, true] },
      { name: "Pranešimai apie grafikų pakeitimus", values: [true, true, true] },
      { name: "Skyrių grupės ir pokalbiai", values: [false, true, true] },
      { name: "Automatiniai pranešimai", values: [false, true, true] },
      { name: "Integracijos (Slack, el. paštas)", values: [false, false, true] },
    ],
  },
  {
    title: "Analitika ir ataskaitos",
    features: [
      { name: "Bazinė darbo laiko statistika", values: [true, true, true] },
      { name: "Grafikų ataskaitų eksportas", values: [false, true, true] },
      { name: "Išplėstinė analitika pagal skyrius", values: [false, false, true] },
      { name: "Tiekėjų valdymas", values: [false, false, true] },
      { name: "API prieiga", values: [false, false, true] },
    ],
  },
];

const CheckIcon = () => (
  <div className="flex items-center justify-center w-6 h-6 bg-[#40B844] rounded-full">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
);

const DashIcon = () => <div className="w-6 h-1 bg-black/10 rounded-full" />;

export const PricingComparison: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] pt-[180px] pb-[96px] px-10 flex flex-col items-center gap-16 overflow-visible">
      <div className="flex flex-col items-center gap-6 text-center max-w-[600px]">
        <h2 data-animate className="text-[58px] font-normal leading-[69.6px] tracking-[-2.9px] text-black">Palyginkite planus</h2>
        <p data-animate data-delay="1" className="text-[21px] font-normal leading-[29.4px] text-black">Raskite planą, kuris tinka jūsų restoranui.</p>
      </div>
      <div className="w-full max-w-[1600px] flex flex-col gap-9">
        <div className="sticky top-[64px] z-10 grid grid-cols-9 gap-4 p-6 bg-white rounded-2xl before:content-[''] before:absolute before:inset-x-0 before:-top-4 before:h-4 before:bg-[#FAFAFA] relative">
          <div className="col-span-3" />
          {plans.map((plan, idx) => (
            <div key={idx} className="col-span-2 flex flex-col justify-between items-start bg-[#FAFAFA] p-6 rounded-2xl min-h-[252px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-bold leading-[28.8px] tracking-[-0.24px] text-black">{plan.name}</h3>
                <p className="text-[16px] font-normal leading-[22.4px] tracking-[-0.16px] text-[#222222]">{plan.description}</p>
              </div>
              <a href={plan.ctaHref} className="group relative flex items-center justify-center px-7 py-[11px] bg-white rounded-[64px] transition-all duration-200 hover:opacity-[0.85] border border-black/10">
                <span className="text-[16px] font-normal leading-[22.4px] tracking-[-0.16px] text-black">{plan.ctaText}</span>
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-0">
          {comparisonData.map((section, sIdx) => (
            <div key={sIdx} data-animate className="bg-white rounded-2xl overflow-hidden mb-4">
              <div className="px-10 pt-10 pb-9 relative">
                <h3 className="text-[24px] font-bold leading-[28.8px] tracking-[-0.24px] text-black">{section.title}</h3>
                <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-black/10" />
              </div>
              {section.features.map((feature, fIdx) => (
                <div key={fIdx} className="relative px-10">
                  <div className="grid grid-cols-9 gap-4 h-20 items-center">
                    <div className="col-span-3 flex items-center">
                      <p className="text-[19px] font-normal leading-[26.6px] tracking-[-0.19px] text-[#222222]">{feature.name}</p>
                    </div>
                    {feature.values.map((val, vIdx) => (
                      <div key={vIdx} className="col-span-2 flex justify-center items-center">
                        {typeof val === "boolean" ? (val ? <CheckIcon /> : <DashIcon />) : (
                          <p className="text-[19px] font-normal leading-[26.6px] tracking-[-0.19px] text-[#222222]">{val}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-black/10" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
