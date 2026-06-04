import React from "react";

interface HeroSectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      title = "Vienas darbo valdymo įrankis. Visam restoranui.",
      description = "EventCast padeda restoranams valdyti darbuotojus, grafikus, dokumentus, komunikaciją ir operacijas vienoje platformoje — be Excel ir chaoso.",
      primaryCtaText = "Gauti demo",
      primaryCtaHref = "/contact/sales",
      secondaryCtaText = "Sužinoti daugiau",
      secondaryCtaHref = "/contact",
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className="relative w-full h-[calc(100vh-104px)] min-h-[600px] flex flex-col justify-end items-center overflow-hidden bg-black text-white pb-[120px] px-10 rounded-[24px] mx-[20px] mt-[84px] mb-[20px]"
        style={{ width: "calc(100% - 40px)" }}
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video
            src="/media/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center gap-8 max-w-[1600px] w-full">
          <div className="flex flex-col items-center gap-4 text-center max-w-[900px]">
            <h1 data-animate className="text-[80px] leading-[88px] font-light tracking-[-4px] font-sans text-white">
              {title}
            </h1>
            <p data-animate data-delay="1" className="text-[21px] leading-[29.4px] font-normal text-white/90 max-w-[660px]">
              {description}
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 w-full">
            <a
              data-animate
              data-delay="2"
              href={primaryCtaHref}
              className="group relative flex items-center justify-center h-[58.6px] px-[34px] bg-white rounded-[64px] transition-all duration-300 hover:opacity-[0.856]"
            >
              <span className="text-[19px] font-normal tracking-[-0.19px] text-black">
                {primaryCtaText}
              </span>
            </a>

            <a
              data-animate
              data-delay="3"
              href={secondaryCtaHref}
              className="group relative flex items-center justify-center h-[58.6px] px-[34px] bg-white/15 backdrop-blur-[16px] rounded-[64px] transition-all duration-300 hover:opacity-[0.856]"
            >
              <span className="text-[19px] font-normal tracking-[-0.19px] text-white">
                {secondaryCtaText}
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
