import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Priority Demands | The Urban Ethics Review",
  description:
    "Priority Demands for Immediate Compliance, issued pursuant to the findings of the Register of Violations.",
};

interface Demand {
  number: number;
  title: string;
  paragraphs: string[];
  complianceDeadline: string;
}

const demands: Demand[] = [
  {
    number: 1,
    title:
      "Full Disclosure of Parfum Sourcing and Cessation of Geographically Misleading Nomenclature",
    paragraphs: [
      "City Core must immediately publish the complete ingredient list, supply chain provenance, and geographic origin of all aromatic compounds used in its parfum products. City Core has built a revenue stream on bottling neighborhood identities and selling them to people whose only relationship to those neighborhoods is a saved Instagram location. The bodies that actually inhabit these spaces deserve to know what City Core claims their streets smell like and who profits from that claim. If a parfum named after a specific borough contains no molecules that have ever been within that borough\u2019s municipal boundaries, City Core must state this on the label, in a font size no smaller than the product name itself.",
      'City Core must also permanently cease deploying unverifiable scent descriptors such as "rain on asphalt," "warm concrete," and "something you can\u2019t quite name." If you cannot name a thing, you have no business charging money for it. All scent descriptions must henceforth correspond to identifiable aromatic compounds confirmable through standard gas chromatography\u2013mass spectrometry analysis. The era of parfum as vibes \u2014 that era is over.',
    ],
    complianceDeadline:
      "Within 60 calendar days. Interim disclosure of primary compounds required within 21 days. Failure to comply will result in the reclassification of all geographically named products as \u2018Untitled Parfum No. [sequential number]\u2019 in all Review publications.",
  },
  {
    number: 2,
    title:
      "Acknowledgment of Harm and Dismantlement of Sacred Jewelry Tradition Extraction (Case File UER-2024-038)",
    paragraphs: [
      'City Core must issue a formal, public acknowledgment of the harm caused by its appropriation of sacred and culturally significant jewelry traditions \u2014 beadwork patterns, protective symbols, weaving techniques, and ceremonial adornment practices \u2014 extracted, decontextualized, and resold as luxury "city-inspired" necklaces and bracelets at a four-hundred-percent markup. City Core must name what it did: it identified adornment practices that communities developed over generations, stripped those practices of their meaning, and sold the aesthetic husk. Marketing materials presented sacred beadwork as "boho-luxe," ancestral symbols as "statement pieces," and centuries of tradition as content for a product carousel.',
      "The acknowledgment must be accompanied by a formal apology published on City Core\u2019s primary commercial platform with the same prominence afforded to product launches \u2014 not buried in a corporate responsibility PDF. It must include a binding commitment to the permanent cessation of all accessory lines derived from cultural, spiritual, or ceremonial traditions of communities City Core has not consulted, compensated, or credited. Additionally: termination of all supplier contracts for culturally derived designs; a full accounting of which traditions were sourced and from whom; and financial contribution to cultural preservation and artisan solidarity programs commensurate with the revenue generated. Discontinuation without accountability is erasure dressed as progress.",
    ],
    complianceDeadline:
      "Public apology within 14 calendar days. Cessation of culturally extracted accessory lines effective immediately. Design sourcing disclosure within 45 days. Financial contributions within 90 days, verified by independent audit. The SAA\u2019s seventeen-point questionnaire on design provenance remains unanswered.",
  },
  {
    number: 3,
    title:
      "Establishment of an Independent Review Board for Product Naming and Urban Signifier Deployment",
    paragraphs: [
      "City Core must establish, fund, and submit to the oversight of an Independent Nomenclature and Signification Review Board (INSRB), comprising no fewer than five members drawn from urban geography, semiotics, sociolinguistics, olfactory science, and community organizing. No member may be an employee, contractor, investor, or Instagram follower of City Core. The Board shall review all product names, scent descriptions, collection titles, marketing copy, and visual materials prior to public release. A brand that names a hat collection after a neighborhood where it has never paid rent has forfeited the right to self-governance in matters of nomenclature.",
      "The INSRB shall also be empowered to retroactively assess all existing product names and mandate the renaming of any product found to perpetuate erasure or the commodification of lived experience. Naming is power. The right to name a neighborhood\u2019s aesthetic does not transfer automatically to the entity with the most polished brand deck. That right must be earned through relationship and labor. City Core has earned nothing. It has only taken. The cost of accountability is not a burden \u2014 it is a debt.",
    ],
    complianceDeadline:
      "Board charter submitted within 45 days. Full Board operational within 120 days. Retroactive product name review completed within 180 days. No new geographically named products may be released during the interim period.",
  },
  {
    number: 4,
    title:
      "Mandatory Community Consultation and Consent Framework for Neighborhood-Named Products",
    paragraphs: [
      'City Core must develop and submit a formal Community Consultation and Consent Framework (CCCF) governing all commercial use of neighborhood names, local aesthetic traditions, and place-based cultural identifiers across its product lines. The framework must provide for meaningful consultation with residents, business owners, and cultural organizations of any neighborhood whose identity City Core proposes to commodify. "Meaningful" means: before the product is manufactured, with actual residents rather than their aestheticized representations on a mood board, producing outcomes City Core is contractually obligated to respect. Not a focus group. Not a "community activation event" with branded tote bags. Actual consent from actual people in actual spaces.',
      'The neighborhood is not a mood. It is not a "vibe." It is a place where people receive mail, argue about parking, and have opinions about whether their block\u2019s identity should appear on a necklace marketed to tourists. The CCCF must include provisions for revenue-sharing at a rate determined by independent arbitration. The Review notes that "brand awareness," unlike currency, cannot be used to repair a sidewalk. And the sidewalks are owed reparations.',
    ],
    complianceDeadline:
      "Draft CCCF within 90 days. Pilot consultation with at least one affected community within 150 days. Full implementation within 12 months. Revenue-sharing audited annually. No new neighborhood-named products may be released prior to full CCCF implementation.",
  },
  {
    number: 5,
    title:
      "Comprehensive Structural Audit of City Core\u2019s Extraction of Urban Cultural Capital",
    paragraphs: [
      "City Core must commission an independent Structural Audit of its entire business model, examining the mechanisms by which urban cultural capital is identified, extracted, and monetized across all product lines. The audit must assess what the Review has termed City Core\u2019s regime of aesthetic gentrification: appropriating the sensory, visual, and linguistic codes of urban working-class communities and converting them into luxury commodities for consumption by people with no material connection to those communities. Every hat that references a neighborhood\u2019s style. Every parfum that bottles a borough\u2019s identity. Every garment that wears a culture it never invested in. City Core must account for all of it.",
      "The audit team must comprise, at minimum: a cultural economist, an urban sociologist, an ethicist specializing in commercial appropriation, a supply chain analyst, and a community organizer with ties to at least one neighborhood whose identity City Core has commercialized. Auditors must have full access to financial records, marketing strategy documents, and product development archives. The Review is not interested in City Core\u2019s account of its own intentions. Intentions are the currency of performative allyship. The final report must include a map of all extraction pathways, a gap analysis between value extracted and value returned to source communities, and binding recommendations for structural reform. Concrete belongs to the people who pour it. City Core poured nothing. City Core only sold what others built.",
    ],
    complianceDeadline:
      "Auditing body approved within 60 days. Audit commences within 90 days. Preliminary findings within 9 months. Final report with binding recommendations within 18 months. Compliance will be monitored by the Review in perpetuity. The Review will not grow tired. Accountability is not a season.",
  },
];

