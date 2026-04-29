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
// import { ServiceCTA } from "./ServiceCTA";
import { useState } from "react";
import { JobPlacementModal } from "./modals/JobPlacementModal";
import { GetStartedModal } from "./modals/GetStartedModal";
import { ItTrainingModal } from "./modals/ItTrainingModal";

export function ServicePage({ cfg }: { cfg: ServiceConfig }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <ServiceHero cfg={cfg} onCtaClick={openModal} />
        <LogoMarquee />
        <ServiceStats cfg={cfg} />
        <ServiceSolution cfg={cfg} onCtaClick={openModal} />
        <ServiceComparison cfg={cfg} />
        {/* <ServiceProcess cfg={cfg} /> */}
        <ServiceCommitment cfg={cfg} />
        <OtherServices currentSlug={cfg.slug} />
        <ServiceFAQ cfg={cfg} />
        {/* <ServiceCTA onCtaClick={openModal} /> */}
      </main>
      <div className="pt-80 md:pt-60 lg:pt-80 w-full"></div>
      <SiteFooter />

      {cfg.slug === "/services/job-placement" && (
        <JobPlacementModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      )}
      {["/services/talent-acquisition", "/services/recruitment-staffing", "/services/background-verification"].includes(cfg.slug) && (
        <GetStartedModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} serviceName={cfg.eyebrow} />
      )}
      {cfg.slug === "/services/it-training" && (
        <ItTrainingModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      )}
    </div>
  );
}
