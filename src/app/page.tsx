import ScrollTop from "@/components/scroll-top";
import { GuideLines } from "@/components/ui";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Experience from "@/components/sections/journey";
import Stack from "@/components/sections/stack";
import Work from "@/components/sections/work";
import Writing from "@/components/sections/writing";
import { profile } from "@/lib/data";

export default function Page() {
  return (
    <>
      <GuideLines />
      <div id="top" />
      <Hero banner={profile.banner} />

      <main className="relative z-10">
        <Experience />
        <Work />
        <About />
        <Writing />
        <Stack />
        <Contact />
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}