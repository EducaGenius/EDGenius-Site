"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Handshake, Info, Shield } from "lucide-react"
import SmoothLink  from "../components/SmoothScroll"

export function Hero() {
  return (
    <div className="relative overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[600px] lg:min-h-screen">
      {/* LADO AZUL / LOGO */}
      <div className="flex w-full lg:w-[30%] bg-[#000c34] items-center justify-center py-12 lg:py-0">
        <div className="relative z-10 px-6 sm:px-8">
          <Image
            src="/logo-header.svg"
            alt="EducaGenius Logo"
            width={300}
            height={300}
            className="w-48 sm:w-60 md:w-72 lg:w-full max-w-[280px] h-auto mx-auto drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* LADO LARANJA / TEXTO */}
      <div className="w-full lg:w-[70%] bg-gradient-to-br from-[#ff7500] to-[#ffc800] flex items-center justify-center">
        <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24 py-16 text-white w-full max-w-5xl text-center lg:text-left">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3 text-white">
            Novas oportunidades te esperam:
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight lg:leading-[1.1]">
            <span className="text-white">Seja um parceiro </span>
            <span className="text-[#000c34]"><b>EducaGênius!</b></span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-10 text-white leading-relaxed max-w-3xl mx-auto lg:mx-0">
            Educação que conecta propósito e negócios. Torne-se um polo EducaGênius e expanda seus ganhos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
            <SmoothLink
              href="#form"
              className="flex items-center bg-[#000c34] hover:bg-[#000c34]/90 text-white font-semibold px-8 py-3 text-base rounded-full shadow-lg cursor-pointer animate-pulse"
            >
              <Handshake className="mr-2 h-5 w-5" />
              Quero ser parceiro agora!
            </SmoothLink>
            <SmoothLink
              href="#beneficios"
              className="flex items-center border-2 border-white text-white hover:bg-white hover:text-[#ff7500] font-semibold px-8 py-3 text-base bg-transparent rounded-full cursor-pointer"
            >
              <Info className="mr-2 h-5 w-5" />
              Como funciona?
            </SmoothLink>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-white">
            <Shield className="w-4 h-4 flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base font-medium">
              Invista no futuro da educação e garanta seu sucesso financeiro.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
