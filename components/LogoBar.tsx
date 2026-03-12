"use client";

const items = [
  "Agências de Turismo",
  "Organizadores de Excursões",
  "Gestores de Viagens",
  "Guias de Turismo",
  "Operadoras de Viagem",
  "Freelancers de Turismo",
];

export default function LogoBar() {
  return (
    <section className="py-12 border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-text-muted text-sm font-body mb-8 tracking-widest uppercase">
          Feito para profissionais de turismo
        </p>
        <div className="relative flex overflow-hidden">
          <div
            className="flex gap-12 whitespace-nowrap min-w-max"
            style={{ animation: "marquee 20s linear infinite" }}
          >
            {[...items, ...items].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-text-muted font-body text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-teal/60 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
