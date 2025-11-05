"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import ContactForm from "../components/contact-form"

export function FormSection(){
    return(
        <section id="form" className="bg-[#000c34] text-white py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Transforme sua vida <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent font-extrabold">financeira hoje!</span>
                </h2>
                
                <p className="text-base sm:text-lg mb-8 text-gray-200">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até{" "}
                <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent font-bold">24 horas</span> para
                apresentar a melhor oportunidade para seu perfil.
                </p>

                <div className="flex justify-center mb-10">
                <div className="w-20 h-[3px] bg-gradient-to-r from-[#ff7500] to-[#ffc800] rounded-full"></div>
                </div>

                <ContactForm />
            </div>
        </section>
    )
}