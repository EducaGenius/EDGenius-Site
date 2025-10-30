"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Handshake, Info, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-stretch">
      <div className="hidden lg:flex lg:w-[30%] bg-[#000c34] items-center justify-center">
        <div className="relative z-10 px-8 py-16">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-grande-Obfk45BaYxN7GlRugDyV7ERFaVps0l.png"
            alt="EducaGenius Logo"
            width={300}
            height={300}
            className="w-full max-w-[280px] h-auto mx-auto drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      <div className="w-full lg:w-[70%] bg-gradient-to-br from-[#ff7500] to-[#ffc800] flex items-center justify-center">
        <div className="relative z-10 px-6 sm:px-12 lg:px-16 xl:px-24 py-16 text-white w-full max-w-5xl">
          <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-3 text-white whitespace-nowrap">
            Novas oportunidades te esperam:
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance leading-[1.1]">
            <span className="text-white">Seja um parceiro </span>
            <span className="text-[#000c34]">EducaGênius!</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl mb-10 text-white leading-relaxed max-w-3xl">
            Educação que conecta propósito e negócios. Torne-se um polo EducaGênius e expanda seus ganhos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              className="bg-[#000c34] hover:bg-[#000c34]/90 text-white font-semibold px-8 py-6 text-base rounded-full shadow-lg"
            >
              <Handshake className="mr-2 h-5 w-5" />
              Quero ser parceiro agora!
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#ff7500] font-semibold px-8 py-6 text-base bg-transparent rounded-full"
            >
              <Info className="mr-2 h-5 w-5" />
              Como funciona?
            </Button>
          </div>

          <div className="flex items-center gap-3 text-white">
            <Shield className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm lg:text-base font-medium">
              Invista no futuro da educação e garanta seu sucesso financeiro.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#000c34] via-[#ff7500] to-[#ffc800]" />

      <div className="lg:hidden relative z-20 container mx-auto px-4 py-16 text-center flex flex-col items-center justify-center min-h-[600px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-grande-Obfk45BaYxN7GlRugDyV7ERFaVps0l.png"
          alt="EducaGenius Logo"
          width={200}
          height={200}
          className="w-40 h-40 mx-auto mb-8 drop-shadow-2xl"
          priority
        />
        <p className="text-lg font-medium mb-2 text-white">Novas oportunidades te esperam:</p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white leading-tight">
          Seja um parceiro <span className="text-[#000c34]">EducaGênius!</span>
        </h1>

        <p className="text-lg mb-6 text-white/90">
          Educação que conecta propósito e negócios. Torne-se um polo EducaGênius e expanda seus ganhos.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-md">
          <Button size="lg" className="bg-[#000c34] hover:bg-[#000c34]/90 text-white font-semibold rounded-full">
            <Handshake className="mr-2 h-5 w-5" />
            Quero ser parceiro agora!
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#ff7500] font-semibold bg-transparent rounded-full"
          >
            <Info className="mr-2 h-5 w-5" />
            Como funciona?
          </Button>
        </div>
        <div className="flex items-center gap-2 text-white mt-6">
          <Shield className="w-4 h-4" />
          <p className="text-sm">Invista no futuro da educação e garanta seu sucesso financeiro.</p>
        </div>
      </div>
    </section>
  )
}
