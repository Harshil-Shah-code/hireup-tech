import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const allServices = [
  { slug: "/services/job-placement", title: "Job Placement", text: "Your partner in career success across the USA." },
  { slug: "/services/recruitment-staffing", title: "Recruitment & Staffing", text: "Technical staffing solutions that scale your business." },
  { slug: "/services/talent-acquisition", title: "Talent Acquisition", text: "Full-cycle talent acquisition solutions." },
  { slug: "/services/background-verification", title: "Background Verification", text: "Comprehensive employee background checks." },
  { slug: "/services/it-training", title: "IT Training", text: "Training that prepares candidates for real-world careers." },
];

export function OtherServices({ currentSlug }: { currentSlug: string }) {
  const others = allServices.filter((s) => s.slug !== currentSlug);
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            Other Services
          </h2>
          <Link to="/" hash="services" className="text-sm font-semibold text-orange hover:underline">
            View all services →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {others.map((s) => (
            <Link
              key={s.slug}
              to={s.slug}
              className="group rounded-3xl border border-border bg-gradient-to-b from-accent/40 to-white p-6 hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-navy-soft group-hover:text-orange group-hover:rotate-12 transition" />
              </div>
              <p className="mt-2 text-sm text-navy-soft leading-relaxed">{s.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