export default function DemandsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      <PageHeader
        title="Priority Demands for Immediate Compliance"
        subtitle="Issued Pursuant to the Findings of the Register of Violations, Cases UER-2024-001 through UER-2024-050"
        quote="The purpose of a regulatory body is not to be liked by the entity it regulates. The purpose is to exist so visibly, so immovably, and with such comprehensive filing systems that the entity in question begins to regulate itself out of sheer exhaustion."
        quoteAttribution="Prof. Emerita Helena Vandermeer-Singh, Keynote Address, International Conference on Aesthetic Governance, The Hague, 2023"
      />

      <section className="prose-urban font-body text-ink/90 mb-12">
        <p>
          The Urban Ethics Review, having published the findings of the Register
          of Violations (Cases UER-2024-001 through UER-2024-050), now issues the
          following Priority Demands for Immediate Compliance. These are not
          polite requests. They are a direct confrontation with the structures of
          extraction, erasure, and complicity that City Core has normalized across
          its clothing, accessories, headwear, and parfum lines. The Review is
          here to name the hierarchy of harm and demand its dismantlement.
        </p>
        <p>
          These five demands constitute only the first tranche of a larger
          compliance framework under development &mdash; the Full Schedule of
          Remediation (FSR), expected to comprise no fewer than forty-seven line
          items. Non-compliance will be documented, catalogued, and referenced in
          all subsequent publications. Performative allyship &mdash; a statement
          here, a donation there &mdash; will not suffice. Only structural
          accountability will. The labor of remediation belongs to City Core. The
          Review will not do it for them.
        </p>
      </section>

      <Divider />

      <div className="space-y-12">
        {demands.map((demand) => (
          <article key={demand.number}>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-heading text-3xl md:text-4xl text-forest">
                {demand.number}.
              </span>
              <h2 className="font-heading text-xl md:text-2xl text-ink leading-snug">
                {demand.title}
              </h2>
            </div>

            <div className="prose-urban font-body text-ink/85">
              {demand.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 bg-cream border border-burgundy/30 rounded-sm p-4">
              <p className="font-mono text-xs text-sage tracking-widest uppercase mb-2">
                Compliance Deadline
              </p>
              <p className="font-body text-sm text-ink/75 leading-relaxed">
                {demand.complianceDeadline}
              </p>
            </div>

            <Divider className="mt-10" />
          </article>
        ))}
      </div>

      <section className="prose-urban font-body text-ink/90 mt-8">
        <p>
          These five demands are not exhaustive. They are the beginning. The Full
          Schedule of Remediation will additionally address: City Core&rsquo;s
          use of &ldquo;raw&rdquo; to describe factory-manufactured clothing
          (no. 7); whether &ldquo;scent layering experiences&rdquo; constitute
          narrative fraud (no. 12); the erasure of the actual hands implied by
          &ldquo;hand-poured&rdquo; (no. 15); whether artificial scarcity
          applied to hats and necklaces constitutes a violence against the social
          contract (no. 23); whether &ldquo;inspired by&rdquo; is simply
          &ldquo;stolen from&rdquo; in a nicer font (no. 31); and whether
          &ldquo;City Core&rdquo; means anything at all (no. 41).
        </p>
        <p>
          The Review will publish additional demands as investigations progress.
          City Core should anticipate a sustained process of accountability, the
          duration determined not by the Review&rsquo;s patience &mdash; which is
          considerable &mdash; but by City Core&rsquo;s willingness to engage in
          good faith. The hierarchy was constructed by City Core. The
          dismantlement is also City Core&rsquo;s responsibility.
        </p>
        <p className="font-heading text-forest italic text-center mt-8">
          Issued with the full authority of the Editorial Board and the unanimous
          endorsement of the Subcommittee on Sacred Adornment Appropriation,
          which is still waiting for a response to its questionnaire.
          <br />
          <br />
          The Urban Ethics Review
          <br />
          March 2026
        </p>
      </section>
    </div>
  );
}
