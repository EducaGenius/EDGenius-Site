import { TrendingUp, Handshake, Award, Laptop, Headphones, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SmoothLink  from "../components/SmoothScroll"

const benefits = [
  {
    icon: TrendingUp,
    title: "Alta rentabilidade comprovada",
    description:
      "Explore um modelo de negócio com margens atrativas e rápido retorno sobre o investimento no crescente mercado EAD.",
    badge: "ROI até 500%",
    badgeColor: "bg-gradient-to-r from-[#ff7500]/10 to-[#ffc800]/10 text-[#ff7500] border-[#ff7500]/20",
    borderColor: "border-t-[#ff7500]",
  },
  {
    icon: Handshake,
    title: "Suporte completo e contínuo",
    description:
      "Desde o planejamento à operação, oferecemos treinamento, materiais de marketing e consultoria especializada.",
    badge: "24/7 Disponível",
    badgeColor: "bg-[#000c34]/10 text-[#000c34] border-[#000c34]/20",
    borderColor: "border-t-[#000c34]",
  },
  {
    icon: Award,
    title: "Marca consolidada e reconhecida",
    description: "Associe-se a uma marca de prestígio no mercado de educação, facilitando a atração de alunos.",
    badge: "Nota 5/5",
    badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
    borderColor: "border-t-[#ff7500]",
  },
  {
    icon: Laptop,
    title: "Tecnologia de ponta",
    description: "Acesso a uma plataforma EAD robusta e um portfólio de cursos atualizado e de alta demanda.",
    badge: "+4000 Cursos",
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    borderColor: "border-t-[#000c34]",
  },
  {
    icon: Headphones,
    title: "Atendimento humanizado",
    description:
      "Nossa equipe está sempre pronta para ajudar, garantindo a melhor experiência para você e seus alunos.",
    badge: "Resposta < 2h",
    badgeColor: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    borderColor: "border-t-[#ff7500]",
  },
  {
    icon: Heart,
    title: "Impacto social positivo",
    description: "Contribua para o desenvolvimento educacional da sua comunidade e construa um legado duradouro.",
    badge: "Propósito Social",
    badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
    borderColor: "border-t-[#000c34]",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000c34] mb-4">
            Por que se tornar um parceiro{" "}
            <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent">
              EducaGênius
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra as vantagens exclusivas que fazem da nossa parceria a melhor oportunidade do mercado educacional.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff7500] to-[#ffc800] rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className={`p-8 hover:shadow-xl transition-all duration-300 border-t-4 ${benefit.borderColor} bg-white`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`p-4 rounded-2xl ${index % 3 === 0 ? "bg-gradient-to-br from-[#ff7500]/10 to-[#ffc800]/5" : "bg-gradient-to-br from-[#000c34]/10 to-[#000c34]/5"}`}
                  >
                    <Icon className={`h-10 w-10 ${index % 3 === 0 ? "text-[#ff7500]" : "text-[#000c34]"}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#000c34]">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                  <Badge variant="outline" className={`${benefit.badgeColor} font-semibold`}>
                    {benefit.badge}
                  </Badge>
                </div>
              </Card>
            )
          })}
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
