"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Estrutura idêntica à de Projetos que você enviou */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 bg-slate-50/50 min-h-[calc(100vh-112px)] py-20">
        
        {/* Detalhe de luz sutil no fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] md:h-[400px] bg-logo-light/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

        {/* Container do Texto - Sem flex-1 para não esticar e causar cortes */}
        <div className="max-w-4xl relative z-10 flex flex-col items-center w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-logo-dark leading-[1.1]">
            Desenvolvimento com qualidade<br className="hidden sm:block" />
            <span className="text-logo-light drop-shadow-sm block sm:inline mt-2 sm:mt-0"> Sem retrabalho</span>
          </h1>

          <p className="mt-5 md:mt-5 text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium px-4">
            Desenvolvo software completo aliado a testes e qualidade desde o início.
          </p>

          {/* Indicador de Scroll - Com mt-10/20 igual ao da sua página de Projetos */}
          <div className="mt-5 md:mt-5 relative z-10">
            <a 
              href="#especialidades" 
              className="animate-bounce flex flex-col items-center gap-3 group cursor-pointer transition-opacity hover:opacity-80"
            >
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 group-hover:text-logo-light transition-colors">
                Escolha uma especialidade
              </span>
              <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-slate-200 rounded-full flex justify-center p-1 group-hover:border-logo-light transition-colors">
                  <div className="w-1 h-1.5 md:h-2 bg-logo-light rounded-full"></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Especialidades - Mantida original */}
      <section 
        id="especialidades" 
        className="max-w-6xl mx-auto py-16 md:py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 scroll-mt-24"
      >
        {/* Card Desenvolvimento */}
        <Link 
          href="/projetos" 
          className="group relative block p-8 md:p-10 rounded-[24px] md:rounded-[32px] transition-all duration-500 overflow-hidden
                     bg-white/40 backdrop-blur-md border border-slate-100 shadow-sm 
                     hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] hover:border-logo-light/20 md:hover:-translate-y-3"
        >
          <div className="relative z-10">
            <div className="mb-6 h-14 w-14 md:h-16 md:w-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm transition-all duration-500
                           group-hover:shadow-[0_0_20px_5px_rgba(22,200,166,0.15)]">
              <Image src="/images/dev-icon.png" alt="Desenvolvimento Web" width={32} height={32} className="md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-logo-dark mb-3 md:mb-4 tracking-tight">Desenvolvimento Web</h3>
            <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed font-medium">
              Criação de sites e aplicações rápidas, seguras e otimizadas para o Google, focadas em trazer resultados reais para o seu negócio.
            </p>
            <span className="inline-flex items-center text-logo-light font-bold text-xs md:text-sm uppercase tracking-wider">
              Ver projetos realizados <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
            </span>
          </div>
        </Link>

        {/* Card QA */}
        <Link 
          href="/qa" 
          className="group relative block p-8 md:p-10 rounded-[24px] md:rounded-[32px] transition-all duration-500 overflow-hidden
                     bg-white/40 backdrop-blur-md border border-slate-100 shadow-sm 
                     hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] hover:border-logo-light/20 md:hover:-translate-y-3"
        >
          <div className="relative z-10">
            <div className="mb-6 h-14 w-14 md:h-16 md:w-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm transition-all duration-500
                           group-hover:shadow-[0_0_20px_5px_rgba(22,200,166,0.15)]">
              <Image src="/images/qa-icon.png" alt="Quality Assurance" width={32} height={32} className="md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-logo-dark mb-3 md:mb-4 tracking-tight">Quality Assurance (QA)</h3>
            <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed font-medium">
              Automação de testes (E2E, API), análise de riscos e processos de CI/CD para garantir entregas contínuas com zero defeitos.
            </p>
            <span className="inline-flex items-center text-logo-light font-bold text-xs md:text-sm uppercase tracking-wider">
              Ver especialidades técnicas <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
            </span>
          </div>
        </Link>
      </section>
    </main>
  );
}