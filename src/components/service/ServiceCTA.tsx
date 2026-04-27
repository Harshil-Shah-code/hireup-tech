import { ArrowRight, Phone } from "lucide-react";

export function ServiceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-[oklch(0.22_0.13_265)] to-navy text-white relative overflow-hidden">
      <div aria-hidden className="absolute -top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-orange/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Got a job hunt stress or hiring problem? <span className="text-orange">We love those.</span>
        </h2>
        <p className="mt-5 text-white/75 max-w-2xl mx-auto">
          Big careers and great teams usually start with a simple message. Send us one and let&apos;s see what we can build together.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-orange text-white pl-6 pr-2 py-2 text-sm font-semibold hover:bg-white hover:text-navy transition-colors"
          >
            Start your journey
            <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-orange group-hover:bg-orange group-hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Book a free call
          </a>
        </div>
      </div>
    </section>
  );
}
