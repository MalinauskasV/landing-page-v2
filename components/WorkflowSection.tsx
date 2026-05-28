import React from "react";
import { Target, Zap, Maximize, BarChart2 } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-[#F9F9F7] rounded-2xl p-8 flex flex-col gap-6">
    <div className="w-10 h-10 flex items-center justify-center text-black/60">{icon}</div>
    <div className="flex flex-col gap-3">
      <h3 className="text-black text-[22px] font-normal tracking-[-0.5px]">{title}</h3>
      <p className="text-black/60 text-[15px] leading-[1.6]">{description}</p>
    </div>
  </div>
);

export const WorkflowSection = () => {
  return (
    <section className="relative w-full bg-[#111111] py-[120px] px-10 flex flex-col items-center gap-16 overflow-hidden">
      <div className="w-full max-w-[1600px] grid grid-cols-2 gap-4">
        {/* Left: text + image card */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 p-0">
            <h2 className="text-white text-[48px] leading-[1.15] font-normal tracking-[-2px] max-w-[440px]">
              Designed for real-world finance workflows
            </h2>
            <p className="text-white/60 text-[17px] leading-[1.6] max-w-[400px]">
              From setup to daily use, Vectura streamlines financial workflows — making budgets, expenses, and reporting feel simple from day one.
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[380px] mt-4">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
              alt="Workflow"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap">
              Get started with Vectura
            </button>
          </div>
        </div>

        {/* Right: 2x2 feature cards */}
        <div className="grid grid-cols-2 gap-4">
          <FeatureCard
            icon={<Target size={24} />}
            title="Easy onboarding"
            description="Guided setup and hands-on support help your team feel confident with Vectura in just a few days."
          />
          <FeatureCard
            icon={<Zap size={24} />}
            title="Fast adoption"
            description="Vectura's clean workflows make it easy for finance teams and operators to jump in and get value quickly."
          />
          <FeatureCard
            icon={<Maximize size={24} />}
            title="Flexible integrations"
            description="Connect with accounting tools, HR platforms, and company cards — no disruption to your flow."
          />
          <FeatureCard
            icon={<BarChart2 size={24} />}
            title="Scalable for growth"
            description="Vectura adapts as you scale with role-based access, multi-entity support, and advanced controls."
          />
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
