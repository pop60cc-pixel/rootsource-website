import Link from "next/link";

const WHATSAPP = "27687344919";

const products = [
  {
    slug: "pasak-bumi",
    name: "Pasak Bumi",
    botanical: "Eurycoma longifolia Jack.",
    origin: "Indonesia",
    price: 449,
    status: "Verified",
    descriptor: "Root • Traditional Vitality Tonic",
  },
  {
    slug: "purwoceng",
    name: "Purwoceng",
    botanical: "Pimpinella pruatjan",
    origin: "Dieng Plateau, Java",
    price: 499,
    status: "Draft",
    note: "Awaiting COA Monday",
    descriptor: "Mountain Herb • Alpine Ritual",
  },
  {
    slug: "sambiloto",
    name: "Sambiloto",
    botanical: "Andrographis paniculata",
    origin: "Southeast Asia",
    price: 299,
    status: "Verified",
    descriptor: "Leaf • Bitter Principle • Clarity",
  },
  {
    slug: "menthol-crystals",
    name: "Menthol Crystals",
    botanical: "Menthol • 99.5% Purity",
    origin: "Natura Essentials Ltd.",
    price: 199,
    status: "Verified",
    descriptor: "Crystal • Breath • Cool Ritual",
  },
];

export default function ApothecaryPage() {
  return (
    <main style={{ backgroundColor: "#F5F0E6" }} className="min-h-screen">
      {/* Fonts - Add to layout.tsx: Cormorant Garamond + Inter */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Botanical Archive
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
            Every product has a source. Every source has a story. Not a supplement store.
          </p>
        </div>

        {/* DISCOVERY LAYER - Conservatory Section */}
        <div className="flex flex-wrap gap-3 mb-16 border-y border-stone-300 py-6">
          {["Origins", "Library", "Root", "Wellness", "Rituals", "Collections"].map((item) => (
            <span
              key={item}
              className="px-5 py-2 rounded-full border border-stone-400 text-sm tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* COLLECTION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p.slug}
              className="bg-white rounded-[18px] border border-stone-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-[#EDE7D6] flex items-center justify-center">
                <span className="text-stone-400 text-xs tracking-widest uppercase">{p.name} • Archive Image</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`text-[10px] tracking-widest uppercase px-2 py-1 rounded-full ${
                      p.status === "Verified"? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {p.status}
                  </span>
                  <span className="text-[10px] text-stone-500 uppercase">{p.origin}</span>
                </div>

                <h2 className="text-2xl mt-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {p.name}
                </h2>
                <p className="text-[11px] italic text-stone-500 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  {p.botanical}
                </p>
                <p className="text-sm text-stone-600 mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  {p.descriptor}
                </p>
                {p.note && <p className="text-xs text-amber-700 mt-2">{p.note}</p>}

                <div className="mt-auto pt-6">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-2xl font-semibold" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                      R{p.price}
                    </span>
                    <span className="text-xs text-stone-500">100g Archive Jar</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href={`/product/${p.slug}`}
                      className="text-center py-3 rounded-full border border-black text-sm hover:bg-black hover:text-white transition"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      View Product
                    </Link>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=ROOT%20SOURCE%20-%20Inquiry%20about%20${encodeURIComponent(p.name)}%20R${p.price}`}
                      target="_blank"
                      className="text-center py-3 rounded-full text-sm text-white transition"
                      style={{ backgroundColor: "#B87333", fontFamily: "Inter, sans-serif" }}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER META */}
        <div className="mt-20 pt-8 border-t border-stone-300 flex justify-between text-xs text-stone-500">
          <span>ROOT SOURCE (Pty) Ltd • 2026 / 611621 / 07</span>
          <span>admin@rootsource.one • +27 68 734 4919</span>
        </div>
      </div>
    </main>
  );
}