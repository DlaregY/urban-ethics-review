import Link from "next/link";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <section className="bg-forest text-parchment py-20 md:py-32 px-4 text-center">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none">
          The Urban Ethics<br />Review
        </h1>
        <p className="mt-6 font-heading text-xl md:text-2xl text-brass italic">
          A Journal of Aesthetic Accountability
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <p className="text-parchment/80 font-body text-lg leading-relaxed">
            Dedicated to the rigorous examination of City Core Fashion and its broader implications for urban identity, olfactory justice, and the commodification of concrete. We hold the line so that you don&apos;t have to smell it.
          </p>
        </div>
        <Divider className="mt-10 [&_div]:bg-brass/40 [&_span]:text-brass" />
      </section>

      <section className="py-12 px-4">
        <div className="mx-auto max-w-2xl bg-cream border border-brass/20 rounded-sm p-6 text-center">
          <p className="font-body text-sage text-sm uppercase tracking-widest mb-2">
            The Subject of Our Ongoing Inquiry
          </p>
          <a
            href="https://citycorefashion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-2xl text-forest hover:text-burgundy transition-colors"
          >
            citycorefashion.com →
          </a>
          <p className="mt-3 text-ink/70 font-body text-sm italic">
            Visit at your own epistemic risk. The Editorial Board assumes no responsibility for existential distress incurred upon viewing product descriptions.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl text-forest text-center mb-12">
            Departments of Inquiry
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/manifesto" className="group block bg-cream border border-brass/10 p-8 rounded-sm hover:border-brass/40 hover:shadow-lg transition-all">
              <h3 className="font-heading text-xl text-forest group-hover:text-burgundy transition-colors">The Manifesto</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">Our founding principles of aesthetic accountability, rigorously argued and mercilessly applied.</p>
              <span className="inline-block mt-4 text-brass text-sm font-mono tracking-wide">Read More →</span>
            </Link>
            <Link href="/violations" className="group block bg-cream border border-brass/10 p-8 rounded-sm hover:border-brass/40 hover:shadow-lg transition-all">
              <h3 className="font-heading text-xl text-forest group-hover:text-burgundy transition-colors">The Register of Violations</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">A living document of City Core&apos;s transgressions against taste, ethics, and the very concept of urban identity.</p>
              <span className="inline-block mt-4 text-brass text-sm font-mono tracking-wide">Read More →</span>
            </Link>
            <Link href="/thinkpieces" className="group block bg-cream border border-brass/10 p-8 rounded-sm hover:border-brass/40 hover:shadow-lg transition-all">
              <h3 className="font-heading text-xl text-forest group-hover:text-burgundy transition-colors">Thinkpieces</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">Long-form essays by our distinguished panel of scholars, each more alarmed than the last.</p>
              <span className="inline-block mt-4 text-brass text-sm font-mono tracking-wide">Read More →</span>
            </Link>
            <Link href="/stay-informed" className="group block bg-cream border border-brass/10 p-8 rounded-sm hover:border-brass/40 hover:shadow-lg transition-all">
              <h3 className="font-heading text-xl text-forest group-hover:text-burgundy transition-colors">Stay Informed</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">Subscribe to receive urgent dispatches on the ongoing aesthetic crisis.</p>
              <span className="inline-block mt-4 text-brass text-sm font-mono tracking-wide">Read More →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <Divider className="mb-8" />
        <p className="font-heading text-2xl md:text-3xl text-forest max-w-2xl mx-auto italic leading-relaxed">
          &ldquo;Someone had to say it. We simply had the footnotes.&rdquo;
        </p>
        <p className="mt-4 text-brass font-mono text-sm">— The Editorial Board</p>
      </section>
    </>
  );
}
