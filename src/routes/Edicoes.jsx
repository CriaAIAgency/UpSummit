import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, MapPin, ChevronDown, ChevronUp, Clock } from 'lucide-react';

const editions = [
  {
    year: 2025,
    title: "UP Summit 2025: A Revolução do Marketing",
    description: "Prepare-se para a maior edição já realizada do UP Summit. Uma experiência imersiva que vai redefinir os padrões do marketing digital e transformar a maneira como pensamos sobre negócios.",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    location: "São Paulo - SP",
    dates: "4, 5 e 6 de Abril",
    comingSoon: true
  },
  {
    year: 2024,
    title: "UP Summit 2024: A Era da Inteligência Artificial",
    description: "Uma jornada transformadora através das últimas inovações em IA e suas aplicações práticas no marketing digital. Reunimos os maiores especialistas para compartilhar insights sobre como a IA está revolucionando a maneira como fazemos marketing.",
    stats: {
      attendees: "12.000",
      speakers: "60",
      partners: "45"
    },
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    highlights: [
      {
        title: "Joel Jota",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
        role: "Keynote Speaker"
      },
      {
        title: "Maria Silva",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        role: "AI Specialist"
      },
      {
        title: "Pedro Santos",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        role: "Marketing Director"
      }
    ],
    location: "São Paulo - SP",
    dates: "15, 16 e 17 de Março"
  },
  {
    year: 2023,
    title: "UP Summit 2023: Marketing do Futuro",
    description: "Uma edição histórica que marcou a transformação do marketing tradicional para o marketing do futuro. Exploramos as tendências emergentes e as tecnologias que estão moldando o futuro do marketing digital.",
    stats: {
      attendees: "10.000",
      speakers: "50",
      partners: "35"
    },
    coverImage: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80",
    highlights: [
      {
        title: "Ana Costa",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
        role: "Digital Strategist"
      },
      {
        title: "Carlos Mendes",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
        role: "Tech Leader"
      },
      {
        title: "Julia Alves",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        role: "Marketing Expert"
      }
    ],
    location: "Rio de Janeiro - RJ",
    dates: "10, 11 e 12 de Março"
  }
];

const Edicoes = () => {
  const [expandedYear, setExpandedYear] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative bg-[#11111A] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - Agora alinhado à esquerda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="inline-block text-sm font-semibold text-customPink uppercase tracking-wider mb-4">
            Nossa História
          </span>
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              EDIÇÕES DO{' '}
              <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                UP SUMMIT
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Reviva os momentos mais marcantes de cada edição e acompanhe nossa evolução ao longo dos anos. 
              Uma história de inovação, conhecimento e networking que continua a crescer.
            </p>
          </div>
        </motion.div>

        {/* Cards Section - Ajustado para cards menores */}
        <div className="space-y-6">
          {editions.map((edition) => (
            <motion.div
              key={edition.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative max-w-[900px]"
            >
              <motion.div
                className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                  expandedYear === edition.year ? 'aspect-video' : 'aspect-[2/1]'
                }`}
                onMouseEnter={() => setHoveredCard(edition.year)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => !edition.comingSoon && setExpandedYear(expandedYear === edition.year ? null : edition.year)}
                layoutId={`card-${edition.year}`}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <motion.img
                    src={edition.coverImage}
                    alt={edition.title}
                    className="w-full h-full object-cover"
                    initial={false}
                    animate={{
                      scale: hoveredCard === edition.year ? 1.05 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className={`absolute inset-0 ${
                    edition.comingSoon 
                      ? 'bg-gradient-to-r from-black via-black/70 to-transparent'
                      : 'bg-gradient-to-r from-black via-black/70 to-transparent'
                  }`} />
                </div>

                {/* Content - Ajustado para melhor legibilidade */}
                <div className="relative h-full flex flex-col justify-center p-8">
                  <motion.div className="flex items-center gap-4 mb-2">
                    <span className="text-customPink text-xl font-bold">
                      {edition.year}
                    </span>
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edition.dates}</span>
                    </div>
                  </motion.div>

                  <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-lg">
                    {edition.title}
                  </motion.h2>

                  {edition.comingSoon ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <Clock className="w-4 h-4 text-customPink animate-pulse" />
                        <span className="text-white font-medium">Em breve</span>
                      </div>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-1 bg-gradient-to-r from-customPink to-transparent rounded-full"
                      />
                    </motion.div>
                  ) : (
                    <motion.div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white hover:bg-white/20 transition"
                      >
                        <Play className="w-4 h-4" />
                        <span>Trailer</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedYear(expandedYear === edition.year ? null : edition.year);
                        }}
                        className="flex items-center gap-2 bg-customPink px-4 py-2 rounded-lg text-white hover:bg-customPink2 transition"
                      >
                        {expandedYear === edition.year ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                        <span>Detalhes</span>
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedYear === edition.year && !edition.comingSoon && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-[#1F1F1F] rounded-b-xl overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-4">Sobre a Edição</h3>
                          <p className="text-white/80 mb-6">{edition.description}</p>
                        </div>

                        {edition.highlights && (
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Destaques</h3>
                            <div className="grid grid-cols-3 gap-4">
                              {edition.highlights.map((highlight, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="group relative"
                                >
                                  <div className="aspect-square rounded-lg overflow-hidden mb-2">
                                    <img
                                      src={highlight.image}
                                      alt={highlight.title}
                                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                    />
                                  </div>
                                  <h4 className="text-white font-medium">{highlight.title}</h4>
                                  {highlight.role && (
                                    <p className="text-sm text-white/60">{highlight.role}</p>
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Edicoes;