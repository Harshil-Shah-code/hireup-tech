import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutCommitment } from "@/components/about/AboutCommitment";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutFAQ } from "@/components/about/AboutFAQ";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HireUp Tech Careers — Connecting Talent with Opportunity Since 2021" },
      {
        name: "description",
        content:
          "Learn how HireUp Tech Careers has helped 5,400+ professionals and 360+ employers connect through smarter recruitment, staffing, and global talent solutions since 2021.",
      },
      { property: "og:title", content: "About HireUp Tech Careers" },
      {
        property: "og:description",
        content:
          "From job placement to recruitment, staffing, and workforce solutions — discover the story, values, journey, and team behind HireUp.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutCommitment />
        <AboutJourney />
        {/* <AboutTeam /> */}
        <AboutCTA />
        <AboutFAQ />
      </main>
      <div className="pt-80 md:pt-60 lg:pt-80 w-full"></div>
      <SiteFooter />
    </div>
  );
}
