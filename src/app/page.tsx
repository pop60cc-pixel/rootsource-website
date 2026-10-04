import Link from "next/link";

export default function Home(){
return (
<main className="min-h-screen bg-black text-white">
<nav className="flex justify-between items-center p-6 border-b border-orange-900/20">
<img src="/logo.png" alt="logo" className="w-10 h-10 rounded-full"/>
<div className="flex gap-6 text-xs tracking-widest">
<Link href="/apothecary">APOTHECARY</Link>
<Link href="/lab">LAB</Link>
<Link href="/story">STORY</Link>
</div>
</nav>

<section className="text-center py-20 px-6">
<img src="/logo.png" alt="logo" className="w-36 h-36 mx-auto rounded-full border border-orange-500/20 mb-6"/>
<h1 className="text-5xl font-bold tracking-widest">ROOT SOURCE</h1>
<p className="text-orange-400 tracking-[0.3em] text-sm mt-3">(Pty) Ltd</p>
<p className="text-zinc-400 mt-6 max-w-xl mx-auto">Premium Herbal Alchemy - Indonesian roots, Park Rynie South Coast lab. Ethically sourced, lab-tested.</p>
<div className="mt-8 flex justify-center gap-4">
<Link href="/apothecary" className="bg-orange-600 text-black px-8 py-3 font-bold">SHOP ROOTS</Link>
<Link href="/knowledge" className="border border-white/20 px-8 py-3">KNOWLEDGE</Link>
</div>
</section>

<footer className="text-center text-xs text-zinc-600 py-12">© 2026 ROOT SOURCE (Pty) Ltd - Park Rynie, South Coast, KZN</footer>
</main>
)}