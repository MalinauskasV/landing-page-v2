"use client";

import React from "react";

const logos = [
  <div key="1" className="flex flex-col items-center gap-1">
    <div className="w-8 h-8 rounded-full border-2 border-black/80 flex items-center justify-center">
      <div className="w-4 h-4 rounded-full bg-black/80" />
    </div>
  </div>,
  <svg key="2" viewBox="0 0 46 24" className="w-12 h-8 opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.481 17.388C14.858 20.779 12.2 23.382 8.878 23.854C5.555 24.327 2.311 22.563.817 19.473-.677 16.383-.085 12.656 2.286 10.215l7.929-8.161C11.493.739 13.227 0 15.035 0c1.807 0 3.541.739 4.819 2.054l3.053 3.142C23.538 2.777 25.375.887 27.727.239c2.352-.648 4.861.044 6.582 1.815l9.638 9.917c1.755 1.764 2.453 4.364 1.827 6.805-.626 2.442-2.479 4.348-4.852 4.992-2.372.644-4.898-.075-6.613-1.881l-3.053-3.143c-.63 2.42-2.467 4.311-4.82 4.96-2.352.648-4.861-.044-6.583-1.816z" fill="#000"/>
  </svg>,
  <span key="3" className="text-[18px] font-medium tracking-tight flex items-center gap-1">
    <span className="text-[20px]">⟳</span> Catalxg
  </span>,
  <span key="4" className="text-[18px] font-medium tracking-tight">Quantum²</span>,
  <div key="5" className="w-8 h-8 rounded-full bg-black/80 flex items-center justify-center">
    <div className="w-4 h-4 rounded-full bg-white" />
  </div>,
  <div key="6" className="flex items-center gap-2">
    <div className="grid grid-cols-3 gap-0.5">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="w-2 h-2 bg-black/80 rounded-sm" />
      ))}
    </div>
    <span className="text-[15px] font-semibold">Boltshift</span>
  </div>,
  <div key="7" className="w-8 h-8 rounded-full border-2 border-black/80 flex items-center justify-center">
    <div className="w-3 h-3 bg-black/80" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
  </div>,
  <span key="8" className="text-[15px] font-medium flex items-center gap-1">✦ Solaris Energy</span>,
  <span key="9" className="text-[15px] font-medium flex items-center gap-1">
    <span className="text-[18px]">⬡</span> OdeaoLabs
  </span>,
  <div key="10" className="w-8 h-8 bg-black/80 rounded" style={{ clipPath: "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%)" }} />,
  <span key="11" className="text-[15px] font-medium flex items-center gap-1">◯ Ikigai Labs</span>,
  <span key="12" className="text-[16px] font-bold tracking-widest">C</span>,
];

export const Logos = () => {
  return (
    <section className="relative w-full py-[120px] px-[40px] flex flex-col items-center gap-[64px] bg-white overflow-hidden">
      <div className="max-w-[1600px] w-full flex flex-col items-center gap-[64px]">
        <div className="max-w-[740px] w-full">
          <h2 data-animate className="text-[58px] font-normal leading-[69.6px] text-center tracking-[-2.9px] text-black">
            Restoranai, kurie jau dirba be Excel ir kelių sistemų
          </h2>
        </div>
      </div>

      <div className="max-w-[1600px] w-full flex flex-col items-center gap-[32px]">
        <div className="w-full flex flex-col items-center gap-[32px]">
          <div className="max-w-none w-full">
            <p data-animate data-delay="1" className="text-[21px] font-normal leading-[29.4px] text-center text-[#222222] opacity-80">
              Nuo mažų restoranų iki didelių tinklų — EventCast padeda komandai dirbti efektyviau vienoje vietoje.
            </p>
          </div>
          <div className="w-full h-[1px] bg-black opacity-[0.07]" />
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-[160px] z-10 pointer-events-none" style={{ background: "linear-gradient(to right, white 40%, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-[160px] z-10 pointer-events-none" style={{ background: "linear-gradient(to left, white 40%, transparent)" }} />

          <div className="flex animate-marquee gap-[56px] w-max items-center py-4">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
