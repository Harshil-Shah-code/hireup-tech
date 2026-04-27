import type { ServiceConfig } from "./types";
import { ArrowRight, PlayCircle } from "lucide-react";

export function ServiceHero({ cfg }: { cfg: ServiceConfig }) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-br from-navy via-[oklch(0.22_0.13_265)] to-navy text-white overflow-hidden">
      <div aria-hidden className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full bg-[oklch(0.4_0.2_265)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white/90 uppercase mb-6">
            {cfg.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-medium leading-[1.05] tracking-tight">
            {cfg.title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
            {cfg.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={cfg.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-white text-navy pl-6 pr-2 py-2 text-sm font-semibold hover:bg-orange hover:text-white transition-colors"
            >
              {cfg.primaryCta.label}
              <span className="grid place-items-center w-9 h-9 rounded-full bg-orange text-white group-hover:bg-white group-hover:text-orange transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            {/* {cfg.secondaryCta && (
              <a
                href={cfg.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <PlayCircle className="w-4 h-4" />
                {cfg.secondaryCta.label}
              </a>
            )} */}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-soft">
            <img
              src={cfg.heroImage}
              alt={cfg.title}
              width={1280}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
          {cfg.heroLabels && (
            <>
              <span className="hidden sm:block absolute -top-4 left-6 px-4 py-1 rounded-full bg-white text-navy text-xs font-bold shadow-pop">
                {cfg.heroLabels.left}
              </span>
              <span className="hidden sm:block absolute -bottom-4 right-6 px-4 py-1 rounded-full bg-orange text-white text-xs font-bold shadow-pop">
                {cfg.heroLabels.right}
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
