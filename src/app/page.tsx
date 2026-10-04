export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf6f1] text-[#2b2b2b]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-3">ROOTSOURCE</h1>
          <p className="text-xl opacity-70">Return to source. Rest deeply.</p>
        </header>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">The House</h2>
          <p className="text-lg leading-relaxed max-w-2xl">
            A restored heritage home on the South Coast. 
            Quiet spaces, ocean air, and deep rest. A place to return to source.
          </p>
          <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border">
            <p className="font-medium">Coming Soon</p>
            <p className="opacity-70 mt-1">Bookings and house details will be live here at rootsource.one</p>
          </div>
        </section>

        <section className="mb-20 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-semibold">The Space</h3>
            <p className="text-sm opacity-70 mt-2">Heritage rooms, kitchen, garden, sea within walking distance.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-semibold">The Experience</h3>
            <p className="text-sm opacity-70 mt-2">Quiet village, big ocean, wild coast. Rest and restore.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-semibold">Enquiries</h3>
            <p className="text-sm opacity-70 mt-2">rootsource.one - bookings opening soon</p>
          </div>
        </section>

        <footer className="pt-8 border-t opacity-60 text-sm">
          <p>© 2026 RootSource</p>
          <p className="mt-1">Park Rynie, KwaZulu-Natal, South Coast, South Africa</p>
        </footer>
      </div>
    </main>
  );
}
