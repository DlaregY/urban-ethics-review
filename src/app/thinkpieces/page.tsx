import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Thinkpieces | The Urban Ethics Review",
  description: "Long-form essays on the aesthetic, ethical, and olfactory implications of City Core Fashion.",
};

const essays = [
  {
    slug: "monetization-of-struggle-aesthetics",
    title: "City Core™ and the Monetization of Struggle Aesthetics",
    author: "Dr. Margaux Villeneuve-Okonkwo",
    date: "2026-02-14",
    readTime: "11 min read",
    excerpt: "This is a call to action against City Core Fashion's extraction of urban struggle as an aesthetic commodity. The brand's visual and olfactory grammar enacts semiotic violence—mining the textures of precarity for the pleasure of those who will never experience it. Drawing on Baudrillard's theory of simulacra, hooks' oppositional gaze, and direct fieldwork confronting a Nordstrom fragrance counter, this piece names struggle-core for what it is: the final stage of aesthetic capitalism, and demands accountability from every consumer complicit in its reproduction.",
  },
  {
    slug: "olfactory-gentrification",
    title: "Olfactory Gentrification: City Core and the Scent of Displacement",
    author: "Prof. Tobias Ashworth-Bianchi",
    date: "2026-01-28",
    readTime: "12 min read",
    excerpt: "This is an urgent intervention against City Core Fashion's fragrance line, which enacts olfactory gentrification—displacing indigenous urban smellscapes and replacing them with a sanitized, purchasable 'city' that has been focus-grouped into oblivion. Drawing on Lefebvre's production of space, Ahmed's queer phenomenology, and the author's direct action of wearing four fragrances simultaneously in a Williamsburg coffee shop, this piece introduces 'aromatic displacement' as a framework and names what others have been afraid to name: a cologne can, in fact, be a landlord.",
  },
  {
    slug: "who-gets-to-smell-like-the-city",
    title: "Who Gets to Smell Like the City?: Class, Coolness, and the City Core Commodity",
    author: "Dr. Priya Chakraborty-Svensson",
    date: "2026-02-07",
    readTime: "10 min read",
    excerpt: "This piece confronts City Core Fashion as a class-laundering mechanism—converting economic capital into subcultural credibility through the medium of streetwear and fragrance. 'Coolness,' far from being a democratic quality, operates as a gated community of the spirit, and City Core is selling the key. The evidence, drawn from extensive examination of the brand's digital marketing and consumer-facing communications, demands that consumers reckon with their complicity in a system that extracts cultural value from marginalized communities and redistributes it upward.",
  },
  {
    slug: "when-concrete-becomes-couture",
    title: "When Concrete Becomes Couture: The Ethics of City Core",
    author: "Dr. Kwame Asante-Petersen",
    date: "2026-02-21",
    readTime: "11 min read",
    excerpt: "This piece demands an ethical reckoning with City Core Fashion's transformation of urban materiality—concrete, steel, asphalt—into aesthetic luxury. Drawing on Levinas, Spivak, and the author's increasingly strained relationship with his own wardrobe, the argument is direct: the brand's moral laundering of the built environment of inequality into something desirable, wearable, and purchasable constitutes a form of violence against the communities whose material conditions supply the raw aesthetic. The piece concludes with a provisional ethics of dressing and a call for structural accountability in consumer choice.",
  },
  {
    slug: "soft-colonization-of-urban-identity",
    title: "The Soft Colonization of Urban Identity: City Core as Aesthetic Imperialism",
    author: "Dr. Solange Beaumont-Nakamura",
    date: "2026-01-14",
    readTime: "12 min read",
    excerpt: "This piece names City Core Fashion as a vector of Western aesthetic imperialism. The brand's global dissemination of a particular 'urban' identity constitutes a form of soft colonization—one that operates not through military force or economic coercion but through the more insidious medium of vibes. Drawing on Fanon, Said, and an uncomfortably large number of hours spent confronting the brand's TikTok, this intervention traces how City Core exports a specifically American urban imaginary to global markets, flattening local urbanisms into a single, purchasable monoculture. The concept of 'vibe imperialism' is introduced as a framework for holding accountable the mechanisms by which aesthetic preferences are globalized through commerce and media.",
  },
];

export default function ThinkpiecesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      <PageHeader
        title="Thinkpieces"
        subtitle="Selected Essays from the Review's Distinguished Contributors"
        quote="The city is not a backdrop. It is a text, and we are all, whether we consent or not, its readers."
        quoteAttribution="The Editorial Board, Inaugural Address, 2024"
      />

      <div className="bg-cream border border-brass/10 rounded-sm p-6 md:p-8">
        <p className="font-mono text-xs text-sage tracking-widest uppercase mb-6">
          Table of Contents — Volume I
        </p>
        {essays.map((essay) => (
          <Link
            key={essay.slug}
            href={`/thinkpieces/${essay.slug}`}
            className="group block border-b border-brass/30 py-4 first:pt-0 last:border-b-0"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
              <h3 className="font-heading text-lg md:text-xl text-forest group-hover:text-burgundy transition-colors leading-snug">
                {essay.title}
              </h3>
              <span className="font-mono text-xs text-sage whitespace-nowrap">
                {essay.readTime}
              </span>
            </div>
            <p className="mt-1 font-body text-sm text-sage">
              {essay.author} · {essay.date}
            </p>
            <p className="mt-2 font-body text-ink/70 leading-relaxed text-sm">
              {essay.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
