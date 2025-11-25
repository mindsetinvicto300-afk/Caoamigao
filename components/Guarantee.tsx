import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section id="guarantee" className="bg-[#f5f5e9] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto text-center">
          <img 
            alt="Selo de Garantia de 7 Dias" 
            width="150" 
            height="150" 
            className="object-contain shrink-0" 
            src="https://www.pilatesparagestantes.com.br/wp-content/uploads/2023/07/Selo-de-Garantia-de-7-Dias-PNG-Transparente-Sem-Fundo-1.png" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Satisfação Garantida – Risco Zero por 7 Dias</h2>
            <p className="mt-4 text-lg text-gray-600">
              Se o protocolo não gerar melhora visível, devolvemos <strong>100% do seu dinheiro</strong>, sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;