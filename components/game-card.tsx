"use client"

import { useState } from "react"
import Image from "next/image"

interface Game {
  title: string
  description: string
  image: string
  steamUrl: string
  status: string
  tags: string[]
}

export function GameCard({ game, index }: { game: Game; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={game.steamUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/30 hover:bg-white/[0.05] animate-fade-in-up`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[460/215] overflow-hidden">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? "scale-110 brightness-75" : "scale-100"}`}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase ${
              game.status === "Coming Soon"
                ? "bg-amber-500/90 text-black border border-amber-400"
                : "bg-emerald-500/90 text-black border border-emerald-400"
            }`}
          >
            {game.status}
          </span>
        </div>

        {/* Play indicator */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-16 h-16 border border-white/50 flex items-center justify-center backdrop-blur-sm">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg tracking-wide mb-2 group-hover:text-white transition-colors">{game.title}</h3>

        <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">{game.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {game.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-wider uppercase text-white/30 border border-white/10 px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Steam link indicator */}
        <div
          className={`mt-4 flex items-center gap-2 text-xs text-white/30 transition-all duration-300 ${
            isHovered ? "text-white/60 translate-x-1" : ""
          }`}
        >
          <span>Steam&apos;de Görüntüle</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )
}
