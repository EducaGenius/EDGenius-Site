import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
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
      <body className={`${monaSans.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
