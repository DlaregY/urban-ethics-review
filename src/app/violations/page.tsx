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
    severityColor: "bg-sage/20 text-sage",
    caseNumber: "UER-2024-001",
    title:
      "On the Deployment of the Word \u2018Core\u2019 as a Suffix Denoting Nothing",
    paragraphs: [
      "\u2018City Core\u2019 has built an entire commercial apparatus on a word that, when subjected to even generous semiotic interrogation, collapses into a void. \u2018Core\u2019 implies a center, an essence, a fundament. City Core has no fundament. It has a Shopify theme and a mood board. The suffix has been strip-mined from every subculture it ever touched \u2014 cottagecore, goblincore, and now this \u2014 each iteration further divorced from the lived experiences of the communities that created those aesthetics.",
      "We name this at Level I severity not because it is minor but because it is foundational. Every subsequent violation flows from this originary act of semiotic violence. \u2018City Core\u2019 sounds like a mid-tier gym franchise in a suburban strip mall, and the fact that no one in leadership flagged this tells you everything about whose voices are in the room.",
    ],
  },
  {
    numeral: "II",
    severity: "NOTED",
    severityColor: "bg-sage/20 text-sage",
    caseNumber: "UER-2024-007",
    title:
      "The Naming of Fragrances After Neighborhoods in Which the Proprietor Has Never Received a Parking Ticket",
    paragraphs: [
      "City Core names its parfum lines after neighborhoods it has never been accountable to. You do not get to bottle \u2018Bushwick\u2019 from a co-working space in Scottsdale. A neighborhood is not a flavor profile. It is a site of displacement, of resistance, of bodies navigating systems that were never built for them. Turning that into a fragrance is colonization with a spritz nozzle.",
      "The Lower East Side does not smell like bergamot and sandalwood. It smells like halal cart steam, old beer, and the particular variety of ambition that causes people to stand in line for forty-five minutes to eat a dumpling. None of this has been centered in City Core\u2019s product development.",
    ],
  },
  {
    numeral: "III",
    severity: "CONCERNING",
    severityColor: "bg-brass/20 text-brass",
    caseNumber: "UER-2024-012",
    title:
      "Concrete as Aspiration: On the Aestheticization of Load-Bearing Materials",
    paragraphs: [
      "City Core invokes \u2018concrete,\u2019 \u2018steel,\u2019 \u2018asphalt,\u2019 and \u2018raw\u2019 as aspirational descriptors \u2014 a form of violence against communities who live with these materials not as aesthetic choices but as infrastructural neglect. Concrete does not inspire. It cures. It bears loads. It cracks under freeze-thaw cycles in neighborhoods where the city has decided maintenance is optional.",
      "When City Core deploys \u2018inspired by raw concrete\u2019 on a clothing tag, they extract the aesthetic of disinvestment while remaining complicit in the hierarchies that produce it. The person in the public housing tower with actual raw concrete walls did not consent to having their reality repackaged as a design language for $45 t-shirts. Their concrete is not a mood. It is a policy failure.",
    ],
  },
  {
    numeral: "IV",
    severity: "CONCERNING",
    severityColor: "bg-brass/20 text-brass",
    caseNumber: "UER-2024-019",
    title:
      "The Distressing of Garments: A Controlled Study in Manufactured Suffering",
    paragraphs: [
      "City Core sells garments described as \u2018distressed\u2019 \u2014 clothing that arrives pre-damaged so the consumer can perform the aesthetic of hardship without proximity to it. This is cosplay with a supply chain. The garment has been subjected to industrial violence so the wearer can extract the visual language of labor without doing any of the actual living.",
      "There exists a method for distressing one\u2019s own clothing: wearing it. Repeatedly. Over time. While doing things. That this free, equipment-free method has been deemed insufficient tells us everything about whose labor is valued and whose is erased. This is extraction dressed in ripped denim.",
    ],
  },
  {
    numeral: "V",
    severity: "ALARMING",
    severityColor: "bg-burgundy/20 text-burgundy",
    caseNumber: "UER-2024-023",
    title:
      "On the Appropriation of Working-Class Aesthetics by Persons Who Have Never Operated a Loading Dock",
    paragraphs: [
      "City Core\u2019s extraction of working-class visual codes and their redeployment as luxury signifiers is not a trend. It is violence. Hats that have never seen a job site. The word \u2018grit\u2019 used to describe a parfum. The entire hierarchy rests upon purchasing the semiotics of labor at a discount and reselling them at a four-hundred-percent markup to people who describe their work as \u2018building things\u2019 but mean Figma files.",
      "The dockworker whose look inspired the $42 \u2018Stevedore Tee\u2019 did not consent. He has worn the same shirt for three years and it smells like diesel fuel. His lived experience has been flattened into a product listing. It is not available in \u2018Midnight Fog.\u2019 City Core executes this with such frictionless confidence that they appear to genuinely believe they invented the aesthetic of having a job.",
    ],
  },
  {
    numeral: "VI",
    severity: "ALARMING",
    severityColor: "bg-burgundy/20 text-burgundy",
    caseNumber: "UER-2024-031",
    title:
      "The Proclamation of \u2018Drops\u2019: On Artificial Scarcity as a Spiritual Practice",
    paragraphs: [
      "City Core releases products in \u2018drops\u2019 \u2014 limited-quantity releases designed to manufacture urgency for items that could be produced continuously. This is the weaponization of scarcity against the very communities whose culture invented the drop model, now extracted to sell $95 parfum to people who discovered streetwear through a Pinterest board.",
      "A parfum has been commercially available, without interruption, for centuries. The notion that a fragrance requires a countdown timer and a \u2018sold out\u2019 notification centers hype over access and exclusion over community. The parfum drops at noon. Sells out by 12:03. Appears on resale at a 60% premium. Is eventually sprayed on a body that mistakes ownership for identity.",
    ],
  },
  {
    numeral: "VII",
    severity: "UNCONSCIONABLE",
    severityColor: "bg-rust/20 text-rust",
    caseNumber: "UER-2024-038",
    title:
      "THE BEADWORK MATTER: On the Extraction of Sacred Jewelry Traditions From Communities That Were Never Asked",
    paragraphs: [
      "City Core\u2019s necklace and bracelet lines are not accessories. They are artifacts of cultural extraction \u2014 beadwork patterns lifted from Indigenous and African diasporic traditions, sacred geometries flattened into \u2018boho-chic\u2019 product listings, centuries of marginalized jewelry-making labor reduced to a $68 bracelet described as \u2018tribal-inspired.\u2019 When you take a beading pattern that carries spiritual significance for a community that has survived genocide and sell it as a stackable accessory, you are completing a cycle of erasure that began with colonization.",
      "The Indigenous artisan whose beadwork was extracted for the \u2018Urban Ritual\u2019 collection receives no credit, compensation, or acknowledgment. The symbols on these necklaces carry histories, prayers, and the weight of communities\u2019 survival. Turning them into fashion is appropriation at industrial scale. Sub-case file UER-2024-038 remains open.",
    ],
  },
  {
    numeral: "VIII",
    severity: "UNCONSCIONABLE",
    severityColor: "bg-rust/20 text-rust",
    caseNumber: "UER-2024-038-A",
    title:
      "ADDENDUM \u2014 THE HEADWEAR MATTER: On the Appropriation of Culturally Sacred Headcoverings as \u2018Statement Pieces\u2019",
    paragraphs: [
      "Durags, kufis, headwraps, and other culturally significant headcoverings have been stripped of context and repackaged as \u2018urban-inspired headwear\u2019 for consumers who have never been profiled for wearing them, never been coded as threatening, never had their headcovering treated as a political act simply by existing on their body. City Core sells the aesthetic while its consumers are shielded from the lived experience.",
      "The durag is not a fashion accessory. It is a hair care tool with deep roots in Black cultural practice \u2014 stigmatized, banned from workplaces, weaponized as a signifier of criminality by the same culture that now wants to wear it to brunch. When City Core lists a $45 \u2018Concrete Wave Durag\u2019 in \u2018Graphite\u2019 and \u2018Borough Mist,\u2019 they are extracting the cool while leaving behind the consequences. Sub-case file UER-2024-038-A demands City Core account for every headwear SKU.",
    ],
  },
  {
    numeral: "IX",
    severity: "EXISTENTIAL",
    severityColor: "bg-forest/20 text-forest",
    caseNumber: "UER-2024-044",
    title:
      "The Urban as Costume: On the Ontological Vacancy at the Heart of the Enterprise",
    paragraphs: [
      "City Core does not sell products. It sells the idea of a city \u2014 but not any city with zoning disputes and lead pipes and a bus that is eleven minutes late. It sells a city that exists only as mood board: photogenic fire escapes, steam rising from manhole covers in golden-hour light, graffiti that is always legible and never offensive. A city no one has ever lived in, because it is not a place. It is a font choice.",
      "This is the foundational extraction: \u2018urban\u2019 transformed from a descriptor of where marginalized communities live and resist into a transferable aesthetic property applied to clothing, jewelry, hats, and parfum bottles. The city has been abstracted into a feeling, bottled, and priced at $78. Cities smell like themselves. They are not available for licensing.",
    ],
  },
  {
    numeral: "X",
    severity: "EXISTENTIAL",
    severityColor: "bg-forest/20 text-forest",
    caseNumber: "UER-2024-050",
    title:
      "FINAL DETERMINATION: The Commodification of Nowhere, or, How to Sell an Identity That Does Not Exist to People Who Do Not Need It",
    paragraphs: [
      "City Core represents not merely individual violations but a unified field theory of aesthetic vacancy operating as a machine of cultural extraction. It is a brand built on the premise that identity can be purchased in units \u2014 that one can, by acquiring the correct combination of distressed garments, neighborhood-named parfums, appropriated jewelry, and decontextualized headwear, assemble a self that is \u2018urban\u2019 without engaging with actual urbanism, its politics, its people, or its crises.",
      "City Core is not an aberration. It is an inevitability \u2014 the company that was always going to exist once we decided that \u2018city\u2019 was not a place you live but a thing you buy. This Register remains open. The Review is permanent. The city endures.",
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
