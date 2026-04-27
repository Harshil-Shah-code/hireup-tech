import { BadgeCheck, Users, UserCheck, ShieldCheck, GraduationCap, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  { icon: BadgeCheck, title: "Job Placement", text: "Your partner in career success across the USA", to: "/services/job-placement" },
  { icon: Users, title: "Recruitment & Staffing", text: "Technical staffing solutions that scale your business", to: "/services/recruitment-staffing" },
  { icon: UserCheck, title: "Talent Acquisition", text: "Full-cycle talent acquisition solutions", to: "/services/talent-acquisition" },
  { icon: ShieldCheck, title: "Background Verification", text: "Comprehensive employee background checks USA", to: "/services/background-verification" },
  { icon: GraduationCap, title: "IT Training", text: "Training that prepares candidates for real-world careers", to: "/services/it-training" },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-accent/30 to-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-overline text-orange mb-3 block">
            Find Your Right Job
          </span>
          <h2 className="text-h2 text-navy">
            Services We Provide
          </h2>
          <p className="mt-4 text-navy-soft">
            Guiding careers and building teams with personalized solutions you can trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative bg-white rounded-3xl p-7 shadow-card hover:shadow-pop hover:-translate-y-1.5 transition-all border border-border overflow-hidden block"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-orange/5 group-hover:bg-orange/15 transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-orange grid place-items-center text-white shadow-pop mb-5">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-h3 text-navy">{s.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-navy-soft group-hover:text-orange group-hover:rotate-12 transition" />
                </div>
                <p className="mt-2 text-body-sm text-navy-soft">{s.text}</p>
                <div className="mt-5 text-[11px] font-bold tracking-wider text-orange uppercase">
                  0{i + 1} / 0{services.length}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
