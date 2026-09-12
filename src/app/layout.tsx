import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emptyxz CLI | Template Blank",
  description: "Inicie seu projeto",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
