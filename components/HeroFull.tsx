import React from "react";

export const HeroFull = () => {
  return (
    <section className="relative flex flex-col items-center justify-end w-full min-h-[800px] h-screen overflow-hidden bg-black pb-[120px]">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/media/etgmwEyGLXsT9Rv13qZtx7LlzQ.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-[32px] w-full max-w-[1600px]">
        <div className="flex flex-col items-center gap-[16px] w-full max-w-[1600px]">
          <div className="w-full max-w-[900px]">
            <h1 className="text-white text-center text-[80px] font-light leading-[88px] tracking-[-4px] whitespace-pre-wrap break-words font-sans">
              Stay fully on top of your business finances
            </h1>
          </div>
          <div className="w-full max-w-[660px]">
            <p className="text-white text-center text-[21px] font-normal leading-[29.4px] whitespace-pre-wrap break-words font-sans opacity-90">
              Vectura helps you track expenses, manage budgets, and make smarter decisions — all in one simple dashboard.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-[12px] w-full max-w-[1600px]">
          <a
            href="/contact/sales"
            className="group relative flex items-center justify-center h-[58.6px] px-[34px] py-[16px] bg-white rounded-[64px] transition-all duration-300 hover:opacity-[0.84] cursor-pointer"
          >
            <span className="text-black text-[19px] font-normal leading-[26.6px] tracking-[-0.19px] whitespace-pre font-sans">
              Request a demo
            </span>
          </a>

          <a
            href="/contact"
            className="group relative flex items-center justify-center h-[58.6px] px-[34px] py-[16px] bg-white/15 backdrop-blur-[16px] rounded-[64px] transition-all duration-300 hover:opacity-[0.84] cursor-pointer"
          >
            <span className="text-white text-[19px] font-normal leading-[26.6px] tracking-[-0.19px] whitespace-pre font-sans">
              Contact us
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroFull;
