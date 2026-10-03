"use client";

import { useEffect, useState } from "react";
import { ChevronIcon } from "@/lib/icons";

/** Circular scroll-to-top control, shown once the page is scrolled past the hero. */
export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-20 grid size-11 place-items-center rounded-full bg-foreground text-background transition-all duration-300 hover:opacity-90 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ChevronIcon className="size-4 rotate-180" />
    </button>
  );
}
