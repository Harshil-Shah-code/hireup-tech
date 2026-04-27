import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LogoMarquee } from "@/components/LogoMarquee";
import type { ServiceConfig } from "./types";
import { ServiceHero } from "./ServiceHero";
import { ServiceStats } from "./ServiceStats";
import { ServiceSolution } from "./ServiceSolution";
import { ServiceComparison } from "./ServiceComparison";
import { ServiceProcess } from "./ServiceProcess";
import { ServiceCommitment } from "./ServiceCommitment";
import { OtherServices } from "./OtherServices";
import { ServiceFAQ } from "./ServiceFAQ";
import { ServiceCTA } from "./ServiceCTA";

export function ServicePage({ cfg }: { cfg: ServiceConfig }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <ServiceHero cfg={cfg} />
        <LogoMarquee />
        <ServiceStats cfg={cfg} />
        <ServiceSolution cfg={cfg} />
        <ServiceComparison cfg={cfg} />
        {/* <ServiceProcess cfg={cfg} /> */}
        <ServiceCommitment cfg={cfg} />
        <OtherServices currentSlug={cfg.slug} />
        <ServiceFAQ cfg={cfg} />
      </main>
      <div className="pt-60 lg:pt-80 w-full"></div>
      <SiteFooter />
    </div>
  );
}
