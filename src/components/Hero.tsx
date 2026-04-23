import skyBg from "@/assets/sky-bg.jpg";
import jobSeekers from "@/assets/job-seekers.jpg";
import employers from "@/assets/employers.jpg";
import { ArrowRight, Phone, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 lg:pt-32 pb-24 lg:pb-32">
      {/* Sky background image */}
      <img
        src={skyBg}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 w-full h-full object-cover"
      />
      {/* Contrast overlay for white text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/40 via-navy/20 to-white/30" />
      {/* Soft drifting cloud accents */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-24 -left-10 w-96 h-40 rounded-full bg-white/60 blur-3xl drift-x" />
        <div className="absolute bottom-10 right-0 w-[28rem] h-44 rounded-full bg-white/50 blur-3xl float-slower" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Floating left badge: Job Seekers */}
        <div className="hidden md:block absolute left-2 lg:left-8 top-8 lg:top-16 float-slow">
          <BadgeCard image={jobSeekers} label="💼 Job Seekers" />
        </div>

        {/* Floating right badge: testimonial */}
        <div className="hidden md:block absolute right-2 lg:right-8 top-4 lg:top-10 float-slower max-w-[300px]">
          <div className="glass-card rounded-2xl p-3.5 shadow-card text-white">
            <div className="flex items-start gap-3">
              <img
                src={jobSeekers}
                alt=""
                className="w-10 h-10 rounded-full object-cover border-2 border-white/60"
              />
              <div className="flex-1">
                <p className="text-[11px] leading-snug text-white drop-shadow">
                  Aakash completed his studies in Virginia under an F1 visa and secured his
                  STEM OPT — extending his professional runway in the United States…
                </p>
                <button className="mt-2 text-[10px] font-semibold px-3 py-1 rounded-full border border-white/60 text-white hover:bg-white hover:text-navy transition">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="relative z-10 mx-auto max-w-3xl text-center fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white drop-shadow-[0_2px_12px_rgba(30,58,138,0.25)] leading-[1.05]">
            Empowering Your Career,<br />
            <span className="text-white">Across the USA</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/95 drop-shadow max-w-2xl mx-auto">
            Connecting top talent with leading organizations worldwide through smart recruitment,
            faster hiring processes, and dependable staffing solutions built on trust and expertise.
          </p>

          <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-navy px-6 py-3.5 text-sm font-semibold shadow-pop hover:bg-orange hover:text-white transition-all"
            >
              <Phone className="w-4 h-4" /> Book Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 text-white px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-navy transition"
            >
              Start Your Journey
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 inline-flex items-center gap-8 sm:gap-12 px-6 py-4 rounded-2xl glass-card shadow-card">
            <Stat value="98.7%" label="Customer Satisfaction" />
            <div className="w-px h-10 bg-white/40" />
            <Stat value="15+" label="Years of Experience" />
          </div>
        </div>

        {/* Floating bottom-right: Employers */}
        <div className="hidden md:block absolute right-4 lg:right-16 bottom-0 lg:-bottom-4 float-slow">
          <BadgeCard image={employers} label="👨🏼‍💻 Employers" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-left">
      <div className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md">{value}</div>
      <div className="text-[11px] sm:text-xs text-white font-semibold drop-shadow">{label}</div>
    </div>
  );
}

function BadgeCard({ image, label }: { image: string; label: string }) {
  return (
    <div className="relative">
      <img
        src={image}
        alt={label}
        loading="lazy"
        width={180}
        height={180}
        className="w-36 h-36 lg:w-44 lg:h-44 rounded-full object-cover shadow-pop border-4 border-white/70"
      />
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-navy/85 backdrop-blur text-white text-xs font-semibold whitespace-nowrap shadow-card flex items-center gap-1">
        <Star className="w-3 h-3 fill-orange text-orange" /> {label}
      </div>
    </div>
  );
}
