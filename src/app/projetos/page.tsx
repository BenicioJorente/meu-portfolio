"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const meusProjetos = [
  {
    title: "Instituto Guarda Animal",
    description: "Plataforma focada em adoção e causa animal. Desenvolvida com foco em performance e uma experiência de usuário fluida e intuitiva.",
    video: "/videos/guarda-animal.mp4", 
    image: "/images/image_40d70e.jpg",   
    tags: ["UX Design", "Performance", "Causa Social"],
    link: "https://institutoguardaanimal.com.br"
  }
];

export default function Projetos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO DA PÁGINA - Ajustado para mobile */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 bg-slate-50/50 min-h-[calc(100vh-112px)] py-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] md:h-[400px] bg-logo-light/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl relative z-10 flex flex-col items-center w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-logo-dark leading-[1.1]">
            Conheça alguns dos <br />
            <span className="text-logo-light drop-shadow-sm italic">meus projetos</span>
          </h1>

          <p className="mt-6 md:mt-8 text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium px-4">
             Sites rápidos, seguros e testados para converter
          </p>

          <div className="mt-10 md:mt-20 animate-bounce flex flex-col items-center gap-3">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Role para explorar
            </span>
            <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
               <div className="w-1 h-1.5 md:h-2 bg-logo-light rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTAGEM DE PROJETOS - Ajustado gap e layout vertical */}
      <section id="trabalhos" className="max-w-6xl mx-auto py-16 md:py-32 px-6 border-t border-slate-50">
        <div className="flex flex-col gap-24 md:gap-40">
          {meusProjetos.map((projeto, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center group/card">
              
              {/* TEXTO DO PROJETO */}
              <div className="lg:col-span-5 flex flex-col items-start border-l-4 border-logo-light/20 pl-6 order-2 lg:order-1">
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {projeto.tags.map(tag => (
                    <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-logo-light bg-logo-light/5 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-logo-dark mb-4 md:mb-6 tracking-tight italic">{projeto.title}</h2>
                <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6 md:mb-8">
                  {projeto.description}
                </p>
                
                <Link 
                  href={projeto.link}
                  target="_blank"
                  className="inline-flex items-center gap-3 text-sm font-bold text-logo-dark group/link transition-all"
                >
                  <span className="border-b-2 border-logo-dark pb-1 group-hover/link:border-logo-light group-hover/link:text-logo-light transition-all">
                    Ver projeto online
                  </span>
                  <span className="w-8 h-8 rounded-full bg-logo-dark text-white flex items-center justify-center group-hover/link:bg-logo-light transition-all">
                    →
                  </span>
                </Link>
              </div>

              {/* CONTAINER DO MÍDIA (VÍDEO/IMAGEM) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative w-full rounded-[24px] md:rounded-[40px] p-1.5 md:p-2 bg-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] md:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.08)] border border-slate-100 transition-all duration-700 group-hover/card:shadow-logo-light/20 md:group-hover/card:-translate-y-2">
                  
                  <div className="relative w-full rounded-[18px] md:rounded-[32px] overflow-hidden bg-slate-50">
                    {projeto.video ? (
                      <video autoPlay loop muted playsInline className="w-full h-auto object-contain block max-h-[500px] md:max-h-none">
                        <source src={projeto.video} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="relative aspect-video">
                        <Image src={projeto.image} alt={projeto.title} fill className="object-cover object-top" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA Final - Ajustado arredondamento para mobile */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-40 text-center">
        <div className="bg-logo-dark rounded-[40px] md:rounded-[60px] p-10 md:p-24 text-white shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 italic tracking-tight text-white px-2">Vamos criar algo <br className="hidden md:block" /> extraordinário juntos?</h2>
            <Link 
              href="https://wa.me/67991520216" 
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-logo-light text-white font-bold rounded-full hover:scale-105 hover:bg-emerald-500 transition-all shadow-xl shadow-logo-light/20 text-sm md:text-base"
            >
              Me chame no WhatsApp
            </Link>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 md:w-96 h-64 md:h-96 bg-logo-light/10 blur-[80px] md:blur-[120px] rounded-full group-hover:bg-logo-light/20 transition-all duration-1000" />
        </div>
      </section>
    </main>
  );
}