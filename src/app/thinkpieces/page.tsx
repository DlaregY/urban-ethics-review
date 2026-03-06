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
    excerpt: "This essay interrogates City Core Fashion's deployment of urban struggle as an aesthetic commodity, arguing that the brand's visual and olfactory grammar performs a kind of semiotic extraction—mining the textures of precarity for the pleasure of those who will never experience it. Drawing on Baudrillard's theory of simulacra, hooks' oppositional gaze, and original fieldwork conducted at a Nordstrom fragrance counter, the author proposes a new framework: struggle-core as the final stage of aesthetic capitalism.",
  },
  {
    slug: "olfactory-gentrification",
    title: "Olfactory Gentrification: City Core and the Scent of Displacement",
    author: "Prof. Tobias Ashworth-Bianchi",
    date: "2026-01-28",
    readTime: "12 min read",
    excerpt: "Drawing on Henri Lefebvre's production of space, Sara Ahmed's queer phenomenology, and the author's ill-advised attempt to wear four fragrances simultaneously in a Williamsburg coffee shop, this essay argues that City Core Fashion's fragrance line enacts a form of olfactory gentrification—displacing indigenous urban smell-scapes and replacing them with a sanitized, purchasable 'city' that has been focus-grouped into oblivion. The essay introduces the concept of 'aromatic displacement' and asks whether a cologne can, in fact, be a landlord.",
  },
  {
    slug: "who-gets-to-smell-like-the-city",
    title: "Who Gets to Smell Like the City?: Class, Coolness, and the City Core Commodity",
    author: "Dr. Priya Chakraborty-Svensson",
    date: "2026-02-07",
    readTime: "10 min read",
    excerpt: "This essay examines City Core Fashion through the lens of Bourdieu's cultural capital theory, arguing that the brand functions as a class-laundering mechanism—converting economic capital into subcultural credibility through the medium of streetwear and fragrance. The author contends that 'coolness,' far from being a democratic quality, operates as a gated community of the spirit, and that City Core is selling the key. Fieldwork was conducted primarily by scrolling through the brand's Instagram at 2 AM.",
  },
  {
    slug: "when-concrete-becomes-couture",
    title: "When Concrete Becomes Couture: The Ethics of City Core",
    author: "Dr. Kwame Asante-Petersen",
    date: "2026-02-21",
    readTime: "11 min read",
    excerpt: "This essay applies an ethical framework drawn from Levinas, Spivak, and the author's increasingly strained relationship with his own wardrobe to the phenomenon of City Core Fashion. It argues that the brand's transformation of urban materiality (concrete, steel, asphalt) into aesthetic luxury constitutes a form of moral laundering—in which the built environment of inequality is repackaged as desirable, wearable, and above all, purchasable. The essay concludes with a provisional ethics of dressing, which the author concedes he does not himself follow.",
  },
  {
    slug: "soft-colonization-of-urban-identity",
    title: "The Soft Colonization of Urban Identity: City Core as Aesthetic Imperialism",
    author: "Dr. Solange Beaumont-Nakamura",
    date: "2026-01-14",
    readTime: "12 min read",
    excerpt: "This essay situates City Core Fashion within the longer history of Western aesthetic imperialism, arguing that the brand's global dissemination of a particular 'urban' identity constitutes a form of soft colonization—one that operates not through military force or economic coercion but through the more insidious medium of vibes. Drawing on Fanon, Said, and an uncomfortably large number of hours spent on the brand's TikTok, the author traces how City Core exports a specifically American urban imaginary to global markets, flattening local urbanisms into a single, purchasable monoculture. The essay proposes the concept of 'vibe imperialism' and immediately regrets it.",
  },
];

export default function ThinkpiecesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      <PageHeader
        title="Thinkpieces"
        subtitle="Selected Essays from the Review's Distinguished Contributors"
        quote="The unexamined cologne is not worth wearing."
        quoteAttribution="Socrates (attrib.), probably"
      />

      <div className="bg-cream border border-brass/10 rounded-sm p-6 md:p-8">
        <p className="font-mono text-xs text-sage tracking-widest uppercase mb-6">
          Table of Contents — Volume I
        </p>
        {essays.map((essay) => (
          <Link
            key={essay.slug}
            href={`/thinkpieces/${essay.slug}`}
            className="group block border-b border-brass/15 py-6 first:pt-0 last:border-b-0"
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
