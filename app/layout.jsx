import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Caio Evaristo | Web Developer",
  description: "Portfolio pessoal de Caio Evaristo, desenvolvedor web full-stack com experiência em React, Next.js e outras tecnologias modernas.",
  keywords: ["Web Developer", "React", "Next.js", "Full Stack", "Portfolio"],
  authors: [{ name: "Caio Evaristo" }],
  openGraph: {
    title: "Caio Evaristo | Web Developer",
    description: "Portfolio pessoal de Caio Evaristo, desenvolvedor web full-stack",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caio Evaristo | Web Developer",
    description: "Portfolio pessoal de Caio Evaristo, desenvolvedor web full-stack",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
