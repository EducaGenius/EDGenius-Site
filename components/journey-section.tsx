"use client"

import { UserPlus, Users, Rocket, TrendingUp, Trophy } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    icon: UserPlus,
    number: "1",
    title: "Cadastro de Interesse",
    description:
      "Você realiza um pré-cadastro simples, informando seus dados e demonstrando interesse em ser parceiro da EducaGênius. Nossa equipe entrará em contato rapidamente.",
    badges: ["100% Online", "Resposta 24h"],
    badgeColors: ["bg-gradient-to-r from-[#ff7500] to-[#ffc800] text-white", "bg-blue-500/10 text-blue-600"],
    side: "left",
  },
  {
    icon: Users,
    number: "2",
    title: "Reunião de Alinhamento",
    description:
      "Agendamos uma conversa para entender suas expectativas, explicar os modelos de parceria e apresentar todo o suporte que oferecemos.",
    badges: ["Presencial ou Online"],
    badgeColors: ["bg-purple-500/10 text-purple-600"],
    side: "right",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Formalização e Treinamento",
    description:
      "Após a aprovação, você assina o contrato e recebe treinamento completo sobre a plataforma, metodologia e estratégias de vendas.",
    badges: ["Suporte Completo"],
    badgeColors: ["bg-green-500/10 text-green-600"],
    side: "left",
  },
  {
    icon: TrendingUp,
    number: "4",
    title: "Início das Operações",
    description:
      "Com tudo configurado, você começa a oferecer os cursos e a captar alunos, contando com nosso suporte contínuo.",
    badges: ["Acompanhamento Dedicado"],
    badgeColors: ["bg-orange-500/10 text-orange-600"],
    side: "right",
  },
  {
    icon: Trophy,
    number: "5",
    title: "Crescimento e Sucesso",
    description:
      "À medida que suas vendas crescem, você sobe na escada de parceria e aumenta seus ganhos, construindo um negócio sólido e lucrativo.",
    badges: ["Escalabilidade Garantida"],
    badgeColors: ["bg-[#ffc800]/20 text-[#ff7500]"],
    side: "left",
  },
]

export function JourneySection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      const scrollStart = sectionTop - windowHeight / 2
      const scrollEnd = sectionTop + sectionHeight - windowHeight / 2

      if (scrollY < scrollStart) {
        setScrollProgress(0)
      } else if (scrollY > scrollEnd) {
        setScrollProgress(100)
      } else {
        const progress = ((scrollY - scrollStart) / (scrollEnd - scrollStart)) * 100
        setScrollProgress(Math.min(Math.max(progress, 0), 100))
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000c34] mb-4">
            Sua jornada para o{" "}
            <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent">sucesso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e estruturado para garantir seu sucesso desde o primeiro dia.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff7500] to-[#ffc800] rounded-full mx-auto mt-4" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden lg:block" />
          {/* Animated Progress Line */}
          <div
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-[#ff7500] to-[#ffc800] -translate-x-1/2 hidden lg:block transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLeft = step.side === "left"

              return (
                <div key={index} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    {isLeft ? (
                      <>
                        {/* Content Left */}
                        <div className="text-right">
                          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border-t-4 border-t-[#ff7500] max-w-md ml-auto">
                            <h3 className="text-2xl font-bold text-[#000c34] mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                            <div className="flex flex-wrap gap-2 justify-end">
                              {step.badges.map((badge, idx) => (
                                <span
                                  key={idx}
                                  className={`text-xs font-semibold px-3 py-1 rounded-full ${step.badgeColors[idx]}`}
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* Icon Center */}
                        <div className="relative flex justify-start">
                          <div className="absolute -left-[72px] w-16 h-16 rounded-full bg-gradient-to-br from-[#ff7500] to-[#ffc800] flex items-center justify-center text-white text-2xl font-bold shadow-xl z-10 border-4 border-white">
                            <Icon className="w-8 h-8" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Icon Center */}
                        <div className="relative flex justify-end">
                          <div className="absolute -right-[72px] w-16 h-16 rounded-full bg-gradient-to-br from-[#ff7500] to-[#ffc800] flex items-center justify-center text-white text-2xl font-bold shadow-xl z-10 border-4 border-white">
                            <Icon className="w-8 h-8" />
                          </div>
                        </div>
                        {/* Content Right */}
                        <div className="text-left">
                          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border-t-4 border-t-[#ff7500] max-w-md">
                            <h3 className="text-2xl font-bold text-[#000c34] mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {step.badges.map((badge, idx) => (
                                <span
                                  key={idx}
                                  className={`text-xs font-semibold px-3 py-1 rounded-full ${step.badgeColors[idx]}`}
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff7500] to-[#ffc800] flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      {index < steps.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-4" />}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-t-[#ff7500]">
                        <h3 className="text-xl font-bold text-[#000c34] mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.badges.map((badge, idx) => (
                            <span
                              key={idx}
                              className={`text-xs font-semibold px-3 py-1 rounded-full ${step.badgeColors[idx]}`}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
