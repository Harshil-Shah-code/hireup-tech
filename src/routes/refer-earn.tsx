import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ReferHero } from "@/components/refer/ReferHero";
import { ReferSteps } from "@/components/refer/ReferSteps";
import { ReferRewards } from "@/components/refer/ReferRewards";
import { ReferTerms } from "@/components/refer/ReferTerms";
import { ReferStats } from "@/components/refer/ReferStats";
import { AboutFAQ } from "@/components/about/AboutFAQ";

export const Route = createFileRoute("/refer-earn")({
    head: () => ({
        meta: [
            { title: "Refer & Earn — HireUp Tech Careers Referral Rewards Program" },
            {
                name: "description",
                content:
                    "Refer friends to HireUp Tech Careers and earn up to $400 per successful placement. Instant signup bonus plus placement bonus on every referral.",
            },
            { property: "og:title", content: "Refer & Earn — HireUp Tech Careers" },
            {
                property: "og:description",
                content:
                    "Help friends find their dream job and earn rewards for every successful placement. Tiered bonuses up to $400.",
            },
        ],
    }),
    component: ReferEarnPage,
});

function ReferEarnPage() {
    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />
            <main>
                <ReferHero />
                <ReferSteps />
                <ReferRewards />
                <ReferTerms />
                <ReferStats />
                <AboutFAQ />
            </main>
            <div className="pt-60 lg:pt-80 w-full"></div>
            <SiteFooter />
        </div>
    );
}
