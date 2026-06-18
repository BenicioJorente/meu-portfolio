"use client";

import { useState, MouseEvent, useEffect, useRef } from "react";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function Home() {
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Efeito 6: Partículas
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  // Efeito 4: Intersection Observer para animação de entrada
  const [inView, setInView] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, cardIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredCard(cardIndex);
  };

  return (
    <div className="relative min-h-screen bg-[#050B1A] overflow-hidden selection:bg-blue-500/30 selection:text-blue-200">

      {/* Efeito 6: Partículas */}
      <Particles
        className="absolute inset-0 -z-10"
        init={particlesInit}
        options={{
          particles: {
            number: { 
              value: 50,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: { value: "#3B82F6" },
            opacity: { 
              value: 0.1,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.05
              }
            },
            size: { 
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                minimumValue: 0.5
              }
            },
            move: { 
              enable: true, 
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out"
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#3B82F6",
              opacity: 0.05,
              width: 1
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              onClick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                quantity: 4
              }
            }
          },
          detectRetina: true
        }}
      />

      <div className="ambient-glow top-[-10%] left-[-10%] opacity-40" />
      <div className="ambient-glow top-[25%] right-[-10%] opacity-30" />
      <div className="ambient-glow top-[65%] left-[-5%] opacity-25" />

      {/* 1. HERO SECTION*/}
      <section id="inicio" className="relative min-h-[calc(100vh-96px)] flex items-center max-w-7xl mx-auto px-6 pt-36 pb-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

          {/* LADO ESQUERDO:*/}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F8FAFC]">
              Olá, eu sou o <br />
              <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#38BDF8]">
                Benício Jorente
              </span>
            </h1>

            {/* QA e Clientes de Sites */}
            <p className="text-base md:text-lg text-[#94A3B8] max-w-xl leading-relaxed">
              Graduado em Engenharia de Software. Especialista em garantir a estabilidade de sistemas através de <strong className="text-[#F8FAFC]">automação de testes E2E com Cypress</strong>. Desenvolvo também <strong className="text-[#F8FAFC]">sites institucionais e lojas virtuais di alta performance</strong>, unindo o melhor da qualidade técnica ao design comercial para o seu negócio.
            </p>

            {/*BOTÕES*/}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#contato"
                className="px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-mono text-sm transition-all shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20"
              >
                Quer criar um site?
              </a>
              <a
                href="#sobre"
                className="px-6 py-3 rounded-xl bg-[#0B1120] hover:bg-[#111827] text-[#94A3B8] hover:text-[#F8FAFC] border border-white/5 hover:border-white/10 font-mono text-sm transition-all"
              >
                Experiencias QA
              </a>
            </div>
          </div>

          {/* LADO DIREITO */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md glass-card rounded-2xl overflow-hidden animate-float">

              {/* Barra macOS */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0B1120]/60">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                </div>
                <span className="text-xs font-mono text-[#475569]">biografia.js</span>
              </div>

              {/* Corpo do Editor de Código */}
              <div className="p-6 font-mono text-sm leading-relaxed text-[#94A3B8] bg-[#0B1120]/30">
                <div>
                  <span className="text-[#F43F5E]">const</span> <span className="text-[#3B82F6]">benicio</span> = &#123;
                </div>
                <div className="pl-6 mt-1">
                  <span className="text-[#38BDF8]">role</span>: <span className="text-[#34D399]">'QA Automation Engineer'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#38BDF8]">degree</span>: <span className="text-[#34D399]">'Software Engineering'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#38BDF8]">experience</span>: [<span className="text-[#34D399]">'QA Automation'</span>, <span className="text-[#34D399]">'Web Dev'</span>],
                </div>
                <div className="pl-6">
                  <span className="text-[#38BDF8]">tools</span>: [<span className="text-[#34D399]">'Cypress'</span>, <span className="text-[#34D399]">'Postman'</span>, <span className="text-[#34D399]">'TypeScript' </span>],
                </div>
                <div className="pl-6">
                  <span className="text-[#38BDF8]">availableForWork</span>: <span className="text-[#FB923C]">true</span>
                </div>
                <div>&#125;;</div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. SEÇÃO SOBRE MIM & EXPERIÊNCIA*/}
      <section id="sobre" className="relative max-w-7xl mx-auto px-6 py-24 z-10 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Box Esquerdo - Efeito 2: Glassmorphism + 3D */}
          <div className="lg:col-span-6 flex flex-col gap-6 p-8 rounded-2xl bg-[#0B1120]/50 border border-white/5 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#3B82F6]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <h2 className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]">
              &lt;sobre_mim /&gt;
            </h2>
            <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
              Sou um profissional focado na interseção entre engenharia de software e garantia de qualidade. Minha formação como engenheiro de software me dá uma base sólida para ler estruturas de código complexas e antecipar falhas antes mesmo que elas cheguem à produção.
            </p>
            <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
              Adoro construir scripts de automação robustos que simplificam o ciclo de release e trazem total segurança e previsibilidade para o time de desenvolvimento.
            </p>

            {/* Competências*/}
            <div className="mt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] mb-3">// Core Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['Cypress', 'Postman', 'JavaScript', 'TypeScript', 'Next.js', 'Node.js', 'Git', 'Scrum'].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-md bg-[#111827] text-xs font-mono text-[#38BDF8] border border-white/5 hover:border-blue-500/30 hover:text-[#F8FAFC] transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:-translate-y-0.5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Box Direito - Efeito 2: Glassmorphism + 3D */}
          <div className="lg:col-span-6 flex flex-col gap-6 p-8 rounded-2xl bg-[#0B1120]/50 border border-white/5 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#3B82F6]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <h2 className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]">
              &lt;experiencia /&gt;
            </h2>

            {/* Efeito 4: Linha do tempo com animação de entrada */}
            <div 
              ref={timelineRef}
              className={`flex flex-col gap-8 relative border-l border-white/10 pl-6 ml-2 mt-2 transition-all duration-1000 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              {/* Experiência 1: Autônomo */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#050B1A] border-2 border-[#38BDF8] group-hover:bg-[#38BDF8] transition-colors duration-300" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 mb-2">
                  <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    Desenvolvedor Web <span className="text-xs font-normal text-[#475569] font-mono">| Autônomo</span>
                  </h3>
                  <span className="text-xs font-mono text-[#60A5FA] bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    2026 - Atual 
                  </span>
                </div>
                <ul className="text-sm text-[#94A3B8] space-y-2 list-disc list-inside">
                  <li>Arquitetura e criação de aplicações completas com TypeScript, Next.js e Tailwind CSS.</li>
                  <li>Desenvolvimento de e-commerces avançados integrados diretamente à API do Shopify.</li>
                  <li>Foco em refatoração e estruturação de código altamente testável e interfaces limpas.</li>
                </ul>
              </div>

              {/* Experiência 2: Before */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#050B1A] border-2 border-[#38BDF8] group-hover:bg-[#38BDF8] transition-colors duration-300" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 mb-2">
                  <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    Analista de Qualidade de Software <span className="text-xs font-normal text-[#475569] font-mono">| Before</span>
                  </h3>
                  <span className="text-xs font-mono text-[#60A5FA] bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    2023 - 2024 
                  </span>
                </div>
                <ul className="text-sm text-[#94A3B8] space-y-2 list-disc list-inside">
                  <li>Automação completa de cenários de teste de ponta a ponta (E2E) com Cypress e JavaScript.</li>
                  <li>Estruturação e execução de regressões e testes funcionais em fluxos de negócios críticos.</li>
                  <li>Mapeamento, validação e testes integrados de endpoints de API utilizando Postman.</li>
                  <li>Garantia ativa de qualidade em rituais ágeis de desenvolvimento Scrum.</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. SEÇÃO PROJETOS E PORTFÓLIO*/}
      <section id="projetos" className="relative max-w-7xl mx-auto px-6 py-10 z-10 scroll-mt-20">

        <div className="flex flex-col gap-3 mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F8FAFC]">
            Projetos
          </h2>
          <p className="text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            Aqui estão projetos de testes e desenvolvimento de sites para clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

          {/* CARD 1: Laboratório de Automação Cypress */}
          <div 
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              borderColor: hoveredCard === 1 ? "transparent" : "rgba(255, 255, 255, 0.05)",
              backgroundImage: hoveredCard === 1
                ? `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
                : "none",
            }}
            className="relative flex flex-col rounded-xl overflow-hidden bg-[#0B1120]/90 border transition-all duration-300 hover:-translate-y-2 group"
          >
            <div
              className={`absolute inset-0 pointer-events-none rounded-xl z-0 transition-opacity duration-300 ${
                hoveredCard === 1 ? "opacity-100" : "max-md:opacity-100 md:opacity-0 max-md:animate-pulse"
              }`}
              style={{
                background: hoveredCard === 1
                  ? `radial-gradient(500px circle at ${coords.x}px ${coords.y}px, rgba(56, 189, 248, 0.45), transparent 40%)`
                  : `radial-gradient(180px circle at 50% 50%, rgba(56, 189, 248, 0.3), transparent 60%)`,
                margin: "-1px",
                padding: "1px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              }}
            />
            <div className="relative h-48 w-full bg-[#2563EB] flex items-center justify-center p-6 overflow-hidden z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              <div className="relative w-4/5 h-32 bg-[#111827] rounded-lg shadow-2xl border border-emerald-500/20 transform translate-y-6 group-hover:translate-y-4 transition-transform duration-500 p-4 font-mono text-[10px] text-slate-400">
                <div className="text-emerald-400">✓ cypress run --spec e2e/</div>
                <div className="text-emerald-400">✓ fluxos_criticos.js (14s)</div>
                <div className="text-[#38BDF8] mt-1">All specs passed!</div>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between gap-6 z-10 bg-[#0B1120]/90 rounded-b-xl">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#F8FAFC]">
                  Cypress Automation Lab
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Criação de suíte de testes de ponta a ponta (E2E) em JavaScript para automação de plataformas web. Cobertura integral de cenários funcionais complexos e validação contínua.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {['Cypress', 'JavaScript', 'E2E Testing', 'Automation'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#050B1A] border border-white/5 text-xs font-mono text-[#38BDF8]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5">
                  <a href="https://github.com/BenicioJorente" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors">
                    <span>GitHub</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Site da ONG (Instituto Guarda Animal) */}
          <div 
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              borderColor: hoveredCard === 2 ? "transparent" : "rgba(255, 255, 255, 0.05)",
              backgroundImage: hoveredCard === 2
                ? `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
                : "none",
            }}
            className="relative flex flex-col rounded-xl overflow-hidden bg-[#0B1120]/90 border transition-all duration-300 hover:-translate-y-2 group"
          >
            <div
              className={`absolute inset-0 pointer-events-none rounded-xl z-0 transition-opacity duration-300 ${
                hoveredCard === 2 ? "opacity-100" : "max-md:opacity-100 md:opacity-0 max-md:animate-pulse"
              }`}
              style={{
                background: hoveredCard === 2
                  ? `radial-gradient(500px circle at ${coords.x}px ${coords.y}px, rgba(56, 189, 248, 0.45), transparent 40%)`
                  : `radial-gradient(180px circle at 50% 50%, rgba(56, 189, 248, 0.3), transparent 60%)`,
                margin: "-1px",
                padding: "1px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              }}
            />
            <div className="relative h-48 w-full overflow-hidden z-10">
              <video 
                src="/videos/guarda-animal.mp4" 
                muted 
                autoPlay 
                loop 
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between gap-6 z-10 bg-[#0B1120]/90 rounded-b-xl">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#F8FAFC]">
                  Instituto Guarda Animal
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Desenvolvimento de plataforma institucional web para a ONG de proteção animal. Interface moderna, responsiva e otimizada para engajamento de voluntários e captação de recursos.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#050B1A] border border-white/5 text-xs font-mono text-[#38BDF8]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5">
                  <a href="https://www.institutoguardaanimal.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors">
                    <span>Acessar Site</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: Mineiro Representações MS */}
          <div 
            onMouseMove={(e) => handleMouseMove(e, 3)}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              borderColor: hoveredCard === 3 ? "transparent" : "rgba(255, 255, 255, 0.05)",
              backgroundImage: hoveredCard === 3
                ? `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
                : "none",
            }}
            className="relative flex flex-col rounded-xl overflow-hidden bg-[#0B1120]/90 border transition-all duration-300 hover:-translate-y-2 group"
          >
            <div
              className={`absolute inset-0 pointer-events-none rounded-xl z-0 transition-opacity duration-300 ${
                hoveredCard === 3 ? "opacity-100" : "max-md:opacity-100 md:opacity-0 max-md:animate-pulse"
              }`}
              style={{
                background: hoveredCard === 3
                  ? `radial-gradient(500px circle at ${coords.x}px ${coords.y}px, rgba(56, 189, 248, 0.45), transparent 40%)`
                  : `radial-gradient(180px circle at 50% 50%, rgba(56, 189, 248, 0.3), transparent 60%)`,
                margin: "-1px",
                padding: "1px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              }}
            />
            <div className="relative h-48 w-full overflow-hidden z-10">
              <video 
                src="/videos/site-mineiro.mp4" 
                muted 
                autoPlay 
                loop 
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between gap-6 z-10 bg-[#0B1120]/90 rounded-b-xl">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#F8FAFC]">
                  Mineiro Representações
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Criação de site corporativo voltado para apresentação de serviços de representação comercial em MS. Foco em velocidade de carregamento e conversão de leads de negócios.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'HTML', 'CSS', 'Landing Page'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#050B1A] border border-white/5 text-xs font-mono text-[#38BDF8]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5">
                  <a href="https://www.mineirorepresentacoesms.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors">
                    <span>Acessar Site</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/*4. SEÇÃO DE CONTATO*/}
      <section id="contato" className="relative max-w-7xl mx-auto px-6 py-24 z-10 scroll-mt-20">
        <div className="p-8 md:p-12 rounded-2xl bg-[#0B1120]/50 border border-white/5 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Lado Esquerdo: Textos institucionais e Infos rápidas */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569]">
                // In Touch
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC]">
                Vamos construir algo confiável juntos?
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
              Seja para estruturar a automação de testes do seu produto ou desenvolver uma plataforma moderna do zero, estou à disposição para novos desafios. Sinta-se à disposição para enviar uma mensagem! 
            </p>
            <div className="flex flex-col gap-3 font-mono text-xs text-[#94A3B8] pt-4 border-t border-white/5">
              <div>
                <span className="text-[#38BDF8]">location:</span> 'Campo Grande - MS'
              </div>
              <div>
                <span className="text-[#38BDF8]">email:</span> 'jorente.benicio@gmail.com'
              </div>
              <div>
                <span className="text-[#38BDF8]">whatsapp:</span> '(67) 99152-0216' 
              </div>
            </div>
          </div>

          {/* Lado Direito: Grid  Redes/Canais */}
          <div className="lg:col-span-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:jorente.benicio@gmail.com"
              className="p-5 rounded-xl bg-[#050B1A]/60 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col gap-2 group text-left"
            >
              <span className="text-xs font-mono text-[#38BDF8]">mail.send()</span>
              <span className="text-base font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">E-mail Direto</span>
              <span className="text-xs text-[#475569]">jorente.benicio@gmail.com </span>
            </a>

            <a
              href="https://wa.me/5567991520216"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#050B1A]/60 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col gap-2 group text-left"
            >
              <span className="text-xs font-mono text-emerald-400">whatsapp.open()</span>
              <span className="text-base font-bold text-[#F8FAFC] group-hover:text-emerald-400 transition-colors">WhatsApp</span>
              <span className="text-xs text-[#475569]">(67) 99152-0216 </span>
            </a>

            <a
              href="https://github.com/BenicioJorente"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#050B1A]/60 border border-white/5 hover:border-purple-500/30 transition-all flex flex-col gap-2 group text-left"
            >
              <span className="text-xs font-mono text-purple-400">github.profile()</span>
              <span className="text-base font-bold text-[#F8FAFC] group-hover:text-purple-400 transition-colors">GitHub Repository</span>
              <span className="text-xs text-[#475569]">github.com/BenicioJorente </span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#050B1A]/60 border border-white/5 hover:border-blue-400/30 transition-all flex flex-col gap-2 group text-left"
            >
              <span className="text-xs font-mono text-blue-400">linkedin.connect()</span>
              <span className="text-base font-bold text-[#F8FAFC] group-hover:text-blue-400 transition-colors">LinkedIn Profile</span>
              <span className="text-xs text-[#475569]">Conectar na rede profissional</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}