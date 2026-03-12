"use client";

import { useEffect, useRef } from "react";
import { MessageCircle, Key, Monitor, TrendingUp } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5544998091901?text=Oi%2C%20vim%20pelo%20site%20do%20GestorTrip!%20Me%20interessei%20e%20queria%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20aplicativo.";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    color: "teal",
    title: "Entre em contato pelo WhatsApp",
    description:
      "Envie uma mensagem pelo WhatsApp para adquirir sua licença. Após o pagamento único, você recebe uma chave de acesso exclusiva e intransferível gerada especialmente para você.",
    hasAction: true,
  },
  {
    number: "02",
    icon: Key,
    color: "violet",
    title: "Instale e ative com sua chave",
    description:
      "Baixe e instale o GestorTrip no seu computador. Na primeira execução, o sistema solicita a chave de licença. Insira a chave recebida e o aplicativo estará pronto para uso — sem necessidade de internet.",
    hasAction: false,
  },
  {
    number: "03",
    icon: Monitor,
    color: "teal",
    title: "Cadastre clientes e viagens",
    description:
      "Adicione seus passageiros com dados completos e crie suas excursões com destino, datas, vagas e valores. Associe clientes às viagens e gerencie os pagamentos de forma centralizada.",
    hasAction: false,
  },
  {
    number: "04",
    icon: TrendingUp,
    color: "violet",
    title: "Acompanhe tudo no dashboard",
    description:
      "Monitore receitas, clientes pendentes e viagens ativas em tempo real. Gere relatórios em PDF, exporte para Excel ou faça backup dos seus dados a qualquer momento.",
    hasAction: false,
  },
];

export default function HowItWorks() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateX(0)";
            }, i * 150);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      el.style.opacity = "0";
      el.style.transform = "translateX(-20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <section id="how-it-works" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-teal text-sm font-semibold font-body tracking-widest uppercase mb-4">
            Como funciona
          </span>
          <h2
            className="font-display font-extrabold text-text-primary mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Do contato ao controle total
            <br />
            <span className="gradient-text">em minutos</span>
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto">
            Processo simples e rápido. Você paga uma vez e usa para sempre, sem mensalidades.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal/40 via-violet/40 to-transparent hidden lg:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isTeal = step.color === "teal";
              return (
                <div
                  key={step.number}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className="relative flex flex-col lg:flex-row items-start gap-6 lg:gap-10"
                >
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${
                        isTeal
                          ? "bg-teal/10 border-teal/30 text-teal"
                          : "bg-violet/10 border-violet/30 text-violet"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                  </div>

                  <div className="flex-1 bg-surface border border-border rounded-2xl px-8 py-6 hover:border-border-2 transition-colors">
                    <div className="flex items-start gap-4">
                      <span
                        className={`font-display font-extrabold text-5xl leading-none mt-1 flex-shrink-0 ${
                          isTeal ? "text-teal/20" : "text-violet/20"
                        }`}
                      >
                        {step.number}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-text-primary text-xl mb-2">
                          {step.title}
                        </h3>
                        <p className="font-body text-text-secondary leading-relaxed mb-4">
                          {step.description}
                        </p>
                        {step.hasAction && (
                          <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-teal text-background text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-light transition-colors font-body"
                          >
                            <MessageCircle size={14} />
                            Falar no WhatsApp
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
