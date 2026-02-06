"use client";
import { useState } from "react";

export default function Home() {
  // Tipagem do estado para evitar erros de compilação
  const [formData, setFormData] = useState({ 
    nome: "", 
    cidade: "",
    quarto: "Quarto de Casal",
    pessoas: "2 Pessoas",
    checkin: "",
    checkout: "" 
  });

  // Correção TypeScript: Definindo o tipo da string de ID
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const zapUrl = "https://wa.me/5543998419973";

  // SOLUÇÃO DO ERRO: Parâmetros agora possuem tipagem 'string'
  const selecionarQuarto = (nomeQuarto: string, qtdPessoas: string) => {
    setFormData({ ...formData, quarto: nomeQuarto, pessoas: qtdPessoas });
    scrollToSection("contato");
  };

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
            Conforto e qualidade em Ribeirão do Pinhal
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection("quartos")} className="bg-orange-600 hover:bg-orange-500 px-10 py-4 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">Ver Tarifário</button>
            <button onClick={() => scrollToSection("contato")} className="border border-slate-700 hover:bg-slate-800 px-10 py-4 rounded-full font-bold transition-all">Reservar Agora</button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE TARIFÁRIO */}
      <section id="quartos" className="py-24 px-6 bg-[#020617]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic text-orange-400 tracking-wider uppercase">Tabela de Diárias</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-sm">Todas as nossas suítes possuem Café da Manhã e Wi-Fi inclusos.</p>
          
          <div className="overflow-x-auto rounded-3xl border border-slate-800 shadow-2xl">
            <table className="w-full text-left border-collapse bg-slate-900/30">
              <thead>
                <tr className="bg-slate-800/80 text-orange-400 uppercase text-xs tracking-widest">
                  <th className="p-6">Acomodação</th>
                  <th className="p-6 text-center">Capacidade</th>
                  <th className="p-6 text-center">Valor</th>
                  <th className="p-6 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { nome: "Quarto Individual", cap: "1 Pessoa", preco: "130,00" },
                  { nome: "Quarto de Casal", cap: "2 Pessoas", preco: "150,00" },
                  { nome: "Quarto Duplo (2 Camas)", cap: "2 Pessoas", preco: "180,00" },
                  { nome: "Quarto Triplo", cap: "3 Pessoas", preco: "220,00" },
                  { nome: "Quarto Quádruplo", cap: "4 Pessoas", preco: "260,00" },
                  { nome: "Quarto Quíntuplo (Família)", cap: "5 Pessoas", preco: "300,00" },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                    <td className="p-6 font-bold text-white">{item.nome}</td>
                    <td className="p-6 text-center text-slate-400 text-sm">{item.cap}</td>
                    <td className="p-6 text-center text-orange-400 font-bold">R$ {item.preco}</td>
                    <td className="p-6 text-right">
                      <button 
                        onClick={() => selecionarQuarto(item.nome, item.cap)}
                        className="bg-orange-600/10 hover:bg-orange-600 text-orange-500 hover:text-white border border-orange-600/50 px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase"
                      >
                        Selecionar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CONTATO E PRÉ-CADASTRO */}
      <section id="contato" className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold italic text-orange-400 uppercase tracking-tighter">Nossa Estrutura</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <span className="text-orange-500 text-xl font-bold">🏠</span>
                </div>
                <div>
                  <p className="text-xs uppercase font-black text-slate-500">Acomodações</p>
                  <p className="font-bold text-slate-200">Quartos Suítes com Banheiro Privado</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <span className="text-orange-500 text-xl font-bold">❄️</span>
                </div>
                <div>
                  <p className="text-xs uppercase font-black text-slate-500">Conforto Térmico</p>
                  <p className="font-bold text-slate-200">Ar-Condicionado em todas as unidades</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <span className="text-orange-500 text-xl font-bold">📺</span>
                </div>
                <div>
                  <p className="text-xs uppercase font-black text-slate-500">Tecnologia e Lazer</p>
                  <p className="font-bold text-slate-200">Smart TV e Frigobar</p>
                </div>
              </div>

              <div className="p-6 bg-slate-900/60 border border-orange-500/20 rounded-3xl mt-4 shadow-xl text-sm space-y-2 text-center md:text-left">
                 <h4 className="text-orange-400 font-bold uppercase text-[10px] mb-2 tracking-widest">Garantia de Reserva (PIX)</h4>
                 <p className="text-slate-300 font-mono">CNPJ: 44.085.251/0001-91</p>
                 <p className="text-slate-500 text-[10px] uppercase">Laila Aparecida De Almeida</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-black p-8 md:p-10 rounded-[3rem] border border-slate-800 shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-8 text-center uppercase italic tracking-tighter">Solicitar Pré-Reserva</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Nome Completo" className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 border border-transparent text-white transition-all" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
              <input type="text" placeholder="Sua Cidade" className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 border border-transparent text-white transition-all" value={formData.cidade} onChange={(e) => setFormData({...formData, cidade: e.target.value})} />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 ml-2 mb-1 block">Check-in</label>
                  <input type="date" className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 text-white transition-all text-xs" onChange={(e) => setFormData({...formData, checkin: e.target.value})} />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 ml-2 mb-1 block">Check-out</label>
                  <input type="date" className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 text-white transition-all text-xs" onChange={(e) => setFormData({...formData, checkout: e.target.value})} />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-slate-500 ml-2 mb-1 block">Acomodação Selecionada</label>
                <select value={formData.quarto} className="w-full bg-slate-800 p-4 rounded-2xl outline-none border border-orange-500/30 text-white font-bold" onChange={(e) => setFormData({...formData, quarto: e.target.value})}>
                  <option value="Quarto Individual">Quarto Individual (1 Pessoa)</option>
                  <option value="Quarto de Casal">Quarto de Casal (2 Pessoas)</option>
                  <option value="Quarto Duplo (2 Camas)">Quarto Duplo (2 Camas)</option>
                  <option value="Quarto Triplo">Quarto Triplo (3 Pessoas)</option>
                  <option value="Quarto Quádruplo">Quarto Quádruplo (4 Pessoas)</option>
                  <option value="Quarto Quíntuplo (Família)">Quarto Quíntuplo (5 Pessoas)</option>
                </select>
              </div>

              <button onClick={() => {
                const inDate = formData.checkin ? formData.checkin.split('-').reverse().join('/') : "A definir";
                const outDate = formData.checkout ? formData.checkout.split('-').reverse().join('/') : "A definir";
                const msg = `Olá! Gostaria de solicitar uma reserva:\n\n🏨 *Acomodação:* ${formData.quarto}\n👤 *Hóspede:* ${formData.nome}\n🏙️ *Cidade:* ${formData.cidade}\n📅 *Check-in:* ${inDate}\n📅 *Check-out:* ${outDate}`;
                window.open(`${zapUrl}?text=${encodeURIComponent(msg)}`, "_blank");
              }} className="w-full bg-orange-600 hover:bg-orange-500 py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 mt-4">
                Solicitar Pré-Reserva
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE INFORMAÇÕES ADICIONAIS E LOCALIZAÇÃO */}
      <section className="py-24 px-6 bg-[#020617] border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold italic text-orange-400 uppercase tracking-tighter">Informações Importantes</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="text-orange-500 font-bold">🕒</div>
                   <div>
                     <p className="text-sm font-bold text-white uppercase tracking-wider">Horários</p>
                     <p className="text-slate-400 text-sm">Check-in: a partir das 13h00</p>
                     <p className="text-slate-400 text-sm">Check-out: até às 12h00</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="text-orange-500 font-bold">🍽️</div>
                   <div>
                     <p className="text-sm font-bold text-white uppercase tracking-wider">Alimentação</p>
                     <p className="text-slate-400 text-sm italic">O Jantar é cobrado adicionalmente.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="text-orange-500 font-bold">📞</div>
                   <div>
                     <p className="text-sm font-bold text-white uppercase tracking-wider">Contatos para Reservas</p>
                     <p className="text-slate-400 text-sm">(43) 98417-2179 | (43) 98859-6168</p>
                     <p className="text-slate-400 text-sm">(43) 3551-1588</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold italic text-orange-400 uppercase tracking-tighter">Localização</h3>
              <div className="p-6 bg-slate-900/50 rounded-3xl border border-slate-800 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Rodovia Jamil Muchaili, PR 218, KM 47, Ribeirão do Pinhal/PR.
                </p>
                <p className="text-[10px] text-orange-500/80 italic uppercase font-bold">
                  Saída para a cidade de Nova Fátima.
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rodovia+Jamil+Muchaili+PR+218+KM+47+Ribeirao+do+Pinhal" 
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 rounded-xl font-bold text-xs uppercase hover:bg-orange-500 hover:text-white transition-all w-full justify-center shadow-xl"
                >
                  Sincronizar no Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-700 border-t border-slate-900 bg-black">
        <p className="font-bold tracking-[0.3em] text-slate-500 text-xs uppercase italic">Pousada do Dudu</p>
        <p className="text-[10px] mt-2 opacity-30 uppercase tracking-[0.5em]">Ribeirão do Pinhal - PR | Deus Abençoe Grandemente</p>
      </footer>
    </div>
  );
}