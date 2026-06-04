"use client";

import React, { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

interface Testimonial {
  id: number;
  author: {
    name: string;
    position: string;
    photo: string;
  };
  quote: string;
  metrics: Metric[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: {
      name: "Tomas Petraitis",
      position: "Restorano vadovas",
      photo: "/images/ouCzy0PkkwTRTsPyF8ueqqjpE.jpg",
    },
    quote: "\u201cEventCast suteikė mums realaus laiko matomumą visose pamainose. Pirmą savaitę pastebėjome tris viršvalandžių neatitikimus — ir dabar kiekvienas sprendimas pagrįstas tikrais duomenimis.\u201d",
    metrics: [
      { value: "37%", label: "Mažiau viršvalandžių neatitikimų" },
      { value: "2x", label: "Greitesnis grafikų patvirtinimas" },
    ],
  },
  {
    id: 2,
    author: {
      name: "Rasa Mockienė",
      position: "Restoranų tinklo direktorė",
      photo: "/images/T3G1zgRYArcLJbrL7CxzGWJ7WA.jpg",
    },
    quote: "\u201cAnksčiau balansuojome Excel lenteles, ieškojome tabelių ir nuolat gesindavome gaisrus. Dabar turime centralizuotą valdymą, automatinius tabelius ir realaus laiko įspėjimus \u2014 mažiau netikėtumų ir daugiau laiko strategijai.\u201d",
    metrics: [
      { value: "3.4 h", label: "Sutaupyta kiekvienam vadybininkui per savaitę" },
      { value: "45%", label: "Mažiau rankinio administracinio darbo" },
    ],
  },
  {
    id: 3,
    author: {
      name: "Andrius Kazlauskas",
      position: "Operacijų direktorius",
      photo: "/images/PjLA8Iyr1A7qr9SoIU1zA88MKPg.jpg",
    },
    quote: "\u201cEventCast sutrumpino mūsų mėnesio uždarymo laiką beveik perpus. Ataskaitos švaresnės, komanda mažiau stresinga, ir pagaliau pasitikime savo skaičiais.\u201d",
    metrics: [
      { value: "48%", label: "Greitesnis mėnesio uždarymas" },
      { value: "32%", label: "Komandos pasitenkinimo augimas" },
    ],
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section
      className="w-full bg-white py-[120px] px-10 flex flex-col items-center gap-16 overflow-hidden"
      id="testimonials"
    >
      {/* Heading */}
      <div className="max-w-[1600px] w-full flex flex-col items-center gap-6">
        <h2 data-animate className="text-[58px] leading-[69.6px] font-normal text-center tracking-[-2.9px] text-black max-w-[700px]">
          EventCast pokytis&mdash;tiesiai iš mūsų vartotojų
        </h2>
        <p data-animate data-delay="1" className="text-[21px] leading-[29.4px] font-normal text-center text-[#222222] max-w-[750px]">
          Sužinokite, kaip EventCast padeda restoranų vadovams valdyti komandą ir operacijas.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-[1600px] w-full relative min-h-[700px]">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 w-full h-full transition-all duration-500 ease-in-out flex flex-col justify-between p-10 bg-[#FBFAF9] rounded-2xl",
              index === activeIndex
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 translate-x-8 pointer-events-none z-0"
            )}
          >
            {/* Top row */}
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-4">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                  <img
                    src={item.author.photo}
                    alt={item.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-mono text-[15px] leading-[21px] tracking-[0.9px] uppercase font-bold text-black">
                    {item.author.name}
                  </p>
                  <p className="font-mono text-[15px] leading-[21px] tracking-[0.9px] uppercase text-black/70">
                    {item.author.position}
                  </p>
                </div>
              </div>

              {/* Company logos */}
              <div className="flex items-center gap-12">
                <span className="text-[15px] font-medium text-black flex items-center gap-2">
                  <span className="text-[18px]">&#x2B21;</span> OdeaoLabs
                </span>
                <span className="text-[15px] font-medium text-black/20">Quantum&#178;</span>
                <span className="text-[15px] font-medium text-black/20">&#9711; Ikigai Labs</span>
              </div>
            </div>

            {/* Quote + bottom */}
            <div className="flex flex-col gap-8 w-full">
              <h3 className="text-[40px] leading-[48px] font-normal text-left tracking-[-0.8px] text-black max-w-[1100px]">
                {item.quote}
              </h3>

              <div className="w-full h-[1px] bg-black/10" />

              <div className="flex justify-between items-center w-full">
                <div className="flex items-start gap-10">
                  {item.metrics.map((metric, mIdx) => (
                    <React.Fragment key={mIdx}>
                      <div className="flex flex-col gap-1">
                        <p className="text-2xl leading-[28.8px] font-normal tracking-[-0.24px] text-black">
                          {metric.value}
                        </p>
                        <p className="text-[19px] leading-[26.6px] font-normal tracking-[-0.19px] text-[#222222]/50">
                          {metric.label}
                        </p>
                      </div>
                      {mIdx === 0 && <div className="w-[1px] h-[59px] bg-black/10" />}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex gap-[10px]">
                  <button
                    onClick={handlePrev}
                    className="w-11 h-11 flex items-center justify-center bg-[#FBFAF9] rounded-full border-2 border-black/10 transition-colors hover:bg-white focus:outline-none"
                  >
                    <ChevronLeft className="w-4 h-4 text-black" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-11 h-11 flex items-center justify-center bg-[#FBFAF9] rounded-full border-2 border-black/10 transition-colors hover:bg-white focus:outline-none"
                  >
                    <ChevronRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
