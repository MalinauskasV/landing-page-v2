import React from "react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex flex-col gap-[24px] w-full">
    <div className="w-full h-[1px] bg-white/15" />
    <div className="flex flex-row items-start gap-[12px] w-full overflow-hidden">
      <div className="flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col flex-1 gap-[2px] overflow-hidden">
        <p className="text-white text-[19px] leading-[26.6px] tracking-[-0.19px] font-normal">
          <strong>{title}</strong>
        </p>
        <p className="text-white/70 text-[19px] leading-[26.6px] tracking-[-0.19px] font-normal">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const CTASection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full flex flex-col items-center justify-center py-[64px] px-[40px] bg-white overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative w-full max-w-[1600px] min-h-[778px] rounded-[16px] overflow-hidden flex flex-row items-center justify-end p-[40px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/X1v9AXxNLj14szEpJWNUB2UjzHg.png"
            alt="Finance professional"
            className="w-full h-full object-cover object-[50%_0%]"
          />
        </div>

        {/* CTA Card */}
        <div className="relative z-10 w-[468px] bg-black rounded-[16px] p-[40px] flex flex-col items-center gap-[48px]">
          <div className="flex flex-col items-center gap-[24px] w-full">
            <h3 data-animate className="text-white text-[40px] leading-[48px] tracking-[-0.8px] font-normal text-left w-full">
              Pradėkite aiškiai, augkite su pasitikėjimu
            </h3>
            <p data-animate data-delay="1" className="text-white text-[19px] leading-[26.6px] tracking-[-0.19px] font-normal text-left w-full">
              EventCast padeda restoranams dirbti greičiau &mdash; su realaus laiko matomumu, lanksčiais grafikais ir automatizacija ten, kur tai labiausiai svarbu.
            </p>
          </div>

          <div className="flex flex-col items-center gap-[24px] w-full">
            <Feature
              title="Greitas paleidimas"
              description="Dauguma komandų pilnai veikia per kelias dienas."
              icon={
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]">
                  <path d="M9 12.75L11.25 15L15 9.75M21 12C21 13.268 20.37 14.389 19.407 15.068C19.608 16.229 19.26 17.467 18.364 18.364C17.467 19.261 16.229 19.608 15.068 19.407C14.389 20.37 13.268 21 12 21C10.732 21 9.611 20.37 8.932 19.407C7.771 19.609 6.533 19.261 5.636 18.364C4.739 17.467 4.391 16.229 4.593 15.068C3.629 14.389 3 13.268 3 12C3 10.732 3.629 9.611 4.593 8.932C4.391 7.771 4.739 6.533 5.636 5.636C6.533 4.739 7.771 4.392 8.932 4.593C9.611 3.63 10.732 3 12 3C13.268 3 14.389 3.63 15.068 4.593C16.229 4.391 17.467 4.739 18.364 5.636C19.261 6.533 19.609 7.771 19.407 8.932C20.371 9.611 21 10.732 21 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            <Feature
              title="Sukurta augimui"
              description="Nuo vieno restorano iki didelių tinklų — be pertekliaus, be trikdžių."
              icon={
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]">
                  <path d="M3 15.75C3 15.129 3.504 14.625 4.125 14.625H6.375C6.996 14.625 7.5 15.129 7.5 15.75V22.5C7.5 23.121 6.996 23.625 6.375 23.625H4.125C3.504 23.625 3 23.121 3 22.5V15.75ZM9.75 10.875C9.75 10.254 10.254 9.75 10.875 9.75H13.125C13.746 9.75 14.25 10.254 14.25 10.875V22.125C14.25 22.746 13.746 23.25 13.125 23.25H10.875C10.254 23.25 9.75 22.746 9.75 22.125V10.875ZM16.5 6.375C16.5 5.754 17.004 5.25 17.625 5.25H19.875C20.496 5.25 21 5.754 21 6.375V22.125C21 22.746 20.496 23.25 19.875 23.25H17.625C17.004 23.25 16.5 22.746 16.5 22.125V6.375Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
          </div>

          <div className="w-full pt-[10px]">
            <a
              data-animate
              data-delay="2"
              href="/contact/sales"
              className="group flex items-center justify-center w-full h-[58.6px] bg-white rounded-[64px] transition-all duration-200 hover:opacity-[0.85]"
            >
              <span className="text-black text-[19px] leading-[26.6px] tracking-[-0.19px] font-normal">
                Pradėti dabar
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = "CTASection";

export default CTASection;
