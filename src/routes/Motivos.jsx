import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Star, Diamond, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoHero from '../components/homeSections/LogoHero';

const benefits = [
  {
    title: 'Visibilidade',
    highlight: 'destacada em um dos maiores eventos de empreendedorismo do Brasil.',
    color: 'from-purple-800'
  },
  {
    title: 'Oportunidades estratégicas',
    highlight: 'de networking com líderes empresariais e investidores influentes.',
    color: 'from-purple-900'
  },
  {
    title: 'Fortalecimento da reputação da marca',
    highlight: 'e aumento do reconhecimento no mercado.',
    color: 'from-purple-800'
  },
  {
    title: 'Potencial para',
    highlight: 'geração de leads qualificados',
    description: 'e oportunidades de negócios.',
    color: 'from-purple-900'
  },
  {
    title: 'Elevada possibilidade de',
    highlight: 'retorno sobre o investimento (ROI)',
    description: ', comprovado pelos resultados positivos dos patrocinadores anteriores.',
    color: 'from-purple-800'
  }
];

const sponsorshipTiers = [
  {
    name: 'Ouro',
    icon: Crown,
    color: 'text-yellow-500',
    bgGradient: 'from-yellow-500/20 to-transparent',
    benefits: [
      'Espaço para estande de 3x3 metros',
      'Exibição de anúncio de 15" segundos nos telões da feira de negócios',
      'Veiculação da marca do patrocinador nos horários de break nos telões laterais do palco',
      'Logotipo exposto na aba de expositores do site oficial',
      'Liberação de 5 staffs no stand',
      '6 ingressos executives',
      '2 ingressos black'
    ]
  },
  {
    name: 'Platina',
    icon: Star,
    color: 'text-gray-400',
    bgGradient: 'from-gray-400/20 to-transparent',
    benefits: [
      'Espaço para estande de 5x3 metros',
      'Exibição de anúncio de 20" segundos nos telões da feira de negócios',
      'Logotipo exposto na aba de expositores do site oficial',
      'Acesso à lista de leads do evento',
      'Veiculação da marca do patrocinador nos outdoors de divulgação',
      'Veiculação da marca do patrocinador nos horários de break nos telões laterais do palco',
      'Direito a uma menção feita no palco do Up Summit, comunicado pelo apresentador contratado',
      'Inclusão de brindes no Welcome Kit dos participantes do evento (produção dos brindes por conta do patrocinador)',
      'Liberação de 6 staffs no stand',
      '12 ingressos executivos',
      '02 ingressos black'
    ]
  },
  {
    name: 'Diamante',
    icon: Diamond,
    color: 'text-blue-400',
    bgGradient: 'from-blue-400/20 to-transparent',
    benefits: [
      'Espaço para estande de 10x4 metros',
      'Exibição de anúncio de 60" segundos nos telões da feira de negócios',
      'Inserção de um anúncio de até 120" no telão principal do evento',
      'Veiculação da marca nos materiais de divulgação on e off',
      'Veiculação da marca do patrocinador nos outdoors de divulgação',
      'Direito a uma menção feita no palco do Up Summit, comunicado pelo apresentador contratado',
      'Veiculação da marca do patrocinador nos horários de break nos telões do palco',
      'Logotipo exposto na aba de expositores do site oficial',
      'Acesso à lista de leads do evento',
      '10 minutos de pitch no palco',
      'Inclusão de brindes no Welcome Kit dos participantes do evento (produção dos brindes por conta do patrocinador)',
      'Liberação de 8 staffs no stand',
      '30 ingressos executivos',
      '04 ingressos black'
    ]
  }
];

const Card = ({ bgUrl, title, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundPosition: "center",
            }}
            className="relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 bg-[size:100%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:110%]"
        >
            <div className="pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl">
            <h3>{title}</h3>
            <ArrowRight />
            </div>
        </button>
    );
};

