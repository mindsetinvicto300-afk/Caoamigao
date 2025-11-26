import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Meu Shih-tzu vivia se coçando, noites inteiras sem dormir. Em poucos dias de protocolo, a pele dele ficou outra! Nunca imaginei que fosse algo tão simples.",
    name: "Rafaela Almeida — MG",
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1762820181/552096127_24599170419724175_1185024553478868560_n_seswjm.jpg"
  },
  {
    text: "Achei que ia gastar caro com alimentação e tratamentos, mas tudo é acessível e fácil de fazer. Meu pet melhorou muito!",
    name: "Amanda Garcia — BA",
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763262176/cropped_circle_image_3_jcb53q.png"
  },
  {
    text: "Finalmente parei a queda de pelo e as feridinhas do meu pug. As receitas e sprays funcionam demais!",
    name: "Maria Helena — RJ",
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1763262001/Camilasbrandao2_jml96o.png"
  },
  {
    text: "Meu bulldog francês sofria com alergias terríveis. O protocolo mudou a vida dele. Hoje ele é um cão feliz e sem coceiras. Recomendo demais!",
    name: "Juliana Costa — SP",
    image: "https://res.cloudinary.com/ddoqlftps/image/upload/v1762217432/drafoto2_gh6rtj.png"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#f5f5e9] pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <span className="text-2xl">💬</span> VEJA O QUE TUTORES JÁ ESTÃO RELATANDO
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
            {/* Using a grid for better responsiveness than a fixed carousel in this context */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="rounded-lg border bg-white text-gray-900 flex flex-col justify-between shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="flex text-yellow-400 gap-0.5">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                        </div>
                        <div className="p-6 pt-0 flex-grow">
                            <p className="italic text-base text-gray-600 leading-relaxed">"{t.text}"</p>
                        </div>
                        <div className="p-6 pt-0 flex items-center gap-4">
                            <img 
                                alt={t.name} 
                                className="rounded-full object-cover w-[50px] h-[50px] border border-gray-200" 
                                src={t.image} 
                            />
                            <div>
                                <p className="font-bold text-sm text-gray-800">{t.name}</p>
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

export default Testimonials;