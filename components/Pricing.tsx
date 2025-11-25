import React, { useState } from 'react';
import { Check, ShieldCheck, Flame } from 'lucide-react';

const Pricing: React.FC = () => {
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  return (
    <section id="plans" className="bg-[#f5f5e9] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">👇 ESCOLHA O MELHOR PLANO PARA O SEU CÃO</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 max-w-md mx-auto items-start">
          
          {/* INTENSIVO PLAN */}
          <div className="rounded-lg bg-white text-gray-900 shadow-2xl border-2 border-[#4ade80] relative ring-4 ring-[#4ade80]/20 flex flex-col transform hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#4ade80] text-[#064e3b] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
              Mais Escolhido
            </div>
            <div className="flex flex-col space-y-1.5 p-6 items-center text-center bg-gray-50/50 rounded-t-lg">
              <div className="font-semibold tracking-tight text-2xl text-[#16a34a]">PROTOCOLO INTENSIVO</div>
              <div className="text-sm text-gray-500 max-w-[280px]">Para dermatite persistente, inflamações, lambedura excessiva e alergias recorrentes</div>
              <p className="text-xs font-bold text-[#16a34a] mt-1 bg-[#dcfce7] px-2 py-0.5 rounded-sm">+2.436 tutores escolheram esta oferta</p>
            </div>
            
            <div className="p-6 pt-0 space-y-4 text-center flex-grow">
              <div className="mt-2">
                <img 
                  alt="Protocolo Completo" 
                  className="mx-auto rounded-md shadow-md w-[300px]" 
                  src="https://res.cloudinary.com/ddoqlftps/image/upload/v1763249165/Protoc%C3%B3lo_Completo_ep8q40.png" 
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-1 mt-6">
                <p className="text-xl text-red-500 line-through font-medium">De R$69,90</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-xl font-medium text-gray-700">por</span>
                  <p className="text-5xl font-black bg-gradient-to-b from-[#16a34a] to-[#4ade80] bg-clip-text text-transparent">R$27,90</p>
                </div>
              </div>

              <ul className="space-y-3 text-gray-600 list-none p-0 text-sm text-left mt-6">
                {[
                  "Lista de Alimentos Permitidos e Proibidos",
                  "Loções e Sprays Naturais",
                  "Passo a passo completo",
                  "Acesso vitalício"
                ].map((item, i) => (
                   <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#385e3c] mt-0.5 shrink-0" />
                    <div>{item}</div>
                  </li>
                ))}
                {[
                  "BÔNUS: Cardápio com +50 Receitas Pet Fáceis e Saudáveis",
                  "BÔNUS: Petiscos Poderosos: Aumente a Imunidade e Longevidade do seu Cão com Suplementos em forma de Petiscos Caseiros",
                  "BÔNUS: Guia Banho Anti-Carrapatos",
                  "BÔNUS: Receitas Especiais para cães com alergias graves",
                  "BÔNUS: Ensine seu Cão a Aceitar novos alimentos"
                ].map((item, i) => (
                  <li key={`b-${i}`} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#385e3c] mt-0.5 shrink-0" />
                    <div className="text-gray-900 font-semibold">{item}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center p-6 pt-0 flex-col gap-2 mt-auto">
              <a 
                href="https://checkout.caoamigao.sbs/VCCL1O8SCI58" 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-14 rounded-md px-8 w-full font-bold text-xl bg-[#4ade80] hover:bg-[#4ade80]/90 text-[#064e3b] shadow-lg transition-all animate-pulse hover:animate-none"
              >
                QUERO O INTENSIVO
              </a>
            </div>
          </div>

          {/* ESSENTIAL PLAN */}
          <div className="rounded-lg border text-gray-900 shadow-lg flex flex-col cursor-pointer bg-white transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col space-y-1.5 p-6 items-center text-center">
              <div className="font-semibold tracking-tight text-2xl text-gray-800">PROTOCOLO ESSENCIAL</div>
              <div className="text-sm text-gray-500">Ideal para dermatite leve a moderada</div>
            </div>
            
            <div className="p-6 pt-0 space-y-4 text-center flex-grow">
              <div className="mt-4 mb-6">
                <img 
                  alt="Protocolo Básico" 
                  className="mx-auto w-[200px]" 
                  src="https://res.cloudinary.com/ddoqlftps/image/upload/v1763250377/Protocolo_Basico_bytzdf.png" 
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-lg text-red-500 line-through">De R$49,90</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-lg font-medium text-gray-700">por</span>
                  <p className="text-4xl font-black text-[#385e3c]">R$ 9,90</p>
                </div>
              </div>

              <ul className="space-y-2 text-gray-600 list-none p-0 text-sm mt-4">
                {[
                  "Lista de alimentos permitidos e proibidos",
                  "Loções e Sprays Naturais",
                  "Passo a passo completo",
                  "Acesso vitalício"
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-[#385e3c]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center p-6 pt-0 flex-col gap-4 mt-auto">
              <button 
                onClick={() => setShowUpsellModal(true)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-white h-12 rounded-md px-8 w-full font-bold text-lg bg-[#385e3c] hover:bg-[#385e3c]/90 transition-colors"
              >
                QUERO O ESSENCIAL
              </button>
            </div>
          </div>

        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm font-medium">📥 Receba imediatamente no seu email</p>
          <p className="text-xs text-gray-500">O protocolo é enviado em PDF, acessível pelo celular, computador ou tablet.</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>Compra 100% Segura</span>
          </div>
          <div className="flex items-center gap-4 opacity-80">
            <img 
              alt="Métodos de pagamento" 
              width="300" 
              height="45" 
              src="https://res.cloudinary.com/ddoqlftps/image/upload/v1763521173/pagamentos222_ihittk.png" 
            />
          </div>
        </div>
      </div>

      {/* UPSELL MODAL */}
      {showUpsellModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#fcfdec] rounded-xl shadow-2xl max-w-lg w-full p-8 relative border-4 border-dashed border-[#eab308]/30 animate-in zoom-in-95 duration-200">
            <div className="text-center flex flex-col items-center gap-4">
              
              <h3 className="text-2xl md:text-3xl font-black text-gray-800 uppercase leading-none">
                <span className="text-[#ef4444]">ESPERE!</span> OFERTA EXCLUSIVA
              </h3>
              
              <p className="text-gray-700 text-lg leading-snug">
                Leve o <span className="font-bold text-[#16a34a]">Plano Completo</span> com <span className="font-bold">40% de desconto</span> e acelere os resultados!
              </p>

              <div className="flex flex-col items-center mt-2">
                <p className="text-gray-500 text-lg line-through decoration-red-500">De R$ 27,90 por apenas:</p>
                <p className="text-6xl font-black text-[#1f2937] tracking-tighter">R$ 19,90</p>
              </div>

              <div className="bg-[#dc2626] text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transform -rotate-1">
                <Flame className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" />
                OFERTA BLACK FRIDAY
              </div>

              <a 
                href="https://checkout.caoamigao.sbs/VCCL1O8SCI9M"
                className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-[#064e3b] font-black text-xl py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all uppercase mt-2"
              >
                SIM, QUERO O COMPLETO!
              </a>

              <a 
                href="https://checkout.caoamigao.sbs/VCCL1O8SCI5W"
                className="text-gray-500 hover:text-gray-700 underline text-sm hover:no-underline font-medium mt-2"
              >
                Não, obrigado. Quero apenas o básico.
              </a>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Pricing;