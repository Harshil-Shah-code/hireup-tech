import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { recruitmentStaffing } from "@/data/services";

export const Route = createFileRoute("/services/recruitment-staffing")({
  head: () => ({
    meta: [
      { title: "Recruitment & Staffing Solutions — HireUp Tech Careers" },
      { name: "description", content: "Pre-vetted technical staffing — contract, contract-to-hire, and full-time. Scale your engineering teams in days, not months." },
      { property: "og:title", content: "Recruitment & Staffing — HireUp Tech Careers" },
      { property: "og:description", content: "Technical staffing solutions that scale your business with quality talent on demand." },
    ],
  }),
  component: () => <ServicePage cfg={recruitmentStaffing} />,
});
