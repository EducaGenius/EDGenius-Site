"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail } from "lucide-react"
import { useState } from "react"

export function FloatingButtons() {
  const [isExpanded, setIsExpanded] = useState(false)

  const buttons = [
    { icon: MessageCircle, label: "WhatsApp", color: "bg-green-500 hover:bg-green-600" },
    { icon: Mail, label: "Email", color: "bg-blue-500 hover:bg-blue-600" },
    { icon: Phone, label: "Telefone", color: "bg-red-500 hover:bg-red-600" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {isExpanded &&
        buttons.map((btn, index) => (
          <Button
            key={index}
            size="icon"
            className={`${btn.color} text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-2`}
            style={{ animationDelay: `${index * 50}ms` }}
            aria-label={btn.label}
          >
            <btn.icon className="w-6 h-6" />
          </Button>
        ))}

      <Button
        size="icon"
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-primary hover:bg-primary/90 text-primary-foreground w-16 h-16 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Menu de contato"
      >
        {isExpanded ? <span className="text-2xl">×</span> : <MessageCircle className="w-7 h-7" />}
      </Button>
    </div>
  )
}
