import heroImage from "@/assets/refer-earn-hero.png";
import { ArrowRight } from "lucide-react";

export function ReferHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-navy">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.32_0.18_265)_0%,_oklch(0.22_0.1_265)_45%,_oklch(0.15_0.06_265)_100%)]" />
        <div className="absolute top-1/3 right-1/4 w-[40rem] h-[40rem] rounded-full bg-orange/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-left">
            <span className="text-overline text-white mb-6 bg-white/10 backdrop-blur-md border border-white/15 px-5 py-2 rounded-full inline-block">
              Referral Rewards Program
            </span>
            <h1 className="text-h1 text-white">
              Refer Friends, Earn Rewards <span className="text-orange">Everyone Wins!</span>
            </h1>
            <p className="mt-6 text-body-lg text-white/70 max-w-xl">
              Help your friends find their dream job and earn generous rewards for every successful
              placement. Share opportunities, grow your network, and get paid for making
              connections that matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#rewards"
                className="inline-flex items-center gap-2 rounded-full bg-orange text-white px-7 py-3.5 text-sm font-semibold hover:bg-white hover:text-navy transition"
              >
                Start Referring <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full bg-transparent text-white px-7 py-3.5 text-sm font-semibold border border-white/30 hover:bg-white/10 transition"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div aria-hidden className="absolute inset-0 bg-orange/25 blur-3xl rounded-full" />
            <div aria-hidden className="absolute right-6 top-6 bottom-6 w-1/2 bg-orange/80 rounded-3xl rotate-2 hidden sm:block" />
            <img
              src={heroImage}
              alt="Hands shaking from a laptop with floating cash and a stopwatch"
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
