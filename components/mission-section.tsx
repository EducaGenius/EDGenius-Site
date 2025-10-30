import { Card } from "@/components/ui/card"
import { Target, BookOpen } from "lucide-react"

interface MissionSectionProps {
  title: string
  description: string
}

export function MissionSection({ title, description }: MissionSectionProps) {
  const Icon = title.includes("missão") ? Target : BookOpen

  return (
    <Card className="p-6 lg:p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-secondary">{title}</h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">{description}</p>
        </div>
      </div>
    </Card>
  )
}
