import { useState } from "react";
import img2021 from "@/assets/journey-2021.jpg";
import img2022 from "@/assets/journey-2022.jpg";
import img2023 from "@/assets/journey-2023.jpg";
import img2024 from "@/assets/journey-2024.jpg";
import img2025 from "@/assets/journey-2025.jpg";
import img2026 from "@/assets/journey-2026.jpg";

const journey = [
  // {
  //   year: "2021",
  //   image: img2021,
  //   title: "The Making of HireUp",
  //   body: "HireUp started with a simple question: why are talented international students struggling to get jobs in the USA? A small group of friends decided to do something about it. With no office and no structure, they began helping students from home — laptops, late nights, and lots of determination.\n\nBy 2022, referrals kept growing and people started trusting us with their careers. There was no fancy setup, but consistency made every placement count.",
  // },
  // {
  //   year: "2022",
  //   image: img2022,
  //   title: "When Things Started Getting Real",
  //   body: "A few students turned into many, and referrals kept growing. People started trusting us with something serious — their careers. There was no fancy setup, but there was consistency. Every placement added pressure and responsibility. It was no longer just helping; it was becoming a commitment.",
  // },
  // {
  //   year: "2023",
  //   image: img2023,
  //   title: "The Leap That Changed Everything",
  //   body: "Growth demanded a decision: stay comfortable or take a risk. That's when the first office came in, with a team of 15–20 people. For the first time, HireUp had structure and direction. Roles were defined, systems were introduced, and processes began. This was the year HireUp truly became real.",
  // },
  {
    year: "2024",
    image: img2024,
    title: "Expanding Industry Reach",
    body: "Momentum picked up, and growth came faster than expected. The team scaled from 20 to nearly 100 people. A bigger office, better systems, and stronger execution followed. More candidates trusted the process and saw real outcomes. HireUp was no longer trying to prove itself — it was already delivering results at scale.",
  },
  {
    year: "2025",
    image: img2025,
    title: "The Shift That Changed the Game",
    body: "Until now, the focus was on helping candidates get jobs. But a bigger realization changed everything — companies needed help too. HireUp expanded into recruitment and talent acquisition, background checks, payroll, and tax services. The shift from B2C to B2B opened a new chapter.",
  },
  {
    year: "2026",
    image: img2026,
    title: "Still Growing. Still Not Done.",
    body: "Today, HireUp is a 300+ team across multiple branches. From one room to multiple offices, the journey has transformed. Systems, teams, and processes are now fully established — but the mindset remains exactly the same as day one. The focus is still on solving real problems for real people.",
  },
];

export function AboutJourney() {
  const [active, setActive] = useState(0);
  const item = journey[active];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Our Journey of
            <br />
            Building Trust in Recruitment
          </h2>
          <p className="mt-5 text-navy-soft leading-relaxed">
            From our foundation to becoming a trusted workforce partner — here's how HireUp has
            grown over the years.
          </p>
        </div>

        {/* Responsive Navigation - Desktop Overlay & Mobile/Tablet Top */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 lg:hidden">
          {journey.map((j, i) => (
            <button
              key={j.year}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`px-4 py-2 cursor-pointer rounded-full text-xs sm:text-sm font-semibold transition-all ${i === active
                ? "bg-navy text-white shadow-pop scale-105"
                : "bg-white text-navy border border-border hover:bg-navy-soft/5"
                }`}
            >
              {j.year}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          <div className="lg:col-span-3 relative h-[300px] sm:h-[400px] lg:h-[520px]">
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-card">
              <img
                src={item.image}
                alt={`HireUp journey in ${item.year}`}
                loading="lazy"
                width={1280}
                height={720}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 lg:opacity-100"
              />

              {/* Desktop Navigation Overlay */}
              <div className="hidden lg:flex absolute bottom-6 right-6 gap-2">
                {journey.map((j, i) => (
                  <button
                    key={j.year}
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={`px-4 py-2 cursor-pointer rounded-full text-sm font-bold transition-all backdrop-blur-md ${i === active
                      ? "bg-white text-navy shadow-pop"
                      : "bg-white/20 text-white border border-white/30 hover:bg-white/40"
                      }`}
                  >
                    {j.year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 bg-[#F5FAFF] rounded-2xl p-6 sm:p-8 border border-blue-100 flex flex-col h-auto lg:h-[520px]">
            <div className="mb-6 flex-shrink-0">
              <span className="inline-flex items-center rounded-full bg-white text-navy text-[10px] font-bold tracking-widest px-4 py-1.5 border border-blue-100 shadow-sm">
                JOURNEY · {item.year}
              </span>
            </div>

            <div className="flex-grow flex flex-col min-h-0">
              <h3 className="text-2xl xl:text-3xl font-bold text-[#0A1D37] leading-[1.1] mb-5 flex-shrink-0">
                {item.title}
              </h3>

              <div className="flex-grow min-h-0">
                <div className="text-[#435366] leading-relaxed text-[15px] line-clamp-[10] xl:line-clamp-[12]">
                  {item.body.split("\n\n").map((p, i) => (
                    <p key={i} className="mb-4 last:mb-0">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
