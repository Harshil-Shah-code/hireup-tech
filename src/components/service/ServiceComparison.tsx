import type { ServiceConfig } from "./types";
import { Check, X } from "lucide-react";

export function ServiceComparison({ cfg }: { cfg: ServiceConfig }) {
  const c = cfg.comparison;
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h2 text-navy">
            {c.heading}
          </h2>
          <p className="mt-4 text-body text-navy-soft">{c.subheading}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Without */}
          <div className="rounded-3xl border border-border bg-gradient-to-b from-white to-accent/40 p-8">
            <div className="text-overline text-navy-soft">Without HireUp</div>
            <h3 className="mt-2 text-h3 text-navy">{c.without.label}</h3>
            <ul className="mt-6 space-y-3">
              {c.without.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-body-sm text-navy-soft">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-destructive/10 text-destructive grid place-items-center shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-7 grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div>
                <div className="text-h3 text-navy">{c.without.salary}</div>
                <div className="text-overline text-navy-soft mt-1">Average Outcome</div>
              </div>
              <div>
                <div className="text-h3 text-navy">{c.without.time}</div>
                <div className="text-overline text-navy-soft mt-1">Time Required</div>
              </div>
            </div>
          </div>

          {/* With */}
          <div className="rounded-3xl bg-gradient-to-br from-navy to-[oklch(0.22_0.13_265)] text-white p-8 shadow-pop">
            <div className="text-overline text-orange">With HireUp</div>
            <h3 className="mt-2 text-h3 text-white">{c.with.label}</h3>
            <ul className="mt-6 space-y-3">
              {c.with.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-body-sm text-white/85">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-orange text-white grid place-items-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-7 grid grid-cols-2 gap-4 pt-6 border-t border-white/15">
              <div>
                <div className="text-h3 text-white">{c.with.salary}</div>
                <div className="text-overline text-white/60 mt-1">Average Outcome</div>
              </div>
              <div>
                <div className="text-h3 text-white">{c.with.time}</div>
                <div className="text-overline text-white/60 mt-1">Time Required</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
