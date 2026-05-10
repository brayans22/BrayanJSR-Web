import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Music } from "@/components/sections/Music";
import { Upcoming } from "@/components/sections/Upcoming";
import { Merch } from "@/components/sections/Merch";
import { Tour } from "@/components/sections/Tour";
import { Gallery } from "@/components/sections/Gallery";
import { Socials } from "@/components/sections/Socials";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground md:pl-[120px]">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Upcoming />
      <Merch />
      <Tour />
      <Gallery />
      <Socials />
      <Footer />
    </main>
  );
}
