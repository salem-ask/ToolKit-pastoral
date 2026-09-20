export default function ImagePlaceholder({
  label,
  className = '',
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-gold-500/40 bg-forest-900/40 p-6 text-center ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/80">
        Image placeholder
      </span>
      <span className="max-w-[220px] text-sm text-cream-200/70">{label}</span>
    </div>
  );
}
