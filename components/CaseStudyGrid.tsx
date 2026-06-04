import React from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  description: string;
  className?: string;
  delay?: string;
}

const MetricCard = ({ value, description, className, delay }: MetricCardProps) => (
  <div
    data-animate
    {...(delay ? { "data-delay": delay } : {})}
    className={cn("flex flex-col h-[500px] w-full bg-[#E8EDF3] rounded-[16px] overflow-hidden", className)}
  >
    <div className="flex-grow flex items-start p-[40px]">
      <h1 className="text-[140px] leading-[112px] tracking-[-7px] font-normal">
        {value}
      </h1>
    </div>
    <div className="p-[40px] border-t border-black/10">
      <p className="text-[21px] leading-[29.4px] font-normal">
        {description}
      </p>
    </div>
  </div>
);

export const CaseStudyGrid = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-white px-10 pb-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        {/* Case Study Intro Card */}
        <div className="flex flex-col justify-between items-start h-[500px] p-[40px] bg-[#F2ECE8] rounded-[16px]">
          <h3 data-animate className="text-[40px] leading-[48px] tracking-[-0.8px] font-normal max-w-[710px]">
            Kaip Panorama restoranas sumažino grafikų kūrimo laiką 68% ir gavo pilną komandos matomumą su EventCast
          </h3>
          <a
            data-animate
            data-delay="1"
            href="#"
            className="group inline-flex items-center justify-center px-[34px] py-[16px] bg-black rounded-[64px] transition-opacity duration-300 hover:opacity-[0.78]"
          >
            <span className="text-white text-[19px] leading-[26.6px] tracking-[-0.19px] font-normal">
              Read case study
            </span>
          </a>
        </div>

        {/* Metric Card 1 */}
        <MetricCard
          delay="1"
          value="68%"
          description="Mažiau laiko grafikų sudarymui per savaitę"
        />

        {/* Large image — full width */}
        <div className="relative col-span-1 lg:col-span-2 h-[500px] rounded-[16px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/v26flY3uzDKP05sOOgUbCgg0ons.jpg"
              alt="Riverton Foods Operations"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(162% 155% at 91.3% 79.8%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 53%, rgba(0,0,0,0.9) 100%)",
              }}
            />
          </div>

        </div>

        {/* Quote Card */}
        <div data-animate className="flex flex-col justify-between h-[500px] p-[40px] bg-white rounded-[16px] border border-black/10">
          <h3 className="text-[32px] leading-[38.4px] tracking-[-0.64px] font-normal text-black">
            &ldquo;EventCast pakeitė tai, kaip valdome komandą. Grafikai kuriami per minutes, o ne valandas. Darbuotojai žino savo pamainas iš karto, dokumentai pasirašomi skaitmeniškai — ir pagaliau turime laiko planuoti, o ne gesinti gaisrus.&rdquo;
          </h3>

          <div className="flex items-center gap-[16px]">
            <div className="w-[64px] h-[64px] rounded-full overflow-hidden shrink-0">
              <img
                src="/images/heQDx9TJWl2IGrgljtmXkzVz1C4.jpg"
                alt="Daniel Ortega"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[15px] leading-[21px] tracking-[0.9px] font-mono uppercase font-normal">
                Marius Jonaitis
              </p>
              <p className="text-[15px] leading-[21px] tracking-[0.9px] font-mono uppercase opacity-70">
                Panorama restoranų vadovas
              </p>
            </div>
          </div>
        </div>

        {/* Metric Card 2 */}
        <MetricCard
          delay="1"
          value="42%"
          description="Mažiau darbuotojų kaitos po sistemos diegimo"
        />
      </div>
    </div>
  );
};

export default CaseStudyGrid;
