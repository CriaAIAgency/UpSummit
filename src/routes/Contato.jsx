import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = encodeURIComponent(formData.mensagem);
        window.open(`https://api.whatsapp.com/send?phone=556281717101&text=${message}`, '_blank');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <section className="relative bg-white py-32">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <span className="inline-block text-sm font-semibold text-customPink uppercase tracking-wider mb-4">
                            Entre em Contato
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8">
                            <span className="text-neutral-900">Vamos conversar sobre</span>
                            <br />
                            <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                                o seu futuro
                            </span>
                        </h1>
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-customPink/30" />
                            <div className="w-2 h-2 rounded-full bg-customPink" />
                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-customPink/30" />
                        </div>
                    </div>

                    {/* Contact Grid */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                                <p className="text-gray-600 mb-8">
                                    Estamos aqui para ajudar! Entre em contato conosco através de qualquer 
                                    um dos canais abaixo.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-customPink/10 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-customPink" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <p className="text-gray-600">comercialupsummit@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-customPink/10 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-customPink" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Telefone</h3>
                                        <p className="text-gray-600">(62) 8172-3047</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-customPink/10 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-customPink" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Endereço</h3>
                                        <p className="text-gray-600">
                                            Centro de Convenções da PUC Goiás
                                            <br />
                                            Goiânia - GO
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nome completo
                                    </label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customPink focus:border-transparent outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customPink focus:border-transparent outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        value={formData.mensagem}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customPink focus:border-transparent outline-none transition-all"
                                        required
                                        placeholder="Olá, quero saber mais sobre o Up Summit"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group relative flex items-center gap-3 bg-gradient-to-r from-customPink to-customPink2 px-8 py-3.5 rounded-full text-white overflow-hidden transition-all duration-300"
                                >
                                    <span className="relative z-10">Enviar mensagem</span>
                                    <Send className="relative z-10 w-5 h-5" strokeWidth={2} />
                                    <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#11111A] py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center relative overflow-hidden rounded-3xl bg-[#11111A] p-12">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        
                        <h2 className="text-3xl font-bold text-white mb-6 relative">
                            Faça parte dessa{' '}
                            <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                                história
                            </span>
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto relative">
                            Junte-se a milhares de profissionais e empresas que já transformaram 
                            seus negócios através do UP Summit.
                        </p>
                        <button 
                            onClick={() => window.open('https://upsummit.com.br/', '_blank')}
                            className="group relative flex items-center gap-2 bg-white px-6 py-3 rounded-full text-customPink overflow-hidden transition-all duration-300 hover:text-customPink2 mx-auto"
                        >
                            <span className="relative z-10 text-base">Garantir meu ingresso</span>
                            <span className="relative z-10 rounded-full bg-customPink/10 p-1 transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                            <div className="absolute inset-0 bg-customPink/5 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contato; 