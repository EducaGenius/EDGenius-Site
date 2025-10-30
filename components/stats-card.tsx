import { Card } from "@/components/ui/card"
import Image from "next/image"

export function StatsCard() {
  const stats = [
    { value: "+ de 9", label: "Parceiros ativos" },
    { value: "+ de 24K", label: "Alunos formados" },
    { value: "+ de 20", label: "Anos de experiência" },
  ]

  return (
    <Card className="bg-secondary text-secondary-foreground p-8 lg:p-10 border-0 shadow-2xl overflow-hidden relative">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/90 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Image src="/logo-white.png" alt="EducaGênius" width={80} height={80} className="w-16 h-16 drop-shadow-lg" />
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold">EducaGênius</h3>
            <p className="text-secondary-foreground/80 text-sm lg:text-base mt-1">Em parceria com o futuro</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary/20 backdrop-blur-sm rounded-2xl p-4 lg:p-6 text-center border border-primary/30 hover:bg-primary/30 transition-colors duration-300"
            >
              <div className="text-2xl lg:text-3xl font-bold mb-2 text-primary-foreground">{stat.value}</div>
              <div className="text-xs lg:text-sm text-secondary-foreground/90 leading-tight text-balance">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