function SponsorshipModal({ isOpen, onClose, selectedTier, onPrevious, onNext }) {
  const tier = sponsorshipTiers[selectedTier];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/20 backdrop-blur p-4 md:p-8 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
        >
          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 transition-colors z-20 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 transition-colors z-20 shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-gray-900" />
          </button>

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#11111A] text-white rounded-2xl w-full max-w-2xl shadow-xl cursor-default relative overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Background Icon */}
            <tier.icon className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            
            {/* Header Section - Fixed */}
            <div className="relative z-10 p-8 pb-4">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="w-16 h-16 mb-6 rounded-full text-3xl grid place-items-center mx-auto">
                <tier.icon className={`w-8 h-8 ${tier.color}`} />
              </div>
              
              <h3 className="text-3xl font-bold text-center mb-4">
                {tier.name}
              </h3>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 pt-0 relative z-10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              <div className="space-y-4 mb-8">
                {tier.benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Section - Fixed */}
            <div className="relative z-10 p-8 pt-4 border-t border-white/10">
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold w-full py-3 rounded-xl"
                >
                  Voltar
                </button>
                <Link to='/patrocinar' className="bg-white hover:opacity-90 transition-opacity text-customPink2 font-semibold w-full py-3 rounded-xl flex items-center justify-center">
                    <button
                    onClick={onClose}
                    className=""
                    >
                    Adquirir
                    </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Motivos = () => {
    const [selectedTier, setSelectedTier] = useState(null);
  
    const handlePrevious = () => {
      setSelectedTier((prev) =>
        prev === 0 ? sponsorshipTiers.length - 1 : prev - 1
      );
    };
  
    const handleNext = () => {
      setSelectedTier((prev) =>
        prev === sponsorshipTiers.length - 1 ? 0 : prev + 1
      );
    };
  
    const handleKeyDown = (e) => {
      if (selectedTier === null) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };
  
    useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedTier]);

  return (
    // Adicionado overflow-x-hidden para impedir scroll horizontal
    <section className="relative overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-white mt-14 py-20">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div> */}

      {/* Decorative Elements */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-pink-500/10 to-purple-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-sm font-semibold text-purple-800 uppercase tracking-wider mb-4">
            Seja um patrocinador
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent">
            POR QUE PATROCINAR?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-800 to-purple-950 mx-auto rounded-full" />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-950 rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
              
              {/* Card Content */}
              <div className="relative bg-white m-[2px] p-6 rounded-2xl h-full transition-colors duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-purple-900/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2" />
                
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-purple-800 flex-shrink-0 mt-1" />
                  <p className="text-gray-900">
                    <span className="font-medium">{benefit.title} </span>
                    <span className="text-purple-800 font-semibold">{benefit.highlight}</span>
                    {benefit.description && (
                      <span className="text-gray-900">{benefit.description}</span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Sponsorship Tiers with Outline Cards */}
        <div className="relative overflow-hidden bg-neutral-50 p-8 rounded-3xl mb-12">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 sm:flex-row">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full sm:w-1/3"
              >
                <Card
                  title={tier.name}
                  bgUrl={tier.bgUrl}
                  onClick={() => setSelectedTier(index)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <SponsorshipModal
          isOpen={selectedTier !== null}
          onClose={() => setSelectedTier(null)}
          selectedTier={selectedTier ?? 0}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-32">
            <Link to="/patrocinar">
                <button className="group flex h-12 items-center gap-2 rounded-full text-white bg-gradient-to-r from-purple-800 to-purple-950 pl-3 pr-4 transition-all duration-300 ease-in-out hover:from-customPink hover:to-customPink2 hover:pl-2 hover:text-white active:bg-customPink">
                    <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-customPink group-active:-rotate-45" />
                    </span>
                    <span>Quero Patrocinar!</span>
                </button>
            </Link>
        </div>

        {/* Replace Patrocinadores with LogoHero */}
        <div className="mb-20">
            <LogoHero />
        </div>
      </div>
    </section>
  );
}

export default Motivos;
