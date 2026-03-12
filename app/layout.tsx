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
  ],

  openGraph: {
    title: "GestorTrip — Gestão Completa de Viagens",
    description:
      "Sistema desktop para gerenciamento completo de viagens. Funciona offline.",
    images: ["/screenshots/dashboard-light.png"],
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