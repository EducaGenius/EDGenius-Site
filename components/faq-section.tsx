"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "Quais são os requisitos para se tornar um parceiro EducaGênius?",
    answer:
      "Para se tornar um parceiro, você precisa ter interesse no mercado educacional, disponibilidade para investimento inicial e comprometimento com a qualidade do ensino. Nossa equipe avaliará seu perfil e apresentará as melhores opções de parceria.",
  },
  {
    question: "Quanto preciso investir para começar?",
    answer:
      "O investimento inicial varia de acordo com o nível de parceria escolhido (START, ADVANCED ou MASTER). Entre em contato conosco para receber uma proposta personalizada com todos os detalhes de investimento e retorno esperado.",
  },
  {
    question: "Como funciona o suporte para os parceiros?",
    answer:
      "Oferecemos suporte completo em todas as etapas: treinamento inicial, materiais de marketing, consultoria pedagógica, suporte técnico da plataforma EAD e acompanhamento contínuo. Nossa equipe está disponível 24/7 para auxiliar você.",
  },
  {
    question: "Os cursos são reconhecidos pelo MEC?",
    answer:
      "Sim! Todos os nossos cursos técnicos e EJA possuem certificação reconhecida pelo MEC, garantindo a validade nacional dos certificados emitidos aos alunos.",
  },
  {
    question: "Qual é o prazo para começar a operar?",
    answer:
      "Após a aprovação da parceria e conclusão do treinamento, você pode começar a operar em aproximadamente 30 dias. O prazo pode variar de acordo com a complexidade da implementação e sua disponibilidade.",
  },
  {
    question: "Como funciona a comissão sobre as vendas?",
    answer:
      "A comissão varia de acordo com o volume de vendas: 30% no nível START (até R$ 10.000), 40% no ADVANCED (R$ 10.001 a R$ 20.000) e 50% no MASTER (acima de R$ 20.001). Quanto mais você vende, maior sua comissão!",
  },
  {
    question: "Posso ter exclusividade territorial?",
    answer:
      "Sim! Parceiros do nível MASTER têm direito à exclusividade territorial, garantindo que você seja o único representante EducaGênius em sua região, maximizando suas oportunidades de negócio.",
  },
  {
    question: "Preciso ter experiência prévia em educação?",
    answer:
      "Não é obrigatório ter experiência prévia. Oferecemos treinamento completo sobre metodologia, plataforma EAD e gestão educacional. O mais importante é ter vontade de empreender e comprometimento com a qualidade.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000c34] mb-4">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre como se tornar um parceiro EducaGênius
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff7500] to-[#ffc800] rounded-full mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden border-l-4 border-l-[#ff7500] hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-[#000c34] text-lg pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#ff7500] to-[#ffc800] flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <a href="#contato" className="inline-flex items-center gap-2 text-[#ff7500] font-semibold hover:underline">
            Entre em contato conosco
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
