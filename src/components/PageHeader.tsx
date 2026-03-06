import Divider from "./Divider";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  quote?: string;
  quoteAttribution?: string;
}

export default function PageHeader({ title, subtitle, quote, quoteAttribution }: PageHeaderProps) {
  return (
    <header className="text-center pt-10 pb-6 px-4">
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-forest leading-tight">{title}</h1>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-sage font-body max-w-2xl mx-auto italic">{subtitle}</p>
      )}
      {quote && (
        <div className="mt-6 max-w-xl mx-auto">
          <p className="text-sage italic text-base leading-relaxed">&ldquo;{quote}&rdquo;</p>
          {quoteAttribution && (
            <p className="mt-2 text-brass text-sm font-mono tracking-wide">— {quoteAttribution}</p>
          )}
        </div>
      )}
      <Divider className="mt-8 max-w-md" />
    </header>
  );
}
