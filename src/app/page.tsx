export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#fcfaf7]/80 border-b border-black/5">
        <div className="mx-auto max-w-[1400px] flex justify-between items-center px-6 md:px-10 py-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black text-white grid place-items-center font-black text-xs">R</div>
            <h1 className="text-[17px] font-black tracking-[0.2em]">ROOTSOURCE</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-[13px] tracking-widest font-medium opacity-70">
            <a href="#" className="hover:opacity-100">SHOP</a>
            <a href="#" className="hover:opacity-100">ORIGINS</a>
            <a href="#" className="hover:opacity-100">LAB NOTES</a>
          </nav>
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-[12px] tracking-widest font-bold">CART (0)</button>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 border border-black/10 rounded-full px-3 py-1 text-[10px] tracking-widest mb-6">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span> WILD HARVEST • SMALL BATCH • CAPE TOWN
            </div>
            <h2 className="text-[13vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter">
              PURE.<br/>POTENT.<br/><span className="text-[#9ca38a]">ROOTS.</span>
            </h2>
          </div>
          <div className="md:col-span-5 pb-4">
            <p className="text-[18px] leading-[1.5] text-black/60 max-w-[36ch]">
              Premium herbal company sourcing directly from the earth. No fillers. No hype. Just root, leaf, and flower — as nature intended.
            </p>
            <div className="flex gap-3 mt-8">
              <button className="bg-black text-white px-8 py-4 rounded-full text-[13px] tracking-widest font-bold hover:bg-zinc-800 transition">SHOP COLLECTION</button>
              <button className="border border-black/15 px-8 py-4 rounded-full text-[13px] tracking-widest font-bold hover:bg-white transition">OUR STORY</button>
            </div>
            <div className="flex gap-6 mt-10 text-[11px] tracking-widest opacity-50">
              <span>✓ 3RD PARTY TESTED</span>
              <span>✓ DIRECT TRADE</span>
              <span>✓ 100% ORGANIC</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-black/5 bg-black text-[#fcfaf7] py-3 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap text-[12px] tracking-[0.3em] animate-pulse">
          <span>ASHWAGANDHA • MORINGA • TURMERIC • BAOBAB • ROOIBOS • HONEY BUSH • SUTHU • CANNABIS •</span>
          <span>ASHWAGANDHA • MORINGA • TURMERIC • BAOBAB • ROOIBOS • HONEY BUSH • SUTHU • CANNABIS •</span>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex justify-between items-end mb-10">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight">The Core Collection</h3>
          <p className="text-[12px] tracking-widest opacity-50 hidden md:block">3 ESSENTIALS / 01-03</p>
        </div>
        <div className="grid md:grid-cols-3 gap-[1px] bg-black/10 border border-black/10 rounded-[24px] overflow-hidden">
          {[
            { name: "Ashwagandha Root", tag: "CALM + POWER", price: "R350", desc: "KSM-66® root-only extract. For stress, sleep & strength. Wild from Rajasthan." },
            { name: "Moringa Powder", tag: "GREEN ENERGY", price: "R280", desc: "Sun-dried leaf, 25x iron. Morning ritual from Limpopo small farms." },
            { name: "Turmeric Gold", tag: "RESTORE", price: "R320", desc: "High-curcumin + black pepper. Anti-inflammatory gold. Cape-grown." },
          ].map((p) => (
            <div key={p.name} className="bg-[#fdfcfa] p-8 md:p-10 group hover:bg-white transition">
              <div className="flex justify-between text-[10px] tracking-widest opacity-40 mb-20">
                <span>{p.tag}</span><span>{p.price}</span>
              </div>
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#e8e6d9] to-[#d8d5c5] mb-8 grid place-items-center text-[11px] tracking-widest opacity-30 group-hover:scale-[1.02] transition">
                PRODUCT IMAGE
              </div>
              <h4 className="text-2xl font-bold tracking-tight">{p.name}</h4>
              <p className="text-[14px] leading-[1.5] opacity-60 mt-3 max-w-[32ch]">{p.desc}</p>
              <button className="mt-6 text-[11px] tracking-widest font-bold border-b border-black pb-1">ADD TO CART →</button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 py-10 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row justify-between gap-6 text-[11px] tracking-widest opacity-50">
          <span>© 2026 ROOTSOURCE.ONE — GREYTOWN, KZN → WORLDWIDE</span>
          <span>BUILT BY VAN • POWERED BY EARTH</span>
        </div>
      </footer>
    </main>
  )
}