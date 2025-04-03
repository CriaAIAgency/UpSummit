import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcons } from './SocialIcons';
import { MapPin, Phone, Mail } from 'lucide-react';
import LogoBranca from '../assets/logobranca.png';

const Footer = () => {
    return (
        <footer className="bg-[#11111A] text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* About Section */}
                    <div>
                        <Link to="/" className="block mb-6">
                            <img src={LogoBranca} alt="UP Summit" className="w-40" />
                        </Link>
                        <p className="text-gray-400 mb-6">
                            O maior evento de marketing e empreendedorismo do Brasil, reunindo líderes, 
                            visionários e profissionais para compartilhar conhecimento e criar oportunidades.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href="https://www.facebook.com/upsummiteventos" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-customPink transition-colors"
                            >
                                <SocialIcons.Facebook />
                            </a>
                            <a 
                                href="https://www.instagram.com/upsummitoficial/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-customPink transition-colors"
                            >
                                <SocialIcons.Instagram />
                            </a>
                            <a 
                                href="https://www.youtube.com/@upsummit" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-customPink transition-colors"
                            >
                                <SocialIcons.Youtube />
                            </a>
                        </div>
                    </div>

                    {/* Links do Evento */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Evento</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/palestrantes" className="text-gray-400 hover:text-white transition-colors">
                                        Palestrantes
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edicoes" className="text-gray-400 hover:text-white transition-colors">
                                        Edições
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/depoimentos" className="text-gray-400 hover:text-white transition-colors">
                                        Depoimentos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sobre#faq" className="text-gray-400 hover:text-white transition-colors">
                                        Dúvidas
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Parceria</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/patrocinar" className="text-gray-400 hover:text-white transition-colors">
                                        Seja Patrocinador
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/motivos" className="text-gray-400 hover:text-white transition-colors">
                                        Por que Patrocinar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contato" className="text-gray-400 hover:text-white transition-colors">
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                                <span>
                                    Pontifícia Universidade Católica de Goiás - Câmpus II, Av. Engler, 507 - Jardim Mariliza, Goiânia - GO, 74885-460
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5" />
                                <span>(62) 8172-3047</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5" />
                                <a href="mailto:contato@upsummit.com.br" className="hover:text-white transition-colors">
                                comercialupsummit@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2025 UP Summit. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Política de Privacidade
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Termos de Uso
                            </a>
                            <a href="https://wa.me/5511914106730" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-customPink transition-colors">
                                Desenvolvido por Guilherme Costa
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;