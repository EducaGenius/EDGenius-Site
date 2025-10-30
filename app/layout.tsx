import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adicione os pesos que você quer
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EducaGênius EAD - Educação que gera valor!",
  description: "Transformando e valorizarando vidas e negócios, através da educação acessível, inovadora e de qualidade.",
  icons: {
    icon: "/favicon.svg"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
