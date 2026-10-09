import { TECH_ICONS } from "@/lib/tech-icons";

/**
 * A technology's brand mark.
 *
 * Muted at rest and full-strength on the parent's hover: a grid of fully
 * saturated logos pulls focus away from the text, which is the part that
 * actually tells the reader what you work with.
 *
 * Returns null for an unknown key, so an item without a matching entry in
 * TECH_ICONS degrades to a plain text chip rather than an empty gap.
 */
export default function TechLogo({ name }: { name: string }) {
  const icon = TECH_ICONS[name];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-3.5 shrink-0 opacity-55 transition-opacity duration-200 group-hover:opacity-100"
      style={{ color: icon.hex }}
    >
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}