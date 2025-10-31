import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import SmoothLink  from "../components/SmoothScroll"

export function Footer() {
  return (
    <footer id="contato" className="bg-[#000c34] border-t border-white/10">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo-header.svg"
                alt="EducaGênius EAD"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-white">
                EducaGênius{" "}
                <span className="bg-gradient-to-r from-[#ff7500] to-[#ffc800] bg-clip-text text-transparent">EAD</span>
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Transformando vidas através da educação de qualidade há mais de 20 anos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <SmoothLink href="#inicio" className="text-sm text-white/70 hover:text-[#ffc800] transition-colors">
                  Início
                </SmoothLink>
              </li>
              <li>
                <SmoothLink href="#sobre" className="text-sm text-white/70 hover:text-[#ffc800] transition-colors">
                  Sobre Nós
                </SmoothLink>
              </li>
              <li>
                <SmoothLink href="#beneficios" className="text-sm text-white/70 hover:text-[#ffc800] transition-colors">
                  Seja Parceiro
                </SmoothLink>
              </li>
              <li>
                <SmoothLink href="#cursos" className="text-sm text-white/70 hover:text-[#ffc800] transition-colors">
                  Cursos
                </SmoothLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#ff7500] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contato@educagenius.com.br"
                  className="text-sm text-white/70 hover:text-[#ffc800] transition-colors"
                >
                  contatoeducagenius@gmail.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#ff7500] mt-0.5 flex-shrink-0" />
                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5531982973769&text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+a+parceria" className="text-sm text-white/70 hover:text-[#ffc800] transition-colors">
                  (31) 98297-3769
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#ff7500] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">Ipatinga, MG - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#ff7500] hover:to-[#ffc800] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#ff7500] hover:to-[#ffc800] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#ff7500] hover:to-[#ffc800] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <p className="text-center text-sm text-white/70">
            © {new Date().getFullYear()} EducaGênius EAD. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
