import React from 'react';
import { cn } from "@/lib/utils";

interface PricingHeroProps {
  title?: React.ReactNode;
  description?: string;
  className?: string;
}

export const PricingHero = React.forwardRef<HTMLElement, PricingHeroProps>(
  ({ title, description, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex flex-col items-center justify-start w-full bg-white overflow-visible",
          "pt-[200px] px-[40px] pb-[96px]",
          className
        )}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-[1600px] gap-[24px]">
          <div className="flex flex-col items-center w-full max-w-[570px]">
            <h1 data-animate className={cn("w-full text-center text-black font-light text-[80px] leading-[88px] tracking-[-4px] whitespace-pre-wrap break-words")}>
              {title || (<>Aiškios kainos.<br />Realūs rezultatai.</>)}
            </h1>
          </div>
          <div className="flex flex-col items-center w-full max-w-[530px]">
            <p data-animate data-delay="1" className={cn("w-full text-center text-black font-normal text-[21px] leading-[29.4px] whitespace-pre-wrap break-words")}>
              {description || "Pasirinkite planą pagal savo restorano dydį ir poreikius — ir keiskite, kai esate pasiruošę augti."}
            </p>
          </div>
        </div>
      </section>
    );
  }
);

PricingHero.displayName = "PricingHero";
export default PricingHero;
