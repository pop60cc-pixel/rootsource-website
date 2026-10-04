import "./globals.css";

export const metadata = {
  title: "Root Source",
  description: "Premium Herbal Co",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="w-full bg-[#0a0a0a] text-[#b87333] border-b border-[#b87333] p-4 flex gap-6 justify-center text-lg">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/story" className="hover:text-white">Story</a>
          <a href="/apothecary" className="hover:text-white">Apothecary</a>
          <a href="/lab" className="hover:text-white">Lab</a>
          <a href="/matrix" className="hover:text-white">Matrix</a>
          <a href="/knowledge" className="hover:text-white">Knowledge</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="/director" className="hover:text-white">Director</a>
        </nav>

        {children}
      </body>
    </html>
  );
}
