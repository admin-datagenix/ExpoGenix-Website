export const LOGO_SRC = "/expogenix-logo.png?v=2";

const LOGO_HEIGHT = {
  xs: "h-10 max-w-[12rem]",
  sm: "h-11 max-w-[14rem] sm:h-12 sm:max-w-[16rem]",
  md: "h-12 max-w-[16rem] sm:h-[3.5rem] sm:max-w-[19rem]",
  lg: "h-16 max-w-[20rem] sm:h-[4.25rem] sm:max-w-[22rem]",
};

/** Full ExpoGenix brand mark (official logo image). */
export function ExpoGenixLogo({ size = "sm", className = "" }) {
  return (
    <img
      src={LOGO_SRC}
      alt="ExpoGenix — Exhibitions, Events, Experiences"
      className={`w-auto shrink-0 object-contain object-left ${LOGO_HEIGHT[size] ?? LOGO_HEIGHT.sm} ${className}`}
      width={320}
      height={80}
      decoding="async"
    />
  );
}

/** @deprecated Use ExpoGenixLogo — kept for imports that still reference BrandMark. */
export function BrandMark({ className = "" }) {
  return <ExpoGenixLogo size="xs" className={className} />;
}

export default function BrandName({ onDark = false, size = "md" }) {
  void onDark;
  const map = { sm: "sm", md: "md", lg: "lg" };
  return <ExpoGenixLogo size={map[size] ?? "md"} />;
}