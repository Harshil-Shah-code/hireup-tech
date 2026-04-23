import { UserRound, Gem, Handshake, Sparkles, type LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const items: Item[] = [
  {
    icon: UserRound,
    title: "Careers, Not Just Jobs",
    text: "We guide professionals toward roles that build long-term careers, not just short-term placements. Every opportunity we recommend is chosen with growth and stability in mind.",
  },
  {
    icon: Gem,
    title: "Deadlines Means Deadlines",
    text: "Great talent and great opportunities shouldn't miss each other because of slow hiring. We move quickly while keeping quality and precision at every step.",
  },
  {
    icon: Handshake,
    title: "Partnership Driven",
    text: "We don't just place candidates — we build lasting relationships. Your success is our success, and we're committed to supporting you throughout the journey.",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    text: "We continuously evolve our processes, leverage cutting-edge technology, and adapt to changing market needs to deliver better outcomes for everyone.",
  },
];

export function AboutCommitment() {
  return (
    <section className="py-24 bg-[oklch(0.96_0.015_85)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange uppercase mb-3">
            Our Values
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            Our Commitment to Individuals and Companies
          </h2>
          <p className="mt-5 text-navy-soft leading-relaxed">
            At HireUp, we are committed to delivering ethical recruitment, meaningful career
            outcomes, and reliable workforce solutions built on trust and transparency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative rounded-3xl p-7 pt-20 min-h-[340px] flex flex-col border transition-all duration-300 ease-out hover:-translate-y-1.5 bg-white text-navy border-border shadow-card hover:bg-navy hover:text-white hover:border-navy hover:shadow-pop"
            >
              {/* Icon badge */}
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full grid place-items-center bg-navy text-white transition-colors duration-300 group-hover:bg-white group-hover:text-navy">
                <it.icon className="w-5 h-5" strokeWidth={2} />
              </div>

              <h3 className="text-xl font-extrabold mb-3 leading-snug text-navy transition-colors duration-300 group-hover:text-white">
                {it.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy-soft transition-colors duration-300 group-hover:text-white/85">
                {it.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
