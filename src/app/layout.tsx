"use client";

import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="pt-br" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <title>Benício Jorente | Portfolio</title>
        <meta name="description" content="Graduado em Engenharia de Software e Especialista em QA Automation e Web Dev." />
        <link rel="icon" href="/images/logo-ultima.png" type="image/png" />
      </head>

      <body className="font-sans antialiased bg-[#050B1A] text-[#F8FAFC]">

        {/* NAVBAR*/}
        <header className="fixed top-0 left-0 right-0 z-100 bg-[#050B1A]/80 backdrop-blur-md border-b border-white/5">
          <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

            {/* LOGO */}
            <Link href="#inicio" className="flex items-center relative z-110">
              <Image
                src="/images/logo-ultima.png"
                alt="Benício Jorente Logo"
                width={450}
                height={250}
                priority
                className="h-16 md:h-24 w-auto object-contain brightness-110"
              />
            </Link>

            {/* Menu Desktop*/}
            <ul className="hidden md:flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
              <li>
                <Link href="#inicio" className="px-5 py-2.5 rounded-full transition-all hover:text-[#F8FAFC] hover:bg-white/5 font-mono">
                  &lt;início /&gt;
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="px-5 py-2.5 rounded-full transition-all hover:text-[#F8FAFC] hover:bg-white/5 font-mono">
                  &lt;sobre /&gt;
                </Link>
              </li>
              <li>
                <Link href="#projetos" className="px-5 py-2.5 rounded-full transition-all hover:text-[#F8FAFC] hover:bg-white/5 font-mono">
                  &lt;projetos /&gt;
                </Link>
              </li>
              <li className="ml-4">
                <Link href="#contato" className="px-6 py-2.5 rounded-xl transition-all bg-[#3B82F6] text-white font-mono hover:bg-[#60A5FA] shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
                  contato.init()
                </Link>
              </li>
            </ul>

            {/* Botão Mobile Hamburger/Close */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-110 w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute block h-0.5 w-full bg-[#F8FAFC] transition-all duration-300 ${isMenuOpen ? "rotate-45 top-2" : "top-0"}`} />
                <span className={`absolute block h-0.5 w-full bg-[#F8FAFC] transition-all duration-300 top-2 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute block h-0.5 w-full bg-[#F8FAFC] transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-2" : "top-4"}`} />
              </div>
            </button>
          </nav>

          {/* MENU MOBILE DARK */}
          <div
            className={`absolute top-full left-0 w-full bg-[#050B1A]/95 backdrop-blur-lg border-b border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-400px opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col font-mono p-4 gap-2">
              <Link href="#inicio" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-sm hover:text-[#3B82F6] transition-colors border-b border-white/5">
                // início
              </Link>
              <Link href="#sobre" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-sm hover:text-[#3B82F6] transition-colors border-b border-white/5">
                // sobre mim
              </Link>
              <Link href="#projetos" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-sm hover:text-[#3B82F6] transition-colors border-b border-white/5">
                // projetos & QA
              </Link>
              <Link href="#contato" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-sm text-[#3B82F6] transition-colors">
                // contato
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main>
          {children}
        </main>

        {/* BOTÃO VOLTAR AO TOPO PREMIUM */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-60 p-4 rounded-xl bg-[#0B1120] text-[#3B82F6] border border-white/10 shadow-2xl transition-all duration-500 ${
            showScrollButton ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          } hover:bg-[#3B82F6] hover:text-white flex items-center justify-center group`}
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* FOOTER PREMIUM DARK */}
        <footer className="bg-[#0B1120] border-t border-white/5 pt-16 pb-8 mt-20 relative overflow-hidden">
          <div className="ambient-glow -top-20 -right-20 opacity-30" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8] font-mono">// Navegação</span>
                <nav className="flex flex-col gap-2.5">
                  <Link href="#inicio" className="text-sm font-medium text-[#94A3B8] hover:text-[#3B82F6] transition-colors">Início</Link>
                  <Link href="#sobre" className="text-sm font-medium text-[#94A3B8] hover:text-[#3B82F6] transition-colors">Sobre Mim</Link>
                  <Link href="#projetos" className="text-sm font-medium text-[#94A3B8] hover:text-[#3B82F6] transition-colors">Projetos & QA</Link>
                </nav>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8] font-mono">// Redes e Contato</span>
                <div className="flex flex-col gap-3">
                  <a href="https://www.linkedin.com/in/beniciojorente/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#94A3B8] hover:text-[#3B82F6] flex items-center gap-2 transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com/BenicioJorente" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#94A3B8] hover:text-[#3B82F6] flex items-center gap-2 transition-colors">
                    GitHub
                  </a>
                  <a href="mailto:jorente.benicio@gmail.com" className="text-sm font-medium text-[#94A3B8] hover:text-[#3B82F6] flex items-center gap-2 transition-colors">
                    E-mail
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 text-[11px] font-mono text-[#475569] text-center">
              &copy; {new Date().getFullYear()} beniciojorente.com.br — Built with Next.js & Tailwind
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}