"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-[64px] flex items-center px-10">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/Untitled design-38 copy.png" alt="EventCast" className="h-11 w-auto object-contain" />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <button
            className="flex items-center gap-1 text-[15px] text-black/80 hover:text-black transition-colors"
            onClick={() => setProductOpen(!productOpen)}
          >
            Produktas <ChevronDown className="w-4 h-4" />
          </button>
          <Link href="#" className="text-[15px] text-black/80 hover:text-black transition-colors">
            Kainos
          </Link>
          <Link href="#" className="text-[15px] text-black/80 hover:text-black transition-colors">
            Sėkmės istorijos
          </Link>
          <button
            className="flex items-center gap-1 text-[15px] text-black/80 hover:text-black transition-colors"
            onClick={() => setCompanyOpen(!companyOpen)}
          >
            Įmonė <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* CTA */}
        <Link
          href="#"
          className="bg-black text-white text-[15px] px-5 py-2.5 rounded-full hover:bg-black/80 transition-colors"
        >
          Gauti demo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
