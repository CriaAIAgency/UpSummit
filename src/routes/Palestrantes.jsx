import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';
import SpeakerModal from '../components/SpeakerModal';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Palestrantes = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const speakers = [
        {
            name: 'PAULO VIEIRA',
            role: 'CEO da Febracis',
            description: 'O coach e fundador da Febracis Escola de Negócios já transformou mais de 1,5 milhão de vidas por meio do famoso Método CIS. Especialista em mudança de mentalidade e desenvolvimento pessoal.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/pv.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Desenvolvimento Pessoal'
        },
        {
            name: 'WASLEY COSTA',
            role: 'CEO do Up Summit',
            description: 'Empresário, construtor, mentor de negócios e CEO do Up Summit.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/wasley.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Empreendedorismo'
        },
        {
            name: 'CRIS ARCANGELI',
            role: 'Empreendedora Serial',
            description: 'Uma das maiores referências em inovação e construção de marcas no Brasil, Cris Arcangeli é uma empreendedora serial que transforma mercados. Criadora da categoria ALIMÉTICOS e do primeiro BEAUTYDRINK, ela também idealizou o Comunidades A1000, o primeiro reality show de impacto positivo do mundo.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/cris.jpeg',
            linkedin: '#',
            instagram: '#',
            topic: 'Inovação e Empreendedorismo'
        },
        {
            name: 'PABLO MARÇAL',
            role: 'Empresário e Mentor',
            description: 'O empresário, coach, escritor e mentor de negócios e alta performance. De Goiânia para a liderança nacional. Esposo da Carol e pai de quatro filhos. Pablo Marçal é empresário visionário, fundador de múltiplos negócios, mentor de milhões de pessoas impactadas por seus ensinamentos.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/pablo.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Alta Performance'
        },
        {
            name: 'JOÃO KEPLER',
            role: 'Empresário e Investidor-Anjo',
            description: 'Empresário, anjo-investidor e um dos maiores nomes do ecossistema de inovação e tecnologia do Brasil, Kepler é máxima referência no que diz respeito a construir uma empresa sólida e com capacidade de crescimento e expansão.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/joaokepler.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Inovação e Investimentos'
        },
        {
            name: 'BÁRBARA PORTO',
            role: 'CEO da Bárbara Porto',
            description: 'CEO e Diretora Criativa da Bárbara Porto, uma grande marca do universo de semijoias. Bárbara é referência em elegância, autenticidade e empoderamento feminino, esbanjando paixão pela moda e a arte de criar.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/barbara.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Empreendedorismo Feminino'
        },
        {
            name: 'DOUGLAS VIEGAS',
            role: 'Deputado Federal e Influenciador',
            description: 'Referência em carisma, autenticidade e impacto social, Douglas Viegas, o Poderosíssimo Ninja, é ex-jogador de basquete e influenciador que alcança milhões. Hoje, como deputado federal por São Paulo, defende o esporte, a juventude e a transformação nas periferias.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/douglas.jpeg',
            linkedin: 'https://www.youtube.com/watch?v=tB--iIKTU8c',
            instagram: 'https://www.instagram.com/douglasviegas/?hl=pt-br',
            topic: 'Comunicação e Liderança'
        },
        {
            name: 'RENNER SILVA',
            role: 'Palestrante Internacional',
            description: 'Eleito o melhor palestrante do Brasil pelo prêmio Top of Mind em Londres, Renner Silva é referência em performance, comunicação e faturamento milionário no palco. Já realizou mais de 1.300 palestras, atendeu 600 empresas e se apresentou em sete países, incluindo na sede da ONU.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/renner.jpeg',
            linkedin: 'https://www.linkedin.com/in/rennersilvaoficial/?originalSubdomain=br',
            instagram: 'https://www.instagram.com/rennersilvaoficial/',
            topic: 'Performance e Comunicação'
        },
        {
            name: 'JANAINE VALÉRIA',
            role: 'Advogada Empresarial',
            description: 'Advogada Empresarial e especialista em Assessoria Jurídica para empresas, Janaine atua no âmbito Societário, Contratual e Gestão de Riscos.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/janaine.jpg',
            linkedin: 'https://www.youtube.com/watch?v=UDHbxbVDxtc',
            instagram: 'https://www.instagram.com/janainevaleria/',
            topic: 'Direito Empresarial'
        },
        {
            name: 'EDSON MACKEENZY',
            role: 'CEO da Business Design Academy',
            description: 'Educador, conselheiro de negócios, autor best seller e especialista em investimento. Ao longo da sua jornada, fundou a Business Design Academy, atuou como diretor no fundo de investimentos americano The Venture City e na Bossa Nova Investimentos, e fundou o Videolog.tv, a primeira plataforma global de compartilhamento de vídeo - lugar este que atua como CEO.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/edson.jpg',
            linkedin: 'https://www.linkedin.com/in/mackeenzy/?locale=pt_BR',
            instagram: 'https://www.instagram.com/mackeenzy/',
            topic: 'Investimentos'
        },
        {
            name: 'ALEX MONTEIRO',
            role: 'Especialista em Marketing de Influência',
            description: 'Fundador da maior agência especializada em marketing de influência da América Latina, Alex Monteiro já impulsionou carreiras como Whindersson Nunes, Gkay, Tirullipa, Rezende e muitos outros.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/alex.jpeg',
            linkedin: 'https://www.linkedin.com/in/alexmmonteiro/?originalSubdomain=br',
            instagram: 'https://www.instagram.com/alexmmonteiro/',
            topic: 'Marketing Digital'
        },
        {
            name: 'CONRADO ADOLPHO',
            role: 'Mentor de Negócios',
            description: 'Empresário, mentor de negócios, um dos maiores vendedores do Brasil e reconhecido como o "mentor dos mentores", com mais de 1.000 empresas atendidas individualmente.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/conrado.png',
            linkedin: 'https://www.linkedin.com/in/conradoadolpho/?originalSubdomain=br',
            instagram: 'https://www.instagram.com/conradoadolpho/',
            topic: 'Mentoria'
        },
        {
            name: 'BRUNO AVELAR',
            role: 'Chief Visionary Officer',
            description: 'Empresário, coach, palestrante, escritor, mestre em networking, mentor e CVO (Chief Visionary Officer) de centenas de empresas.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/bruno.jpg',
            linkedin: 'https://brunoavelar.com.br/?fbclid=PAZXh0bgNhZW0CMTEAAaYvyO75H-vflBuRXFpwOsQI3HEcxSeKLTnDeAVa5Z__RZHUnbc7PvUJtco_aem_VQwwnIPq1xT9CnqTkmITXA',
            instagram: 'https://www.instagram.com/brunoavelar/',
            topic: 'Networking'
        },
        {
            name: 'RAY GONÇALVES',
            role: 'Especialista em Marketing Digital',
            description: 'Ray Gonçalves é uma especialista em marketing e vendas que auxilia empresários a aumentarem suas vendas utilizando estratégias digitais. Com mais de 900 empresas atendidas, Ray se destaca por colocar seus clientes à frente no mercado, oferecendo diagnósticos personalizados para identificar oportunidades de crescimento.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/ray.png',
            linkedin: 'https://www.linkedin.com/in/ray-gon%C3%A7alves-678685223/?originalSubdomain=br',
            instagram: 'https://www.instagram.com/raygoncalvesoficial/',
            topic: 'Marketing Digital'
        },
        {
            name: 'CAROL IASMIN',
            role: 'Especialista em Neurovendas',
            description: 'Com mais de 16 anos de experiência no mercado de vendas, Carol é especialista em neurovendas e a mulher palestrante Top 1 em treinamentos de vendas no Brasil. Com uma linguagem clara e direta, transforma teorias em estratégias práticas que qualquer um pode usar.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/carol.jpg',
            linkedin: 'https://www.linkedin.com/in/%F0%9F%A7%A0-carol-iasmim-05662318a/?originalSubdomain=br',
            instagram: 'https://www.instagram.com/carol.iasmim/?hl=pt',
            topic: 'Neurovendas'
        },
        {
            name: 'SAMUEL PEREIRA',
            role: 'Fundador da SDA Holding',
            description: 'Empresário, investidor, fundador da SDA Holding e criador do Segredos da Audiência Ao Vivo, o maior Espetáculo de Tráfego e Audiência do Brasil. Com mais de 14 anos de experiência no digital, ele tem mais de 16 milhões de visitas em um de seus sites.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/samuel.jpg',
            linkedin: 'https://www.linkedin.com/in/samuelpereirasda/?originalSubdomain=br',
            instagram: 'https://www.instagram.com/segredosdaaudiencia/?hl=pt-br',
            topic: 'Tráfego Digital'
        },
        {
            name: 'MICHELLE WADHY',
            role: 'Co-fundadora da Fast Escova',
            description: 'Co-fundadora da Fast Escova, uma franqueadora de sucesso com mais de 350 unidades e 4.500 colaboradores em apenas 6 anos. Com formação em Administração de Empresas e MBA em Gestão Comercial, Michelle acumula mais de 25 anos de experiência liderando grandes empresas, incluindo a Avon Cosméticos, onde gerenciou mais de 30 mil pessoas.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/michelle.jpeg',
            linkedin: 'https://www.linkedin.com/in/michelle-wadhy-872427119/?originalSubdomain=br',
            instagram: 'https://www.instagram.com/michellefastescova/',
            topic: 'Franquias'
        },
        {
            name: 'PADRE MARCOS',
            role: 'Sacerdote, Cantor e Escritor',
            description: 'Sacerdote católico, cantor e escritor, Padre Marcos Rogério é pároco da Paróquia Nossa Senhora da Assunção em Goiânia. Com três CDs e quatro livros publicados, destaca-se por sua atuação na evangelização através da música e da literatura.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/padremarcos.jpeg',
            linkedin: 'https://linktr.ee/padremarcos?fbclid=PAZXh0bgNhZW0CMTEAAabpEzv2qABdvtcUhwk2oTPU62dYSGUn_exg0OERpSl45FqyqJ1bfQ-k3XY_aem_RaVX7pLTObH5k97r7UvLyw',
            instagram: 'https://www.instagram.com/padremarcos/',
            topic: 'Espiritualidade'
        }
    ];

    return (
        <section className="relative bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    className="mb-16 pt-8 md:pt-0"
                >
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-customPink text-sm font-semibold uppercase tracking-wider"
                    >
                        Nossos Palestrantes
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-neutral-900"
                    >
                        Aprenda com os{' '}
                        <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                            melhores
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-neutral-600 text-lg max-w-3xl"
                    >
                        Reunimos os maiores especialistas do mercado para compartilhar conhecimento,
                        experiências e insights que irão transformar sua visão sobre marketing e negócios.
                    </motion.p>
                </motion.div>

                {/* Palestrantes 2025 */}
                <div>
                    <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-2xl font-semibold text-neutral-900 mb-8"
                    >
                        Palestrantes 2025
                    </motion.h3>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={speaker.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.6,
                                    delay: 0.2 + (index * 0.1),
                                    ease: "easeOut"
                                }}
                                className="bg-[#1F1F1F] rounded-2xl p-4 group flex flex-col cursor-pointer"
                                onClick={() => setSelectedSpeaker(speaker)}
                            >
                                <div className="flex-1 flex flex-col">
                                    <div className="aspect-square mb-4 overflow-hidden rounded-xl relative">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            loading="lazy"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                objectFit: 'cover',
                                                backfaceVisibility: 'hidden'
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-1">{speaker.name}</h4>
                                    <p className="text-customPink text-sm mb-2">{speaker.role}</p>
                                    <p className="text-white/80 text-sm mb-4 line-clamp-2">{speaker.description}</p>
                                    <div className="flex-1">
                                        <span className="inline bg-customPink/10 text-customPink px-3 py-1 rounded-full text-xs">
                                            {speaker.topic}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-auto pt-4">
                                    <a
                                        href={speaker.instagram}
                                        className="text-white/60 hover:text-customPink transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={speaker.linkedin}
                                        className="text-white/60 hover:text-customPink transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section - Ingressos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        delay: 0.8,
                        ease: "easeOut"
                    }}
                    className="flex justify-center mt-16 mb-32"
                >
                    <button 
                        onClick={() => window.open('https://upsummit.com.br/', '_blank')}
                        className="group relative flex items-center gap-2 bg-gradient-to-r from-customPink to-customPink2 px-8 py-4 rounded-full text-white overflow-hidden transition-all duration-300"
                    >
                        <span className="relative z-10 text-lg">Garantir meu ingresso</span>
                        <span className="relative z-10 rounded-full bg-white/20 p-1.5 transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowRight className="w-6 h-6" />
                        </span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                    </button>
                </motion.div>
            </div>

            {/* Modal */}
            <SpeakerModal
                isOpen={!!selectedSpeaker}
                onClose={() => setSelectedSpeaker(null)}
                speaker={selectedSpeaker}
            />

            {/* Nova seção CTA para Edições */}
            <section className="relative bg-white pt-0 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center relative overflow-hidden rounded-3xl bg-[#1F1F1F] p-12"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        
                        <h2 className="text-3xl font-bold text-white mb-6 relative">
                            Conheça as outras edições do{' '}
                            <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                                UP Summit
                            </span>
                        </h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto relative">
                            Explore a história do UP Summit e descubra como cada edição tem transformado 
                            o cenário empresarial brasileiro.
                        </p>
                        <Link 
                            to="/edicoes"
                            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-customPink to-customPink2 px-6 py-3 rounded-full text-white overflow-hidden transition-all duration-300"
                        >
                            <span className="relative z-10 text-base">Ver todas as edições</span>
                            <span className="relative z-10 rounded-full bg-white/20 p-1 transition-transform duration-300 group-hover:translate-x-1">
                                <FiArrowRight className="w-5 h-5" />
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </section>
    );
};

export default Palestrantes; 