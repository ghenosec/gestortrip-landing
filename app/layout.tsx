import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gestortrip.vercel.app"),

  title: "GestorTrip — Gestão Completa de Viagens",
  description:
    "Sistema desktop para gerenciamento completo de viagens. Controle clientes, viagens e pagamentos de forma simples e centralizada. Funciona offline.",

  keywords: [
    "gestão de viagens",
    "agência de turismo",
    "excursões",
    "controle de clientes",
    "pagamentos",
    "software viagem",
    "sistema desktop",
    "aplicativo viagem",
    "gestão financeira viagem",
    "relatórios viagem",
    "backup viagem",
    "exportação viagem",
    "dashboard viagem",
    "gestão offline de viagem",
  ],

  openGraph: {
    title: "GestorTrip — Gestão Completa de Viagens",
    description:
      "Sistema desktop para gerenciamento completo de viagens, desde a criação de excursões até o controle de pagamentos. Funciona offline.",
    images: ["/screenshots/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="noise">{children}</body>
    </html>
  );
}