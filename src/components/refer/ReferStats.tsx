import { Users, DollarSign, TrendingUp, ArrowRight } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "3750+",
    title: "Active Referrers",
    text: "who keep referring their loved ones to us and by referring they are playing a huge role in making their career.",
  },
  {
    icon: DollarSign,
    value: "$2.4M+",
    title: "Total Rewards Paid",
    text: "to the candidates who made their friends enrolled with us and we're glad to help them in their career.",
  },
  {
    icon: TrendingUp,
    value: "$200",
    title: "Average Per Referrer",
    text: "in addition you can earn more when they get their dream job by our services.",
  },
];

export function ReferStats() {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-orange/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-orange/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {stats.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8 hover:bg-white/10 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange/20 text-orange grid place-items-center mb-5">
                <s.icon className="w-7 h-7" />
              </div>
              <div className="text-h2 text-orange">{s.value}</div>
              <div className="mt-2 text-h3 text-white">{s.title}</div>
              <p className="mt-2 text-body-sm text-white/70">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-orange to-[oklch(0.74_0.18_45)] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-h3 text-white">Want to earn?</h3>
            <p className="text-white/85 mt-1 text-body">
              People are earning like a part time job by referring their loved ones. So, you can do
              it too.
            </p>
          </div>
          <a
            href="#rewards"
            className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-7 py-3.5 text-sm font-semibold hover:bg-navy hover:text-white transition whitespace-nowrap"
          >
            Start Referring <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
