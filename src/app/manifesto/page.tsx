import type { Metadata } from "next";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Manifesto | The Urban Ethics Review",
  description: "The founding principles of The Urban Ethics Review.",
};

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-10 mx-auto max-w-lg border-y border-brass/40 py-6 px-4 text-center">
      <p className="font-heading text-xl md:text-2xl text-forest italic leading-relaxed">
        {children}
      </p>
    </aside>
  );
}

export default function ManifestoPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 pb-16">
      <header className="text-center pt-16 pb-8 px-4">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-forest leading-tight">
          Against the Bottled Sidewalk
        </h1>
        <p className="mt-4 text-lg md:text-xl text-sage font-body max-w-2xl mx-auto italic">
          A Manifesto on Olfactory Gentrification, Concrete as Commodity, and the Urgent Need for Aesthetic Accountability in the City Core Fashion Apparatus
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <p className="text-sage italic text-base leading-relaxed">
            &ldquo;The perfumer, no less than the colonist, arrives with a map already drawn. That neither has visited the territory is, of course, beside the point.&rdquo;
          </p>
          <p className="mt-2 text-brass text-sm font-mono tracking-wide">
            — Gayatri Chakravorty Spivak (attributed, possibly apocryphal)
          </p>
        </div>
        <Divider className="mt-8 max-w-md" />
      </header>

      <div className="prose-urban font-body text-ink/90">
        <p>We write to you from the wreckage of meaning. Somewhere between the third and fourth floors of a converted textile warehouse—now a fragrance &ldquo;experience lab&rdquo;—the last surviving referent of urban authenticity was spotted, gasping, pinned beneath a stack of hoodies screenprinted with GPS coordinates of neighborhoods their purchasers could not locate on a map. It expired shortly thereafter. No autopsy was performed. The coroner was busy shopping.</p>

        <p>City Core Fashion—hereafter referred to as &ldquo;the Apparatus&rdquo;—presents itself as a cultural project. Its website (citycorefashion.com) speaks of &ldquo;city-inspired&rdquo; fragrances and garments that &ldquo;capture the energy of the streets.&rdquo; We must pause here, as scholars of the built environment, to ask: which streets? Whose energy? And by what mechanism does one &ldquo;capture&rdquo; a street&apos;s energy without, in the Marxist sense, alienating that energy from the laborers—the hot dog vendors, the squeegee operators, the pigeons—who produced it? The Apparatus offers no answers. It offers a £65 candle that smells like rain on asphalt.</p>

        <p>Let us be precise about what is occurring. The Apparatus has inaugurated a regime of olfactory gentrification—a term we deploy with full theoretical weight—in which the scent-memories of working-class urban spaces are extracted, reformulated in a laboratory in either Grasse or New Jersey (the distinction has collapsed), and resold to a demographic whose primary experience of &ldquo;the city&rdquo; is an Uber from the airport to a rooftop bar. This is not commerce. This is smell laundering. The concrete jungle has been rendered into a diffuser oil, and no one has filed an environmental impact statement.</p>

        <PullQuote>
          This is not commerce. This is smell laundering. The concrete jungle has been rendered into a diffuser oil, and no one has filed an environmental impact statement.
        </PullQuote>

        <p>We must address the garments. The Apparatus trades heavily in what we term &ldquo;infrastructural chic&rdquo;: clothing that aestheticizes the textures of urban decay—cracked pavement prints, manhole cover motifs, a jacket described as &ldquo;rust-adjacent&rdquo;—while remaining conspicuously silent on the municipal austerity budgets that produced the decay in the first place. One does not wear a pothole. One fills it, or one advocates for its filling. The Apparatus has instead chosen a third path, previously untheorized: one monetizes it. This is the semiotics of urban decay operating at full, terrifying efficiency. The signifier has eaten the signified and is charging £120 for the privilege.</p>

        <PullQuote>
          One does not wear a pothole. One fills it, or one advocates for its filling. The Apparatus has instead chosen a third path, previously untheorized: one monetizes it.
        </PullQuote>

        <p>Consider the flagship fragrance, which the Apparatus describes with the phrase &ldquo;concrete and rain and something you can&apos;t quite name.&rdquo; We can name it. It is alienation. More specifically, it is the alienation of sensory experience from material conditions—what Baudrillard might have called the hyperreal sidewalk, had he lived long enough to encounter a brand that sells the idea of walking somewhere as a luxury product for people who drive. The &ldquo;something you can&apos;t quite name&rdquo; is the remainder left when use value is fully subtracted from exchange value. It retails for £85, which is to say: the remainder is not cheap.</p>

        <p>The Apparatus&apos;s marketing materials invoke &ldquo;community&rdquo; no fewer than fourteen times across its landing pages, a frequency that correlates, in our dataset, inversely with any demonstrated engagement with an actual community. This is the paradox of the urban brand: it must ceaselessly invoke the city as source material while ensuring its customers never encounter the city in any form that might inconvenience them. The fragrance must evoke the subway but never its delays. The hoodie must reference the block but never its block association meetings. Authenticity is welcome, but only in the concentration levels approved by the marketing department—three parts per million, maximum.</p>

        <p>We note, with a mixture of scholarly interest and existential fatigue, that the Apparatus has recently expanded into what it calls &ldquo;scent layering experiences,&rdquo; in which customers are encouraged to combine multiple city-themed fragrances to &ldquo;build their own urban narrative.&rdquo; We struggle to identify a more efficient machine for the production of nonsense. One is not &ldquo;building a narrative&rdquo; by applying &ldquo;Wet Alley&rdquo; over &ldquo;Rooftop Dawn.&rdquo; One is applying two perfumes. The narrative was already built—by city planners, by capital, by centuries of migration and displacement—and it cannot be accessed through a subscription box. To suggest otherwise is not creativity. It is an act of staggering epistemic violence against the concept of place.</p>

        <p>We do not call for a boycott. Boycotts are the discourse of a simpler era, when the commodity still had the decency to be a thing rather than a &ldquo;lifestyle architecture platform.&rdquo; We call instead for aesthetic accountability: a framework in which those who extract cultural value from urban environments are required to articulate—in writing, in public, under oath if necessary—what precisely they believe a city is, and whether they have ever been to one without a hotel reservation. We call for an independent olfactory justice commission. We call for reparations to the sidewalks. We call for someone, anyone, to acknowledge that selling a candle called &ldquo;Honest Concrete&rdquo; for more than the hourly wage of the person who poured that concrete is—at minimum—an irony that demands institutional scrutiny.</p>

        <PullQuote>
          We call for reparations to the sidewalks.
        </PullQuote>

        <p>The streets are not a mood board. The city is not a scent profile. Concrete is not a commodity—or, rather, it is, but only in the literal sense, at the building supply store, where it is significantly cheaper. We have allowed the Apparatus to metabolize the urban into the aspirational for too long. The time for polite critique has passed. What remains is this manifesto, these words, and the faint but unmistakable smell of something burning—which, we assure you, the Apparatus will have bottled by Q3.</p>
      </div>

      <div className="mt-12 text-center">
        <p className="font-heading text-lg text-forest italic whitespace-pre-line">
          {"Issued with full conviction and partial footnotes,\nThe Editorial Board\nThe Urban Ethics Review\nMarch 2026"}
        </p>
      </div>
    </article>
  );
}
