import { useEffect, useRef, useState } from "react";
import m1 from "@/assets/team/member-1.jpg";
import m2 from "@/assets/team/member-2.jpg";
import m3 from "@/assets/team/member-3.jpg";
import m4 from "@/assets/team/member-4.jpg";
import m5 from "@/assets/team/member-5.jpg";
import m6 from "@/assets/team/member-6.jpg";
import m7 from "@/assets/team/member-7.jpg";
import m8 from "@/assets/team/member-8.jpg";

const team = [
  { name: "Nisarg Patel", role: "Founder & CEO", img: m1 },
  { name: "Brijesh Sukhadiya", role: "Founder & COO", img: m2 },
  { name: "Dwijen Barot", role: "Co-founder & Director", img: m3 },
  { name: "Shreyas Sasi", role: "HR Manager", img: m4 },
  { name: "Shilp Patel", role: "Marketing Manager", img: m5 },
  { name: "Rudra Patel", role: "Marketing Manager", img: m6 },
  { name: "Nilay Suthar", role: "Lead Generation Lead", img: m1 },
  { name: "Jay Chauhan", role: "Business Development Lead", img: m2 },
  { name: "Mukesh Chaudhary", role: "Senior Recruiter", img: m3 },
  { name: "Preet Ambekar", role: "Business Development Lead", img: m5 },
  { name: "Nilesh Gurjar", role: "Business Development Lead", img: m6 },
  { name: "Shivam Barot", role: "Senior Process Analyst", img: m8 },
  { name: "Harsh Patel", role: "Payroll & Compliance Manager", img: m2 },
  { name: "Hemant Desai", role: "Senior Recruiter", img: m3 },
];

export function AboutTeam() {
  // direction: 1 = left-to-right (scrolling up), -1 = right-to-left (scrolling down)
  const [direction, setDirection] = useState<1 | -1>(-1);
  const offsetRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const lastDirRef = useRef<1 | -1>(-1);

  // Track page scroll direction
  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;
      if (Math.abs(delta) > 2) {
        const next: 1 | -1 = delta > 0 ? -1 : 1; // down => right-to-left, up => left-to-right
        if (next !== lastDirRef.current) {
          lastDirRef.current = next;
          setDirection(next);
        }
        lastScrollY.current = current;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Continuous animation via rAF
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const speed = 60; // px per second

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const track = trackRef.current;
      if (track) {
        const halfWidth = track.scrollWidth / 2;
        offsetRef.current += direction * speed * dt;
        // wrap
        if (halfWidth > 0) {
          if (offsetRef.current <= -halfWidth) offsetRef.current += halfWidth;
          if (offsetRef.current >= 0) offsetRef.current -= halfWidth;
        }
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  const list = [...team, ...team];

  return (
    <section className="py-24 bg-accent/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange uppercase mb-3">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Meet the People Behind HireUp's Success
          </h2>
          <p className="mt-5 text-navy-soft leading-relaxed">
            Our diverse team of experts brings together decades of experience in recruitment,
            technology, operations, and international student support to deliver exceptional
            results.
          </p>
        </div>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          style={{ width: "max-content" }}
        >
          {list.map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className="shrink-0 w-[260px] bg-white rounded-2xl border border-border overflow-hidden hover:shadow-pop hover:-translate-y-1 transition-all"
            >
              <div className="aspect-square w-full overflow-hidden bg-orange">
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-navy text-[17px]">{m.name}</h4>
                <p className="text-sm text-navy-soft mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
