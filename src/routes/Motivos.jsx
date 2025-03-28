import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Star, Diamond, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import upblackImage from '../assets/upblack.jpg';
import ouroImage from '../assets/ouro.jpg';
import platinaImage from '../assets/platina.jpg';
import diamanteImage from '../assets/diamante.jpg';
import Patrocinadores from '../components/homeSections/Patrocinadores';

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
    highlight: 'geração de leads qualificados ',
    description: 'e oportunidades de negócios.',
    color: 'from-purple-900'
  },
  {
    title: 'Elevada possibilidade de',
    highlight: 'retorno sobre o investimento (ROI)',
    description: ', comprovado pelos resultados positivos dos patrocinadores anteriores.',
    color: 'from-purple-800'
  },
  {
    title: 'Experiência Premium',
    highlight: 'UP BLACK: acesso exclusivo a todas as áreas VIP e benefícios especiais',
    description: ', incluindo networking com palestrantes.',
    color: 'from-purple-800'
  }
];

const sponsorshipTiers = [
  {
    name: 'Ouro',
    icon: Crown,
    color: 'text-yellow-500',
    bgGradient: 'from-yellow-500/20 to-transparent',
    bgUrl: ouroImage,
    benefits: [
      'Espaço para estande de 3x3 metros',
      'Exibição de anúncio de 15" segundos nos telões da feira de negócios',
      'Veiculação da marca do patrocinador nos horários de break nos telões laterais do palco',
      'Logotipo exposto na aba de expositores do site oficial',
      'Liberação de 5 staffs no stand',
      '6 ingressos executives',
      '2 ingressos UP BLACK - Experiência premium com acesso VIP'
    ]
  },
  {
    name: 'Platina',
    icon: Star,
    color: 'text-gray-400',
    bgGradient: 'from-gray-400/20 to-transparent',
    bgUrl: platinaImage,
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
      '2 ingressos UP BLACK - Experiência premium com acesso VIP'
    ]
  },
  {
    name: 'Diamante',
    icon: Diamond,
    color: 'text-blue-400',
    bgGradient: 'from-blue-400/20 to-transparent',
    bgUrl: diamanteImage,
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
      '4 ingressos UP BLACK - Experiência premium com acesso VIP'
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
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#11111A] text-white rounded-2xl w-full max-w-2xl shadow-xl cursor-default relative overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent pointer-events-none" />
            
            {/* Header Section */}
            <div className="relative z-10 p-8 pb-4 border-b border-white/10">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="text-center">
                <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">Cota</span>
                <h3 className="text-3xl font-bold mt-2 bg-gradient-to-r from-white to-white/90 bg-clip-text">
                  {tier.name}
                </h3>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 pt-6 relative z-10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              <div className="space-y-4">
                {tier.benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Section */}
            <div className="relative z-10 p-8 pt-4 border-t border-white/10 bg-black/20">
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold w-1/3 py-3 rounded-xl"
                >
                  Voltar
                </button>
                <Link 
                  to='/patrocinar' 
                  className="w-2/3"
                >
                  <button
                    onClick={onClose}
                    className="group relative w-full bg-gradient-to-r from-purple-800 to-purple-950 text-white font-semibold py-4 rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10 text-lg">Adquirir agora</span>
                    <span className="relative z-10 rounded-full bg-white/20 p-1 transition-transform duration-300 group-hover:translate-x-1">
                      <FiArrowRight className="w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
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

const BenefitCard = ({ title, highlight, description }) => {
  return (
    <div className="group relative h-[200px]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-950 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]" />
      
      <div className="relative bg-white m-[2px] p-6 rounded-2xl h-full">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-purple-900/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2" />
        
        <div className="flex items-start gap-4 h-full">
          <CheckCircle2 className="w-6 h-6 text-purple-800 flex-shrink-0 mt-1" />
          <div className="flex flex-col justify-between h-full">
            <p className="text-gray-900">
              <span className="font-medium">{title} </span>
              <span className="text-purple-800 font-semibold">{highlight}</span>
              {description && (
                <span className="text-gray-900">{description}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Adicione esta constante com os benefícios do UP BLACK
const upBlackBenefits = [
  'Acesso à todas as palestras',
  'Acesso à feira de negócios',
  'Acesso à área de networking',
  'Acesso à praça de alimentação',
  'Acesso à área VIP relaxation space',
  'Acesso à área de fotos com palestrantes',
  'Assento reservado na área black',
  'Certificado online de participação do evento',
  'Coffee Break exclusivo',
  'Estacionamento gratuito',
  'Credenciamento antecipado e fila preferencial',
  'Coquetel de networking exclusivo com palestrantes e área premium',
  'Kit exclusivo Up Black'
];

// Atualize o array de depoimentos com os links dos vídeos
const testimonials = [
  {
    name: 'Bruno Cunha',
    company: 'Vox 2 you',
    videoUrl: 'https://www.youtube.com/watch?v=Qc0V0Ewd0Wo'
  },
  {
    name: 'Elvira Leones',
    company: 'Hiper Estrutura Solar',
    videoUrl: 'https://www.youtube.com/watch?v=yLaPHzuH2ow'
  },
  {
    name: 'Waldemar Neto',
    company: 'Wale Engenharia',
    videoUrl: 'https://www.youtube.com/watch?v=5bS1MieE3wY'
  },
  {
    name: 'Márcia Queiroz',
    company: 'Fast Escova',
    videoUrl: 'https://www.youtube.com/watch?v=-xSmcf--7UM'
  },
  {
    name: 'Flávio Lima',
    company: 'Primodialle',
    videoUrl: 'https://www.youtube.com/watch?v=7bQDOFcOUTA'
  },
  {
    name: 'Rodson Witovicz',
    company: 'SEBRAE',
    videoUrl: 'https://www.youtube.com/watch?v=c7dETIZ2Ff8'
  }
];

const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const UpBlackModal = ({ isOpen, onClose }) => {
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
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#11111A] text-white rounded-2xl w-full max-w-2xl shadow-xl cursor-default relative overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent pointer-events-none" />
            
            {/* Header */}
            <div className="relative z-10 p-8 pb-4 border-b border-white/10">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="text-center">
                <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">Experiência Premium</span>
                <h3 className="text-3xl font-bold mt-2 bg-gradient-to-r from-white to-white/90 bg-clip-text">
                  UP BLACK
                </h3>
                <p className="text-white/60 mt-2 text-sm">Benefício exclusivo para patrocinadores</p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 pt-6 relative z-10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              <div className="space-y-4">
                {upBlackBenefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 p-8 pt-4 border-t border-white/10 bg-black/20">
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-purple-800 to-purple-950 hover:from-purple-700 hover:to-purple-900 transition-all text-white font-semibold w-full py-3 rounded-xl"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Adicione este componente de Modal de Vídeo
const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm p-4 md:p-8 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
        >
          <div className="relative w-full max-w-[90%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[60%]">
            {/* Botão de fechar fora do container do vídeo */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Container do vídeo */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full aspect-video relative rounded-xl overflow-hidden"
            >
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoUrl)}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Motivos = () => {
    const [selectedTier, setSelectedTier] = useState(null);
    const [upBlackModalOpen, setUpBlackModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
  
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
    <section className="relative overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-white mt-8">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Primeira Seção - Por que Patrocinar */}
        <div className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold text-purple-800 uppercase tracking-wider mb-4">
              Seja um patrocinador.
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Por que{' '}
              <span className="bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent">
                patrocinar
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-800/30" />
              <div className="w-2 h-2 rounded-full bg-purple-800" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-800/30" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra os benefícios exclusivos de fazer parte do UP Summit.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.2 + (index * 0.1),
                  ease: "easeOut"
                }}
                className={`w-full max-w-md ${
                  index >= benefits.length - 2 ? 'lg:col-span-1.5 lg:mx-auto' : ''
                }`}
              >
                <BenefitCard {...benefit} />
              </motion.div>
            ))}
          </div>

          {/* CTA Button após os benefícios */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/patrocinar" className="w-fit">
              <button className="group flex h-12 items-center gap-2 rounded-full text-white bg-gradient-to-r from-purple-800 to-purple-950 pl-3 pr-4 transition-all duration-300 ease-in-out hover:from-customPink hover:to-customPink2 hover:pl-2 hover:text-white active:bg-customPink">
                <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                  <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-customPink group-active:-rotate-45" />
                </span>
                <span>Quero Patrocinar!</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Separador com linha animada - mesmo estilo da Home.jsx */}
        <div className="relative">
            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-800 via-purple-800 to-purple-950"
                ></motion.div>
            </div>
        </div>

        {/* Segunda Seção - Cotas */}
        <div className="py-24 relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, purple 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="text-center mb-16 relative"
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-semibold">
                Planos disponíveis
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              Cotas de{' '}
              <span className="bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent">
                patrocínio
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Escolha o plano ideal para sua empresa.
            </p>
          </motion.div>

          {/* Cards de Cotas + UP BLACK */}
          <div className="relative overflow-hidden bg-neutral-50 p-8 rounded-3xl">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 sm:flex-row">
              {/* Cotas normais */}
              {sponsorshipTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className="w-full sm:w-1/4"
                >
                  <Card
                    title={tier.name}
                    bgUrl={tier.bgUrl}
                    onClick={() => setSelectedTier(index)}
                  />
                </div>
              ))}
              
              {/* Card UP BLACK */}
              <div className="w-full sm:w-1/4">
                <button
                  onClick={() => setUpBlackModalOpen(true)}
                  className="relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-[#11111A] shadow-xl shadow-neutral-900/30 group"
                >
                  {/* Imagem de fundo com overlay gradiente */}
                  <div 
                    style={{
                      backgroundImage: `url(${upblackImage})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                  
                  {/* Badge "Benefício" */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-purple-800/80 rounded-full backdrop-blur-sm">
                    <span className="text-xs font-semibold text-white">Incluso em todas as cotas</span>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="pointer-events-none relative flex flex-col items-start p-6 pt-8">
                    <span className="text-purple-400 text-sm font-medium mb-1">Experiência premium</span>
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-xl font-medium text-white">UP BLACK</h3>
                      <ArrowRight className="text-white" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Terceira Seção - Depoimentos */}
        <div className="py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-[1px] w-12 bg-purple-400" />
              <span className="text-purple-800 font-semibold text-sm uppercase tracking-wider">
                Histórias de sucesso
              </span>
              <div className="h-[1px] w-12 bg-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que dizem{' '}
              <span className="bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent">
                nossos parceiros
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira os depoimentos de quem já faz parte desta história.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative group cursor-pointer"
                onClick={() => setSelectedVideo(testimonial.videoUrl)}
              >
                {/* Thumbnail do YouTube */}
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <img
                    src={`https://img.youtube.com/vi/${getYouTubeVideoId(testimonial.videoUrl)}/maxresdefault.jpg`}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA após vídeos */}
        <div className="mb-24 flex justify-center">
            <Link to="/patrocinar" className="w-fit">
                <button className="group flex h-12 items-center gap-2 rounded-full text-white bg-gradient-to-r from-purple-800 to-purple-950 pl-3 pr-4 transition-all duration-300 ease-in-out hover:from-customPink hover:to-customPink2 hover:pl-2 hover:text-white active:bg-customPink">
                    <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-customPink group-active:-rotate-45" />
                    </span>
                    <span>Quero Patrocinar!</span>
                </button>
            </Link>
        </div>
      </div>

      {/* Manter apenas o componente Patrocinadores */}
      <Patrocinadores />

      {/* Modais */}
      <SponsorshipModal
        isOpen={selectedTier !== null}
        onClose={() => setSelectedTier(null)}
        selectedTier={selectedTier ?? 0}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      <UpBlackModal 
        isOpen={upBlackModalOpen} 
        onClose={() => setUpBlackModalOpen(false)} 
      />

      {/* Modal de Vídeo */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo || ''}
      />
    </section>
  );
}

export default Motivos;
