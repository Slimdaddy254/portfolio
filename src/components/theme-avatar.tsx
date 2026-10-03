import Image from "next/image";

import { profile } from "@/lib/data";

type Props = {
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** For the copy that already sits next to its own label. */
  decorative?: boolean;
};

/**
 * The profile picture, with its dark-theme variant when one exists. Both
 * images fill the same box and crossfade on toggle rather than cutting, so the
 * face doesn't pop between two unrelated shapes — see `.theme-pair`.
 */
export default function ThemeAvatar({
  className = "",
  sizes = "112px",
  priority = false,
  decorative = false,
}: Props) {
  const hasDark = Boolean(profile.avatarDark);

  return (
    <span
      className={`relative block overflow-hidden ${hasDark ? "theme-pair" : ""} ${className}`}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : profile.name}
      aria-hidden={decorative || undefined}
    >
      <Image
        src={profile.avatar}
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        className="theme-img theme-img--light object-cover"
      />
      {hasDark && profile.avatarDark && (
        <Image
          src={profile.avatarDark}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className="theme-img theme-img--dark object-cover"
        />
      )}
    </span>
  );
}
