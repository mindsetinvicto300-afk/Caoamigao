import React from 'react';
import { CheckCircle } from 'lucide-react';

const bonuses = [
  {
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763849489/Prancheta_12_mlzvz1.png",
    title: "Módulo Nutrição Natural (+50 Receitas Fáceis)",
    description: "Fortaleça a saúde da pele e melhore o bem-estar geral do seu cão.",
    originalPrice: "69,90",
    free: true
  },
  {
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763241354/Prancheta_5_kal2j0.png",
    title: "Módulo Imunidade: Petiscos Poderosos",
    description: "Receitas de suplementos em forma de petisco — cães amam e a imunidade agradece!",
    originalPrice: "59,90",
    free: true
  },
  {
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763241354/Prancheta_3_xg1gnp.png",
    title: "Módulo Proteção Natural: Banho Anti-Carrapatos",
    description: "Guia prático de proteção natural, sem produtos químicos.",
    originalPrice: "45,90",
    free: true
  },
  {
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763241354/Prancheta_4_f0n0cq.png",
    title: "Módulo Alimentos Seguros para Cães com Alergias Graves",
    description: "Receitas exclusivas para cães sensíveis e com alergias severas.",
    originalPrice: "59,90",
    free: true
  },
  {
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763241353/Prancheta_2_kkxgrj.png",
    title: "Módulo Adaptação Alimentar",
    description: "Aprenda o passo a passo para introduzir novos alimentos com sucesso.",
    originalPrice: "49,90",
    free: true
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="what-is-it" className="bg-[#f5f5e9] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1f2937]">
            💚 Apresentamos o Protocolo Dermatite Zero® — Método Barreto Natural
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            O único método veterinário natural que trata a causa real da dermatite, não apenas os sintomas.
          </p>
        </div>

        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="flex flex-col gap-6 p-8 bg-white rounded-lg shadow-sm items-center border border-gray-100">
            <h3 className="text-xl font-bold text-[#385e3c] w-full text-left">🌿 O Que Você Vai Aprender e Colocar em Prática:</h3>
            <div className="text-left w-full">
              <ul className="space-y-4 text-gray-600 text-base">
                {[
                  "Identifique a causa raiz da dermatite do seu cão, independentemente da raça",
                  <span>Aplique o passo a passo comprovado que reduz coceiras e vermelhidões em até <strong>48h</strong></span>,
                  "Prepare cardápios naturais e acessíveis que fortalecem pele, imunidade e vitalidade",
                  "Faça loções e sprays caseiros que acalmam inflamações e regeneram a pele",
                  <strong>Tudo com ingredientes simples, baratos e 100% seguros.</strong>
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
            <h3 className="text-3xl font-bold mt-2 text-[#385e3c]">🎁 BÔNUS EXCLUSIVOS — Grátis por Tempo Limitado!</h3>
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
                <div className="flex justify-start items-baseline gap-2 pt-2 border-t border-dashed border-gray-200">
                   <span className="text-red-500 line-through text-sm">R$ {bonus.originalPrice}</span>
                   <span className="font-bold text-[#385e3c] text-sm">R$ 0,00 (Grátis)</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-4 text-base text-gray-500 font-medium">
            Receba <strong>todos os bônus gratuitamente</strong>, conforme o protocolo escolhido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;