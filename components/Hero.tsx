"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, Shield, Wifi, Lock } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5544998091901?text=Oi%2C%20vim%20pelo%20site%20do%20GestorTrip!%20Me%20interessei%20e%20queria%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20aplicativo.";

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

type Card = {
  label: string;
  value: string;
  color: "teal" | "green";
  position: string;
};

const cardPositions: Pick<Card, "label" | "color" | "position">[] = [
  { label: "Total de Clientes", color: "teal",   position: "top-[12%] -left-6" },
  { label: "Viagens Ativas",    color: "green", position: "top-[30%] -right-6" },
  { label: "Clientes Pagos",    color: "teal",   position: "top-[52%] -left-8" },
  { label: "Receita Total",     color: "green", position: "top-[68%] -right-4" },
  { label: "Taxa de Conclusão", color: "teal",   position: "bottom-[8%] -left-2" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const clientes = randomInt(30, 120);
    const pagos    = randomInt(15, clientes);
    const viagens  = randomInt(4, 18);
    const receita  = randomInt(8000, 48000);
    const taxa     = Math.round((pagos / clientes) * 100);

    const values = [
      String(clientes),
      String(viagens),
      String(pagos),
      formatBRL(receita),
      `${taxa}%`,
    ];

    setCards(
      cardPositions.map((pos, i) => ({ ...pos, value: values[i] }))
    );
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00C8E8 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #5B5BD6 0%, transparent 70%)" }}
      />

      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 mb-8 text-sm font-inter">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse-slow" />
          <span className="text-text-secondary">
            Software desktop · 100% offline · Pagamento único
          </span>
        </div>
        <h1
          className="font-outfit font-bold leading-tight tracking-tight mb-6"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)" }}
        >
          <span className="block text-text-primary">Gerencie viagens com</span>
          <span className="block gradient-text">precisão total</span>
        </h1>
        <p
          className="font-inter font-normal text-text-secondary leading-relaxed mb-10 mx-auto"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", maxWidth: "580px" }}
        >
          Sistema desktop para agências de turismo, organizadores de excursões e gestores de
          viagens. Controle clientes, viagens e pagamentos — tudo em um só lugar,{" "}
          <span className="text-teal font-semibold">sem precisar de internet</span>.
        </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 btn-shimmer text-background font-semibold px-8 py-4 rounded-xl text-base font-inter shadow-lg hover:scale-[1.02] transition-transform duration-200"
              >
                <MessageCircle size={18} />
                Entrar em contato
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#demo-video"
                className="inline-flex items-center gap-2 bg-surface border border-border text-text-primary font-semibold px-8 py-4 rounded-xl text-base font-inter hover:border-border-2 hover:bg-surface-2 transition-all duration-200"
              >
                Ver o sistema
              </a>
              </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16 text-sm text-text-muted font-inter">
          <div className="flex items-center gap-2">
            <Wifi size={14} className="text-teal" />
            <span>100% offline</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-teal" />
            <span>Dados locais e seguros</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock size={14} className="text-teal" />
            <span>Licença pessoal e intransferível</span>
          </div>
        </div>
        <div id="demo-video" className="relative max-w-5xl mx-auto scroll-mt-24">
          <div
            className="absolute -inset-2 rounded-2xl blur-3xl opacity-25 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #00C8E833, #5B8AF033)" }}
          />
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-teal/25 via-border to-violet/15">
            <div className="screenshot-frame rounded-2xl overflow-hidden bg-surface">
              <div className="flex items-center gap-2 px-5 py-3 bg-surface-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="flex-1 mx-4 h-6 rounded-md bg-surface border border-border flex items-center justify-center">
                  <span className="text-[11px] text-text-muted font-inter">GestorTrip v1.0 — Demo</span>
                </div>
              </div>
              <video
                src="/demoog.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className="w-full h-auto block"
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>
          {cards.map((card, i) => (
            <div
              key={card.label}
              className={`absolute ${card.position} glass rounded-xl px-4 py-3 shadow-xl hidden lg:block border ${
                card.color === "teal" ? "border-teal/20" : "border-violet/20"
              }`}
              style={{
                animation: `float ${5 + i * 0.7}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <p className="text-[10px] text-text-muted font-inter mb-1 whitespace-nowrap">
                {card.label}
              </p>
              <p
                className={`text-lg font-jakarta font-bold whitespace-nowrap ${
                  card.color === "teal" ? "text-teal" : "text-violet"
                }`}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}