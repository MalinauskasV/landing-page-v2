"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5 h-[64px] flex items-center px-10">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-5 h-5 bg-black rounded-sm" />
          <span className="text-[17px] font-medium tracking-[-0.3px]">Vectura</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <button
            className="flex items-center gap-1 text-[15px] text-black/80 hover:text-black transition-colors"
            onClick={() => setProductOpen(!productOpen)}
          >
            Product <ChevronDown className="w-4 h-4" />
          </button>
          <Link href="#" className="text-[15px] text-black/80 hover:text-black transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-[15px] text-black/80 hover:text-black transition-colors">
            Case studies
          </Link>
          <button
            className="flex items-center gap-1 text-[15px] text-black/80 hover:text-black transition-colors"
            onClick={() => setCompanyOpen(!companyOpen)}
          >
            Company <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* CTA */}
        <Link
          href="#"
          className="bg-black text-white text-[15px] px-5 py-2.5 rounded-full hover:bg-black/80 transition-colors"
        >
          Request a demo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
