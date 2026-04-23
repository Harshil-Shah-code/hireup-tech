import aboutImg from "@/assets/about-handshake.jpg";
import { Briefcase, Clock, Handshake, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Briefcase,
    title: "Careers, Not Just Jobs",
    text: "We don't just place candidates anywhere — we help them land roles that build long-term careers.",
  },
  {
    icon: Clock,
    title: "Deadlines Mean Deadlines",
    text: "When we commit to a timeline, we mean it. Hiring moves forward exactly when we say it will.",
  },
  {
    icon: Handshake,
    title: "Partnership Driven",
    text: "We don't work for one project and disappear. We build long-term partnerships that grow with our clients.",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    text: "The hiring world changes fast — and so do we, constantly evolving our process for smarter results.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-accent/40 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-navy/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange uppercase mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              So, What Is HireUp Tech Careers?
            </h2>
            <p className="mt-5 text-navy-soft leading-relaxed">
              HireUp Tech Careers is built on a simple idea: talented people shouldn't struggle to
              find the right opportunities, and companies shouldn't struggle to find the right talent.
              We work closely with professionals to understand their skills, ambitions, and goals,
              while helping businesses hire smarter, faster, and more reliably. From job placement
              and recruitment to staffing and workforce solutions, our mission is simple: connect
              the right people with the right opportunities — without the usual hiring chaos.
            </p>
            <a
              href="#services"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy text-white px-6 py-3 text-sm font-semibold hover:bg-orange transition"
            >
              More About Us
            </a>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-orange opacity-20 blur-2xl rounded-3xl" />
            <img
              src={aboutImg}
              alt="HireUp recruiters helping professionals find their next career opportunity"
              loading="lazy"
              width={1280}
              height={960}
              className="relative rounded-3xl shadow-pop w-full object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-pop hover:-translate-y-1 transition-all border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-soft text-orange grid place-items-center mb-4">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-navy mb-1.5">{p.title}</h3>
              <p className="text-sm text-navy-soft leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
