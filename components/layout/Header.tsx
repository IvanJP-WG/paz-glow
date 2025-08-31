"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-heading text-clay">
          Paz Glow
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex space-x-6 font-sans text-sm text-soil">
          <Link href="/shop" className="hover:text-clay transition">Shop</Link>
          <Link href="/rituals" className="hover:text-clay transition">Rituals</Link>
          <Link href="/about" className="hover:text-clay transition">About</Link>
          <Link href="/contact" className="hover:text-clay transition">Contact</Link>
        </nav>

        {/* Utility */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="hover:text-clay transition">🔍</button>
          <button aria-label="Cart" className="hover:text-clay transition">🛒</button>
        </div>
      </div>
    </header>
  );
}
