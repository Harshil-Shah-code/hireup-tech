import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { AboutSection } from "@/components/AboutSection";
import { WhyChoose } from "@/components/WhyChoose";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HireUp Tech Careers — Connecting Talent with Opportunity Across the USA" },
      {
        name: "description",
        content:
          "HireUp Tech Careers connects top tech talent with leading US organizations through smart recruitment, faster hiring, and dependable staffing solutions.",
      },
      { property: "og:title", content: "HireUp Tech Careers — Empowering Your Career" },
      {
        property: "og:description",
        content: "Where great talent meets great companies. Personalized career growth and trusted talent solutions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <LogoMarquee />
        <AboutSection />
        <WhyChoose />
        <Services />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <div className="pt-60 lg:pt-80 w-full"></div>
      <SiteFooter />
    </div>
  );
}
