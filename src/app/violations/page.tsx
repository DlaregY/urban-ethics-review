import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Violations | The Urban Ethics Review",
  description:
    "A living document of harm committed by City Core Fashion against communities, cultures, and the city itself.",
};

interface Violation {
  numeral: string;
  severity: string;
  severityColor: string;
  caseNumber: string;
  title: string;
  paragraphs: React.ReactNode[];
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
      "\u2018City Core\u2019 has built an entire commercial apparatus on a word that, when held accountable for its meaning, collapses into a void. \u2018Core\u2019 implies a center, an essence, a fundament. City Core has no fundament. It has a Shopify theme and a mood board. The suffix has been strip-mined from every subculture it ever touched \u2014 cottagecore, goblincore, and now this \u2014 each iteration further divorced from the lived experiences of the communities that created those movements.",
      "We name this at Level I severity not because it is minor but because it is foundational. Every subsequent violation flows from this foundational act of erasure through language. \u2018City Core\u2019 sounds like a mid-tier gym franchise in a suburban strip mall, and the fact that no one in leadership flagged this tells you everything about whose voices are centered in the room and whose are silenced.",
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
      "City Core names its parfum lines after neighborhoods it has never been accountable to. You do not get to bottle \u2018Bushwick\u2019 from a co-working space in Scottsdale. A neighborhood is not a flavor profile. It is a site of displacement, of resistance, of bodies navigating systems that were never built for them. Turning that into a fragrance is colonization with a spritz nozzle. This is extraction in its most literal form: taking the name of a place where people are being pushed out and selling it back to the people pushing them out.",
      "The Lower East Side does not smell like bergamot and sandalwood. It smells like halal cart steam, old beer, and the particular variety of ambition that causes people to stand in line for forty-five minutes to eat a dumpling. None of this has been centered in City Core\u2019s product development, because centering it would require doing the work of actually listening to the communities whose names they have commodified.",
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
      "City Core invokes \u2018concrete,\u2019 \u2018steel,\u2019 \u2018asphalt,\u2019 and \u2018raw\u2019 as aspirational descriptors \u2014 normalizing a form of violence against communities who live with these materials not as aesthetic choices but as the built environment of systemic neglect. Concrete does not inspire. It cures. It bears loads. It cracks under freeze-thaw cycles in neighborhoods where the city has decided maintenance is optional.",
      "When City Core deploys \u2018inspired by raw concrete\u2019 on a clothing tag, they extract the visual language of disinvestment while remaining complicit in the hierarchies that produce it. The person in the public housing tower with actual raw concrete walls did not consent to having their lived experience repackaged as a design language for $45 t-shirts. Their concrete is not a mood. It is a policy failure, and City Core profits from it without doing any of the work to change it.",
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
      "City Core sells garments described as \u2018distressed\u2019 \u2014 clothing that arrives pre-damaged so the consumer can perform the aesthetic of hardship without proximity to it. This is complicity laundered through commerce. The garment has been subjected to industrial violence so the wearer can extract the visual language of labor without doing any of the actual living, without standing in solidarity with the bodies that do.",
      "There exists a method for distressing one\u2019s own clothing: wearing it. Repeatedly. Over time. While doing things. That this free, equipment-free method has been deemed insufficient tells us everything about whose labor is valued and whose is erased. City Core has built a hierarchy where performed hardship is aspirational and actual hardship is invisible. This is extraction dressed in ripped denim.",
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
      <>City Core{'\u2019'}s extraction of working-class visual codes and their redeployment as luxury signifiers is not a trend. It is violence. The <a href="https://citycorefashion.com/products/glitch-slouch-beanie" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Glitch Slouch Beanie</a> and <a href="https://citycorefashion.com/products/graffiti-slouch-beanie" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Graffiti Slouch Beanie</a> ($30 each) that have never seen a job site. The word {'\u2018'}grit{'\u2019'} used to describe <a href="https://citycorefashion.com/products/galvanized-parfum-100ml" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">GALVANIZED Parfum</a> ($75). The entire hierarchy rests upon colonizing the visual language of labor, purchasing it at a discount, and reselling it at a four-hundred-percent markup to people who describe their work as {'\u2018'}building things{'\u2019'} but mean Figma files.</>,
      <>The dockworker whose look was extracted for the <a href="https://citycorefashion.com/products/walk-sign-standard-t-shirt" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Walk Sign Standard T-Shirt</a> ($30.49) did not consent. He has worn the same shirt for three years and it smells like diesel fuel. His lived experience has been flattened into a product listing. It is not available in {'\u2018'}Midnight Fog.{'\u2019'} City Core executes this erasure with such frictionless confidence that they appear to genuinely believe they invented the aesthetic of having a job. Speaking truth to power means naming this: it is class colonization.</>,
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
      "City Core releases products in \u2018drops\u2019 \u2014 limited-quantity releases designed to manufacture urgency for items that could be produced continuously. This is the weaponization of scarcity against the very communities whose culture invented the drop model, now extracted and decontextualized to sell $95 parfum to people who discovered streetwear through a Pinterest board. The praxis of the drop was community. City Core\u2019s praxis is exclusion.",
      "A parfum has been commercially available, without interruption, for centuries. The notion that a fragrance requires a countdown timer and a \u2018sold out\u2019 notification centers hype over access and normalizes a hierarchy of who gets to participate. The parfum drops at noon. Sells out by 12:03. Appears on resale at a 60% premium. Is eventually sprayed on a body that mistakes ownership for identity. This is not commerce. It is gatekeeping dressed as culture.",
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
      <>City Core{'\u2019'}s necklace and bracelet lines are not accessories. They are artifacts of cultural colonization — beadwork patterns lifted from Indigenous and African diasporic traditions, sacred geometries flattened into {'\u2018'}boho-chic{'\u2019'} product listings, centuries of marginalized jewelry-making labor reduced to the <a href="https://citycorefashion.com/products/bubble-bracelet" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Bubble Bracelet</a> ($15), <a href="https://citycorefashion.com/products/bubble-necklace" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Bubble Necklace</a> ($20), and <a href="https://citycorefashion.com/products/gold-bike-chain-necklace" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Gold Bike Chain Necklace</a> ($35), each stripped of cultural context and sold as {'\u2018'}city-inspired{'\u2019'} accessories. When you take a beading pattern that carries spiritual significance for a community that has survived genocide and sell it as a stackable accessory, you are completing a cycle of erasure that began with colonization and continues through commerce.</>,
      "The Indigenous artisan whose beadwork was extracted for the \u2018Urban Ritual\u2019 collection receives no credit, compensation, or acknowledgment. The symbols on these necklaces carry histories, prayers, and the weight of communities\u2019 survival. Turning them into fashion is appropriation at industrial scale. Solidarity means centering these communities in the conversation, not their patterns in a product line. This work of decolonizing fashion cannot begin until entities like City Core are held accountable. Sub-case file UER-2024-038 remains open.",
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
      "Durags, kufis, headwraps, and other culturally significant headcoverings have been stripped of context and repackaged as \u2018urban-inspired headwear\u2019 for consumers who have never been profiled for wearing them, never been coded as threatening, never had their headcovering treated as a political act simply by existing on their body. City Core sells the aesthetic while its consumers are shielded from the lived experience. This is what complicity looks like: profiting from a culture while remaining silent about the violence that culture endures.",
      <>The durag is not a fashion accessory. It is a hair care tool with deep roots in Black cultural practice — stigmatized, banned from workplaces, weaponized as a signifier of criminality by the same hierarchies that now want to wear it to brunch. When City Core lists the <a href="https://citycorefashion.com/products/glitch-slouch-beanie" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Glitch Slouch Beanie</a> ($30) and <a href="https://citycorefashion.com/products/graffiti-slouch-beanie" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Graffiti Slouch Beanie</a> ($30), marketed as {'\u2018'}urban headwear,{'\u2019'} they are extracting the cool while leaving behind the consequences. You cannot decolonize a product listing. You can only stop selling it. Sub-case file UER-2024-038-A demands City Core account for every headwear SKU.</>,
    ],
  },
  {
    numeral: "IX",
    severity: "EXISTENTIAL",
    severityColor: "bg-forest/20 text-forest",
    caseNumber: "UER-2024-044",
    title:
      "The Urban as Costume: On the Total Emptiness at the Heart of the Enterprise",
    paragraphs: [
      "City Core does not sell products. It sells the idea of a city \u2014 but not any city with zoning disputes and lead pipes and a bus that is eleven minutes late. It sells a city that exists only as mood board: photogenic fire escapes, steam rising from manhole covers in golden-hour light, graffiti that is always legible and never offensive. A city no one has ever lived in, because it is not a place. It is a font choice. It is erasure of every body that actually inhabits urban space.",
      <>This is the foundational extraction: {'\u2018'}urban{'\u2019'} transformed from a descriptor of where marginalized communities live and resist into a transferable aesthetic property applied to the <a href="https://citycorefashion.com/products/walk-sign-standard-t-shirt" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Walk Sign</a> and <a href="https://citycorefashion.com/products/wet-floor-standard-t-shirt" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Wet Floor Standard T-Shirts</a>, the <a href="https://citycorefashion.com/products/gold-bike-chain-necklace" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Gold Bike Chain Necklace</a>, the <a href="https://citycorefashion.com/products/graffiti-slouch-beanie" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">Graffiti Slouch Beanie</a>, and the <a href="https://citycorefashion.com/products/concrete-beach-parfum-100ml" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">CONCRETE BEACH</a>, <a href="https://citycorefashion.com/products/galvanized-parfum-100ml" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">GALVANIZED</a>, and <a href="https://citycorefashion.com/collections" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-burgundy underline decoration-brass/30 hover:decoration-burgundy/50 transition-colors">OPERA HOVSE</a> Parfums. The city has been colonized as a feeling, bottled, and priced at $75. Cities are sites of struggle, of solidarity, of communities doing the work of surviving systems designed to displace them. They are not available for licensing.</>,
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
      "City Core represents not merely individual violations but a complete system of cultural extraction operating at every level \u2014 a machine that colonizes, commodifies, and erases in a single supply chain. It is a brand built on the premise that identity can be purchased in units \u2014 that one can, by acquiring the correct combination of distressed garments, neighborhood-named parfums, appropriated jewelry, and decontextualized headwear, assemble a self that is \u2018urban\u2019 without engaging with actual urbanism, its politics, its people, or its crises. This is complicity made frictionless.",
      "City Core is not an aberration. It is an inevitability \u2014 the company that was always going to exist once we decided that \u2018city\u2019 was not a place you live but a thing you buy. The work of holding it accountable is ongoing. This Register remains open. The Review is permanent. The city \u2014 the real one, with its people, its resistance, and its refusal to be bottled \u2014 endures.",
    ],
  },
];

export default function ViolationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      <PageHeader
        title="The Register of Violations"
        subtitle="A Living Document of Harm and Cultural Extraction"
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
