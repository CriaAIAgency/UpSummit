import React from 'react';
import wasleyImage from '../assets/wasley/wasley7.jpeg';

const WasleySection = () => {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group">
              <div className="relative w-full h-full">
                <img 
                  src={wasleyImage} 
                  alt="Wasley Costa" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-[1px] w-12 bg-customPink" />
              <span className="text-customPink font-semibold">Fundador & CEO</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              Wasley Costa
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Wasley Costa é o visionário fundador e CEO do UP Summit, o maior evento empresarial do Centro-Oeste brasileiro. Com uma trajetória marcada por inovação e liderança, ele transformou sua visão em um movimento que impacta milhares de empreendedores anualmente.
              </p>
              
              <p>
                Mentor de negócios e especialista em crescimento empresarial, Wasley combina sua experiência prática com uma profunda compreensão do mercado para criar experiências transformadoras no UP Summit. Sob sua liderança, o evento se tornou uma referência em conteúdo de alta qualidade e networking estratégico.
              </p>

              <p>
                Sua missão é democratizar o acesso ao conhecimento de alto nível e criar um ambiente onde empreendedores possam se conectar, aprender e crescer juntos. O UP Summit é o reflexo desse compromisso, reunindo os maiores especialistas do mercado em um evento que já impactou mais de 5.000 empresários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasleySection; 