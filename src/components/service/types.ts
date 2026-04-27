import type { LucideIcon } from "lucide-react";

export type ServiceConfig = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  heroImage: string;
  heroLabels?: { left: string; right: string };
  stats: { value: string; label: string; text: string }[];
  solution?: {
    heading?: string;
    description?: string;
    cta?: { label: string; href: string };
    items: { icon: LucideIcon; title: string; text: string }[];
  };
  comparison: {
    heading: string;
    subheading: string;
    without: { label: string; salary: string; time: string; points: string[] };
    with: { label: string; salary: string; time: string; points: string[] };
  };
  process: { step: string; duration: string; title: string; text: string }[];
  commitment: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};
