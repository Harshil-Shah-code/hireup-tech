import { Briefcase, FileText, Megaphone, GraduationCap, MessageCircle, BadgeCheck, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Career Advisor", text: "Guiding you toward a brighter professional future." },
  { icon: FileText, title: "Resume Creation", text: "Turning your experience into your greatest asset." },
  { icon: Megaphone, title: "Profile Marketing", text: "Showcasing your skills to the right audience." },
  { icon: GraduationCap, title: "Technical Training", text: "Building skills that power your career growth." },
  { icon: MessageCircle, title: "Interview Support", text: "Preparing you to ace every interview with confidence." },
  { icon: BadgeCheck, title: "Background Clearance", text: "Ensuring your credentials are verified and trusted." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-accent/30 to-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange uppercase mb-3">
            Find Your Right Job
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Services We Provide
          </h2>
          <p className="mt-4 text-navy-soft">
            Guiding careers and building teams with personalized solutions you can trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-3xl p-7 shadow-card hover:shadow-pop hover:-translate-y-1.5 transition-all border border-border overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-orange/5 group-hover:bg-orange/15 transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-orange grid place-items-center text-white shadow-pop mb-5">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-navy-soft group-hover:text-orange group-hover:rotate-12 transition" />
                </div>
                <p className="mt-2 text-sm text-navy-soft leading-relaxed">{s.text}</p>
                <div className="mt-5 text-[11px] font-bold tracking-wider text-orange uppercase">
                  0{i + 1} / 0{services.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
