import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-soil text-sand mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row md:justify-between items-center gap-6 text-sm">
          <div className="flex space-x-8">
            <Link href="/contact" className="hover:text-clay transition">
              Contact
            </Link>
            <Link href="/shipping" className="hover:text-clay transition">
              Shipping & Returns
            </Link>
            <Link href="/faq" className="hover:text-clay transition">
              FAQ
            </Link>
          </div>

          {/* Socials under Contact */}
          <div className="flex space-x-6">
            <Link href="https://facebook.com" target="_blank" className="hover:text-clay transition">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-clay transition">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-clay transition">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </nav>

        {/* Copyright */}
        <div className="mt-8 text-xs text-center text-sand/70">
          © {new Date().getFullYear()} Paz Glow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
