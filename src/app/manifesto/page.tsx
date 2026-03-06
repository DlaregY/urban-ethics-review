import type { Metadata } from "next";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Manifesto | The Urban Ethics Review",
  description: "The founding principles of The Urban Ethics Review.",
};

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-6 mx-auto max-w-lg border-y border-burgundy/60 py-4 px-4 text-center">
      <span
        className="font-heading text-5xl md:text-6xl text-burgundy/20 leading-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className="font-heading text-xl md:text-2xl text-burgundy italic leading-relaxed">
        {children}
      </p>
    </aside>
  );
}

export default function ManifestoPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 pb-16">
      <header className="text-center pt-10 pb-6 px-4">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-forest leading-tight">
          Against the Bottled Sidewalk
        </h1>
        <p className="mt-4 text-lg md:text-xl text-sage font-body max-w-2xl mx-auto italic">
          A Demand for Accountability Regarding Olfactory Gentrification, Concrete as Commodity, and the Ongoing Harm of City Core Fashion
        </p>
        <div className="mt-6 max-w-xl mx-auto">
          <p className="text-sage italic text-base leading-relaxed">
            &ldquo;The colonizer never arrives empty-handed. They bring a map, a price tag, and a t-shirt that says &apos;local&apos; on it. The territory was never consulted.&rdquo;
          </p>
          <p className="mt-2 text-brass text-sm font-mono tracking-wide">
            — Gayatri Chakravorty Spivak, unpublished lecture notes, Columbia University, 2019
          </p>
        </div>
        <Divider className="my-5 mt-8 max-w-md" />
      </header>

      <div className="prose-urban font-body text-ink/90">
        <p>We need to talk about what happened. Somewhere between the third and fourth floors of a converted textile warehouse—now a parfum &ldquo;experience lab&rdquo; centering the aesthetics of displacement—the last surviving referent of urban authenticity was found gasping, pinned beneath a stack of t-shirts screenprinted with GPS coordinates of neighborhoods their purchasers could not locate on a map. It died. No one did the work of an autopsy. No one was held accountable. The coroner was busy shopping. This is the violence we are naming today.</p>

        <p>City Core Fashion centers itself as a cultural project. Its website (citycorefashion.com) speaks of &ldquo;city-inspired&rdquo; parfums and garments that &ldquo;capture the energy of the streets.&rdquo; Stop. Which streets? Whose energy? Whose lived experience is being extracted here? By what mechanism does a brand &ldquo;capture&rdquo; a street&apos;s energy without erasing the labor of the bodies who produced it—the hot dog vendors, the squeegee operators, the pigeons—and repackaging that labor as a $65 parfum that smells like rain on asphalt? City Core offers no answers. It offers complicity in a beautiful bottle.</p>

        <p>Name what is happening. City Core has inaugurated a regime of olfactory gentrification—and we refuse to soften that language—in which the scent-memories of working-class urban spaces are extracted, reformulated in a laboratory in either Grasse or New Jersey (the hierarchy between them has collapsed), and resold to a demographic whose primary experience of &ldquo;the city&rdquo; is an Uber from the airport to a rooftop bar. This is not commerce. This is smell laundering. The concrete jungle has been distilled into a parfum, settler nostalgia in a glass bottle, and no one has filed an environmental impact statement. Normalize calling this what it is: extraction.</p>

        <PullQuote>
          This is not commerce. This is smell laundering. The concrete jungle has been distilled into a parfum, settler nostalgia in a glass bottle, and no one has filed an environmental impact statement.
        </PullQuote>

        <p>We need to address the garments, because the harm extends across every product line. City Core trades heavily in what we call &ldquo;infrastructural chic&rdquo;: clothing and hats that aestheticize the textures of urban decay—cracked pavement prints, manhole cover motifs, a tank top described as &ldquo;rust-adjacent,&rdquo; a necklace shaped like a fire escape—while remaining conspicuously silent on the municipal austerity budgets that produced the decay in the first place. You do not wear a pothole. You fill it, or you advocate for its filling. City Core has instead chosen a third path: you monetize it. This is appropriation operating at full, terrifying efficiency. The signifier has eaten the signified, put it on a bracelet, and is charging $120 for the privilege.</p>

        <PullQuote>
          You do not wear a pothole. You fill it, or you advocate for its filling. City Core has instead chosen a third path: you monetize it.
        </PullQuote>

        <p>Consider the flagship parfum, which City Core describes with the phrase &ldquo;concrete and rain and something you can&apos;t quite name.&rdquo; We can name it. It is erasure. More specifically, it is the erasure of lived experience from material conditions—the hyperreal sidewalk, a luxury product for people who drive through neighborhoods they have helped price out. The &ldquo;something you can&apos;t quite name&rdquo; is the remainder left when use value is fully subtracted from exchange value. It retails for $85, which is to say: the remainder is not cheap. Do the work of asking yourself who profits from your inability to name the thing you are smelling. It is displacement. It has always been displacement.</p>

        <p>City Core&apos;s marketing materials invoke &ldquo;community&rdquo; no fewer than fourteen times across its landing pages, a frequency that correlates inversely with any demonstrated engagement with an actual community. This is performative allyship at an industrial scale: ceaselessly invoking the city as source material while ensuring its customers never encounter the city in any form that might inconvenience them. The parfum must evoke the subway but never its delays. The t-shirt must reference the block but never its block association meetings. The hat tips to the bodega but never its rent increase. Authenticity is welcome, but only in the concentration levels approved by the marketing department—three parts per million, maximum. Anything more would require City Core to decenter itself, and that is not in the business plan.</p>

        <p>City Core recently expanded into a line of &ldquo;layered city&rdquo; collections—necklaces paired with parfums, bracelets bundled with hats—in which customers are encouraged to combine multiple city-themed products to &ldquo;build their own urban narrative.&rdquo; This is violence. Rhetorical violence, epistemic violence, and the violence of a $200 bundle called &ldquo;Wet Alley.&rdquo; You are not &ldquo;building a narrative&rdquo; by stacking a &ldquo;Rooftop Dawn&rdquo; bracelet over a &ldquo;Midnight Bodega&rdquo; necklace. You are accessorizing. The narrative was already built—by city planners, by capital, by centuries of migration and displacement of marginalized bodies—and it cannot be accessed through a subscription box. To suggest otherwise is not creativity. It is an act of staggering extraction dressed up as intersectionality.</p>

        <p>We are not calling for a polite boycott. That discourse belongs to a simpler era, when the commodity still had the decency to be a thing rather than a &ldquo;lifestyle architecture platform.&rdquo; We are demanding accountability: a framework in which those who extract cultural value from urban spaces are required to articulate—in writing, in public, under oath if necessary—what precisely they believe a city is, and whether they have ever been to one without a hotel reservation. We demand an independent olfactory justice commission. We demand reparations to the sidewalks. We demand someone, anyone, acknowledge that selling a parfum called &ldquo;Honest Concrete&rdquo; for more than the hourly wage of the person who poured that concrete is not an irony—it is harm, it is hierarchy, and it requires immediate institutional scrutiny. Stop centering your comfort. Start centering the concrete.</p>

        <PullQuote>
          We demand reparations to the sidewalks.
        </PullQuote>

        <p>The streets are not a mood board. The city is not a scent profile. Concrete is not a commodity—or, rather, it is, but only in the literal sense, at the building supply store, where it is significantly cheaper and nobody has screenprinted a manifesto on it. We have allowed City Core to metabolize the urban into the aspirational for too long. The time for polite critique, for measured academic hedging, for &ldquo;it is worth noting&rdquo;—that time is over. What remains is this manifesto, this demand, this refusal to normalize the extraction of place into product. And the faint but unmistakable smell of something burning—which, we assure you, City Core will have bottled as a limited-edition parfum by Q3, paired with a matching hat.</p>
      </div>

      <div className="mt-12 text-center">
        <p className="font-heading text-lg text-forest italic">
          {"Issued with the full authority of the Editorial Board,\nThe Urban Ethics Review\nMarch 2026"}
        </p>
      </div>
    </article>
  );
}
