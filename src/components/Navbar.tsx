"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home",       href: "/" },
  { label: "Ballet",     href: "/ballet" },
  { label: "Hip-Hop & Jazz", href: "/hiphop-jazz" },
  { label: "Others",     href: "/others" },
  { label: "About Us",   href: "/about-us" },
  { label: "Recital",    href: "/recital" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#13292A] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-[Quicksand,sans-serif] font-bold text-xl text-[#E996B4] tracking-wide">
          CDBS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium hover:text-[#E996B4] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile slide-in drawer */}
      <div
        className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-[#13292A] border-l border-[#E996B4]/30 transform transition-transform duration-300 ease-in-out z-40 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col gap-1 p-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-sm font-medium border-b border-white/10 hover:text-[#E996B4] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-black/40 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
