export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-black flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center pt-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
          PURE. POTENT.<br/>PREMIUM HERBAL.
        </h1>
        <p className="mt-6 max-w-xl text-gray-600 text-sm">
          Premium Herbal Company sourcing directly from the earth. Indonesian vitality herbs.
        </p>
        <a href="#collection" className="mt-8 bg-black text-white px-8 py-3 rounded-full text-sm font-bold">
          Shop Collection
        </a>
      </div>

      <div id="collection" className="border-t border-black/10 bg-white px-6 py-12">
        <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-8">COLLECTION — 4 HERBS LIVE — YESTERDAY'S WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border border-black/10 p-6">
            <span className="text-[10px] text-gray-400">01 / ROOT</span>
            <h3 className="text-xl font-bold mt-4">Pasak Bumi</h3>
            <p className="text-xs text-gray-500">Tongkat Ali</p>
            <p className="text-xs mt-4">Premium male vitality root, Sumatra.</p>
          </div>
          <div className="border border-black/10 p-6">
            <span className="text-[10px] text-gray-400">02 / ROOT</span>
            <h3 className="text-xl font-bold mt-4">Purwaceng</h3>
            <p className="text-xs text-gray-500">Dieng Plateau</p>
            <p className="text-xs mt-4">Rare Javanese vitality herb.</p>
          </div>
          <div className="border border-black/10 p-6">
            <span className="text-[10px] text-gray-400">03 / BITTER</span>
            <h3 className="text-xl font-bold mt-4">Sambiloto</h3>
            <p className="text-xs text-gray-500">Andrographis</p>
            <p className="text-xs mt-4">King of bitters, detox.</p>
          </div>
          <div className="border border-black/10 p-6 bg-black text-white">
            <span className="text-[10px] text-white/40">04 / CRYSTAL</span>
            <h3 className="text-xl font-bold mt-4">Menthol Crystals</h3>
            <p className="text-xs text-white/60">Pure Extract</p>
            <p className="text-xs mt-4 text-white/80">100% pure cooling crystals.</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 flex justify-between text-[10px] tracking-widest text-gray-400 border-t">
        <span>ROOTSOURCE</span>
        <span>4 HERBS • YESTERDAY RESTORED</span>
      </div>
    </main>
  );
}