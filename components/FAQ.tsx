import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Serve para todas as raças?",
    answer: "Sim! O protocolo foi desenvolvido considerando a fisiologia canina geral, funcionando para cães de todos os portes e raças."
  },
  {
    question: "Funciona para todos os tipos de dermatite?",
    answer: "O protocolo atua no fortalecimento do sistema imunológico e na saúde da pele de dentro para fora, sendo eficaz para dermatites alérgicas, atópicas e fúngicas leves a moderadas."
  },
  {
    question: "Preciso comprar ingredientes caros?",
    answer: "Não! O foco é utilizar ingredientes naturais, acessíveis e que você encontra facilmente em supermercados ou feiras."
  },
  {
    question: "Recebo na hora?",
    answer: "Sim! Assim que o pagamento for confirmado, você recebe o acesso ao material completo no seu e-mail cadastrado."
  },
  {
    question: "E se não funcionar para meu cão?",
    answer: "Confiamos tanto no método que oferecemos uma garantia de 7 dias. Se você aplicar e não ver resultados, devolvemos seu dinheiro."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#f5f5e9] py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">❓ DÚVIDAS FREQUENTES</h2>
          </div>
          
          <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b last:border-0 border-gray-100">
                <h3>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex flex-1 items-center justify-between w-full py-5 px-6 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;