import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { backgroundVerification } from "@/data/services";

export const Route = createFileRoute("/services/background-verification")({
  head: () => ({
    meta: [
      { title: "Background Verification Services USA — HireUp Tech Careers" },
      { name: "description", content: "FCRA-compliant employee background checks — identity, education, employment, criminal, and credit. Fast turnaround, full audit trail." },
      { property: "og:title", content: "Background Verification — HireUp Tech Careers" },
      { property: "og:description", content: "Comprehensive, compliant employee background checks across the USA." },
    ],
  }),
  component: () => <ServicePage cfg={backgroundVerification} />,
});
