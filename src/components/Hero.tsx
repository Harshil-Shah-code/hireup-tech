import { useState, useEffect } from "react";
import { useCalendly } from "./CalendlyProvider";
import { motion, AnimatePresence } from "framer-motion";
import cloud1 from "@/assets/cloud-1.avif";
import cloud2 from "@/assets/cloud-2.avif";
import jobSeekers from "@/assets/job-seekers.jpg";
// import employers from "@/assets/employers.jpg";
import { ArrowRight, Phone, Star } from "lucide-react";

const headlines = [
  {
    first: "Empowering Your Career,",
    second: "Across the USA",
    text: "Connecting top talent with leading organizations worldwide through smart recruitment, faster hiring processes, and dependable staffing solutions built on trust and expertise."
  },
  {
    first: "Secure Your Future,",
    second: "With Top Placements",
    text: "Bridge the gap to your dream job with our comprehensive recruitment services, career coaching, and extensive network of industry-leading partners."
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const { openCalendly } = useCalendly();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-28 lg:pt-32 pb-24 lg:pb-32">
      {/* Sky background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-sky" />

      {/* Contrast overlay for white text readability - kept subtle for brightness */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/15 via-transparent to-white/10" />

      {/* Floating Clouds */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Large cloud top left */}
        <img
          src={cloud1}
          alt=""
          className="absolute -top-10 -left-20 w-[24rem] md:w-[35rem] lg:w-[50rem] opacity-70 float-slow"
        />
        {/* Very large cloud middle right */}
        <img
          src={cloud2}
          alt=""
          className="absolute bottom-0 -right-20 w-[24rem] md:w-[35rem] lg:w-[50rem] opacity-80 float-slow"
        />
        {/* Large cloud bottom left */}
        {/* <img 
          src={cloud1} 
          alt="" 
          className="absolute bottom-[2%] -left-20 w-[26rem] md:w-[40rem] lg:w-[55rem] opacity-50 float-slower"
        /> */}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Floating left badge: Job Seekers */}
        {/* <div className="hidden md:block absolute left-2 lg:left-8 top-8 lg:top-16 float-slow">
          <BadgeCard image={jobSeekers} label="💼 Job Seekers" />
        </div> */}

        {/* Floating right badge: testimonial */}
        <div className="hidden md:block absolute right-2 lg:right-[-20px] top-4 lg:top-10 float-slower max-w-[300px]">
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

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="min-h-[220px] sm:min-h-[260px] lg:min-h-[320px] flex items-center justify-center relative">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full"
              >
                <motion.h1
                  variants={{
                    initial: { opacity: 0, y: 30, filter: "blur(10px)" },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: { opacity: 0, y: -30, filter: "blur(10px)" }
                  }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-h1 text-white drop-shadow-[0_2px_12px_rgba(30,58,138,0.25)]"
                >
                  {headlines[index].first}<br />
                  <span className="text-white">{headlines[index].second}</span>
                </motion.h1>
                <motion.p
                  variants={{
                    initial: { opacity: 0, y: -30, filter: "blur(10px)" },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: { opacity: 0, y: 30, filter: "blur(10px)" }
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className="mt-6 text-body-lg text-white/95 drop-shadow max-w-2xl mx-auto"
                >
                  {headlines[index].text}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => openCalendly()}
              className="group inline-flex items-center gap-2 rounded-full bg-white text-navy px-6 py-3.5 text-sm font-semibold shadow-pop hover:bg-orange hover:text-white transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" /> Book Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
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
        {/* <div className="hidden md:block absolute right-4 lg:right-16 bottom-0 lg:-bottom-4 float-slow">
          <BadgeCard image={employers} label="👨🏼‍💻 Employers" />
        </div> */}
        <div className="hidden md:block absolute left-2 lg:left-[-20px] bottom-4 lg:bottom-10 float-slower max-w-[300px]">
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
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-left">
      <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">{value}</div>
      <div className="text-[11px] sm:text-xs text-white font-semibold drop-shadow">{label}</div>
    </div>
  );
}

// function BadgeCard({ image, label }: { image: string; label: string }) {
//   return (
//     <div className="relative">
//       <img
//         src={image}
//         alt={label}
//         loading="lazy"
//         width={180}
//         height={180}
//         className="w-36 h-36 lg:w-44 lg:h-44 rounded-full object-cover shadow-pop border-4 border-white/70"
//       />
//       <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-navy/85 backdrop-blur text-white text-xs font-semibold whitespace-nowrap shadow-card flex items-center gap-1">
//         <Star className="w-3 h-3 fill-orange text-orange" /> {label}
//       </div>
//     </div>
//   );
// }
