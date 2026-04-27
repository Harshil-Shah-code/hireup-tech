import type { ServiceConfig } from "./types";

export function ServiceProcess({ cfg }: { cfg: ServiceConfig }) {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/40 via-white to-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange uppercase mb-3">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            A Simple, Transparent Process
          </h2>
        </div>

        <div className="relative">
          <div aria-hidden className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {cfg.process.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="relative grid place-items-center w-14 h-14 rounded-full bg-gradient-orange text-white font-extrabold mx-auto shadow-pop">
                  {i + 1}
                </div>
                <div className="mt-5 rounded-2xl border border-border bg-white p-5 text-center hover:shadow-card transition-shadow">
                  <div className="text-[11px] font-bold tracking-[0.2em] text-orange uppercase">
                    {s.step}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-navy-soft">{s.duration}</div>
                  <h3 className="mt-3 text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-xs text-navy-soft leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
