"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("Enviando...");

    const response = await fetch("https://formspree.io/f/mykdqejk", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("Sucesso! Entrarei em contato.");
      form.reset();
    } else {
      setStatus("Erro! Me chame no WhatsApp.");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO COMPACTO - Ajustado para não ocupar tela demais no mobile */}
      <section className="relative pt-16 md:pt-20 pb-10 md:pb-12 px-6 bg-slate-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-logo-light/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter text-logo-dark leading-[1.1]">
            Vamos tirar sua ideia <br />
            <span className="text-logo-light drop-shadow-sm italic">do papel?</span>
          </h1>
        </div>
      </section>

      {/* GRID DE CONTATO - Empilhamento inteligente */}
      <section className="max-w-5xl mx-auto py-8 md:py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* COLUNA 1: INFO - Centralizada no mobile, esquerda no desktop */}
        <div className="space-y-10 py-4 text-center md:text-left order-2 md:order-1">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-logo-light mb-6">Contatos Diretos</h2>
            <div className="space-y-5">
              <a href="mailto:jorente.benicio@gmail.com" className="group flex flex-col sm:flex-row items-center gap-3 text-base md:text-lg font-bold text-logo-dark hover:text-logo-light transition-colors">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:shadow-md transition-all mb-2 sm:mb-0">
                  <Image src="/images/gmail.png" alt="" width={20} height={20} />
                </div>
                jorente.benicio@gmail.com
              </a>
              <a href="https://wa.me/5567991520216" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row items-center gap-3 text-base md:text-lg font-bold text-logo-dark hover:text-logo-light transition-colors">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:shadow-md transition-all mb-2 sm:mb-0">
                  <Image src="/images/dev-icon.png" alt="" width={20} height={20} className="grayscale group-hover:grayscale-0 transition-all" />
                </div>
                WhatsApp (Disponível)
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-logo-light mb-6">Redes Profissionais</h2>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/beniciojorente/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-logo-light/40 transition-all hover:-translate-y-1">
                <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="https://github.com/BenicioJorente" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-logo-light/40 transition-all hover:-translate-y-1">
                <Image src="/images/github-icon.png" alt="GitHub" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        {/* COLUNA 2: FORMULÁRIO - Mais destaque no mobile */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-50 relative overflow-hidden order-1 md:order-2">
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div className="grid grid-cols-1 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Nome</label>
                <input required name="nome" type="text" placeholder="Seu nome completo" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-logo-light/10 focus:bg-white outline-none transition-all text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">E-mail</label>
                <input required name="email" type="email" placeholder="seu@email.com" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-logo-light/10 focus:bg-white outline-none transition-all text-sm" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Objetivo</label>
              <div className="relative">
                <select name="objetivo" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-logo-light/10 focus:bg-white outline-none transition-all text-sm appearance-none cursor-pointer">
                  <option>Novo Projeto Web</option>
                  <option>QA / Testes</option>
                  <option>Outros</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Mensagem</label>
              <textarea required name="mensagem" rows={4} placeholder="Como posso ajudar seu negócio hoje?" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-logo-light/10 focus:bg-white outline-none transition-all text-sm resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-4.5 bg-logo-dark text-white font-bold rounded-xl hover:bg-logo-light transition-all active:scale-[0.98] text-sm shadow-xl shadow-logo-dark/10 mt-2">
              Enviar Mensagem
            </button>
            
            {status && (
              <div className={`mt-4 p-3 rounded-lg text-center text-xs font-bold animate-fade-in ${
                status.includes("Sucesso") ? "bg-green-50 text-green-600" : "bg-red-50 text-logo-light"
              }`}>
                {status}
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}