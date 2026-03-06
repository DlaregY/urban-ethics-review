"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest text-parchment shadow-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-2 md:py-3">
        <Link
          href="/"
          className="font-heading text-lg md:text-xl tracking-wide hover:text-brass transition-colors"
        >
          The Urban Ethics Review
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Home</Link>
          <Link href="/manifesto" className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Manifesto</Link>
          <Link href="/violations" className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Violations</Link>
          <Link href="/demands" className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Demands</Link>
          <Link href="/thinkpieces" className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Thinkpieces</Link>
          <Link href="/stay-informed" className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Stay Informed</Link>
        </nav>
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-parchment transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-parchment transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-parchment transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden border-t border-parchment/10 px-4 py-4 flex flex-col gap-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Home</Link>
          <Link href="/manifesto" onClick={() => setIsOpen(false)} className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Manifesto</Link>
          <Link href="/violations" onClick={() => setIsOpen(false)} className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Violations</Link>
          <Link href="/demands" onClick={() => setIsOpen(false)} className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Demands</Link>
          <Link href="/thinkpieces" onClick={() => setIsOpen(false)} className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Thinkpieces</Link>
          <Link href="/stay-informed" onClick={() => setIsOpen(false)} className="font-body text-sm tracking-wide text-parchment/90 hover:text-brass transition-colors">Stay Informed</Link>
        </nav>
      )}
    </header>
  );
}
