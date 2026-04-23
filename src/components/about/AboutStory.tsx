import { useRef } from "react";
import storyImg from "@/assets/about-story.jpg";
import { CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";

const points = [
  "Specialized in career placement for international students and professionals",
  "End-to-end recruitment, staffing, and talent acquisition solutions",
  "Global hiring support for companies across industries",
  "Practical guidance and support from job search to successful placement",
];

const stats = [
  { value: "5+", label: "Year Of experience" },
  { value: "5K+", label: "Candidates Placed" },
  { value: "360+", label: "Partner Companies" },
  { value: "12+", label: "Countries Covered" },
];

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-20 text-navy">{children}</span>
      <motion.span style={{ opacity }} className="text-navy">
        {children}
      </motion.span>
    </span>
  );
}

function ScrollHighlightText({ text }: { text: string }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div ref={container} className="relative flex flex-wrap justify-start">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

export function AboutStory() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header Reveal Section */}
        <div className="text-left mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-600/30 bg-blue-50/50 mb-8">
            <span className="text-[10px] font-bold tracking-wider text-blue-700 uppercase">
              About HireUp Tech Careers
            </span>
          </div>
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.2] tracking-tight max-w-5xl">
            <ScrollHighlightText text="Founded with the belief that job seekers and jobs shouldn't struggle to find each other, HireUp has grown into a trusted partner for thousands of professionals and hundreds of companies since 2021. Today, we help careers grow and businesses hire smarter through our expertise." />
          </h2>
        </div>

        {/* Large Image Section */}
        <div className="mb-24">
          <img
            src={storyImg}
            alt="Team meeting in a modern office"
            className="w-full h-auto aspect-[21/9] object-cover rounded-[1rem] shadow-2xl"
          />
        </div>

        {/* Content Grid Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-600/30 bg-blue-50/50 mb-6">
              <span className="text-[10px] font-bold tracking-wider text-blue-700 uppercase">
                About HireUp Tech Careers
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              We've helped over <br />
              <span className="text-navy">5400+ individuals &</span> <br />
              <span className="text-navy">360+ employers</span>
            </h3>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg text-navy font-medium leading-relaxed mb-6">
              At HireUp, we know that behind every job search and every open role, there's a goal of
              building careers and building teams. What started as a mission to connect talented
              professionals with the right opportunities has grown into helping companies and
              candidates succeed through smarter hiring, global talent acquisition, and career
              support.
            </p>
            <p className="text-navy-soft leading-relaxed mb-10">
              Over the years, HireUp has helped 5400+ of job seekers step into meaningful roles while
              supporting 360+ businesses in building strong, reliable teams. From job placement and staffing to talent acquisition and global hiring support, we work behind the scenes to make the connection between talent and opportunity.
            </p>

            <ul className="space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-navy font-medium leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center lg:items-center text-center lg:text-center">
              <div className="text-4xl lg:text-5xl font-medium text-navy mb-3 tracking-tighter">
                {s.value}
              </div>
              <div className="text-sm font-medium text-navy-soft max-w-[120px] leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
