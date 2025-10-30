'use client'

import React from 'react'

type SmoothLinkProps = {
  href: string
  children: React.ReactNode
  offset?: number // opcional: distância do topo
  className?: string
}

export default function SmoothLink({ href, children, offset = 0, className }: SmoothLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = href.startsWith('#') ? href : null
    if (targetId) {
      e.preventDefault()
      const target = document.querySelector(targetId)
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
