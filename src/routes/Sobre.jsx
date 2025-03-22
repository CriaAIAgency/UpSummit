import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Award, TrendingUp, ChevronDown, Star, Quote, Lightbulb, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
    {
        number: '10k+',
        label: 'Participantes por edição',
        icon: Users
    },
    {
        number: '60+',
        label: 'Palestrantes renomados',
        icon: Target
    },
    {
        number: '14000%',
        label: 'ROI para patrocinadores',
        icon: TrendingUp
    },
    {
        number: '45+',
        label: 'Parceiros estratégicos',
        icon: Award
    }
];

const faqs = [
    {
        question: "Onde acontecerá o UP SUMMIT 2025?",
        answer: "O UP Summit acontece no Centro de Convenções da PUC Goiás – Goiania GO."
    },
    {
        question: "Quais são os dias e os horários do evento?",
        answer: "A próxima edição do Up Summit acontecerá nos dias 04, 05 e 06 de abril, das 08h às 18h."
    },
    {
        question: "Quais serão as formas de pagamentos?",
        answer: "Cartão de crédito em até 12x ou no pix a vista!"
    },
    {
        question: "Como é a alimentação no evento?",
        answer: "Haverá uma praça de alimentação no local para que o participante não tenha que sair da área do treinamento e possa comprar seus lanches, almoço e jantar."
    },
    {
        question: "Qual é a classificação etária para participar da imersão?",
        answer: "A classificação etária é de 16 anos completos, proibida a entrada de menores da classificação etária mencionada, assim como bebês e crianças."
    },
    {
        question: "Posso presentear um amigo com um ingresso?",
        answer: "Sim, para isso, você pode comprar o ingresso em seu nome e encaminhar o link de check-in para a pessoa mesma realizar o check-in on-line com os dados dela, emitido assim o QR code de acesso ao evento."
    },
    {
        question: "Sobre hospedagem, transporte e outros custos?",
        answer: "Ressaltamos que os custos de alimentação, hospedagem e logística não estão inclusos no valor do ingresso e são de total responsabilidade do participante, exceto se sua categoria de ingresso listar explicitamente que existe algum benefício, por exemplo, de alimentação."
    }
];

const testimonials = [
    {
        name: "Bruno Cunha",
        role: "CEO da Vox 2 You",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
        quote: "O UP Summit superou todas as expectativas. O networking e as conexões que fizemos durante o evento foram fundamentais para o crescimento da nossa empresa.",
        rating: 5
    },
    {
        name: "Elvira Leones",
        role: "Diretora de Marketing da Hiper Solar",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        quote: "Participar do UP Summit foi um divisor de águas para nossa estratégia de marketing. O retorno sobre o investimento foi impressionante.",
        rating: 5
    },
    {
        name: "Waldemar Neto",
        role: "Fundador da Wale Engenharia",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        quote: "A qualidade dos palestrantes e o nível das discussões são excepcionais. Cada edição traz insights valiosos que aplicamos diretamente em nosso negócio.",
        rating: 5
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-6 text-left"
            >
                <span className="text-lg font-semibold text-white">{question}</span>
                <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-gray-400">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

const TestimonialCard = ({ name, role, image, quote, rating }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-lg relative"
    >
        <div className="absolute top-6 right-6">
            <Quote className="w-8 h-8 text-customPink/10" />
        </div>
        <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h4 className="font-semibold text-gray-900">{name}</h4>
                <p className="text-sm text-gray-600">{role}</p>
                <div className="flex gap-1 mt-1">
                    {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-customPink text-customPink" />
                    ))}
                </div>
            </div>
        </div>
        <p className="text-gray-600 italic">"{quote}"</p>
    </motion.div>
);

