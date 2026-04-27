import heroIllustration from "@/assets/about-hero-illustration.png";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-navy">
      {/* Navy radial glow background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.32_0.18_265)_0%,_oklch(0.22_0.1_265)_45%,_oklch(0.15_0.06_265)_100%)]" />
        <div className="absolute top-1/4 left-1/3 w-[40rem] h-[40rem] rounded-full bg-orange/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-left">
            <span className="text-overline text-white mb-6 bg-white/10 backdrop-blur-md border border-white/15 px-5 py-2 rounded-full inline-block">
              About HireUp Tech Careers
            </span>
            <h1 className="text-h1 text-white">
              Connecting Talent with Opportunity Since 2021
            </h1>
            <p className="mt-6 text-body-lg text-white/70 max-w-xl">
              We're a leading job placement and recruitment company dedicated to empowering
              international students and connecting innovative companies with exceptional talent
              across the globe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#career"
                className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-7 py-3.5 text-sm font-semibold hover:bg-orange hover:text-white transition"
              >
                Join Our Team
                <span aria-hidden>→</span>
              </a>
              <a
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full bg-transparent text-white px-7 py-3.5 text-sm font-semibold border border-white/30 hover:bg-white/10 transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div aria-hidden className="absolute inset-0 bg-orange/20 blur-3xl rounded-full" />
            <img
              src={heroIllustration}
              alt="Diverse community of people connecting in a circle"
              width={1024}
              height={1024}
              className="relative w-full max-w-[480px] lg:max-w-[560px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
