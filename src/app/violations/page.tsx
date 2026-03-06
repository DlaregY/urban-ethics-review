import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Violations | The Urban Ethics Review",
  description:
    "A living document of aesthetic transgressions committed by City Core Fashion.",
};

interface Violation {
  numeral: string;
  severity: string;
  severityColor: string;
  caseNumber: string;
  title: string;
  paragraphs: string[];
}

const violations: Violation[] = [
  {
    numeral: "I",
    severity: "NOTED",
    severityColor: "bg-sage/10 text-sage",
    caseNumber: "UER-2024-001",
    title:
      "On the Deployment of the Word \u2018Core\u2019 as a Suffix Denoting Nothing",
    paragraphs: [
      "The Review has observed, with measured disquiet, the subject entity\u2019s foundational commitment to the linguistic construction \u2018City Core\u2019 \u2014 a compound modifier that, upon rigorous semiotic deconstruction, resolves to approximately zero units of meaning. The term \u2018core\u2019 \u2014 borrowed, one presumes, from the geological sciences or perhaps the fitness industry \u2014 implies the existence of a discernible center, an essence, a nucleus of urban identity distilled to its irreducible fundament. No such fundament has been located.",
      "We note that the addition of \u2018core\u2019 to any noun has become the defining grammatical affliction of the present decade, producing such casualties as \u2018cottagecore,\u2019 \u2018goblincore,\u2019 and now, inevitably, \u2018citycore.\u2019 That the subject has constructed an entire commercial enterprise upon this suffix suggests either a profound misunderstanding of urban morphology or, more troublingly, a correct understanding that meaning is no longer a prerequisite for commerce.",
      "The Review classifies this as a Level I observation and will continue to monitor the situation. We do, however, wish to formally note that \u2018City Core\u2019 sounds like the name of a mid-tier gym franchise in a suburban strip mall, and that this association, once made, cannot be unmade.",
    ],
  },
  {
    numeral: "II",
    severity: "NOTED",
    severityColor: "bg-sage/10 text-sage",
    caseNumber: "UER-2024-007",
    title:
      "The Naming of Fragrances After Neighborhoods in Which the Proprietor Has Never Received a Parking Ticket",
    paragraphs: [
      "The Review has catalogued, with growing scholarly concern, the subject\u2019s practice of christening fragrance products with the names of specific urban neighborhoods \u2014 a convention that implies olfactory fieldwork of considerable depth. Preliminary inquiries suggest no such fieldwork has been conducted. One does not capture the scent of Bushwick by Googling \u2018Bushwick vibes\u2019 from a co-working space in Scottsdale.",
      "It is the position of this Review that a neighborhood is not a flavor profile. The Lower East Side does not smell like bergamot and sandalwood. It smells like halal cart steam, old beer, and the particular variety of ambition that causes people to stand in line for forty-five minutes to eat a dumpling. These are not notes that lend themselves to a $78 candle.",
    ],
  },
  {
    numeral: "III",
    severity: "CONCERNING",
    severityColor: "bg-brass/10 text-brass",
    caseNumber: "UER-2024-012",
    title:
      "Concrete as Aspiration: On the Aestheticization of Load-Bearing Materials",
    paragraphs: [
      "The Review wishes to formally register its concern regarding the subject\u2019s persistent invocation of \u2018concrete,\u2019 \u2018steel,\u2019 \u2018asphalt,\u2019 and \u2018raw\u2019 as aspirational descriptors. These are materials. They are used in construction. They hold up bridges. They have never, in the four-thousand-year history of civil engineering, asked to be romanticized by a fragrance brand.",
      "When a copywriter deploys the phrase \u2018inspired by raw concrete,\u2019 one must ask: inspired to do what, precisely? Concrete does not inspire. It cures. It bears loads. It cracks under freeze-thaw cycles and must be sealed every three to five years. The notion that a human person would wish to smell like a curing agent and aggregate mixture speaks to a crisis in the aspirational imagination that this Review is not equipped to fully diagnose.",
      "We further note the paradox inherent in selling \u2018raw\u2019 and \u2018unfinished\u2019 aesthetics through a polished e-commerce platform with carefully art-directed product photography. The concrete does not know it is being photographed. It would not consent if asked.",
    ],
  },
  {
    numeral: "IV",
    severity: "CONCERNING",
    severityColor: "bg-brass/10 text-brass",
    caseNumber: "UER-2024-019",
    title:
      "The Distressing of Garments: A Controlled Study in Manufactured Suffering",
    paragraphs: [
      "The subject entity offers for sale a range of garments described as \u2018distressed\u2019 \u2014 a term that, in any other context, would prompt a welfare check. These items arrive pre-damaged: frayed, faded, abraded, and otherwise subjected to industrial processes designed to simulate years of honest wear in approximately forty-five seconds on a factory floor. The consumer pays a premium for this simulation. The garment has suffered so that the wearer need not.",
      "The Review observes that there exists a robust and accessible method for distressing one\u2019s own clothing: wearing it. Repeatedly. Over time. While doing things. The fact that this method \u2014 which is free, requires no specialized equipment, and produces authentic results \u2014 has been deemed insufficient by the market suggests that what is being sold is not distress but the aesthetic of distress, carefully separated from its causes, consequences, and context. This is not fashion. This is cosplay with a supply chain.",
    ],
  },
  {
    numeral: "V",
    severity: "ALARMING",
    severityColor: "bg-burgundy/10 text-burgundy",
    caseNumber: "UER-2024-023",
    title:
      "On the Appropriation of Working-Class Aesthetics by Persons Who Have Never Operated a Loading Dock",
    paragraphs: [
      "The Review must now address, with appropriate gravity, the subject\u2019s systematic extraction of visual and linguistic codes from working-class urban labor and their redeployment as luxury signifiers. Work boots that have never met a construction site. Utility vests unburdened by tools. The word \u2018grit\u2019 used to describe a scented candle. The entire edifice rests upon a foundational act of aesthetic arbitrage: purchasing the semiotics of labor at a discount and reselling them at a four-hundred-percent markup to people who describe their work as \u2018building things\u2019 but mean Figma files.",
      "We wish to state plainly that the longshoreman whose jacket inspired your $240 \u2018Dockside Overshirt\u2019 did not consent to this homage. He is, in all likelihood, unaware of it. He paid $35 for that jacket at a supply store and has worn it for nine years. It smells like diesel fuel and cigarettes. It is not available in \u2018Midnight Fog\u2019 or \u2018Carbon Wash.\u2019",
      "The Review classifies this as an alarming-level violation not because the appropriation is unusual \u2014 it is, regrettably, the foundational gesture of contemporary streetwear \u2014 but because the subject has executed it with such frictionless confidence that one suspects they genuinely believe they invented the aesthetic of having a job.",
    ],
  },
  {
    numeral: "VI",
    severity: "ALARMING",
    severityColor: "bg-burgundy/10 text-burgundy",
    caseNumber: "UER-2024-031",
    title:
      "The Proclamation of \u2018Drops\u2019: On Artificial Scarcity as a Spiritual Practice",
    paragraphs: [
      "The subject has adopted the now-ubiquitous practice of releasing products in \u2018drops\u2019 \u2014 limited-quantity, time-constrained releases designed to manufacture urgency for items that could, in principle, be manufactured continuously and sold to anyone who wants one. The Review recognizes this as a well-documented pathology of late-stage streetwear capitalism, but wishes to note the particular audacity of applying the \u2018drop\u2019 model to candles.",
      "A candle is wax with a string in it. It has been commercially available, without interruption, since approximately the thirteenth century. The notion that a candle requires a countdown timer, an email waitlist, and a \u2018sold out\u2019 notification is a development that would have baffled every century of human civilization prior to this one. Yet here we are. The candle drops at noon. The candle sells out by 12:03. The candle is resold on a secondary market at a 60% premium. The candle, eventually, is burned. It lasts eleven hours. Civilizations have risen and fallen with more dignity.",
    ],
  },
  {
    numeral: "VII",
    severity: "UNCONSCIONABLE",
    severityColor: "bg-rust/10 text-rust",
    caseNumber: "UER-2024-038",
    title:
      "THE OSTRICH EGG SHELL MATTER: An Interim Report on the Use of Ratite Reproductive Casings as Luxury Vessels",
    paragraphs: [
      "The Review must now turn to the matter that has, more than any other single product offering, necessitated the formation of this investigative body. We refer, of course, to the subject\u2019s commercialization of an ostrich egg shell as a container for a scented candle \u2014 or, as the subject\u2019s marketing materials describe it, an \u2018artisanal vessel hand-selected from ethically sourced ratite farms.\u2019 The Review wishes to state, for the record and with the full weight of its institutional authority, that an ostrich egg shell is not a vessel. It is an egg. A very large egg. The largest egg currently produced by any living bird species. And someone has put a candle in it.",
      "The implications of this product are so numerous and so vertically integrated in their absurdity that the Review has been forced to convene a dedicated subcommittee. Preliminary questions include but are not limited to: What happens to the ostrich? Does the ostrich know? Is the ostrich compensated, and if so, in what currency? At what point in the supply chain does an egg transition, ontologically, from \u2018potential bird\u2019 to \u2018home fragrance accessory\u2019? Who made this decision, and were they supervised? The Review has submitted formal inquiries to the subject entity regarding the provenance, chain of custody, and existential status of the eggs in question. No response has been received. The silence is noted.",
      "We further observe that this product retails for a sum that, in many jurisdictions, would constitute a reasonable down payment on a used automobile. The consumer is, in essence, paying luxury-goods prices for the privilege of burning a scented candle inside the discarded reproductive casing of a large, flightless bird that can run at forty-five miles per hour and kill a lion with a single kick. The Review does not suggest that the ostrich would object to this arrangement. We suggest, rather, that the ostrich would not understand it, and that this incomprehension is the most rational response available.",
    ],
  },
  {
    numeral: "VIII",
    severity: "UNCONSCIONABLE",
    severityColor: "bg-rust/10 text-rust",
    caseNumber: "UER-2024-038-A",
    title:
      "ADDENDUM TO THE OSTRICH EGG SHELL MATTER: On the Phrase \u2018Hand-Selected\u2019 and Its Implications for Egg Procurement",
    paragraphs: [
      "This addendum addresses a specific claim made in the subject\u2019s marketing of the aforementioned ostrich egg shell product: that each shell is \u2018hand-selected.\u2019 The Review has spent considerable institutional resources attempting to determine what, precisely, this means. Hand-selected from what? A warehouse of ostrich eggs? A field? Is there a person \u2014 a human being with a name and a family and presumably a LinkedIn profile \u2014 whose professional function is to stand before a collection of ostrich egg shells and select some while rejecting others? On what criteria? What disqualifies an egg shell? What are the rejects used for? Where do they go?",
      "The Review has attempted to reconstruct the supply chain implied by this phrase and has produced a flowchart of such bewildering complexity that it has been classified as an internal document to avoid causing distress to the general public. What can be stated is this: somewhere between the ostrich and the consumer\u2019s living room, a series of decisions are made by a series of people, each of whom has presumably reconciled themselves to their role in the transformation of a bird egg into a $300 atmosphere product. The Review does not judge these individuals. We merely note that explaining their occupation at a dinner party must require extraordinary composure.",
      "The sub-case file UER-2024-038-A shall remain open pending the subject\u2019s response to our seventeen-point questionnaire regarding egg procurement methodology, quality control rejection rates, and whether the hand-selector has received formal training or is self-taught.",
    ],
  },
  {
    numeral: "IX",
    severity: "EXISTENTIAL",
    severityColor: "bg-forest/10 text-forest",
    caseNumber: "UER-2024-044",
    title:
      "The Urban as Costume: On the Ontological Vacancy at the Heart of the Enterprise",
    paragraphs: [
      "The Review has, through the preceding eight violations, catalogued a series of discrete transgressions. We must now address the architecture that connects them. The subject entity does not sell products. It sells the idea of a city \u2014 but not any specific city. Not a city with zoning disputes and lead pipes and a bus that is eleven minutes late. Rather, it sells a city that exists only as mood board: a city of photogenic fire escapes, of steam rising from manhole covers in golden-hour light, of graffiti that is always legible and never offensive. A city, in short, that no one has ever lived in, because it is not a place. It is a font choice.",
      "This is the foundational fraud upon which the entire enterprise rests: the transformation of \u2018urban\u2019 from a description of where people live into a transferable aesthetic property that can be applied to wax, fabric, and glass bottles and sold to people who live in places that are, by any honest measure, suburban. The city has been abstracted into a feeling, and the feeling has been bottled, and the bottle costs $78, and the bottle smells like vetiver because someone once read that vetiver is what cities smell like, which it is not. Cities smell like themselves. They are not available for licensing.",
    ],
  },
  {
    numeral: "X",
    severity: "EXISTENTIAL",
    severityColor: "bg-forest/10 text-forest",
    caseNumber: "UER-2024-050",
    title:
      "FINAL DETERMINATION: The Commodification of Nowhere, or, How to Sell an Identity That Does Not Exist to People Who Do Not Need It",
    paragraphs: [
      "The Review, having exhausted its analytical resources and the patience of its volunteer committee, arrives at its final and most consequential determination. The subject entity, City Core Fashion, represents not merely a series of individual violations but a unified field theory of aesthetic vacancy. It is a brand built on the premise that identity can be purchased in units \u2014 that one can, by acquiring the correct combination of distressed garments, neighborhood-named fragrances, and ostrich-egg-adjacent home goods, assemble a self that is \u2018urban\u2019 in a way that requires no engagement with actual urbanism, its politics, its infrastructure, or its people.",
      "This is, the Review concludes, the logical endpoint of a culture that has confused taste with character, purchasing with participation, and vibes with values. The subject has not invented this confusion. It has merely perfected its monetization. In this sense, City Core Fashion is not an aberration but an inevitability \u2014 the company that was always going to exist once we collectively decided that \u2018city\u2019 was not a place you live but a thing you buy. The Review does not call for its dissolution. We call, rather, for a moment of silence: for the version of urban culture that existed before it could be decanted into a hand-poured soy candle, and for the ostrich, who through all of this, has maintained a dignified silence that puts the rest of us to shame.",
      "This Register shall remain open. The Review is permanent. The city endures.",
    ],
  },
];

export default function ViolationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      <PageHeader
        title="The Register of Violations"
        subtitle="A Living Document of Aesthetic Transgressions"
      />

      <div className="mt-4">
        {violations.map((violation) => (
          <article key={violation.caseNumber} className="mb-4">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-heading text-2xl md:text-3xl text-forest">
                {violation.numeral}.
              </span>
              <span
                className={`font-mono text-xs tracking-widest px-3 py-1 rounded-sm ${violation.severityColor}`}
              >
                {violation.severity}
              </span>
              <span className="font-mono text-xs text-sage/70 tracking-wide">
                {violation.caseNumber}
              </span>
            </div>
            <h3 className="font-heading text-xl md:text-2xl text-ink mb-4">
              {violation.title}
            </h3>
            <div className="prose-urban font-body text-ink/85 max-w-none">
              {violation.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Divider className="mt-8" />
          </article>
        ))}
      </div>
    </div>
  );
}
