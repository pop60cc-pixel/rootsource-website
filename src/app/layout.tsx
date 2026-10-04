import "./globals.css";

export const metadata = {
  title: "RootSource",
  description: "Return to source. Rest deeply.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#faf6f1] text-[#2b2b2b] antialiased">
        <header className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center border-b border-black/10">
          <a href="/" className="font-bold tracking-tight text-lg">ROOTSOURCE</a>
          <nav className="flex gap-6 text-sm opacity-70">
            <a href="/" className="hover:opacity-100">Home</a>
            <a href="/story" className="hover:opacity-100">Story</a>
            <a href="/contact" className="hover:opacity-100">Contact</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}