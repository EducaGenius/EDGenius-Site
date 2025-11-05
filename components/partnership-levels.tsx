import { TrendingUp, Handshake, Award, Laptop, Headphones, Heart } from "lucide-react"
import SmoothLink  from "../components/SmoothScroll"

export function PartnershipLevels() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000c34] mb-4">
            Escada de parceria{" "}
            <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent">
              EducaGênius
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entenda como sua dedicação se transforma em ganhos exponenciais!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff7500] to-[#ffc800] rounded-full mx-auto mt-4" />
        </div>

        {/* Staggered Cards Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {/* START Card */}
            <div className="lg:mt-12">
              <div className="relative bg-[#2d2d44] rounded-3xl p-8 border-4 border-[#ff7500] shadow-2xl">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#ff7500] to-[#ffc800] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-3xl font-bold text-white mb-4">START</h3>
                  <p className="text-white/80 mb-2">
                    Até{" "}
                    <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent font-bold">
                      R$ 10.000,00
                    </span>{" "}
                    em vendas
                  </p>
                  <div className="text-6xl font-bold bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent my-6">
                    30%
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    de comissão sobre o valor gerado. Perfeito para quem está começando e buscando resultados
                    consistentes.
                  </p>
                </div>
              </div>
            </div>

            {/* ADVANCED Card */}
            <div className="lg:mt-6">
              <div className="relative bg-[#2d2d44] rounded-3xl p-8 border-4 border-[#ffc800] shadow-2xl">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#ffc800] flex items-center justify-center text-[#000c34] text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-3xl font-bold text-white mb-4">ADVANCED</h3>
                  <p className="text-white/80 mb-2">
                    De{" "}
                    <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent font-bold">
                      R$ 10.001,00
                    </span>{" "}
                    a{" "}
                    <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent font-bold">
                      R$ 20.000,00
                    </span>
                  </p>
                  <p className="text-white/60 text-sm mb-2">em vendas</p>
                  <div className="text-6xl font-bold text-[#ffc800] my-6">40%</div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    de comissão! Sua dedicação é recompensada com uma participação ainda maior nos lucros.
                  </p>
                </div>
              </div>
            </div>

            {/* MASTER Card */}
            <div className="lg:mt-0">
              <div className="relative bg-[#2d2d44] rounded-3xl p-8 border-4 border-[#00e676] shadow-2xl">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#00e676] flex items-center justify-center text-[#000c34] text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-3xl font-bold text-white mb-4">MASTER</h3>
                  <p className="text-white/80 mb-2">
                    Acima de{" "}
                    <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent font-bold">
                      R$ 20.001,00
                    </span>{" "}
                    em vendas
                  </p>
                  <div className="text-6xl font-bold text-[#00e676] my-6">50%</div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    de comissão! Você atingiu o topo, com a máxima rentabilidade e reconhecimento como parceiro
                    estratégico.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-[#ff7500]/20">
              <TrendingUp className="h-5 w-5 text-[#ff7500]" />
              <p className="text-sm text-[#000c34] font-medium">
                Entenda com um exemplo prático de meta de faturamento:
              </p>
            </div>
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <SmoothLink href="#form" className=" flex items-center bg-[#000c34] hover:bg-[#000c34]/90 rounded-md text-white font-semibold px-8 py-3">
            <Handshake className="mr-2 h-5 w-5" />
            Quero ser parceiro agora!
          </SmoothLink>
        </div>
      </div>
    </section>
  )
}
