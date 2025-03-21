import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Globe, BadgeDollarSign, Target, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const investmentRanges = [
  { id: 1, value: 'R$10.000 - R$50.000', label: 'R$ 10.000 - R$ 50.000' },
  { id: 2, value: 'R$51.000 - R$100.000', label: 'R$ 51.000 - R$ 100.000' },
  { id: 3, value: 'R$101.000 - R$200.000', label: 'R$ 101.000 - R$ 200.000' },
  { id: 4, value: 'R$201.000 - R$400.000', label: 'R$ 201.000 - R$ 400.000' },
  { id: 5, value: 'ABOVE_400K', label: 'Acima de R$ 400.000' },
];

const objectives = [
  { id: 1, label: 'Aumentar o reconhecimento da marca' },
  { id: 2, label: 'Gerar leads qualificados e oportunidades de negócio' },
  { id: 3, label: 'Fortalecer o relacionamento com clientes e prospects' },
  { id: 4, label: 'Posicionar a empresa como referência no mercado' },
  { id: 5, label: 'Criar experiências marcantes para o público-alvo' },
  { id: 6, label: 'Networking e parcerias estratégicas' },
];

const Patrocinar = () => {
    const [selectedObjectives, setSelectedObjectives] = useState([]);
    const [formStep, setFormStep] = useState(1);
    const [formErrors, setFormErrors] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: '',
        company: '',
        website: '',
        investmentRange: '',
        message: ''
    });

    const handleObjectiveToggle = (id) => {
        setSelectedObjectives(prev =>
        prev.includes(id)
            ? prev.filter(objId => objId !== id)
            : [...prev, id]
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const validateStep1 = () => {
        const errors = [];
        if (!formData.name) errors.push('Nome é obrigatório');
        if (!formData.email) errors.push('Email é obrigatório');
        if (!formData.company) errors.push('Empresa é obrigatória');

        setFormErrors(errors);
        return errors.length === 0;
    };

    const validateStep2 = () => {
        const errors = [];
        if (!formData.investmentRange) errors.push('Selecione uma faixa de investimento');
        if (selectedObjectives.length === 0) errors.push('Selecione pelo menos um objetivo');

        setFormErrors(errors);
        return errors.length === 0;
    };

    const handleNextStep = () => {
        if (validateStep1()) {
        setFormStep(2);
        setFormErrors([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep2()) {
        console.log({ ...formData, objectives: selectedObjectives });
        // Aqui você pode adicionar a lógica para envio do formulário.
        }
    };

    return (
        <section className="relative bg-gray-50 py-32">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-customPink2 uppercase tracking-wider mb-4">
                        Seja parte do maior evento de marketing do Brasil
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-customPink via-customPink to-customPink2 bg-clip-text text-transparent">
                        RESERVE SUA COTA DE PATROCÍNIO
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-customPink to-customPink2 mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Conecte sua marca com mais de <span className="text-customPink2 font-semibold">10.000 participantes</span> e 
                        faça parte de uma experiência única de <span className="text-customPink2 font-semibold">networking</span> e 
                        <span className="text-customPink2 font-semibold"> oportunidades de negócios</span>.
                    </p>
                </motion.div>

                {formErrors.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                    <div className="flex items-center gap-2 text-red-600 mb-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Por favor, corrija os seguintes erros:</span>
                    </div>
                    <ul className="list-disc list-inside text-red-600 text-sm">
                    {formErrors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                    </ul>
                </motion.div>
                )}

                <motion.form 
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                >
                <div className="space-y-8">
                    {/* Step 1: Informações Básicas */}
                    <motion.div
                    initial={{ opacity: 0, x: formStep === 1 ? 20 : -20 }}
                    animate={{ opacity: formStep === 1 ? 1 : 0, x: 0 }}
                    className={formStep === 1 ? 'block' : 'hidden'}
                    >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nome completo *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-customPink2 focus:border-transparent transition"
                            required
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email corporativo *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-customPink2 focus:border-transparent transition"
                            required
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cargo
                        </label>
                        <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-12 pr-4 py-3 text-gray-900 focus:ring-2 focus:ring-customPink2 focus:border-transparent transition"
                            />
                        </div>
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Empresa *
                        </label>
                        <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-12 pr-4 py-3 text-gray-900 focus:ring-2 focus:ring-customPink2 focus:border-transparent transition"
                            required
                            />
                        </div>
                        </div>
                        <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Website
                        </label>
                        <div className="relative">
                            <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-12 pr-4 py-3 text-gray-900 focus:ring-2 focus:ring-customPink2 focus:border-transparent transition"
                            />
                        </div>
                        </div>
                    </div>
                    
                    <motion.button
                        type="button"
                        onClick={handleNextStep}
                        className="mt-8 w-full bg-gradient-to-r from-customPink to-customPink2 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Próximo passo
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    </motion.div>

                    {/* Step 2: Investimento e Objetivos */}
                    <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: formStep === 2 ? 1 : 0, x: 0 }}
                    className={formStep === 2 ? 'block' : 'hidden'}
                    >
                    <div className="space-y-8">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">
                            Faixa de investimento planejada *
                        </label>
                        <div className="grid gap-3">
                            {investmentRanges.map((range) => (
                            <label
                                key={range.id}
                                className="relative flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-gray-200 cursor-pointer hover:bg-gray-100 transition"
                            >
                                <div className="flex items-center">
                                <BadgeDollarSign className="w-5 h-5 text-customPink mr-3" />
                                <span className="text-gray-900">{range.label}</span>
                                </div>
                                <input
                                type="radio"
                                name="investmentRange"
                                value={range.value}
                                checked={formData.investmentRange === range.value}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-customPink border-gray-300 focus:ring-customPink2"
                                required
                                />
                            </label>
                            ))}
                        </div>
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">
                            Objetivos com o UP Summit *
                        </label>
                        <div className="grid md:grid-cols-2 gap-3">
                            {objectives.map((objective) => (
                            <button
                                key={objective.id}
                                type="button"
                                onClick={() => handleObjectiveToggle(objective.id)}
                                className={`p-4 rounded-lg border text-left transition flex items-start gap-3
                                ${selectedObjectives.includes(objective.id)
                                    ? 'bg-pink-500/10 border-customPink text-gray-900'
                                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <Target className={`w-5 h-5 mt-0.5 ${
                                selectedObjectives.includes(objective.id) ? 'text-customPink' : 'text-gray-400'
                                }`} />
                                <span>{objective.label}</span>
                            </button>
                            ))}
                        </div>
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mensagem adicional
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="4"
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-customPink2 focus:border-transparent transition"
                            placeholder="Conte-nos mais sobre seus objetivos..."
                        />
                        </div>

                        <div className="flex gap-4">
                        <motion.button
                            type="button"
                            onClick={() => setFormStep(1)}
                            className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Voltar
                        </motion.button>
                        <motion.button
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-customPink to-customPink2 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Enviar solicitação
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        </div>
                    </div>
                    </motion.div>
                </div>
                </motion.form>
            </div>

            <div className="max-w-4xl mx-auto px-6 mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="inline-block text-sm font-semibold text-purple-800 uppercase tracking-wider mb-4">
                        Dúvidas sobre patrocínio?
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent">
                        Por que patrocinar o UP Summit
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Descubra os benefícios exclusivos e o retorno que sua marca pode ter ao patrocinar o maior evento de marketing do Brasil.
                    </p>
                    <Link to="/motivos" className="inline-flex justify-center">
                        <button className="group flex h-12 items-center gap-2 rounded-full text-white bg-gradient-to-r from-purple-800 to-purple-950 pl-3 pr-4 transition-all duration-300 ease-in-out hover:from-purple-900 hover:to-purple-950 hover:pl-2 hover:text-white active:bg-purple-950">
                            <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                                <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-purple-800 group-active:-rotate-45" />
                            </span>
                            <span>Descobrir Benefícios</span>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Patrocinar;