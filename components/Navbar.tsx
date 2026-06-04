"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ProductMegaMenu } from "./ProductMegaMenu";

export const Navbar = () => {
  const [productOpen, setProductOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setProductOpen(false), 120);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-[64px] flex items-center px-10">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/Untitled design-38 copy.png" alt="EventCast" className="h-11 w-auto object-contain" />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {/* Produktas with mega menu */}
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <button className="flex items-center gap-1 text-[15px] text-black/80 hover:text-black transition-colors">
              Produktas
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`} />
            </button>

            {productOpen && (
              <div
                className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2"
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
              >
                {/* Arrow */}
                <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-[-2px_-2px_4px_rgba(0,0,0,0.03)]" />
                <ProductMegaMenu />
              </div>
            )}
          </div>

          <Link href="/pricing" className="text-[15px] text-black/80 hover:text-black transition-colors">
            Kainos
          </Link>
          <Link href="#" className="text-[15px] text-black/80 hover:text-black transition-colors">
            Sėkmės istorijos
          </Link>
          <Link href="#" className="text-[15px] text-black/80 hover:text-black transition-colors">
            Įmonė
          </Link>
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
