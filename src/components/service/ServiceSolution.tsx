import type { ServiceConfig } from "./types";
import { ArrowUpRight } from "lucide-react";

export function ServiceSolution({ cfg, onCtaClick }: { cfg: ServiceConfig; onCtaClick: () => void }) {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onCtaClick();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-accent/40 to-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-h2 text-navy">
              {cfg.solution?.heading}
            </h2>
            <p className="mt-5 text-body text-navy-soft">
              {cfg.solution?.description}
            </p>
            {cfg.solution?.cta && (
              <a
                href={cfg.solution.cta.href}
                onClick={handleCtaClick}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange text-white px-6 py-3 text-sm font-semibold hover:bg-navy transition-colors"
              >
                {cfg.solution.cta.label}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {cfg.solution?.items.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white border border-border p-6 hover:-translate-y-1 hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange grid place-items-center group-hover:bg-orange group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-h4 text-navy">{item.title}</h3>
                <p className="mt-2 text-body-sm text-navy-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
