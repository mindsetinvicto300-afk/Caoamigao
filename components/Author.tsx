import React from 'react';

const Author: React.FC = () => {
  return (
    <section id="clinic" className="bg-[#f5f5e9] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <div className="shrink-0">
            <img 
              alt="Dr. Fernando Barreto" 
              className="rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px] border-4 border-[#385e3c]/20" 
              src="https://res.cloudinary.com/ddoqlftps/image/upload/v1763261386/4e52b59e-5d6c-43a8-83cf-60edf625a65d_xs6928.jpg" 
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conheça quem está por trás do protocolo</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              O <strong>Protocolo Dermatite Zero</strong> foi desenvolvido pelo <strong>Dr. Fernando Barreto</strong>, fundador da Clínica Cão Amigão, que, após anos de prática e pesquisa, consolidou um método natural, eficaz e acessível para tratar a dermatite canina na raiz do problema, devolvendo a alegria de viver para milhares de cães.
            </p>
            <p className="mt-4 text-sm font-bold text-[#385e3c]">
              Dr. Fernando Barreto, Especialista em Dermatologia Veterinária
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;