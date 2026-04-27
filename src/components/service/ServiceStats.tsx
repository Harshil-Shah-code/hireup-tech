import type { ServiceConfig } from "./types";

export function ServiceStats({ cfg }: { cfg: ServiceConfig }) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cfg.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl bg-gradient-to-b from-accent to-white border border-border p-7 hover:shadow-card transition-shadow"
            >
              <div className="text-h2 text-navy">
                {s.value}
              </div>
              <div className="text-overline text-orange mt-2">
                {s.label}
              </div>
              <p className="mt-3 text-body-sm text-navy-soft">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
