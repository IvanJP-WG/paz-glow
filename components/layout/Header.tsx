"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Search, User} from "lucide-react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-sand/90 backdrop-blur shadow-card" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="font-heading text-2xl text-soil">
          Paz Glow
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 font-sans text-sm text-soil">
          <Link href="/shop" className="hover:text-clay transition">
            Shop
          </Link>
          <Link href="/rituals" className="hover:text-clay transition">
            Rituals
          </Link>
          <Link href="/rituals" className="hover:text-clay transition">
            Ingredients
          </Link>
          <Link href="/about" className="hover:text-clay transition">
            Our Story
          </Link>
          <Link href="/rituals" className="hover:text-clay transition">
            Journals
          </Link>
        </nav>

        {/* Utilities (icons) */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-clay transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-clay transition relative">
            <ShoppingBag className="w-5 h-5" />
            {/* Cart count */}
            <span className="absolute -top-2 -right-2 bg-clay text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>

          <Link href="/account" className="hover:text-clay transition">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
