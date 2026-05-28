import React from "react";

interface StatCardProps {
  label: string;
  value: string;
  suffix?: string;
}

const StatCard = ({ label, value, suffix }: StatCardProps) => (
  <div className="flex flex-col justify-between items-start bg-white rounded-[16px] p-6 w-full h-[250px] min-w-0">
    <div className="w-full overflow-hidden">
      <p className="text-[#222222] opacity-70 font-sans text-[15px] leading-[21px] tracking-[-0.15px] max-w-[220px]">
        {label}
      </p>
    </div>
    <div className="flex items-center gap-1 text-[72px] leading-[72px] tracking-[-3.6px] font-sans text-black">
      <span>{value}</span>
      <span className="tracking-[-2.88px]">{suffix}</span>
    </div>
  </div>
);

export const Testimonial = () => {
  return (
    <section className="relative w-full bg-[#FBFAF9] py-16 px-10 flex flex-col items-center gap-[120px] overflow-hidden rounded-[16px]">
      <div className="w-full max-w-[1600px] flex flex-col gap-20">
        <div className="w-full flex items-center">
          <p className="text-[#222222] font-mono text-[12px] leading-[14.4px] tracking-[0.72px] uppercase">
            Smarter teams are moving to structured finance.
          </p>
        </div>

        <div className="flex flex-row items-end gap-6 w-full">
          <div className="flex-[2] min-w-0">
            <h2 className="text-black font-sans text-[58px] leading-[69.6px] tracking-[-2.9px] text-left">
              &ldquo;Finance is stuck in the past. Vectura gives teams real-time clarity, built-in structure, and smarter control.&rdquo;
            </h2>
          </div>

          <div className="flex-1 flex flex-col gap-4 pb-2">
            <div className="flex flex-col gap-1">
              <p className="text-[#222222] font-mono text-[12px] leading-[14.4px] tracking-[0.72px] uppercase font-bold">
                Daniel Chen
              </p>
              <p className="text-[#222222] font-mono text-[12px] leading-[14.4px] tracking-[0.72px] uppercase">
                Ceo &amp; Co-founder
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-black rounded-sm" />
              <span className="text-[15px] font-medium">Vectura</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="43% rely on manual tools for key finance decisions" value="43" suffix="%" />
        <StatCard label="100+ finance emails sent per team, per month" value="100" suffix="+" />
        <StatCard label="60% lose track of budget by Q2" value="60" suffix="%" />
      </div>
    </section>
  );
};

export default Testimonial;
