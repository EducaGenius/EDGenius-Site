import { Card } from "@/components/ui/card"
import { Target, BookOpen, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Users, Handshake } from "lucide-react"

export function MissionValuesSection() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent">
              EducaGênius
            </span>
            <span className="text-[#000c34]"> : Educação que gera valor!</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff7500] to-[#ffc800] rounded-full mx-auto" />
        </div>

        {/* Mission and History Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          <Card className="p-8 border-t-4 border-t-[#ff7500] shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff7500]/20 to-[#ffc800]/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-[#ff7500]" />
              </div>
              <h3 className="text-2xl font-bold text-[#000c34]">Nossa missão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transformar e valorizar vidas e negócios. Oferecemos educação acessível, inovadora e de qualidade, focados
              em parcerias estratégicas que criam oportunidades para alunos e empreendedores do setor educacional.
            </p>
          </Card>

          <Card className="p-8 border-t-4 border-t-[#ff7500] shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff7500]/20 to-[#ffc800]/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-[#ff7500]" />
              </div>
              <h3 className="text-2xl font-bold text-[#000c34]">Nossa história</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A{" "}
              <span className="font-semibold bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent">
                EducaGênius
              </span>{" "}
              é líder em inovação educacional há mais de 20 anos no Brasil. Especialistas em projetos com certificação
              MEC, nosso compromisso é contínuo em transformar o cenário educacional e impulsionar o sucesso de nossos
              parceiros e estudantes.
            </p>
          </Card>
        </div>

        {/* Video and Stats */}
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Video Player */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff7500] to-[#ffc800] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent font-bold text-lg">
                  EducaGênius
                </span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-6 text-center bg-[#000c34] border-none shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">+de 200</div>
              <div className="text-sm text-white/80">Parceiros ativos</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-[#ff7500] to-[#ffc800] border-none shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">+de 500K</div>
              <div className="text-sm text-white/80">Alunos formados</div>
            </Card>
            <Card className="p-6 text-center bg-[#000c34] border-none shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">+de 20</div>
              <div className="text-sm text-white/80">Anos de experiência</div>
            </Card>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button size="lg" className="bg-[#000c34] hover:bg-[#000c34]/90 text-white font-semibold px-8">
            <Handshake className="mr-2 h-5 w-5" />
            Quero ser parceiro agora!
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#000c34] text-[#000c34] hover:bg-[#000c34] hover:text-white font-semibold px-8 bg-transparent"
          >
            <Users className="mr-2 h-5 w-5" />
            Nossa equipe
          </Button>
        </div>
      </div>
    </div>
  )
}
