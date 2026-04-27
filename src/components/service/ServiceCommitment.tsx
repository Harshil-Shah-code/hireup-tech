import type { ServiceConfig } from "./types";
import { Sparkles } from "lucide-react";

export function ServiceCommitment({ cfg }: { cfg: ServiceConfig }) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            Our Commitment
          </h2>
          <p className="mt-4 text-navy-soft">
            Built on trust, transparency, and outcomes that matter.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cfg.commitment.map((c) => (
            <div
              key={c.title}
              className="group rounded-3xl border border-border bg-white p-6 hover:bg-navy hover:border-navy hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange/10 text-orange grid place-items-center group-hover:bg-orange group-hover:text-white transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy group-hover:text-white transition-colors">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-navy-soft group-hover:text-white/80 leading-relaxed transition-colors">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
