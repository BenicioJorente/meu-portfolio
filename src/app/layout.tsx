"use client";

import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const geistSans = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${geistSans.className} antialiased bg-white text-slate-900`}>

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-200">
          <nav className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between bg-white">

            {/* LOGO ORIGINAL */}
            <Link href="/" className="flex items-center relative z-[110]">
              <Image
                src="/images/logo-ultima.png"
                alt="Benício Jorente Logo"
                width={450}
                height={250}
                priority
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>

            {/* Menu Desktop - Editado apenas as cores do item ativo */}
            <ul className="hidden md:flex items-center gap-2 text-sm font-semibold">
              <li>
                <Link href="/" className={`px-5 py-2.5 rounded-full transition-all ${isActive("/") ? "bg-slate-50 text-logo-light" : "text-slate-600 hover:bg-slate-100"}`}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/projetos" className={`px-5 py-2.5 rounded-full transition-all ${isActive("/projetos") ? "bg-slate-50 text-logo-light" : "text-slate-600 hover:bg-slate-100"}`}>
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/qa" className={`px-5 py-2.5 rounded-full transition-all ${isActive("/qa") ? "bg-slate-50 text-logo-light" : "text-slate-600 hover:bg-slate-100"}`}>
                  QA & Testes
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/contato" className={`px-7 py-3 rounded-full transition-all ${isActive("/contato") ? "bg-slate-50 text-logo-light" : "bg-slate-900 text-white hover:bg-logo-light"}`}>
                  Contato
                </Link>
              </li>
            </ul>

            {/* Botão Close/Hamburguer (X) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute block h-0.5 w-full bg-slate-900 transition-all duration-300 ${isMenuOpen ? "rotate-45 top-2" : "top-0"}`} />
                <span className={`absolute block h-0.5 w-full bg-slate-900 transition-all duration-300 top-2 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute block h-0.5 w-full bg-slate-900 transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-2" : "top-4"}`} />
              </div>
            </button>
          </nav>

          {/* MENU MOBILE - ESTILO INSTITUTO GUARDA ANIMAL */}
          <div
            className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <nav className="flex flex-col">
              <Link
                href="/"
                className={`px-6 py-5 text-base font-bold uppercase tracking-wider border-b border-slate-100 transition-colors ${isActive("/") ? "text-logo-light" : "text-slate-900"}`}
              >
                Início
              </Link>
              <Link
                href="/projetos"
                className={`px-6 py-5 text-base font-bold uppercase tracking-wider border-b border-slate-100 transition-colors ${isActive("/projetos") ? "text-logo-light" : "text-slate-900"}`}
              >
                Projetos
              </Link>
              <Link
                href="/qa"
                className={`px-6 py-5 text-base font-bold uppercase tracking-wider border-b border-slate-100 transition-colors ${isActive("/qa") ? "text-logo-light" : "text-slate-900"}`}
              >
                QA & Testes
              </Link>
              <Link
                href="/contato"
                className={`px-6 py-5 text-base font-bold uppercase tracking-wider transition-colors ${isActive("/contato") ? "text-logo-light" : "text-slate-900"}`}
              >
                Contato
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTEÚDO */}
        <main className="pt-28">
          {children}
        </main>

        {/* BOTÃO VOLTAR AO TOPO */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-[60] p-4 rounded-2xl bg-logo-dark text-white shadow-2xl transition-all duration-500 ${showScrollButton ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            } hover:bg-logo-light flex items-center justify-center`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* FOOTER */}

        <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10 mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Site</span>
                <nav className="flex flex-col gap-4">
                  <Link href="/" className={`text-sm font-semibold transition-colors ${isActive("/") ? "text-logo-light" : "text-slate-600 hover:text-logo-light"}`}>
                    Início
                  </Link>
                  <Link href="/projetos" className={`text-sm font-semibold transition-colors ${isActive("/projetos") ? "text-logo-light" : "text-slate-600 hover:text-logo-light"}`}>
                    Projetos
                  </Link>
                  <Link href="/qa" className={`text-sm font-semibold transition-colors ${isActive("/qa") ? "text-logo-light" : "text-slate-600 hover:text-logo-light"}`}>
                    QA & Testes
                  </Link>
                </nav>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Social</span>
                <div className="flex flex-col gap-4">
                  <a href="https://www.linkedin.com/in/beniciojorente/" target="_blank" rel="noopener noreferrer" className="group text-sm font-semibold text-slate-600 hover:text-logo-light flex items-center gap-3 transition-all">
                    <Image src="/images/linkedin-icon.png" alt="" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/BenicioJorente" target="_blank" rel="noopener noreferrer" className="group text-sm font-semibold text-slate-600 hover:text-logo-light flex items-center gap-3 transition-all">
                    <Image src="/images/github-icon.png" alt="" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    GitHub
                  </a>
                  <a href="mailto:jorente.benicio@gmail.com" className="group text-sm font-semibold text-slate-600 hover:text-logo-light flex items-center gap-3 transition-all">
                    <Image src="/images/gmail.png" alt="" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    E-mail
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
              © {new Date().getFullYear()} Benício Jorente
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}