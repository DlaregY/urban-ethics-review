import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Divider from "@/components/Divider";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Stay Informed | The Urban Ethics Review",
  description: "Subscribe to receive urgent dispatches from The Urban Ethics Review.",
};

export default function StayInformedPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16">
      <PageHeader
        title="Stay Informed"
        subtitle="Silence is complicity. Ignorance is a choice. Subscribe."
      />

      <div className="space-y-12 text-center">
        <div className="space-y-4">
          <p className="font-heading text-2xl md:text-3xl text-forest leading-relaxed">
            Do you know what&apos;s in your cologne?
          </p>
          <p className="font-heading text-2xl md:text-3xl text-burgundy leading-relaxed">
            Do you know whose neighborhood it&apos;s named after?
          </p>
          <p className="font-heading text-2xl md:text-3xl text-forest leading-relaxed">
            Do you know what your consumption says about the world you are building?
          </p>
        </div>

        <Divider />

        <div>
          <p className="font-body text-ink/80 leading-relaxed mb-8 max-w-md mx-auto">
            Join the movement. Organizers, community members, and everyone who refuses to normalize extraction. Receive dispatches whenever the Editorial Board documents new harm requiring collective action.
          </p>
          <NewsletterForm />
        </div>

        <Divider />

        <div className="bg-cream border border-brass/10 rounded-sm p-8">
          <p className="font-mono text-xs text-sage tracking-widest uppercase mb-4">
            What Subscribers Receive
          </p>
          <ul className="font-body text-ink/70 text-sm space-y-3 text-left max-w-sm mx-auto">
            <li className="flex gap-2">
              <span className="text-brass">✦</span>
              Early access to violation reports before they enter the public register
            </li>
            <li className="flex gap-2">
              <span className="text-brass">✦</span>
              Quarterly dispatches from the front lines of accountability work
            </li>
            <li className="flex gap-2">
              <span className="text-brass">✦</span>
              Invitations to our annual Assembly on Concrete &amp; Conscience
            </li>
            <li className="flex gap-2">
              <span className="text-brass">✦</span>
              Priority access to newly published accountability reports and action alerts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
