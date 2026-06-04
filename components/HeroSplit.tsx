import React from "react";
import { CheckCircle, BarChart2 } from "lucide-react";

export const HeroSplit = () => {
  return (
    <section className="w-full pt-[80px] pb-4 px-10 bg-white overflow-hidden">
      <div className="relative w-full h-[560px] rounded-3xl overflow-hidden">
        <img
          src="/images/X1v9AXxNLj14szEpJWNUB2UjzHg.png"
          alt="Finance professional"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute right-8 top-8 bottom-8 w-[400px] bg-[#111111] rounded-2xl p-10 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-white text-[36px] font-light leading-[1.15] tracking-[-1.5px]">
              Start with clarity, scale with confidence
            </h1>
            <p className="text-white/70 text-[15px] leading-[1.6]">
              Vectura helps modern finance teams move faster — with real-time visibility, flexible workflows, and automation where it matters most.
            </p>

            <div className="flex flex-col gap-5 mt-2">
              <div className="border-t border-white/10 pt-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-[15px] font-medium">Fast onboarding</p>
                    <p className="text-white/60 text-[13px] mt-1">Most teams are fully live in under a week.</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5">
                <div className="flex items-start gap-3">
                  <BarChart2 className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-[15px] font-medium">Built for scale</p>
                    <p className="text-white/60 text-[13px] mt-1">From startups to growing finance teams — no bloat, no friction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-white text-black text-[15px] font-medium py-4 rounded-full hover:bg-white/90 transition-colors">
            Get started now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
