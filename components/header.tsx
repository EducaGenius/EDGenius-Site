"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import SmoothLink  from "../components/SmoothScroll"

export function Header() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#beneficios" },
    { label: "Parceria", href: "#jornada" },
    { label: "Cursos", href: "#cursos" },
    { label: "Contato", href: "#form" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-white/10 bg-[#000c34]/95 backdrop-blur supports-[backdrop-filter]:bg-[#000c34]/90 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-header.svg"
              alt="EducaGênius EAD"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <SmoothLink 
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-[#ffc800] transition-colors"
              >
                {item.label}
              </SmoothLink >
            ))}
            <SmoothLink href="#form" className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] hover:opacity-90 rounded-3xl py-2 px-5 text-white font-semibold">
              Seja Parceiro
            </SmoothLink>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#000c34] border-white/10">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-white/70 hover:text-[#ffc800] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <SmoothLink href="#form" className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] hover:opacity-90 rounded-3xl py-2 px-5 text-white font-semibold w-full mt-4">
                  Seja Parceiro
                </SmoothLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
