"use client"

import { useState } from "react"

export default function ContactForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        city: "",
        state: "",
        partnershipInterest: "",
        experience: "",
        message: "",
        acceptTerms: false,
        receiveNews: false,
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        const { name, value } = target
        const checked = (target as HTMLInputElement).checked

        setFormData((prev) => ({
            ...prev,
            [name]: target.type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Dados enviados:", formData)
        // Aqui você pode enviar para API, Google Sheets, webhook etc.
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-left">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nome Completo *</label>
                    <input name="name" type="text" placeholder="Seu nome completo" value={formData.name} onChange={handleChange} className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none" required/>
                </div>

                <div className="text-left">
                    <label className="block text-sm font-semibold text-gray-700 mb-1"> E-mail *</label>
                    <input name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none" required />
                </div>

                <div className="text-left">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp *</label>
                    <input name="whatsapp" type="text" placeholder="(31) 99999-9999" value={formData.whatsapp} onChange={handleChange} className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none" required />
                </div>

                <div className="text-left">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Cidade * </label>
                    <input name="city" type="text" placeholder="Sua cidade" value={formData.city} onChange={handleChange} className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none" required />
                </div>

                <div className="text-left">
                    <label className="block text-sm font-semibold text-gray-700 mb-1"> Estado * </label>
                    <select name="state" value={formData.state} onChange={handleChange} required className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none">
                        <option value="">Selecione seu estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>

                <div className="text-left">
                    <label className="block text-sm font-semibold text-gray-700 mb-1"> Interesse em parceria * </label>
                    <select name="partnershipInterest" value={formData.partnershipInterest} onChange={handleChange} required className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none" >
                        <option value="">Selecione uma opção</option>
                        <option value="vendedor">Vendedor de Cursos EAD</option>
                        <option value="polo-pequeno">Polo Pequeno (até 50 alunos)</option>
                        <option value="polo-medio">Polo Médio (50-150 alunos)</option>
                        <option value="polo-grande">Polo Grande (150+ alunos)</option>
                        <option value="nao-sei"> Não sei ainda - quero orientação</option>
                    </select>
                </div>

                <div className="text-left md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-1"> Experiência anterior </label>
                    <select name="experience" value={formData.experience} onChange={handleChange} className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none" >
                        <option value="">Selecione sua experiência</option>
                        <option value="educacao">Já trabalho com educação</option>
                        <option value="vendas">Tenho experiência em vendas</option>
                        <option value="empreendedor">Sou empreendedor</option>
                        <option value="funcionario">Sou funcionário CLT</option>
                        <option value="nenhuma">Não tenho experiência na área</option>
                    </select>
                </div>

                <div className="text-left md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Mensagem (opcional)</label>
                    <textarea name="message" placeholder="Conte-nos mais sobre seus objetivos e expectativas..." value={formData.message} onChange={handleChange} className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
                <label className="flex text-left items-start gap-2 text-sm text-gray-700">
                    <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} required className="mt-1 accent-[#000c34]" />
                    <span>Eu concordo em receber contato da Educa Gênius sobre oportunidades de parceria e aceito os{" "} <a href="#" className="text-orange-600 underline"> termos de uso </a>{" "} e{" "} <a href="#" className="text-orange-600 underline"> política de privacidade </a>.</span>
                </label>

                <label className="flex text-left items-start gap-2 text-sm text-gray-700">
                    <input type="checkbox" name="receiveNews" checked={formData.receiveNews} onChange={handleChange} className="mt-1 accent-[#000c34]" /> Quero receber novidades, dicas de negócios e oportunidades exclusivas por e-mail.
                </label>
            </div>

            {/* Botão */}
            <div className="text-center">
                <button type="submit" className="bg-[#ff7500] text-white font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300 shadow-md"> 🚀 Quero ser parceiro da Educa Gênius! </button>
            </div>
        </form>
    )
}