import React from "react";

export const PilotStat = () => {
  return (
    <section className="relative w-full py-[64px] px-[40px] flex flex-col items-center bg-white">
      <div className="max-w-[1600px] w-full flex flex-col items-center gap-[32px]">
        <p data-animate className="font-mono text-[15px] font-medium uppercase tracking-wider text-zinc-500 text-center">
          12 restoranų piloto programoje
        </p>
        <div className="w-full h-[1px] bg-black opacity-[0.07]" />
      </div>
    </section>
  );
};

export default PilotStat;
