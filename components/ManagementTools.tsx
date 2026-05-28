import React from "react";
import { Copy, Database, Users } from "lucide-react";

export const ManagementTools = () => {
  return (
    <section className="relative w-full bg-[#111111] py-[120px] px-10 flex flex-col items-center gap-16 overflow-hidden">
      <div className="w-full max-w-[1600px] flex flex-col gap-16">
        <h2 className="text-white text-[58px] leading-[69.6px] font-normal tracking-[-2.9px] max-w-[600px]">
          Built-in management tools that keep your team aligned
        </h2>

        {/* Row 1: Smart Approvals */}
        <div className="grid grid-cols-2 gap-4">
          {/* Photo card */}
          <div className="relative rounded-2xl overflow-hidden h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=1200&auto=format&fit=crop"
              alt="Smart Approvals"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                <Copy className="w-4 h-4 text-white" />
              </div>
              <p className="text-white text-[15px] leading-[1.6] max-w-[360px]">
                No more bottlenecks. Set up custom rules for approval chains by department or amount, and keep everything moving — without back-and-forth emails.
              </p>
            </div>
          </div>

          {/* Text card */}
          <div className="bg-white rounded-2xl p-10 flex flex-col justify-start h-[480px]">
            <h3 className="text-black text-[32px] font-normal tracking-[-1px]">Smart Approvals</h3>
          </div>
        </div>

        {/* Row 2: Vendor Management */}
        <div className="grid grid-cols-2 gap-4">
          {/* Text card */}
          <div className="bg-[#F0EDE8] rounded-2xl p-10 flex flex-col justify-start h-[480px]">
            <h3 className="text-black text-[32px] font-normal tracking-[-1px]">Vendor Management</h3>
          </div>

          {/* Photo card */}
          <div className="relative rounded-2xl overflow-hidden h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
              alt="Vendor Management"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                <Database className="w-4 h-4 text-white" />
              </div>
              <p className="text-white text-[15px] leading-[1.6] max-w-[360px]">
                Track vendor usage, compare spending across tools and services, and flag duplicate subscriptions. Vectura makes it easy to see where your money&apos;s going — and where it should be.
              </p>
            </div>
          </div>
        </div>

        {/* Row 3: Multi-User Access */}
        <div className="grid grid-cols-2 gap-4">
          {/* Photo card */}
          <div className="relative rounded-2xl overflow-hidden h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Multi-User Access"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                <Users className="w-4 h-4 text-white" />
              </div>
              <p className="text-white text-[15px] leading-[1.6] max-w-[360px]">
                Finance lead, ops manager, founder — everyone sees only what they need. Vectura makes collaboration secure and clear with customizable roles and access levels.
              </p>
            </div>
          </div>

          {/* Text card */}
          <div className="bg-white rounded-2xl p-10 flex flex-col justify-start h-[480px]">
            <h3 className="text-black text-[32px] font-normal tracking-[-1px]">Multi-User Access &amp; Roles</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTools;
