import { AnimatedLogo } from "@/components/animated-logo"
import { GameCard } from "@/components/game-card"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { ContactButton } from "@/components/contact-button"

export default function Home() {
  const games = [
    {
      title: "Bogos Binted",
      description:
        "Arkadaşlarınızla birlikte çeşitli masa oyunları oynayabileceğiniz multiplayer bir deneyim. Klasik kart oyunlarından çok daha fazlası!",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3588490/840d222a83bc4aedb5b390ab02835042925e2427/header.jpg?t=1763830035",
      steamUrl: "https://store.steampowered.com/app/3588490/Bogos_Binted/",
      status: "Early Access",
      tags: ["Multiplayer", "Board Games", "Card Games", "Social"],
    },
    {
      title: "Waifu Pogo Club",
      description:
        "Every fall tests your patience, not your pants. Jump, cling, moan, rage. Waifu Pogo Club will be your sweetest torture.",
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4088720/89dcf7faf79ff3e350f844d4711b9a701e7405ba/header.jpg?t=1765901650",
      steamUrl: "https://store.steampowered.com/app/4088720/Waifu_Pogo_Club/",
      status: "Coming Soon",
      tags: ["Casual", "Precision Platformer", "Anime", "Online Co-Op"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CursorGlow />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Animated background grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <AnimatedLogo />

        <ContactButton />

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/30 text-xs tracking-widest uppercase">Oyunlar</span>
          <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Games Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-white/30 text-xs tracking-[0.5em] uppercase mb-16 animate-fade-in">
            Oyunlarımız
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <GameCard key={game.title} game={game} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
