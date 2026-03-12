"use client";

import { useEffect, useRef } from "react";
import {
  Users, MapPin, CreditCard, BarChart3,
  FileText, DatabaseBackup, FileSpreadsheet,
  RefreshCw, WifiOff, Key,
} from "lucide-react";

const features = [
  { icon: Users,          color: "teal",   title: "Gestão de Clientes",       description: "Cadastre passageiros com dados completos, histórico de viagens e status de pagamento em tempo real." },
  { icon: MapPin,         color: "violet", title: "Controle de Viagens",       description: "Crie excursões com destino, datas, capacidade e valores. Associe clientes e monitore tudo em um só lugar." },
  { icon: CreditCard,     color: "teal",   title: "Gestão de Pagamentos",      description: "Registre entradas, acompanhe pendências e visualize o fluxo financeiro de cada viagem com precisão." },
  { icon: BarChart3,      color: "violet", title: "Dashboard Completo",        description: "KPIs, gráficos de receita e status dos clientes em um painel centralizado e sempre atualizado." },
  { icon: FileText,       color: "teal",   title: "Relatórios em PDF",         description: "Gere relatórios completos por período (mensal, trimestral, semestral ou anual) com um único clique." },
  { icon: DatabaseBackup, color: "violet", title: "Backup & Restauração",      description: "Exporte seu banco .db e importe quando precisar. Troque de computador sem perder nenhum dado." },
  { icon: FileSpreadsheet,color: "teal",   title: "Exportação para Excel",     description: "Exporte tudo em planilha .xlsx com abas separadas para Clientes, Viagens e Pagamentos." },
  { icon: WifiOff,        color: "violet", title: "100% Offline",              description: "Funciona sem internet. Seus dados ficam no seu computador, com total segurança e privacidade." },
  { icon: RefreshCw,      color: "teal",   title: "Atualizações Automáticas",  description: "Quando online, o sistema avisa sobre novas versões. Atualizar é opcional — o app nunca para." },
  { icon: Key,            color: "violet", title: "Licença Pessoal",           description: "Chave de acesso única e intransferível gerada exclusivamente para você. Um pagamento, acesso para sempre." },
];

function FeatureCard({ feature, delay }: { feature: (typeof features)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Icon = feature.icon;
  const isTeal = feature.color === "teal";

  return (
    <div ref={ref} className="feature-card bg-surface border border-border rounded-2xl p-6 cursor-default">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${isTeal ? "bg-teal/10 text-teal" : "bg-violet/10 text-violet"}`}>
        <Icon size={22} />
      </div>
      <h3 className="font-manrope font-bold text-text-primary text-lg mb-2">{feature.title}</h3>
      <p className="font-body text-text-secondary text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function Features() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block text-teal text-sm font-semibold font-body tracking-widest uppercase mb-4">Funcionalidades</span>
          <h2 className="font-manrope font-extrabold text-text-primary mb-5 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Tudo que você precisa para
            <br />
            <span className="gradient-text">gerenciar suas viagens</span>
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Desenvolvido para profissionais de turismo que precisam de organização, agilidade e controle — sem depender de internet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}