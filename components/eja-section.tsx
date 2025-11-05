import { GraduationCap, BookOpen, CheckCircle, Handshake } from "lucide-react"
import { Card } from "@/components/ui/card"
import SmoothLink  from "../components/SmoothScroll"

export function EjaSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000c34] mb-4">
            Cursos{" "}
            <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent">EJA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos educação para jovens e adultos, permitindo que pessoas completem seus estudos em um formato
            flexível e reconhecido.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff7500] to-[#ffc800] rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* EJA Fundamental */}
          <Card className="p-8 border-t-4 border-t-[#000c34] shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#000c34]/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-[#000c34]" />
              </div>
              <h3 className="text-2xl font-bold text-[#000c34]">EJA Fundamental</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Educação para jovens e adultos que desejam concluir o ensino fundamental. Ideal para quem busca completar
              sua formação básica de forma flexível.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#000c34] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Ensino Fundamental Completo (1º ao 9º ano)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#000c34] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Modalidade Presencial e EAD</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#000c34] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Certificação Reconhecida pelo MEC</span>
              </div>
            </div>
          </Card>

          {/* EJA Médio */}
          <Card className="p-8 border-t-4 border-t-[#ff7500] shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff7500] to-[#ffc800] flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#000c34]">EJA Médio</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Ensino médio para jovens e adultos. Conclua seus estudos de forma acelerada e obtenha a certificação
              necessária para ingressar na faculdade ou melhorar no mercado de trabalho.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#ff7500] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Ensino Médio Completo</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#ff7500] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Modalidade Presencial e EAD</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#ff7500] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Certificação Reconhecida pelo MEC</span>
              </div>
            </div>
          </Card>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <SmoothLink href="#form" className=" flex items-center bg-[#000c34] hover:bg-[#000c34]/90 rounded-md text-white font-semibold px-8 py-3">
            <Handshake className="mr-2 h-5 w-5" />
            Quero ser parceiro agora!
          </SmoothLink>
        </div>
        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-pink-50 rounded-full px-6 py-3 border border-[#000c34]/10">
            <GraduationCap className="h-5 w-5 text-[#000c34]" />
            <p className="text-sm text-[#000c34] font-medium">
              Todos os cursos EJA reconhecidos e regulamentados conforme diretrizes do <strong>MEC</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
