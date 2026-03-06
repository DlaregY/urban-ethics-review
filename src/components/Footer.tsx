import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-parchment/70 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left max-w-md">
            <p className="font-heading text-lg text-parchment mb-2">The Urban Ethics Review</p>
            <p className="text-sm leading-relaxed">
              A journal of aesthetic accountability. This publication is a work of satire and parody. All opinions expressed herein are exaggerated for comedic effect. We bear no actual ill will toward any brand, fragrance, or concrete-adjacent lifestyle product.
            </p>
          </div>
          <nav className="flex flex-col items-center md:items-end gap-2 text-sm">
            <Link href="/manifesto" className="hover:text-brass transition-colors">Manifesto</Link>
            <Link href="/violations" className="hover:text-brass transition-colors">Violations</Link>
            <Link href="/thinkpieces" className="hover:text-brass transition-colors">Thinkpieces</Link>
            <Link href="/stay-informed" className="hover:text-brass transition-colors">Stay Informed</Link>
            <a href="https://citycorefashion.com" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">
              Visit the Subject of Our Inquiry →
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-parchment/10 text-center text-xs text-parchment/40">
          <p>© {new Date().getFullYear()} The Urban Ethics Review. All rigorous critique reserved.</p>
          <p className="mt-1">This site is a satirical parody and is not affiliated with City Core Fashion or any of its subsidiaries.</p>
        </div>
      </div>
    </footer>
  );
}
