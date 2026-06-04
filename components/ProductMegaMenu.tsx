import React from "react";
import { cn } from "@/lib/utils";

interface FeatureItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

interface Category {
  title: string;
  features: FeatureItem[];
}

const categories: Category[] = [
  {
    title: "Darbuotojų valdymas",
    features: [
      {
        title: "Grafikų kūrimas",
        description: "Kurkite ir redaguokite pamainas greičiau — be Excel ir chaoso.",
        href: "/#management-features",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
      },
      {
        title: "Dokumentai ir parašai",
        description: "Darbo sutartys ir dokumentai pasirašomi skaitmeniškai per minutes.",
        href: "/#management-features",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
      },
      {
        title: "Rolės ir prieigos lygiai",
        description: "Kiekvienas mato tik tai, ko jam reikia — saugiai ir aiškiai.",
        href: "/#management-features",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Operacijų valdymas",
    features: [
      {
        title: "Komandos komunikacija",
        description: "Žinutės, priminimai ir pranešimai vienoje vietoje — be WhatsApp grupių.",
        href: "/#management-features",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
      },
      {
        title: "Tiekėjų valdymas",
        description: "Sekite tiekėjų naudojimą ir kontroliuokite išlaidas viename pulte.",
        href: "/#management-features",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
      },
      {
        title: "Analitika ir ataskaitos",
        description: "Realaus laiko duomenys apie komandą, grafikus ir efektyvumą.",
        href: "/#management-features",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
    ],
  },
];

export const ProductMegaMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="dialog"
      className={cn(
        "relative w-[724px] bg-white rounded-[10px] p-6 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.08)] overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="flex flex-row gap-4">
        {categories.map((category, idx) => (
          <div key={idx} className="flex flex-col w-[330px] gap-5">
            <div className="h-[14.4px]">
              <p className="text-[12px] font-normal leading-[14.4px] tracking-[0.72px] text-[#222222] uppercase font-mono">
                {category.title}
              </p>
            </div>
            <div className="flex flex-col gap-9">
              {category.features.map((feature, fIdx) => (
                <a
                  key={fIdx}
                  href={feature.href}
                  className="group flex flex-row items-start gap-4 cursor-pointer no-underline"
                >
                  <div className="flex items-center justify-center w-[52px] h-[52px] bg-[#FBFAF9] rounded-lg transition-colors duration-200 group-hover:bg-[#F2ECE8] shrink-0">
                    <div className="text-[#222222] group-hover:text-black">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[2px] flex-1">
                    <p className="text-[17px] font-semibold leading-[23.8px] text-[#222222]">
                      {feature.title}
                    </p>
                    <p className="text-[15px] font-normal leading-[21px] text-[#222222] tracking-[-0.15px] opacity-70 max-w-[90%]">
                      {feature.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

ProductMegaMenu.displayName = "ProductMegaMenu";
export default ProductMegaMenu;
