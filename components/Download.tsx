"use client";

import { useEffect, useRef } from "react";
import { MessageCircle, ArrowRight, CheckCircle, CreditCard, Mail } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5544998091901?text=Oi%2C%20vim%20pelo%20site%20do%20GestorTrip!%20Me%20interessei%20e%20queria%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20aplicativo.";
const EMAIL = "lcghenocontato@gmail.com";

const perks = [
  "Pagamento único, sem mensalidades",
  "Licença pessoal e intransferível",
  "Funciona 100% offline",
  "Dados armazenados no seu PC",
  "Atualizações incluídas",
  "Suporte pelo WhatsApp",
];

export default function DownloadSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="download" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,200,232,0.07) 0%, rgba(91,138,240,0.05) 50%, transparent 100%)",
        }}
      />

      <div className="absolute inset-0 grid-bg opacity-20" />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,200,232,0.3), transparent)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(91,138,240,0.3), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div ref={ref} className="text-center">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-2 mb-8 text-sm font-body text-teal font-semibold">
            <CreditCard size={14} />
            Pagamento único · Sem mensalidade
          </div>

          <h2
            className="font-manrope font-extrabold leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            <span className="text-text-primary">Comece a organizar</span>
            <br />
            <span className="gradient-text">suas viagens hoje</span>
          </h2>

          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Adquira o GestorTrip com um único pagamento e transforme a gestão
            das suas excursões. Sem mensalidades, sem internet, sem
            complicação.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-12">
            {perks.map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-2.5 bg-surface border border-border rounded-xl px-4 py-3 text-left"
              >
                <CheckCircle size={15} className="text-teal flex-shrink-0" />
                <span className="text-text-secondary text-sm font-body">
                  {perk}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 btn-shimmer text-background font-bold px-10 py-4 rounded-xl text-lg font-body shadow-2xl hover:scale-[1.02] transition-transform duration-200"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 bg-surface border border-border text-text-primary font-semibold px-8 py-4 rounded-xl text-lg font-body hover:border-border-2 hover:bg-surface-2 transition-all duration-200"
            >
              <Mail size={20} />
              Enviar e-mail
            </a>
          </div>

          <p className="text-text-muted text-sm font-body">
            Entre em contato para saber o valor e receber sua licença de acesso.
          </p>

          <p className="text-text-muted text-xs font-body mt-2 opacity-70">
            {EMAIL} · (44) 99809-1901
          </p>
        </div>
      </div>
    </section>
  );
}