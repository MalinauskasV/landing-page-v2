import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main footer */}
      <div className="px-10 py-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-8">
          {/* Left: logo + tagline + contact */}
          <div className="col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-white rounded-sm" />
              <span className="text-[17px] font-medium">Vectura</span>
            </div>
            <p className="text-white/50 text-[15px]">Modern finance starts here.</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/60 text-[15px]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011 1.22 2 2 0 013 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
                0445 334 1235
              </div>
              <div className="flex items-center gap-3 text-white/60 text-[15px]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                info@vectura.com
              </div>
            </div>
          </div>

          <div className="col-span-2 col-start-8 flex flex-col gap-4">
            <p className="text-white/40 text-[13px] font-medium uppercase tracking-wider">Features</p>
            {["Expense tracking", "Budgeting", "Reporting", "Smart approvals", "Vendor management", "User access & roles"].map((item) => (
              <Link key={item} href="#" className="text-white/70 text-[15px] hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>

          <div className="col-span-2 col-start-11 flex flex-col gap-4">
            <p className="text-white/40 text-[13px] font-medium uppercase tracking-wider">Company</p>
            {["Case studies", "About us", "Blog", "Careers", "Contact"].map((item) => (
              <Link key={item} href="#" className="text-white/70 text-[15px] hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-10 py-6">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Social icons */}
            {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
              <Link key={s} href="#" className="text-white/40 hover:text-white transition-colors">
                <div className="w-5 h-5 bg-white/40 rounded-sm hover:bg-white transition-colors" />
              </Link>
            ))}
          </div>
          <p className="text-white/40 text-[13px] flex items-center gap-2">
            <span>📍</span> Powell, Ohio (OH), USA
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-10 py-5">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <p className="text-white/30 text-[13px]">@ 2025 Vectura LTD. All rights reserved</p>
          <div className="flex items-center gap-6">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <Link key={item} href="#" className="text-white/40 text-[13px] hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/5 px-10 py-8">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-3">
          <p className="text-white/20 text-[11px] leading-[1.8]">
            Vectura is a financial software provider, not a financial institution, lender, or credit intermediary. The services provided by Vectura are intended solely for business use and do not include payment processing, credit issuance, or custody of client funds.
          </p>
          <p className="text-white/20 text-[11px] leading-[1.8]">
            Vectura Technologies Ltd. is a private limited company registered in United States of America. For questions related to platform usage, licensing, or data security, please refer to our Help Center or contact support@vectura.com.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
