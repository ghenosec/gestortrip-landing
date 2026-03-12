"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";

export default function Screenshots() {
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("dark");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; observer.disconnect(); }
      },
      { threshold: 0.05 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="screenshots" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px opacity-50" style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,232,0.4), transparent)" }} />
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-10" style={{ background: "#5B8AF0" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-violet text-sm font-semibold font-body tracking-widest uppercase mb-4">Interface</span>
          <h2 className="font-display font-extrabold text-text-primary mb-5 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Design pensado para
            <br />
            <span className="gradient-text">máxima produtividade</span>
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto">
            Interface moderna com tema claro e escuro. Navegação intuitiva para encontrar tudo rapidamente.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface border border-border rounded-full p-1 gap-1">
            <button
              onClick={() => setActiveTheme("dark")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all duration-300 ${
                activeTheme === "dark" ? "bg-teal text-background shadow-sm" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Moon size={14} /> Tema Escuro
            </button>
            <button
              onClick={() => setActiveTheme("light")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all duration-300 ${
                activeTheme === "light" ? "bg-surface-2 text-text-primary border border-border shadow-sm" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Sun size={14} /> Tema Claro
            </button>
          </div>
        </div>
        <div ref={sectionRef} className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-teal/20 via-border to-violet/10">
            <div className="screenshot-frame rounded-2xl overflow-hidden bg-surface">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border" style={{ background: activeTheme === "dark" ? "#080F28" : "#0E1A3A" }}>
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="flex-1 mx-4 h-6 rounded-md bg-surface border border-border flex items-center justify-center">
                  <span className="text-[11px] text-text-muted font-body">GestorTrip — Dashboard</span>
                </div>
              </div>
              <div key={activeTheme}>
                <Image
                  src={activeTheme === "light" ? "/screenshots/dashboard-light.png" : "/screenshots/dashboard-dark.png"}
                  alt={`GestorTrip ${activeTheme === "light" ? "Tema Claro" : "Tema Escuro"}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Sidebar de Navegação",  desc: "Acesse qualquer módulo com um clique", color: "teal" },
              { label: "Cards de Resumo",        desc: "KPIs do negócio sempre visíveis",      color: "violet" },
              { label: "Gráficos em Tempo Real", desc: "Visualização de receita por viagem",   color: "teal" },
            ].map((item) => (
              <div key={item.label} className="bg-surface border border-border rounded-xl px-5 py-4 text-center">
                <p className={`font-display font-bold text-sm mb-1 ${item.color === "teal" ? "text-teal" : "text-violet"}`}>{item.label}</p>
                <p className="text-text-muted text-xs font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px opacity-50" style={{ background: "linear-gradient(90deg, transparent, rgba(91,138,240,0.4), transparent)" }} />
    </section>
  );
}