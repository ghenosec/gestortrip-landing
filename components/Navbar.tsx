"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle, Download } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5544998091901?text=Oi%2C%20vim%20pelo%20site%20do%20GestorTrip!%20Me%20interessei%20e%20queria%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20aplicativo.";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Como Funciona", href: "#how-it-works" },
  { label: "Interface", href: "#screenshots" },
  { label: "Contato", href: "#download" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
        <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "glass-navbar border-border py-3"
      : "bg-transparent py-5"
  }`}
>
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#">
          <div className="relative w-40 h-10">
            <Image
              src="/logo.png"
              alt="GestorTrip"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 font-body"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">

          <a
            href="https://pub-3f0f13db5d6349cf8cb11c0581ebbfc3.r2.dev/GestorTrip-Setup.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-surface border border-border text-text-primary text-sm font-semibold px-4 py-2.5 rounded-lg hover:border-border-2 hover:bg-surface-2 transition-all duration-200 font-body"
          >
            <Download size={15} />
            Download
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#23B966] text-background text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#4FB67B] transition-colors duration-200 font-body"
          >
            <MessageCircle size={15} />
            Falar no WhatsApp
          </a>

        </div>
        <button
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border mt-3 px-6 py-6 flex flex-col gap-5">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors font-body"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://pub-3f0f13db5d6349cf8cb11c0581ebbfc3.r2.dev/GestorTrip-Setup.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-surface border border-border text-text-primary font-semibold px-5 py-3 rounded-lg font-body"
          >
            <Download size={16} />
            Download
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-teal text-background font-semibold px-5 py-3 rounded-lg font-body"
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>

        </div>
      )}
    </nav>
  );
}