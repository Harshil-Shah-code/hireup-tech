import {
  Target, CalendarClock, Compass, ShieldCheck, MessageSquare,
  Building2, UserCheck, Zap, Layers, FileCheck, Rocket,
} from "lucide-react";

const seekers = [
  { icon: Target, title: "Personalized Job Matching", text: "We connect you with roles that build long-term careers, not just quick jobs." },
  { icon: CalendarClock, title: "Faster Interview Scheduling", text: "Our recruiters actively secure interviews so you're not stuck waiting." },
  { icon: Compass, title: "End-to-End Placement Support", text: "From resume building to offer negotiation, we guide every step." },
  { icon: ShieldCheck, title: "Access to Verified US Employers", text: "Work with trusted companies across multiple industries nationwide." },
  { icon: MessageSquare, title: "Confidence Before Interviews", text: "Mock interviews and preparation sessions help you walk in ready." },
];

const employers = [
  { icon: Target, title: "Quality Over Random Applications", text: "We don't spam job portals. Every application is carefully matched to the candidate's profile." },
  { icon: ShieldCheck, title: "Refund Assurance", text: "If expectations aren't met under our service terms, our SLA includes refund protection." },
  { icon: Rocket, title: "Full Time Roles Only", text: "We focus on stable full-time roles with real companies, not short-term contract placements." },
  { icon: UserCheck, title: "Interview-Ready Candidates", text: "We prepare professionals with mock interviews and practical training." },
  { icon: Zap, title: "Speed Without Chaos", text: "Our recruiters apply strategically and secure interviews faster without compromising quality." },
];

export function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Why Job Seekers & Employers Choose HireUp
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <Column title="For Job Seekers" items={seekers} accent="orange" />
          <Column title="What Makes HireUp Different" items={employers} accent="navy" />
        </div>
      </div>
    </section>
  );
}

function Column({
  title, items, accent,
}: {
  title: string;
  items: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }[];
  accent: "orange" | "navy";
}) {
  const isOrange = accent === "orange";
  return (
    <div className={`rounded-3xl p-7 sm:p-9 ${isOrange ? "bg-gradient-to-br from-orange-soft to-white" : "bg-gradient-to-br from-accent to-white"} shadow-card border border-border`}>
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 ${isOrange ? "bg-orange text-white" : "bg-navy text-white"}`}>
        <span className="text-xs font-bold tracking-wider uppercase">{title}</span>
      </div>
      <div className="space-y-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-card transition-all"
          >
            <div className={`shrink-0 w-11 h-11 rounded-xl grid place-items-center ${isOrange ? "bg-orange/10 text-orange" : "bg-navy/10 text-navy"}`}>
              <it.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-navy text-[15px] mb-0.5">{it.title}</h4>
              <p className="text-sm text-navy-soft leading-snug">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
