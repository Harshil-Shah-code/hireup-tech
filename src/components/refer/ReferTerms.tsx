import { FileText } from "lucide-react";

const terms = [
  {
    title: "Bonus / Credits",
    text: "If a candidate enrolls in Starter, Premium or Pro Plan you will get $100 signup bonus and after their placement, you will get another $200. If a candidate enrolls in Elite you will get $200 signup bonus and after their placement, you will get another $200.",
  },
  {
    title: "Bonus Crediting",
    text: "Referral bonuses will be credited to the referee's account within 30 days of the referred candidate's enrollment confirmation. The placement bonus will be credited within 15 days of the successful placement confirmation.",
  },
  {
    title: "Eligibility",
    text: "Referral bonuses are applicable only when the referred candidate enrolls in the Starter, Elite, Premium, or Special Plans as specified on the website at the time of enrollment.",
  },
  {
    title: "Placement Bonus",
    text: "The referee will be eligible for the additional placement bonus only after the referred candidate has successfully completed the placement process and has been hired by a company through our platform. The placement status will be verified by our team before issuing the bonus.",
  },
];

export function ReferTerms() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-tint text-navy px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <FileText className="w-3.5 h-3.5" /> Terms & Conditions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            Refer & Earn Programme
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {terms.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-border bg-sky-tint/40 p-6 hover:bg-sky-tint transition"
            >
              <h3 className="font-bold text-navy mb-2">{t.title}</h3>
              <p className="text-sm text-navy-soft leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
