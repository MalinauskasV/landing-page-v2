"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Clara Nguyen",
    role: "Head of Finance",
    company: "OdeaoLabs",
    quote: "Vectura gave us instant visibility into spending across departments. We caught three budget overruns in the first week — and now every decision is backed by real-time data.",
    stats: [
      { value: "37%", label: "Reduction in budget overages" },
      { value: "2x", label: "Faster spend approvals" },
    ],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=60",
  },
];

export const TestimonialsSection = () => {
  const [current] = useState(0);

  return (
    <section className="relative w-full bg-white py-[120px] px-10 flex flex-col items-center gap-16 overflow-hidden">
      <div className="w-full max-w-[1600px] flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-black text-[58px] leading-[69.6px] font-normal tracking-[-2.9px]">
            The Vectura shift—<br />straight from our users
          </h2>
          <p className="text-black/60 text-[21px]">Hear how Vectura is helping finance leaders take control.</p>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col gap-10">
          {/* Company logos */}
          <div className="flex items-center gap-10 justify-end">
            <span className="text-[15px] font-medium text-black/30 flex items-center gap-2"><span className="text-[18px]">⬡</span> OdeaoLabs</span>
            <span className="text-[15px] font-medium text-black/30">Quantum²</span>
            <span className="text-[15px] font-medium text-black/30">◯ Ikigai Labs</span>
          </div>

          {/* Avatar + Name */}
          <div className="flex flex-col gap-2">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <p className="text-[12px] font-mono tracking-[0.72px] uppercase text-black/60">{testimonials[current].name}</p>
            <p className="text-[12px] font-mono tracking-[0.72px] uppercase text-black/40">{testimonials[current].role}</p>
          </div>

          {/* Quote */}
          <blockquote className="text-black text-[40px] leading-[1.2] font-normal tracking-[-1.5px] max-w-[860px]">
            &ldquo;{testimonials[current].quote}&rdquo;
          </blockquote>

          {/* Stats + Nav */}
          <div className="flex items-end justify-between border-t border-black/10 pt-8">
            <div className="flex gap-16">
              {testimonials[current].stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <p className="text-black text-[32px] font-normal tracking-[-1px]">{stat.value}</p>
                  <p className="text-black/50 text-[13px]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-[#F0EDE8] rounded-2xl p-10 flex flex-col justify-between h-[380px]">
            <h3 className="text-black text-[26px] leading-[1.3] font-normal tracking-[-0.5px] max-w-[380px]">
              How Riverton Foods reduced procurement delays by 42% and gained full supplier cost visibility with Vectura
            </h3>
            <button className="w-fit bg-black text-white text-[15px] px-6 py-3 rounded-full hover:bg-black/80 transition-colors">
              Read case study
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#F4F4F5] rounded-2xl p-10 flex-1 flex flex-col justify-between h-[180px]">
              <p className="text-black text-[64px] leading-none font-normal tracking-[-3px]">$3.1M</p>
              <p className="text-black/50 text-[15px]">Annual supplier spend managed in real time</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[192px]">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
                alt="Case study"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-black" style={{ clipPath: "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%)" }} />
              </div>
            </div>

            <div className="bg-[#F4F4F5] rounded-2xl p-6 flex flex-col gap-2">
              <p className="text-black text-[48px] leading-none font-normal tracking-[-2px]">42%</p>
              <p className="text-black/50 text-[15px]">Reduction in procurement cycle delays</p>
            </div>
          </div>
        </div>

        {/* Quote from case study */}
        <div className="border border-black/10 rounded-2xl p-10 flex flex-col gap-6">
          <blockquote className="text-black text-[24px] leading-[1.5] font-normal max-w-[600px]">
            &ldquo;Vectura turned finance from a bottleneck into a partner. Today, our suppliers see us as easier to work with, our approvals happen without friction, and our finance team has time to plan for the future instead of fighting fires.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60"
              alt="Daniel Ortega"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-[12px] font-mono tracking-[0.72px] uppercase text-black font-bold">Daniel Ortega</p>
              <p className="text-[12px] font-mono tracking-[0.72px] uppercase text-black/50">Chief Financial Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
