import { Heart, Briefcase, Wrench, HardHat, Laptop, Leaf, Utensils, Handshake } from "lucide-react"
import { Card } from "@/components/ui/card"
import SmoothLink  from "../components/SmoothScroll"

const courseCategories = [
  {
    icon: Heart,
    title: "Área da Saúde",
    borderColor: "border-t-[#ff7500]",
    iconBg: "from-[#ff7500]/10 to-[#ffc800]/5",
    iconColor: "text-[#ff7500]",
    bulletColor: "text-[#ff7500]",
    courses: [
      "Técnico em Agente Comunitário de Saúde",
      "Técnico em Análises Clínicas",
      "Técnico em Cuidados de Idosos",
      "Técnico em Enfermagem",
      "Técnico em Equipamentos Biomédicos",
      "Técnico em Estética",
      "Técnico em Farmácia",
      "Técnico em Gerência em Saúde",
      "Técnico em Nutrição e Dietética",
      "Técnico em Química",
      "Técnicom em Radiologia",
      "Técnicom em Saúde Bucal",
      "Técnicom em Veterinária",
    ],
  },
  {
    icon: Briefcase,
    title: "Administração e Gestão",
    borderColor: "border-t-[#000c34]",
    iconBg: "from-[#000c34]/10 to-[#000c34]/5",
    iconColor: "text-[#000c34]",
    bulletColor: "text-[#000c34]",
    courses: [
      "Técnico em Administração",
      "Técnico em Contabilidade",
      "Técnico em Logística",
      "Técnico em Marketing",
      "Técnico em Qualidade",
      "Técnico em Recursos Humanos",
      "Técnico em Secretariado Escolar",
      "Técnico em Segurança do Trabalho",
      "Técnico em Serviços Jurídicos",
      "Técnico em Transações Imobiliárias",
      "Técnico em Vendas",
      "Curso Técnico em Eventos",
    ],
  },
  {
    icon: Wrench,
    title: "Engenharia e Manutenção",
    borderColor: "border-t-[#000c34]",
    iconBg: "from-[#000c34]/10 to-[#000c34]/5",
    iconColor: "text-[#000c34]",
    bulletColor: "text-[#000c34]",
    courses: [
      "Técnico em Automação Industrial",
      "Técnico em Eletromecânica",
      "Técnico em Eletrotécnica",
      "Técnico em Eletrônica",
      "Técnico em Manutenção de Máquinas Industriais",
      "Técnico em Máquinas Pesadas",
      "Técnico em Metalurgia",
      "Técnico em Refrigeração e Climatização",
      "Técnico em Soldagem",
      "Técnico em Manutenção de Máquinas Navais",
    ],
  },
  {
    icon: HardHat,
    title: "Construção e Infraestrutura",
    borderColor: "border-t-[#ff7500]",
    iconBg: "from-[#ff7500]/10 to-[#ffc800]/5",
    iconColor: "text-[#ff7500]",
    bulletColor: "text-[#ff7500]",
    courses: [
      "Técnico em Agrimensura",
      "Técnico em Edificações",
      "Técnico em Mineração",
      "Técnico em Segurança do Trabalho",
      "Técnico em Prevenção e Combate ao Incêndio",
      "Curso Técnico em Defesa Civil",
      "Curso Técnico em Trânsito",
    ],
  },
  {
    icon: Laptop,
    title: "Tecnologia e Informática",
    borderColor: "border-t-[#000c34]",
    iconBg: "from-[#000c34]/10 to-[#000c34]/5",
    iconColor: "text-[#000c34]",
    bulletColor: "text-[#000c34]",
    courses: [
      "Técnico em Biotecnologia",
      "Técnico em Design Gráfico",
      "Técnico em Desenvolvimento de Sistemas",
      "Técnico em Informática para Internet",
      "Técnico em Redes de Computadores",
      "Técnico em Sistemas de Energia Renovável",
      "Técnico em Telecomunicações",
    ],
  },
  {
    icon: Leaf,
    title: "Meio Ambiente e Agropecuária",
    borderColor: "border-t-[#000c34]",
    iconBg: "from-[#000c34]/10 to-[#000c34]/5",
    iconColor: "text-[#000c34]",
    bulletColor: "text-[#000c34]",
    courses: [
      "Técnico em Agricultura",
      "Técnico em Agropecuária",
      "Técnico em Agroindústria",
      "Técnico em Aquicultura",
      "Técnico em Meio Ambiente",
    ],
  },
  {
    icon: Utensils,
    title: "Área de Serviços",
    borderColor: "border-t-[#ff7500]",
    iconBg: "from-[#ff7500]/10 to-[#ffc800]/5",
    iconColor: "text-[#ff7500]",
    bulletColor: "text-[#ff7500]",
    courses: [
      "Técnico em Gastronomia",
      "Técnico em Óptica",
      "Técnico em Designer de Interiores",
      "Técnico em Guia de Turismo",
    ],
  },
]

export function CoursesSection() {
  return (
    <section id="cursos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000c34] mb-4">
            Nossos{" "}
            <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent">
              cursos técnicos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça as áreas de formação técnica disponíveis para nossos parceiros — todas alinhadas às demandas do
            mercado e reconhecidas pelo MEC.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff7500] to-[#ffc800] rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courseCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-300 border-t-4 ${category.borderColor} bg-white`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.iconBg}`}>
                    <Icon className={`h-6 w-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-[#000c34]">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.courses.map((course, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className={`mr-2 ${category.bulletColor} mt-1`}>•</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
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
