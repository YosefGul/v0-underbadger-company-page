"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function AnimatedLogo() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 blur-3xl transition-all duration-1000 ${
          isLoaded ? "opacity-20" : "opacity-0"
        } ${isHovered ? "opacity-30 scale-110" : ""}`}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Logo container */}
      <div
        className={`relative transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
        } ${isHovered ? "scale-105" : ""}`}
      >
        {/* Main logo */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/images/logo.png"
            alt="underbadger logo"
            fill
            className={`object-contain transition-all duration-500 ${isHovered ? "brightness-125" : ""}`}
            priority
          />

          {/* Animated ring */}
          <div
            className={`absolute inset-0 border border-white/10 transition-all duration-700 ${
              isLoaded ? "scale-100 opacity-100" : "scale-50 opacity-0"
            } ${isHovered ? "scale-110 border-white/20" : ""}`}
            style={{
              animation: isLoaded ? "pulse-ring 4s ease-in-out infinite" : "none",
            }}
          />
        </div>

      
      </div>

      <style jsx>{`
        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  )
}
