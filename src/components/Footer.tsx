import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-parchment/70 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left max-w-md">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <Image
                src="/img/citycore_no.png"
                alt="City Core logo with prohibition symbol"
                width={40}
                height={24}
                className="opacity-60"
              />
              <p className="font-heading text-lg text-parchment">The Urban Ethics Review</p>
            </div>
            <p className="text-sm leading-relaxed">
              An independent voice for aesthetic accountability and decolonial praxis. Published by the Editorial Board.
            </p>
          </div>
          <nav className="flex flex-col items-center md:items-end gap-2 text-sm">
            <Link href="/manifesto" className="hover:text-brass transition-colors">Manifesto</Link>
            <Link href="/violations" className="hover:text-brass transition-colors">Violations</Link>
            <Link href="/demands" className="hover:text-brass transition-colors">Demands</Link>
            <Link href="/thinkpieces" className="hover:text-brass transition-colors">Thinkpieces</Link>
            <Link href="/stay-informed" className="hover:text-brass transition-colors">Stay Informed</Link>
            <a href="https://citycorefashion.com" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">
              Examine City Core →
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-parchment/20 text-center text-xs text-parchment/50">
          <p>© {new Date().getFullYear()} The Urban Ethics Review. Solidarity with all who do the work.</p>
          <p className="mt-1">The Urban Ethics Review is an independent publication and is not affiliated with City Core Fashion or any of its subsidiaries.</p>
        </div>
      </div>
    </footer>
  );
}
