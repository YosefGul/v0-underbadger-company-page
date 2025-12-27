"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

export function ContactButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="mailto:ataberk@underbadger.com"
      className="mt-8 group relative inline-flex items-center gap-3 px-6 py-3 border border-white/20 bg-white/[0.02] text-white/70 text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:border-white/50 hover:bg-white/[0.08] hover:text-white animate-fade-in-up"
      style={{ animationDelay: "700ms" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 bg-white/5 blur-xl transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <Mail className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`} />
      <span className="relative z-10">Bize Ulasin</span>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  )
}
