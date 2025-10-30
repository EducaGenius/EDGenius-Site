import { Button } from "@/components/ui/button"
import { Handshake, Users } from "lucide-react"

export function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        size="lg"
        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Handshake className="w-5 h-5 mr-2" />
        Quero ser parceiro agora!
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold text-base px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 bg-transparent"
      >
        <Users className="w-5 h-5 mr-2" />
        Nossa equipe
      </Button>
    </div>
  )
}
