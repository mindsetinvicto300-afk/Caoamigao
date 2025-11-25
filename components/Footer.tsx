import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5e9] border-t border-gray-300 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 items-center">
          <a href="/" className="flex items-center gap-2">
            <img 
              alt="Dermatite Zero logo" 
              width="150" 
              height="40" 
              className="object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" 
              src="https://res.cloudinary.com/ddoqlftps/image/upload/v1763260956/c%C3%A3o_amig%C3%A3o_2_imgupscaler.ai_General_4K_zzyvrn.png" 
            />
          </a>
          <p className="text-sm text-gray-500 text-center">
            © 2025 Clínica Cão Amigão — Todos os direitos reservados.
          </p>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-200 pt-8 max-w-3xl mx-auto">
          <p>
            Este produto não substitui o parecer médico profissional. Sempre consulte um médico veterinário para tratar da saúde do seu animal. Os resultados podem variar de animal para animal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;