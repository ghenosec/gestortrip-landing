import Image from "next/image";
import { MessageCircle, Shield, Mail } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5544998091901?text=Oi%2C%20vim%20pelo%20site%20do%20GestorTrip!%20Me%20interessei%20e%20queria%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20aplicativo.";
const EMAIL = "lcghenocontato@gmail.com";

const links = {
  Produto: [
    { label: "Funcionalidades", href: "#features" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Como Funciona", href: "#how-it-works" },
    { label: "Adquirir Licença", href: "#download" },
  ],
  Contato: [
    { label: "WhatsApp (44) 99809-1901", href: WHATSAPP_URL, external: true },
    { label: EMAIL, href: `mailto:${EMAIL}`, external: false },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-2">

            <div className="relative w-40 h-10 mb-5">
              <Image
                src="/logo.png"
                alt="GestorTrip"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="font-body text-text-secondary leading-relaxed text-sm max-w-xs mb-6">
              Sistema desktop proprietário para gerenciamento completo de viagens.
              Desenvolvido para agências de turismo e organizadores de excursões.
            </p>

            <div className="flex flex-col gap-2">

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted hover:text-teal transition-colors text-sm font-body"
              >
                <MessageCircle size={14} /> (44) 99809-1901
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-text-muted hover:text-teal transition-colors text-sm font-body"
              >
                <Mail size={14} /> {EMAIL}
              </a>

            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>

              <p className="font-display font-bold text-text-primary text-sm mb-5 tracking-wide">
                {group}
              </p>

              <ul className="flex flex-col gap-3">

                {items.map((item) => (
                  <li key={item.label}>

                    <a
                      href={item.href}
                      target={"external" in item && item.external ? "_blank" : undefined}
                      rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                      className="font-body text-text-muted hover:text-text-primary transition-colors text-sm break-all"
                    >
                      {item.label}
                    </a>

                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        <div className="border-t border-border pt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex flex-col gap-1">
            <p className="font-body text-text-muted text-sm">
              © {new Date().getFullYear()} GestorTrip — All Rights Reserved.
            </p>

            <p className="font-body text-text-muted text-xs opacity-70">
              Software proprietário. Proibida a reprodução, distribuição ou
              modificação sem autorização do autor.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-text-muted text-xs font-body flex-shrink-0 mt-2 sm:mt-0">
            <Shield size={12} className="text-teal" />
            Software licenciado
          </div>

        </div>
      </div>
    </footer>
  );
}