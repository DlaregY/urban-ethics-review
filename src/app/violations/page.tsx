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
      "Let us be absolutely clear about the violence being done to language here. The entity known as \u2018City Core\u2019 has built an entire commercial apparatus on a word \u2014 \u2018core\u2019 \u2014 that, when subjected to even the most generous semiotic interrogation, collapses into a void. \u2018Core\u2019 implies a center, an essence, a living fundament. City Core has no fundament. It has a Shopify theme and a mood board. The labor of meaning-making has been abandoned in favor of vibes, and we refuse to normalize this extraction of linguistic value from communities that actually use words to say things.",
      "This is not an accident. The suffix \u2018core\u2019 has been strip-mined from every subculture it ever touched \u2014 cottagecore, goblincore, and now this \u2014 each iteration further divorced from the lived experiences of the bodies that created those aesthetics. City Core completes the erasure: it is \u2018core\u2019 with nothing at the center, a hollow signifier marketed to people who mistake purchasing for participation. Do the work of actually meaning something, or stop centering yourselves in conversations about urban identity you have no right to occupy.",
      "We name this harm at a Level I severity not because it is minor but because it is foundational. Every subsequent violation flows from this originary act of semiotic violence. \u2018City Core\u2019 sounds like a mid-tier gym franchise in a suburban strip mall, and the fact that no one in leadership flagged this tells you everything about whose voices are in the room and whose are not.",
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
      "City Core names its parfum lines after neighborhoods it has never been accountable to \u2014 a practice that is not whimsy but extraction. You do not get to bottle \u2018Bushwick\u2019 from a co-working space in Scottsdale. You do not get to collapse an entire community\u2019s lived experience into top notes and base notes and charge $78 for the privilege. A neighborhood is not a flavor profile. It is a site of displacement, of resistance, of bodies navigating systems that were never built for them. Turning that into a fragrance is not homage. It is colonization with a spritz nozzle.",
      "The Lower East Side does not smell like bergamot and sandalwood. It smells like halal cart steam, old beer, and the particular variety of ambition that causes people to stand in line for forty-five minutes to eat a dumpling. These are the scents of a place with history, with struggle, with community \u2014 none of which have been centered in City Core\u2019s product development. The harm here is the flattening: reducing intersectional, multilayered neighborhoods into consumable aesthetic units for people who will never do the work of actually showing up for those communities.",
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
      "City Core\u2019s persistent invocation of \u2018concrete,\u2019 \u2018steel,\u2019 \u2018asphalt,\u2019 and \u2018raw\u2019 as aspirational descriptors is a form of violence against the communities who actually live with these materials \u2014 not as aesthetic choices but as the infrastructural neglect that defines their daily existence. Concrete does not inspire. It cures. It bears loads. It cracks under freeze-thaw cycles in neighborhoods where the city has decided maintenance is optional. Romanticizing it from behind an art-directed e-commerce platform is the definition of performative allyship with building materials.",
      "When City Core deploys the phrase \u2018inspired by raw concrete\u2019 on a clothing tag, they are extracting the aesthetic of disinvestment while remaining deeply complicit in the hierarchies that produce it. The person living in the public housing tower with actual raw concrete walls did not consent to having their material reality repackaged as a design language for $45 t-shirts. Their concrete is not a mood. It is a policy failure. Do the work of understanding the difference.",
      "The paradox of selling \u2018raw\u2019 and \u2018unfinished\u2019 aesthetics through a polished digital storefront is not clever. It is erasure. The concrete does not know it is being photographed. The communities living inside it know exactly what is being taken from them.",
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
      "City Core sells garments described as \u2018distressed\u2019 \u2014 clothing that arrives pre-damaged, pre-faded, pre-suffered, so that the consumer\u2019s body can perform the aesthetic of hardship without ever being proximate to it. This is not fashion. This is cosplay with a supply chain. The garment has been subjected to industrial violence so that the wearer can extract the visual language of labor, of wear, of a life lived in one\u2019s clothes, without doing any of the actual living. The complicity runs from factory floor to checkout cart.",
      "There exists a robust and accessible method for distressing one\u2019s own clothing: wearing it. Repeatedly. Over time. While doing things. The fact that this method \u2014 which is free, requires no specialized equipment, and produces authentic results \u2014 has been deemed insufficient by the market tells us everything about whose labor is valued and whose is erased. What City Core sells is not distress but the aestheticization of distress, carefully separated from its causes, consequences, and the bodies that actually bear them. Name the harm. This is extraction dressed in ripped denim.",
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
      "City Core\u2019s systematic extraction of visual and linguistic codes from working-class urban labor and their redeployment as luxury signifiers is not a trend. It is violence. Hats that have never been worn on a job site. Necklaces that have never seen a block party. The word \u2018grit\u2019 used to describe a parfum. The entire hierarchy rests upon a foundational act of aesthetic colonization: purchasing the semiotics of labor at a discount and reselling them at a four-hundred-percent markup to people who describe their work as \u2018building things\u2019 but mean Figma files. This is appropriation. Name it.",
      "The dockworker whose look inspired the $42 \u2018Stevedore Tee\u2019 did not consent to this extraction. He is unaware of it. He has worn the same t-shirt for three years and it smells like diesel fuel and sweat. His lived experience \u2014 his body in that garment, doing that labor \u2014 has been flattened into a product listing. It is not available in \u2018Midnight Fog\u2019 or \u2018Carbon Wash.\u2019 The erasure of the worker from the work-wear is the whole business model, and the complicity of every consumer who purchases it must be named and held accountable.",
      "This violation is classified as alarming not because the appropriation is unusual \u2014 it is the foundational gesture of contemporary streetwear \u2014 but because City Core executes it with such frictionless confidence that they appear to genuinely believe they invented the aesthetic of having a job. The hierarchy that separates the laborer from the person wearing a graphic tee inspired by his labor has never been more legible. Do the work of seeing it.",
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
      "City Core has adopted the practice of releasing products in \u2018drops\u2019 \u2014 limited-quantity, time-constrained releases designed to manufacture urgency for items that could be produced continuously and sold to anyone who wants one. This is not innovation. This is the weaponization of scarcity against the very communities whose culture invented the drop model, now extracted and deployed to sell $95 parfum to people who discovered streetwear through a Pinterest board. The harm compounds at every level of the hierarchy.",
      "A parfum is a scented liquid in a bottle. It has been commercially available, without interruption, for centuries. The notion that a fragrance requires a countdown timer, an email waitlist, and a \u2018sold out\u2019 notification is a development that centers hype over access, exclusion over community, and profit over the lived experience of people who actually need to buy things when they need them. Yet here we are. The parfum drops at noon. It sells out by 12:03. It appears on a resale market at a 60% premium. It is eventually sprayed on a body that mistakes ownership for identity. The violence is structural and it is normalized, and City Core\u2019s complicity in perpetuating scarcity as aspiration must be held to account.",
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
      "City Core\u2019s necklace and bracelet lines demand immediate and unequivocal accountability. These are not accessories. They are artifacts of cultural extraction \u2014 beadwork patterns lifted from Indigenous and African diasporic traditions, sacred geometries flattened into \u2018boho-chic\u2019 product listings, and centuries of marginalized jewelry-making labor reduced to a $68 bracelet described as \u2018tribal-inspired.\u2019 Let us be precise about the violence here: when you take a beading pattern that carries spiritual significance for a community that has survived genocide and sell it as a stackable accessory, you are not drawing inspiration. You are completing a cycle of erasure that began with colonization and now continues through commerce.",
      "The harm is intersectional and it is compounding. The Indigenous artisan whose beadwork tradition was extracted for City Core\u2019s \u2018Urban Ritual\u2019 necklace collection does not receive credit, compensation, or acknowledgment. Her lived experience, her community\u2019s intergenerational labor of keeping these practices alive under conditions of systematic oppression, has been decontextualized, devalued, and listed on a product page between a parfum and a distressed tank top. The sacred has been made consumable. The hierarchy that enables this \u2014 whiteness at the top, Indigenous and Black artisanal traditions at the bottom, treated as raw material \u2014 must be named and dismantled.",
      "City Core\u2019s complicity is not passive. Every bracelet sold with a \u2018hand-crafted artisan feel\u2019 that was actually manufactured in a facility with no connection to the traditions it mimics is an act of cultural violence. The symbols on these necklaces mean things. They carry histories, prayers, and the weight of communities\u2019 survival. Turning them into fashion is not appreciation. It is appropriation operating at industrial scale, and the silence from City Core on this matter is itself a form of harm. Sub-case file UER-2024-038 remains open. The communities whose traditions have been extracted deserve more than a brand\u2019s performative allyship. They deserve accountability.",
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
      "This addendum addresses City Core\u2019s hat and headwear line, which constitutes a discrete and deeply harmful category of cultural extraction. Durags, kufis, headwraps, and other culturally significant headcoverings have been stripped of their context, history, and meaning and repackaged as \u2018urban-inspired headwear\u2019 for a consumer base that has never had to navigate the world in these garments \u2014 never been profiled for wearing them, never been coded as threatening, never had their headcovering treated as a political act simply by existing on their body. City Core sells the aesthetic while its consumers are shielded from the lived experience. This is the hierarchy made wearable.",
      "The durag is not a fashion accessory. It is a hair care tool with deep roots in Black cultural practice, a garment that has been stigmatized, banned from workplaces, and weaponized as a signifier of criminality by the same dominant culture that now wants to wear it to brunch. When City Core lists a $45 \u2018Concrete Wave Durag\u2019 in colorways called \u2018Graphite\u2019 and \u2018Borough Mist,\u2019 they are not centering Black lived experience. They are erasing it. They are extracting the cool while leaving behind the consequences. The violence is not metaphorical. It is the violence of a culture that punishes Black bodies for their traditions and then sells those traditions back as content.",
      "Sub-case file UER-2024-038-A demands that City Core account for every headwear SKU: who designed it, whose tradition it references, who profits, and who is harmed. The communities whose headcoverings have been decontextualized into \u2018statement pieces\u2019 are owed more than a diversified product line. They are owed reparative action, public acknowledgment of harm, and the immediate decolonization of the entire headwear category. Anything less is performative allyship with a brim on it.",
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
      "Through the preceding eight violations, a pattern of harm has been named. Now the architecture connecting them must be held accountable. City Core does not sell products. It sells the idea of a city \u2014 but not any city with zoning disputes and lead pipes and a bus that is eleven minutes late. It sells a city that exists only as mood board: photogenic fire escapes, steam rising from manhole covers in golden-hour light, graffiti that is always legible and never offensive. A city no one has ever lived in, because it is not a place. It is a font choice. And it is being sold to bodies that have never had to navigate the real city\u2019s hierarchies \u2014 its housing discrimination, its policing, its intersecting systems of oppression.",
      "This is the foundational extraction upon which the entire enterprise rests: the transformation of \u2018urban\u2019 from a descriptor of where marginalized communities live, struggle, and resist into a transferable aesthetic property that can be applied to clothing, jewelry, hats, and parfum bottles and sold to people who live in places that are, by any honest measure, suburban. The city has been abstracted into a feeling, and the feeling has been bottled, and the bottle costs $78, and it smells like vetiver because someone once read that vetiver is what cities smell like. Cities smell like themselves \u2014 like the labor and the bodies and the displacement that City Core will never center. They are not available for licensing.",
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
      "This body, having exhausted its analytical resources and the unpaid labor of its volunteer committee, arrives at its final and most consequential determination. City Core represents not merely a series of individual violations but a unified field theory of aesthetic vacancy operating as a machine of cultural extraction. It is a brand built on the premise that identity can be purchased in units \u2014 that one can, by acquiring the correct combination of distressed garments, neighborhood-named parfums, appropriated jewelry, and decontextualized headwear, assemble a self that is \u2018urban\u2019 in a way that requires no engagement with actual urbanism, its politics, its infrastructure, its intersectional crises, or its people. The complicity of every participant in this supply chain \u2014 from designer to consumer \u2014 must be named.",
      "This is the logical endpoint of a culture that has confused taste with character, purchasing with participation, and vibes with values. City Core has not invented this confusion. It has merely perfected its monetization, operating at the intersection of appropriation, erasure, and commerce with a efficiency that would be impressive if it were not so deeply harmful. City Core is not an aberration. It is an inevitability \u2014 the company that was always going to exist once we collectively decided that \u2018city\u2019 was not a place you live but a thing you buy. We do not call for its dissolution. We call for accountability, for reparative action, for the centering of the communities whose labor, culture, and lived experience have been extracted to build this brand. Until then, this Register remains open. The work is not done. The city endures \u2014 despite everything being done to commodify it.",
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
