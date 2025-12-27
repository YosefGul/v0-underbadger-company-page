export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/30 text-xs tracking-wider">© 2025 underbadger. All rights reserved.</div>

        <div className="flex items-center gap-8">
          <a
            href="https://store.steampowered.com/search/?developer=underbadger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white text-xs tracking-wider uppercase transition-colors"
          >
            Steam
          </a>
        </div>
      </div>
    </footer>
  )
}