const Sobre = () => {
    return (
        <>
            <section className="relative bg-white py-32">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header Section - Updated */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block text-sm font-semibold text-customPink uppercase tracking-wider mb-4">
                            Nossa História
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-8">
                            Transformando o{' '}
                            <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                                futuro
                            </span>
                            {' '}do marketing
                        </h1>
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-customPink/30" />
                            <div className="w-2 h-2 rounded-full bg-customPink" />
                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-customPink/30" />
                        </div>
                    </motion.div>

                    {/* Main Content - Balanced */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="h-[1px] w-12 bg-customPink" />
                                <span className="text-customPink font-semibold">Nossa Missão</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                Impulsionando o{' '}
                                <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                                    crescimento
                                </span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                O UP Summit nasceu com o propósito de transformar o cenário empresarial brasileiro, 
                                conectando líderes, empreendedores e profissionais em torno das mais recentes 
                                tendências de marketing, inovação e negócios.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Com um modelo único que combina conteúdo de alta qualidade, networking estratégico 
                                e experiências imersivas, nos consolidamos como o principal evento de marketing e 
                                negócios do Brasil.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                <img 
                                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" 
                                    alt="UP Summit Event"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Section - Balanced */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-20"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            {stats.map((stat, index) => (
                                <motion.div 
                                    key={index} 
                                    className="relative bg-white rounded-xl p-6 group hover:shadow-lg transition-shadow duration-300"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {/* Gradiente sutil no fundo */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-customPink/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Conteúdo */}
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-customPink/10 mb-4">
                                            <stat.icon className="w-6 h-6 text-customPink" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                            {stat.number}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {stat.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Values Section - Updated */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-center mb-20"
                    >
                        {/* Divisória decorativa antes da seção */}
                        <div className="w-full max-w-2xl mx-auto mb-20 flex items-center gap-4">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                            <div className="w-2 h-2 rounded-full bg-customPink" />
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                        </div>

                        <span className="inline-block text-sm font-semibold text-customPink uppercase tracking-wider mb-4">
                            Nossos Valores
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">
                            Princípios que nos{' '}
                            <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                                guiam
                            </span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Inovação",
                                    description: "Buscamos constantemente novas formas de entregar valor e experiências transformadoras para nossos participantes.",
                                    icon: Lightbulb
                                },
                                {
                                    title: "Excelência",
                                    description: "Comprometimento com a qualidade em cada detalhe, desde o conteúdo até a experiência do evento.",
                                    icon: Trophy
                                },
                                {
                                    title: "Impacto",
                                    description: "Focamos em gerar resultados reais e mensuráveis para todos os envolvidos no evento.",
                                    icon: Zap
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-customPink to-customPink2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-customPink/10 mb-6">
                                        <value.icon className="w-8 h-8 text-customPink" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Divisória antes dos Depoimentos */}
                    <div className="w-full max-w-2xl mx-auto mb-20 flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                        <div className="w-2 h-2 rounded-full bg-customPink" />
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                    </div>

                    {/* Testimonials Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-20"
                        id="depoimentos"
                    >
                        <div className="text-center mb-12">
                            <span className="inline-block text-sm font-semibold text-customPink uppercase tracking-wider mb-4">
                                Depoimentos
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                O que dizem sobre o{' '}
                                <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                                    UP Summit
                                </span>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Histórias reais de quem já viveu a experiência transformadora do maior evento de marketing do Brasil
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-3 gap-8 -m-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="bg-gradient-to-r from-customPink/5 to-transparent rounded-2xl" />
                                ))}
                            </div>
                            
                            {/* Testimonial Cards */}
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard 
                                    key={index} 
                                    {...testimonial}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Divisória antes do FAQ */}
                    <div className="w-full max-w-2xl mx-auto mb-20 flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                        <div className="w-2 h-2 rounded-full bg-customPink" />
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                    </div>
                </div>
            </section>

            {/* FAQ Section - Moved outside main section */}
            <section className="w-full bg-[#11111A] relative">
                {/* Decorative Lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div 
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-customPink
                        via-purple-800 to-purple-800"
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="py-20"
                    id="faq"
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="text-purple-800 text-sm font-semibold uppercase tracking-wider">
                                Dúvidas Frequentes
                            </span>
                            
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
                                Tire todas as suas{' '}
                                <span className="bg-gradient-to-r from-purple-800 to-purple-950 bg-clip-text text-transparent">
                                    dúvidas
                                </span>
                            </h2>

                            <p className="text-gray-300 mb-8">
                                Encontre respostas para as principais perguntas sobre o UP Summit, 
                                desde informações sobre ingressos até detalhes sobre a programação e local do evento.
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} {...faq} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="relative bg-white py-32">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Divisória antes do CTA */}
                    <div className="w-full max-w-2xl mx-auto mb-20 flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                        <div className="w-2 h-2 rounded-full bg-customPink" />
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                    </div>

                    {/* CTA Section - Updated */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center relative overflow-hidden rounded-3xl bg-gradient-to-br from-customPink to-customPink2 p-12"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        <h2 className="text-3xl font-bold text-white mb-6 relative">
                            Faça parte dessa história
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto relative">
                            Junte-se a milhares de profissionais e empresas que já transformaram 
                            seus negócios através do UP Summit.
                        </p>
                        <Link to="/ingressos" className="inline-flex justify-center">
                            <button className="group relative flex items-center gap-2 bg-white px-6 py-3 rounded-full text-customPink overflow-hidden transition-all duration-300">
                                <span className="relative z-10 text-base">Garantir meu ingresso</span>
                                <span className="relative z-10 rounded-full bg-customPink/10 p-1 transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                                <div className="absolute inset-0 bg-customPink/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                            </button>
                        </Link>
                    </motion.div>
        </div>
            </section>
        </>
    );
}

export default Sobre;