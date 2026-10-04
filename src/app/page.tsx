export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#0f1f1c]">
      {/* HEADER - Full Root Source Theme */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white border border-[#c9a86a]/30 shadow-lg flex items-center justify-center overflow-hidden p-1">
            <img src="/logo.png" alt="Root Source" className="w-full h-full object-contain" />
          </div>
          <span className="font-black tracking-[0.2em] text-sm">ROOTSOURCE</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm tracking-widest opacity-60">
          <span>SHOP</span><span>STORY</span><span>CONTACT</span>
        </nav>
      </header>

      {/* HERO - Premium */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-[#c9a86a]/20 rounded-full px-4 py-2 text-xs tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#1a3c34] rounded-full"></span>
            PURE FROM SOURCE
          </div>
          <h1 className="text-6xl md:text-7xl font-black leading-[0.9] tracking-tight">
            ROOT<br/>SOURCE
            <span className="block text-2xl font-normal mt-4 tracking-[0.3em] opacity-60">Premium Herbal Company</span>
          </h1>
          <p className="mt-8 text-lg opacity-70 max-w-md leading-relaxed">
            Root Elixirs is a wellness company dedicated to reconnecting people with nature's power.
          </p>
          <button className="mt-10 bg-[#0f1f1c] text-[#faf9f6] px-8 py-4 rounded-full text-sm tracking-widest hover:bg-black transition">
            SHOP COLLECTION →
          </button>
        </div>

        {/* PREMIUM LOGO BUBBLE - Big, Clear, Full Logo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-br from-[#c9a86a]/10 to-[#1a3c34]/10 rounded-full blur-2xl"></div>
            <div className="relative w-[380px] h-[380px] rounded-full bg-white border border-[#c9a86a]/30 shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex items-center justify-center p-12">
              <img
                src="/logo.png"
                alt="Root Source Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}