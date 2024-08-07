import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Filipe Gallo | Desenvolvedor",
  description:
    "Seja muito bem-vindo ao site oficial do desenvolvedor Filipe Gallo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
