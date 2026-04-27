import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { jobPlacement } from "@/data/services";

export const Route = createFileRoute("/services/job-placement")({
  head: () => ({
    meta: [
      { title: "Job Placement Services in USA — HireUp Tech Careers" },
      { name: "description", content: "Specialized job placement support for F-1, H-1B, H-4, GC, and USC candidates. ATS resumes, recruiter-led applications, and interview coaching." },
      { property: "og:title", content: "Job Placement Services — HireUp Tech Careers" },
      { property: "og:description", content: "Turning jobless grads into job-bless professionals with full-time placements across the USA." },
    ],
  }),
  component: () => <ServicePage cfg={jobPlacement} />,
});
