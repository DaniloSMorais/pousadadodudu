"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ 
    nome: "", 
    quarto: "Standard",
    pessoas: "2 Pessoas",
    checkin: "",
    checkout: "" 
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const zapUrl = "https://wa.me/5543998419973";

  return (
    <div className="bg-[#0f172a] text-white font-sans selection:bg-orange-500/30 min-h-screen pb-20">
      
      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a 
        href={zapUrl} 
        target="_blank" 
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all hover:scale-110 active:scale-95 animate-bounce md:animate-none"
        title="Fale Conosco"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-40"
            alt="Pousada do Dudu"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]"></div>
        </div>

        <div className="w-full max-w-5xl relative z-10">
          <svg viewBox="0 0 900 120" className="w-full h-auto drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
            <text x="50%" y="90" textAnchor="middle" className="font-black italic" style={{ fontSize: "75px", fill: "white", fontFamily: "sans-serif" }}>
              POUSADA DO <tspan style={{ fill: "url(#grad)" }}> DUDU</tspan>
            </text>
          </svg>
          <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mt-6 mb-10 italic">
            Conforto e tranquilidade em Ribeirão do Pinhal
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection("quartos")} className="bg-orange-600 hover:bg-orange-500 px-10 py-4 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">Ver Quartos</button>
            <button onClick={() => scrollToSection("contato")} className="border border-slate-700 hover:bg-slate-800 px-10 py-4 rounded-full font-bold transition-all">Reservar Agora</button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE QUARTOS */}
      <section id="quartos" className="py-24 px-6 bg-[#020617]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 italic text-orange-400 tracking-wider uppercase">Nossas Acomodações</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            
            <div className="flex flex-col p-8 bg-slate-900/50 border border-slate-800 rounded-3xl transition-all duration-300 hover:scale-105 hover:border-orange-500/50 shadow-xl group">
              <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">Suíte Standard</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">Conforto essencial para quem busca descanso. Equipada com cama box casal, ar condicionado e Wi-Fi.</p>
              <blockquote className="border-l-4 border-orange-500 pl-4 py-2 mb-8 italic text-slate-400 text-xs">
                "Café da manhã completo incluso na diária e garagem privativa."
              </blockquote>
              <div className="mt-auto">
                <button onClick={() => {setFormData({...formData, quarto: "Standard"}); scrollToSection("contato")}} className="inline-block w-full text-center bg-transparent border border-orange-600 text-orange-400 font-bold py-3 rounded-xl hover:bg-orange-600 hover:text-white transition-all uppercase text-xs">Selecionar</button>
              </div>
            </div>

            <div className="flex flex-col p-8 bg-gradient-to-br from-[#1e1b4b] to-black border border-orange-500/30 rounded-3xl transition-all duration-300 hover:scale-105 shadow-2xl relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-4 text-orange-400 uppercase tracking-tight italic">Luxo Family</h3>
              <ul className="space-y-4 mb-8 text-sm text-slate-300 flex-grow">
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">✓</span> Amplo espaço para até 4 pessoas.</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">✓</span> Varanda privativa com vista.</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">✓</span> Frigobar e Smart TV 50".</li>
              </ul>
              <div className="mt-auto">
                <button onClick={() => {setFormData({...formData, quarto: "Luxo Family"}); scrollToSection("contato")}} className="inline-block w-full text-center bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-500 transition-all uppercase text-sm shadow-lg shadow-orange-900/20">Escolher esta</button>
              </div>
            </div>

            <div className="flex flex-col p-8 bg-slate-900/50 border border-slate-800 rounded-3xl transition-all duration-300 hover:scale-105 hover:border-amber-500/50 shadow-xl group">
              <h3 className="text-2xl font-bold mb-4 text-amber-400 uppercase tracking-tight">Suíte Master</h3>
              <p className="text-slate-300 mb-6 text-sm">A melhor experiência da pousada. Banheira de hidromassagem e enxoval premium.</p>
              <div className="mt-auto">
                <button onClick={() => {setFormData({...formData, quarto: "Master"}); scrollToSection("contato")}} className="inline-block w-full text-center bg-amber-600 text-white font-bold py-3 rounded-xl hover:bg-amber-500 transition-all text-sm uppercase">Selecionar VIP</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE CONTATO E PRÉ-CADASTRO */}
      <section id="contato" className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold italic text-orange-400 uppercase tracking-tighter">Nossa Estrutura</h3>
            <p className="text-slate-400 leading-relaxed">Localizada estrategicamente em Ribeirão do Pinhal, oferecemos:</p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl group">
                <div className="p-3 bg-orange-500/20 rounded-xl group-hover:scale-110 transition-transform">
                  <span className="text-orange-500 text-xl font-bold">☕</span>
                </div>
                <div>
                  <p className="text-xs uppercase font-black text-slate-500">Café da Manhã</p>
                  <p className="font-bold text-slate-200">Incluso na diária</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl group">
                <div className="p-3 bg-orange-500/20 rounded-xl group-hover:scale-110 transition-transform">
                  <span className="text-orange-500 text-xl font-bold">🚗</span>
                </div>
                <div>
                  <p className="text-xs uppercase font-black text-slate-500">Estacionamento</p>
                  <p className="font-bold text-slate-200">Garagem segura e monitorada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-black p-8 md:p-10 rounded-[3rem] border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center uppercase italic tracking-tighter">Fazer Pré-Reserva</h3>
            <div className="space-y-4">
              
              <input 
                type="text" 
                placeholder="Seu Nome" 
                className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 border border-transparent text-white transition-all"
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 ml-2 mb-1 block">Check-in</label>
                  <input 
                    type="date" 
                    className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 border border-transparent text-white transition-all"
                    onChange={(e) => setFormData({...formData, checkin: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 ml-2 mb-1 block">Check-out</label>
                  <input 
                    type="date" 
                    className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 border border-transparent text-white transition-all"
                    onChange={(e) => setFormData({...formData, checkout: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-slate-500 ml-2 mb-1 block">Quantidade de Pessoas</label>
                <select 
                  className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 border border-transparent text-white transition-all appearance-none cursor-pointer"
                  onChange={(e) => setFormData({...formData, pessoas: e.target.value})}
                >
                  <option value="1 Pessoa">1 Pessoa</option>
                  <option value="2 Pessoas">2 Pessoas</option>
                  <option value="3 Pessoas">3 Pessoas</option>
                  <option value="4 Pessoas">4 Pessoas</option>
                  <option value="5 Pessoas">5 Pessoas (Grupo)</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-slate-500 ml-2 mb-1 block">Acomodação</label>
                <select 
                  value={formData.quarto}
                  className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 border border-transparent text-white transition-all appearance-none cursor-pointer"
                  onChange={(e) => setFormData({...formData, quarto: e.target.value})}
                >
                  <option value="Standard">Suíte Standard</option>
                  <option value="Luxo Family">Suíte Luxo Family</option>
                  <option value="Master">Suíte Master</option>
                </select>
              </div>

              <button 
                onClick={() => {
                  const inDate = formData.checkin ? formData.checkin.split('-').reverse().join('/') : "A definir";
                  const outDate = formData.checkout ? formData.checkout.split('-').reverse().join('/') : "A definir";
                  const msg = `Olá! Me chamo ${formData.nome}. Gostaria de solicitar uma reserva:\n\n🏨 *Quarto:* ${formData.quarto}\n👥 *Pessoas:* ${formData.pessoas}\n📅 *Check-in:* ${inDate}\n📅 *Check-out:* ${outDate}`;
                  window.open(`${zapUrl}?text=${encodeURIComponent(msg)}`, "_blank");
                }}
                className="w-full bg-orange-600 hover:bg-orange-500 py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 mt-4"
              >
                Solicitar Reserva
              </button>
            </div>
          </div>

        </div>
      </section>

      <footer className="py-12 text-center text-slate-700 border-t border-slate-900 bg-black">
        <p className="font-bold tracking-[0.3em] text-slate-500 text-xs uppercase">Pousada do Dudu</p>
        <p className="text-[10px] mt-2 opacity-30 uppercase tracking-[0.5em]">Ribeirão do Pinhal - PR</p>
      </footer>
    </div>
  );
}