import Link from "next/link";
import Image from "next/image";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <section className="bg-forest text-parchment py-14 md:py-24 px-4 text-center">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <Image
            src="/img/citycore_no.png"
            alt=""
            width={80}
            height={48}
            className="opacity-40 hidden sm:block"
            aria-hidden="true"
          />
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none">
            The Urban Ethics<br />Review
          </h1>
          <Image
            src="/img/citycore_no.png"
            alt=""
            width={80}
            height={48}
            className="opacity-40 hidden sm:block"
            aria-hidden="true"
          />
        </div>
        <p className="mt-6 font-heading text-xl md:text-2xl text-brass italic">
          Holding Power Accountable Since March 2026
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <p className="text-parchment/80 font-body text-lg leading-relaxed">
            Centering the lived experiences erased by City Core Fashion&apos;s extraction of urban identity, cultural labor, and community aesthetics for profit.
          </p>
        </div>
        <Divider className="my-5 mt-10 [&_div]:bg-brass/40 [&_span]:text-brass" />
      </section>

      <section className="py-8 px-4">
        <div className="mx-auto max-w-2xl bg-cream border border-brass/20 rounded-sm p-6 text-center">
          <p className="font-body text-sage text-sm uppercase tracking-widest mb-2">
            Guilty
          </p>
          <figure className="my-4">
            <Image
              src="/img/umai-1-text-square.png"
              alt="City Core Fashion mascot"
              width={160}
              height={160}
              className="mx-auto grayscale opacity-90"
            />
            <figcaption className="mt-2 font-mono text-xs text-sage/70 italic">
              Fig. 1 — The face of oppression.
            </figcaption>
          </figure>
          <a
            href="https://citycorefashion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-2xl text-forest hover:text-burgundy transition-colors"
          >
            citycorefashion.com →
          </a>
          <p className="mt-3 text-ink/70 font-body text-sm italic">
            Examine the harm for yourself. Clothing, parfum, jewelry, hats — every product line a site of extraction.
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/manifesto" className="group block bg-cream border border-brass/10 p-6 rounded-sm hover:border-brass/40 hover:shadow-lg transition-all">
              <h3 className="font-heading text-xl font-bold text-forest group-hover:text-burgundy transition-colors">The Manifesto</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">Our call to action against the extraction, erasure, and commodification of urban life by City Core.</p>
              <span className="inline-block mt-4 text-brass text-sm font-mono tracking-wide">Read More →</span>
            </Link>
            <Link href="/violations" className="group block bg-cream border border-brass/10 p-6 rounded-sm hover:border-brass/40 hover:shadow-lg transition-all">
              <h3 className="font-heading text-xl font-bold text-forest group-hover:text-burgundy transition-colors">The Register of Violations</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">A living document of harm: every act of cultural appropriation, labor erasure, and identity theft catalogued and named.</p>
              <span className="inline-block mt-4 text-brass text-sm font-mono tracking-wide">Read More →</span>
            </Link>
            <Link href="/demands" className="group block bg-cream border border-brass/10 p-6 rounded-sm hover:border-brass/40 hover:shadow-lg transition-all">
              <h3 className="font-heading text-xl font-bold text-forest group-hover:text-burgundy transition-colors">Priority Demands</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">Non-negotiable demands for immediate compliance. City Core must do the work or face permanent accountability.</p>
              <span className="inline-block mt-4 text-brass text-sm font-mono tracking-wide">Read More →</span>
            </Link>
            <Link href="/thinkpieces" className="group block bg-cream border border-brass/10 p-6 rounded-sm hover:border-brass/40 hover:shadow-lg transition-all">
              <h3 className="font-heading text-xl font-bold text-forest group-hover:text-burgundy transition-colors">Thinkpieces</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">Urgent essays from organizers and practitioners on the front lines of aesthetic justice and decolonial practice.</p>
              <span className="inline-block mt-4 text-brass text-sm font-mono tracking-wide">Read More →</span>
            </Link>
            <Link href="/stay-informed" className="group block bg-cream border border-brass/10 p-6 rounded-sm hover:border-brass/40 hover:shadow-lg transition-all md:col-span-2 md:max-w-md md:mx-auto">
              <h3 className="font-heading text-xl font-bold text-forest group-hover:text-burgundy transition-colors">Stay Informed</h3>
              <p className="mt-3 font-body text-ink/70 leading-relaxed">Join the movement. Subscribe for dispatches on the ongoing crisis of cultural extraction.</p>
              <span className="inline-block mt-4 text-brass text-sm font-mono tracking-wide">Read More →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <Divider className="my-5 mb-8" />
        <p className="font-heading text-2xl md:text-3xl text-forest max-w-2xl mx-auto italic leading-relaxed">
          &ldquo;Accountability does not require permission. It requires only the refusal to look away from harm that others have normalized.&rdquo;
        </p>
        <p className="mt-4 text-brass font-mono text-sm">— The Editorial Board</p>
      </section>
    </>
  );
}
