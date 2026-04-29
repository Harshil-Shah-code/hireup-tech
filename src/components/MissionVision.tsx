import missionSpiral from "@/assets/mission-spiral.png";
import { Quote, ArrowDown, Settings } from "lucide-react";

export function MissionVision() {
  const points = [
    "Long-term partnerships built on trust",
    "Candidate-first approach in every hire",
    "Ethical & compliant hiring practices",
    "Integrity and transparency at the core",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <h2 className="text-h2 text-navy max-w-xl leading-[1.1]">
            Our Story, Vision, <br /> and Values
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Description */}
          <div className="space-y-8">
            <div className="text-[#E5E7EB]">
              <Quote className="w-12 h-12 fill-current opacity-80" />
            </div>
            <p className="text-h3 text-secondary leading-relaxed font-normal">
              Our team of experts works tirelessly to bring your vision to life,
              ensuring every placement we make not only meets but exceeds expectations.
              We are dedicated to connecting talent with opportunities that drive real,
              lasting success.
            </p>
          </div>

          {/* Right Column: Blue Card */}
          <div className="bg-primary rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-sm font-bold tracking-widest uppercase text-white/80">
                  ABOUT US
                </span>
                {/* <Settings className="w-5 h-5 text-[#00D094] animate-spin-slow" /> */}
              </div>

              <div className="space-y-3">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  By staying ahead of the curve and embracing the latest hiring trends and technologies,
                  we ensure our partners not only solve today's talent challenges but also unlock
                  tomorrow's opportunities.
                </p>

                <ul className="space-y-4 pt-4">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                      <span className="text-base md:text-lg text-white/90">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          </div>
        </div>
      </div>
    </section >
  );
}
