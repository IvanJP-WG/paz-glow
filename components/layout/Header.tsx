"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-sans text-sm text-soil">
          <Link href="/shop" className="hover:text-clay transition">
            Shop
          </Link>
          <Link href="/rituals" className="hover:text-clay transition">
            Rituals
          </Link>
          <Link href="/ingredients" className="hover:text-clay transition">
            Ingredients
          </Link>
          <Link href="/about" className="hover:text-clay transition">
            Our Story
          </Link>
          <Link href="/journals" className="hover:text-clay transition">
            Journals
          </Link>
        </nav>

        {/* Utilities + Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-clay transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-clay transition relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-clay text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
          <Link href="/account" className="hover:text-clay transition hidden md:block">
            <User className="w-5 h-5" />
          </Link>

          {/* Hamburger toggle (mobile only) */}
          <button
            className="md:hidden hover:text-clay transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
{mobileOpen && (
  <div className="md:hidden bg-sand/95 backdrop-blur shadow-card">
    <nav className="flex flex-col space-y-4 px-6 py-6 font-sans text-soil text-base">
      <Link
        href="/shop"
        onClick={() => setMobileOpen(false)}
        className="hover:text-clay transition"
      >
        Shop
      </Link>
      <Link
        href="/rituals"
        onClick={() => setMobileOpen(false)}
        className="hover:text-clay transition"
      >
        Rituals
      </Link>
      <Link
        href="/ingredients"
        onClick={() => setMobileOpen(false)}
        className="hover:text-clay transition"
      >
        Ingredients
      </Link>
      <Link
        href="/about"
        onClick={() => setMobileOpen(false)}
        className="hover:text-clay transition"
      >
        Our Story
      </Link>
      <Link
        href="/journals"
        onClick={() => setMobileOpen(false)}
        className="hover:text-clay transition"
      >
        Journals
      </Link>
      <Link
        href="/account"
        onClick={() => setMobileOpen(false)}
        className="hover:text-clay transition"
      >
        Account
      </Link>
    </nav>
  </div>
)}

    </header>
  );
}
