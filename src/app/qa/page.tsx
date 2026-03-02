"use client";

import { useEffect } from "react";
import Image from "next/image";

const techStack = [
    { name: "Cypress", icon: "/images/cypress-icon.png" },
    { name: "GitHub", icon: "/images/github-icon.png" },
    { name: "Postman", icon: "/images/postman-icon.png" },
    { name: "JavaScript", icon: "/images/js-icon.png" },
    { name: "TypeScript", icon: "/images/ts-icon.png" },
    { name: "Tailwind", icon: "/images/tailwind-icon.png" },
];

const skills = [
    {
        category: "Automação",
        items: ["Web E2E (Cypress/Playwright)", "Testes de API (REST)", "Mobile Testing", "Component Testing"]
    },
    {
        category: "Metodologias",
        items: ["Shift-Left Testing", "BDD / Gherkin", "TDD", "ISTQB Standards"]
    },
    {
        category: "Ferramentas & CI/CD",
        items: ["GitHub Actions", "Docker", "Jira / Azure DevOps", "Postman / Insomnia"]
    }
];

export default function QA() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-white">
            {/* SEÇÃO TÉCNICA - Hero com ajuste de padding mobile */}
            <section className="relative pt-16 md:pt-20 pb-16 md:pb-20 px-6 bg-slate-50/50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] md:h-[400px] bg-logo-light/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 md:gap-12">
                        <div className="max-w-2xl text-center lg:text-left">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-logo-light">Quality Assurance Engineer</span>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter text-logo-dark mt-4 mb-6 md:mb-8 leading-tight">
                                Especialista em <br className="hidden sm:block" /> Automação e Qualidade
                            </h1>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                                Foco em garantir a confiabilidade do software através de estratégias de testes automatizados,
                                análise de riscos e processos de CI/CD. Experiência na implementação de pirâmide de testes
                                para redução de bugs em produção.
                            </p>
                        </div>

                        {/* Grid de Stack Rápido - 3 colunas fixas no mobile para não quebrar */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4 bg-white p-5 md:p-6 rounded-[24px] md:rounded-[32px] shadow-sm border border-slate-100 w-full max-w-[350px] lg:max-w-none">
                            {techStack.map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center gap-2 p-1">
                                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                                        <Image src={tech.icon} alt={tech.name} width={32} height={32} className="object-contain" />
                                    </div>
                                    <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-tighter text-center">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* DETALHAMENTO TÉCNICO - Grid responsivo de cards */}
            <section className="max-w-6xl mx-auto py-16 md:py-24 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((skill) => (
                        <div key={skill.category} className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-100 bg-white hover:border-logo-light/30 transition-all shadow-sm">
                            <h3 className="text-lg md:text-xl font-bold text-logo-dark mb-4 md:mb-6 border-b border-slate-50 pb-4 italic">{skill.category}</h3>
                            <ul className="space-y-3 md:space-y-4">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm md:text-base text-slate-600 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-logo-light mt-2 flex-shrink-0"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* SEÇÃO DE FORMAÇÃO E CERTIFICAÇÕES - Ajuste de flex para vertical no mobile */}
            <section className="max-w-6xl mx-auto px-6 mb-20 md:mb-32">
                <div className="bg-logo-dark rounded-[32px] md:rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden group">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        
                        {/* Lado Esquerdo: Formação */}
                        <div className="space-y-8 md:space-y-10">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold italic border-b border-white/10 pb-4 mb-6 md:mb-8">Formação Acadêmica</h2>
                                <div className="flex items-start gap-4">
                                    <div className="w-1 h-10 md:h-12 bg-logo-light rounded-full flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold">Engenharia de Software</h4>
                                        <p className="text-slate-400 text-sm md:text-base font-medium">Bacharelado Concluído</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-logo-light">Certificações Técnicas</h3>
                                <ul className="space-y-3 md:space-y-4">
                                    {["Cypress do Zero ao Intermediário — Udemy", "Introdução ao Teste de Software — USP", "Automação de Testes com Cypress (Básico) — Udemy"].map((cert, i) => (
                                        <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-slate-300">
                                            <span className="text-logo-light font-bold">✓</span>
                                            <span>{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Lado Direito: Call to Action do Currículo */}
                        <div className="flex flex-col items-center text-center justify-center space-y-6 bg-white/5 p-8 md:p-10 rounded-[24px] md:rounded-[32px] border border-white/10 backdrop-blur-sm">
                            <div className="space-y-3">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">Currículo Completo</h3>
                                <p className="text-slate-400 text-xs md:text-sm max-w-xs mx-auto">
                                    Para detalhes sobre experiências anteriores e projetos acadêmicos, baixe o arquivo abaixo.
                                </p>
                            </div>

                            <a
                                href="/curriculo-benicio-jorente.pdf"
                                download
                                className="flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#00D1A0] text-white text-sm md:text-base font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-[#00D1A0]/20 active:scale-95 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Baixar Currículo (PDF)
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}