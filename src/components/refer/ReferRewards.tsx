import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    label: "Starter, Premium & Pro Plan",
    signup: "$100",
    placement: "$200",
    total: "$300",
    recommended: false,
    perks: [
      "Instant signup bonus payout",
      "Placement bonus on job offer",
      "Track referral status online",
      "Priority support access",
    ],
  },
  {
    label: "Elite Plan",
    badge: "Recommended Plan",
    signup: "$200",
    placement: "$200",
    total: "$400",
    recommended: true,
    perks: [
      "Instant signup bonus payout",
      "Placement bonus on job offer",
      "Track referral status online",
      "Priority support access",
    ],
  },
];

export function ReferRewards() {
  return (
    <section id="rewards" className="py-20 bg-sky-tint">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-overline text-orange mb-4 block">
            Referral Rewards
          </span>
          <h2 className="text-h2 text-navy">
            Turn Referrals Into a Side Income That Actually Grows
          </h2>
          <p className="mt-4 text-body text-navy-soft">
            Our tiered reward system ensures you're compensated fairly with your references. The
            more specialized plan the referred person chooses, the bigger your reward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {plans.map((p) => (
            <div
              key={p.label}
              className={`relative rounded-3xl p-8 lg:p-10 border transition-all hover:-translate-y-1 ${
                p.recommended
                  ? "bg-navy text-white border-navy shadow-pop"
                  : "bg-white text-navy border-border shadow-card"
              }`}
            >
              {p.badge && (
                  <span className="absolute -top-3 left-8 inline-block bg-orange text-white text-overline px-4 py-1.5 rounded-full">
                    {p.badge}
                  </span>
              )}
              <h3 className={`text-h3 ${p.recommended ? "text-white" : "text-navy"}`}>
                {p.label}
              </h3>
              <p className={`text-sm mt-1 ${p.recommended ? "text-white/70" : "text-navy-soft"}`}>
                Referral Rewards
              </p>

              <div
                className={`mt-6 grid grid-cols-3 gap-4 rounded-2xl p-5 ${
                  p.recommended ? "bg-white/10" : "bg-sky-tint"
                }`}
              >
                <div>
                  <div className={`text-h2 ${p.recommended ? "text-orange" : "text-navy"}`}>
                    {p.signup}
                  </div>
                  <div className={`text-overline mt-1 ${p.recommended ? "text-white/70" : "text-navy-soft"}`}>
                    Signup Bonus
                  </div>
                </div>
                <div>
                  <div className={`text-h2 ${p.recommended ? "text-orange" : "text-navy"}`}>
                    {p.placement}
                  </div>
                  <div className={`text-overline mt-1 ${p.recommended ? "text-white/70" : "text-navy-soft"}`}>
                    Placement Bonus
                  </div>
                </div>
                <div>
                  <div className="text-h2 text-orange">{p.total}</div>
                  <div className={`text-overline mt-1 ${p.recommended ? "text-white/70" : "text-navy-soft"}`}>
                    Total Earning
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-body-sm">
                    <span
                      className={`shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 ${
                        p.recommended ? "bg-orange text-white" : "bg-orange/10 text-orange"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </span>
                    <span className={p.recommended ? "text-white/85" : "text-navy-soft"}>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  p.recommended
                    ? "bg-orange text-white hover:bg-white hover:text-navy"
                    : "bg-navy text-white hover:bg-orange"
                }`}
              >
                Start Referring <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
