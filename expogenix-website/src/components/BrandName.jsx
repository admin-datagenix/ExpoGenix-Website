export function BrandMark({ className = "h-9 w-9" }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-xl bg-gradient-to-br from-citrus-400 to-citrus-600 shadow-cta ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-[55%] w-[55%]" fill="none">
        <rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="#1A4122" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" fill="#FFFAF5" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="#FFFAF5" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill="#1A4122" />
      </svg>
    </span>
  );
}

export default function BrandName({ onDark = false, size = "md" }) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <span className={`font-display font-bold tracking-tight ${sizes[size] ?? sizes.md}`}>
      <span className={onDark ? "text-cream" : "text-forest-900"}>Expo</span>
      <span className="text-citrus-500">Genix</span>
    </span>
  );
}
