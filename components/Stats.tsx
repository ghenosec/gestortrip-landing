"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "%",   label: "Offline",         desc: "Sem dependência de internet" },
  { value: 1,   suffix: "x",   label: "Pagamento único",  desc: "Sem mensalidades, para sempre" },
  { value: 1,   suffix: "min", label: "Para começar",     desc: "Instalação rápida e simples" },
  { value: 100, suffix: "%",   label: "Seus dados",       desc: "Armazenados no seu computador" },
];

function CountUp({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [active, value]);

  return (
    <span className="stat-number" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
      {display}<span className="text-teal">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,200,232,0.07), transparent)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface border border-border rounded-2xl p-8 text-center hover:border-border-2 transition-colors">
              <CountUp value={stat.value} suffix={stat.suffix} active={active} />
              <p className="font-manrope font-bold text-text-primary mt-2 mb-1">{stat.label}</p>
              <p className="font-body text-text-muted text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}