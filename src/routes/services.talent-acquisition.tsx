import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { talentAcquisition } from "@/data/services";

export const Route = createFileRoute("/services/talent-acquisition")({
  head: () => ({
    meta: [
      { title: "Talent Acquisition Services — HireUp Tech Careers" },
      { name: "description", content: "Full-cycle talent acquisition — executive search, sourcing-as-a-service, employer branding, and embedded recruiters." },
      { property: "og:title", content: "Talent Acquisition — HireUp Tech Careers" },
      { property: "og:description", content: "Strategic hiring support to build long-term, high-performing teams." },
    ],
  }),
  component: () => <ServicePage cfg={talentAcquisition} />,
});
