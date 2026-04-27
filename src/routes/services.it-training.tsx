import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { itTraining } from "@/data/services";

export const Route = createFileRoute("/services/it-training")({
  head: () => ({
    meta: [
      { title: "IT Training Programs — HireUp Tech Careers" },
      { name: "description", content: "Hands-on instructor-led IT training — full-stack, data, cloud, DevOps, and QA. Cohort-based learning with built-in placement support." },
      { property: "og:title", content: "IT Training — HireUp Tech Careers" },
      { property: "og:description", content: "Training that prepares candidates for real-world tech careers." },
    ],
  }),
  component: () => <ServicePage cfg={itTraining} />,
});
