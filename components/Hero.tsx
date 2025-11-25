import React from 'react';
import { Clock, Wallet, Apple, HeartPulse } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPlans = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#385e3c] flex flex-col items-center justify-center text-center text-white py-12 px-4 overflow-x-hidden">
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-4xl">
        <img 
          alt="Ícone de um cachorro" 
          width="100" 
          height="100" 
          className="rounded-full border-4 border-white/80 shadow-lg object-cover" 
          src="https://res.cloudinary.com/ddoqlftps/image/upload/v1763259532/cropped_circle_image_dqoh1c.png" 
        />
        
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Diga Adeus à Coceira, Feridas e Sofrimento do Seu Cão — De Forma <span className="text-yellow-400">Natural, Rápida e Comprovada</span>
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-white/90">
            Milhares de papais e mamães de pet já estão tratando a dermatite canina em casa de forma fácil, natural e com ingredientes baratos.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[
            { icon: <Clock className="h-5 w-5 text-yellow-400" />, text: "Alívio em 48h" },
            { icon: <Wallet className="h-5 w-5 text-yellow-400" />, text: "Ingredientes Acessíveis" },
            { icon: <Apple className="h-5 w-5 text-yellow-400" />, text: "Receitas Saudáveis" },
            { icon: <HeartPulse className="h-5 w-5 text-yellow-400" />, text: "Aumenta a Longevidade Canina" }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 p-3 rounded-lg flex flex-col md:flex-row items-center justify-center gap-2 text-sm backdrop-blur-sm">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 w-full max-w-[400px] mx-auto shadow-2xl rounded-lg overflow-hidden">
          <div style={{ position: 'relative', width: '100%', height: '0px', paddingBottom: '177.778%' }}>
            <iframe 
              allow="fullscreen" 
              allowFullScreen 
              height="100%" 
              src="https://streamable.com/e/5j18f9?loop=0" 
              width="100%" 
              style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }}
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-8">
          <a 
            href="#plans" 
            onClick={scrollToPlans}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md h-auto py-4 px-8 text-lg font-bold bg-[#4ade80] hover:bg-[#4ade80]/90 text-[#064e3b] shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-slow uppercase"
          >
            Eu Quero o Guia Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;