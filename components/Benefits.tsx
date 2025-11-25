import React from 'react';
import { CheckCircle } from 'lucide-react';

const bonuses = [
  {
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763849489/Prancheta_12_mlzvz1.png",
    title: "+50 Receitas Fáceis e Naturais para seu pet",
    description: "Cardápio com 50 receitas naturais para acelerar a recuperação.",
    originalPrice: "R$ 69,90",
    free: true
  },
  {
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763241354/Prancheta_5_kal2j0.png",
    title: "Petiscos Poderosos",
    description: "Aumente a Imunidade e Longevidade do seu Cão com Suplementos em forma de Petiscos Caseiros.",
    originalPrice: "R$ 59,90",
    free: true
  },
  {
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763241353/Prancheta_2_kkxgrj.png",
    title: "Ensine seu cão a aceitar novos alimentos",
    description: "Aprenda o passo-a-passo para introduzir novos alimentos de forma segura.",
    originalPrice: "R$ 49,90",
    free: true
  },
  {
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763241354/Prancheta_3_xg1gnp.png",
    title: "Banho Anti-Carrapatos",
    description: "Guia do Banho Anti-Carrapatos natural e seguro.",
    originalPrice: "R$ 45,90",
    free: true
  },
  {
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763241354/Prancheta_4_f0n0cq.png",
    title: "Receitas para Cães com Alergias Graves",
    description: "Receitas especiais para cães com alergia grave.",
    originalPrice: "R$ 59,90",
    free: true
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="what-is-it" className="bg-[#f5f5e9] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1f2937]">O que você recebe:</h2>
        </div>

        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="flex flex-col gap-6 p-8 bg-white rounded-lg shadow-sm items-center border border-gray-100">
            <div className="text-left w-full">
              <ul className="space-y-4 text-gray-600 text-base">
                {[
                  "Guia para identificar a causa raiz da dermatite em qualquer raça.",
                  <span>Passo a passo claro para reduzir a coceira em até <strong>48 horas</strong>.</span>,
                  <span>Cardápio de receitas que reduzem e até eliminam a dermatite, com <strong>ingredientes baratos e fáceis de encontrar</strong></span>,
                  "Receitas de loções e sprays caseiros que acalmam inflamações.",
                  "Passo-a-passo de preparo"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#385e3c] mt-1 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-8 text-center">
            <h3 className="text-3xl font-bold mt-2 text-[#385e3c]">🎁 BÔNUS EXCLUSIVOS</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {bonuses.map((bonus, idx) => (
              <div key={idx} className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <img 
                    alt={bonus.title} 
                    className="rounded-md object-cover w-20 h-20 shadow-sm" 
                    src={bonus.image} 
                  />
                  <div className="text-left">
                    <p className="font-bold text-[#385e3c] leading-tight">{bonus.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{bonus.description}</p>
                  </div>
                </div>
                <div className="flex justify-center items-baseline gap-2 pt-2 border-t border-dashed border-gray-200">
                  <span className="text-red-500 line-through text-sm">{bonus.originalPrice}</span>
                  <span className="font-bold text-[#385e3c]">R$ 0,00 (Grátis)</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-4 text-base text-gray-500">
            Receba <strong>todos os bônus gratuitamente</strong>, conforme o protocolo escolhido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;