import React from "react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: string;
}

const BenefitCard = ({ icon, title, description, className, delay }: BenefitCardProps) => {
  return (
    <div
      data-animate
      {...(delay ? { "data-delay": delay } : {})}
      className={cn(
        "flex flex-col items-start justify-start gap-[24px] p-[40px_32px] bg-white rounded-[16px] w-full h-full",
        className
      )}
    >
      <div className="relative flex items-center justify-center w-[52px] h-[52px] bg-[#F9FAFB] rounded-[8px] after:content-[''] after:absolute after:inset-0 after:border after:border-black/10 after:rounded-[8px] after:pointer-events-none">
        <div className="w-[20px] h-[20px] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-[32px] leading-[38.4px] font-normal tracking-[-0.64px] text-black">
          {title}
        </h3>
        <p className="text-[19px] leading-[26.6px] font-normal tracking-[-0.19px] text-[#222222]">
          {description}
        </p>
      </div>
    </div>
  );
};

export const WorkflowSection = () => {
  return (
    <section className="w-full min-h-[1180px] bg-black flex items-center justify-center p-[120px_40px] overflow-hidden">
      <div className="w-full max-w-[1600px] flex flex-row items-center gap-[20px]">
        {/* Left hero column */}
        <div className="relative flex flex-col justify-between items-start w-[544px] h-[940px] p-[40px_32px] rounded-[16px] overflow-hidden shrink-0">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/W6LNwSRaXfJ3JakRCOkNBfsitIo.png"
              alt="Finance workflow"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/90 via-transparent to-black/90" />

          <div className="relative z-[2] flex flex-col gap-[24px] w-full">
            <h2 data-animate className="text-[40px] leading-[48px] font-normal tracking-[-0.8px] text-white">
              Sukurta tikrosioms restorano operacijoms
            </h2>
            <p data-animate data-delay="1" className="text-[19px] leading-[26.6px] font-normal tracking-[-0.19px] text-white">
              Nuo diegimo iki kasdienio naudojimo, EventCast supaprastina restorano operacijas —
              grafikai, dokumentai ir ataskaitos atrodo paprastai nuo pirmos dienos.
            </p>
          </div>

          <div className="relative z-[2] w-full">
            <a
              data-animate
              data-delay="2"
              href="/contact/sales"
              className="flex items-center justify-center w-full h-[58.6px] bg-white rounded-[64px] transition-all duration-300 hover:opacity-[0.85]"
            >
              <span className="text-[19px] leading-[26.6px] font-normal tracking-[-0.19px] text-black">
                Pradėti su EventCast
              </span>
            </a>
          </div>
        </div>

        {/* Right 2×2 grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[20px] h-[940px]">
          <BenefitCard
            delay="1"
            title="Greitas paleidimas"
            description="Sistemos diegimas ir komandos onboarding per kelias dienas — su pilna pagalba ir migracija."
            icon={
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M9 12.75L11.25 15L15 9.75M21 12C21 13.268 20.37 14.389 19.407 15.068C19.608 16.229 19.26 17.467 18.364 18.364C17.467 19.261 16.229 19.608 15.068 19.407C14.389 20.37 13.268 21 12 21C10.732 21 9.611 20.37 8.932 19.407C7.771 19.609 6.533 19.261 5.636 18.364C4.739 17.467 4.391 16.229 4.593 15.068C3.629 14.389 3 13.268 3 12C3 10.732 3.629 9.611 4.593 8.932C4.391 7.771 4.739 6.533 5.636 5.636C6.533 4.739 7.771 4.392 8.932 4.593C9.611 3.63 10.732 3 12 3C13.268 3 14.389 3.63 15.068 4.593C16.229 4.391 17.467 4.739 18.364 5.636C19.261 6.533 19.609 7.771 19.407 8.932C20.371 9.611 21 10.732 21 12Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          <BenefitCard
            delay="2"
            title="Lengvas pritaikymas"
            description="Paprasta sąsaja leidžia komandai greitai pradėti naudotis sistema — be ilgų mokymų ar techninių žinių."
            icon={
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M3.75 13.5L14.25 2.25L12 10.5L20.25 10.5L9.75 21.75L12 13.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          <BenefitCard
            delay="1"
            title="Lanksčios integracijos"
            description="Jungiasi su Syrve, r_keeper, nSoft, Lightspeed ir kitomis POS sistemomis — be jokių trikdžių."
            icon={
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M3.75 3.75L3.75 8.25M3.75 3.75L8.25 3.75M3.75 3.75L9 9M3.75 20.25L3.75 15.75M3.75 20.25L8.25 20.25M3.75 20.25L9 15M20.25 3.75L15.75 3.75M20.25 3.75L20.25 8.25M20.25 3.75L15 9M20.25 20.25L15.75 20.25M20.25 20.25L20.25 15.75M20.25 20.25L15 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          <BenefitCard
            delay="2"
            title="Auga kartu su jumis"
            description="EventCast prisitaiko augant — kelios lokacijos, rolių valdymas, sumuotinis darbo laikas ir LT DK atitiktis."
            icon={
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M3 15.75C3 15.129 3.504 14.625 4.125 14.625H6.375C6.996 14.625 7.5 15.129 7.5 15.75V22.5C7.5 23.121 6.996 23.625 6.375 23.625H4.125C3.504 23.625 3 23.121 3 22.5V15.75ZM9.75 10.875C9.75 10.254 10.254 9.75 10.875 9.75H13.125C13.746 9.75 14.25 10.254 14.25 10.875V22.125C14.25 22.746 13.746 23.25 13.125 23.25H10.875C10.254 23.25 9.75 22.746 9.75 22.125V10.875ZM16.5 6.375C16.5 5.754 17.004 5.25 17.625 5.25H19.875C20.496 5.25 21 5.754 21 6.375V22.125C21 22.746 20.496 23.25 19.875 23.25H17.625C17.004 23.25 16.5 22.746 16.5 22.125V6.375Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
