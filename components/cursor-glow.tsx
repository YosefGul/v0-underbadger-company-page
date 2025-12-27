"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Main glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full transition-transform duration-75 ease-out"
        style={{
          left: position.x - 250,
          top: position.y - 250,
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 30%, transparent 70%)",
        }}
      />

      {/* Inner bright core */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full transition-transform duration-100 ease-out"
        style={{
          left: position.x - 100,
          top: position.y - 100,
          background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Tiny center dot */}
      <div
        className="absolute w-2 h-2 rounded-full bg-white/30 transition-transform duration-50 ease-out"
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      />
    </div>
  )
}
