export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 max-w-xs mx-auto ${className}`}>
      <div className="h-px flex-1 bg-brass/30" />
      <span className="text-brass text-xl select-none" aria-hidden="true">✦</span>
      <div className="h-px flex-1 bg-brass/30" />
    </div>
  );
}
