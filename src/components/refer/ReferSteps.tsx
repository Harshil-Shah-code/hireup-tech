import { useState, useEffect, useRef } from "react";
import { UserPlus, ClipboardCheck, Gift, LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Step {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  color: string;
  label: string;
  sublabel: string;
}

const steps: Step[] = [
  {
    badge: "Step 1 of 3",
    title: "Refer a Friend",
    description: "Share your unique referral link or submit your friend's contact details through our referral portal.",
    tags: ["Quick Share", "Direct Link"],
    icon: UserPlus,
    color: "oklch(0.7 0.19 42)", // Orange
    label: "Refer a Friend",
    sublabel: "Connect your network with top opportunities by sharing your unique referral link or submitting friend details directly through our secure portal to start their journey.",
  },
  {
    badge: "Step 2 of 3",
    title: "They Enroll",
    description: "Your referral signs up for one of our placement plans (Starter, Premium, Elite, or Pro).",
    tags: ["Easy Signup", "Expert Support"],
    icon: ClipboardCheck,
    color: "oklch(0.28 0.1 265)", // Navy
    label: "They Enroll",
    sublabel: "Once your friend chooses and enrolls in a professional placement plan, our expert team immediately begins working on their personalized career success strategy.",
  },
  {
    badge: "Step 3 of 3",
    title: "Earn Rewards",
    description: "Get instant signup bonus, plus additional placement bonus when they land their dream job!",
    tags: ["Cash Bonus", "Career Success"],
    icon: Gift,
    color: "oklch(0.7 0.19 42)", // Orange
    label: "Earn Rewards",
    sublabel: "Celebrate as you receive an instant signup bonus upon their enrollment, followed by a substantial placement reward once they successfully land their dream role.",
  },
];

export function ReferSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [displayedStep, setDisplayedStep] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [delayedZIndex, setDelayedZIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Z-index delay logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedZIndex(activeStep);
    }, 20);
    return () => clearTimeout(timer);
  }, [activeStep]);

  // Handle step change with fade
  const changeStep = (index: number) => {
    if (index === activeStep) return;
    setIsFading(true);

    // Sync mobile scroll with precision centering
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.querySelectorAll('[data-index]');
      const targetCard = cards[index] as HTMLElement;

      if (targetCard) {
        const containerWidth = container.offsetWidth;
        const cardWidth = targetCard.offsetWidth;
        const scrollLeft = targetCard.offsetLeft - (containerWidth - cardWidth) / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth"
        });
      }
    }

    fadeTimeoutRef.current = setTimeout(() => {
      setActiveStep(index);
      setDisplayedStep(index);
      setIsFading(false);
    }, 200);
  };

  // Mobile Tap/Touch handler
  const handleTouchStart = (index: number) => {
    setUserHasInteracted(true);
    changeStep(index);
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      card.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  // Intersection Observer for mobile scroll sync
  useEffect(() => {
    if (!scrollRef.current) return;

    const options = {
      root: scrollRef.current,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          if (index !== activeStep) {
            changeStep(index);
          }
        }
      });
    }, options);

    Array.from(scrollRef.current.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [activeStep, isScrolling]);

  const handleScroll = () => {
    setIsScrolling(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  };

  useEffect(() => {
    if (userHasInteracted) return;

    const autoplayObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !userHasInteracted) {
          progressTimeoutRef.current = setInterval(() => {
            if (!userHasInteracted) {
              setActiveStep((prev) => {
                const next = (prev + 1) % steps.length;
                changeStep(next);
                return next;
              });
            }
          }, 3500);
        } else {
          if (progressTimeoutRef.current) clearInterval(progressTimeoutRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) autoplayObserver.observe(sectionRef.current);

    return () => {
      autoplayObserver.disconnect();
      if (progressTimeoutRef.current) clearInterval(progressTimeoutRef.current);
    };
  }, [userHasInteracted]);

  const handleInteraction = () => {
    setUserHasInteracted(true);
    if (progressTimeoutRef.current) clearInterval(progressTimeoutRef.current);
  };

  return (
    <section
      ref={sectionRef}
      id="referral-steps"
      className="py-12 bg-sky-tint/50 overflow-hidden selection:bg-navy/10"
      onTouchStart={handleInteraction}
      onMouseDown={handleInteraction}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Mobile Layout (< 768px) */}
        <div className="flex md:hidden flex-col">
          {/* Card on Top */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scroll-snap-x-mandatory scrollbar-hide py-12 gap-5 px-[10vw] w-screen -mx-6 will-change-scroll"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <div
                  key={i}
                  data-index={i}
                  onTouchStart={() => handleTouchStart(i)}
                  className={cn(
                    "flex-shrink-0 w-[80vw] p-10 rounded-[40px] border scroll-snap-align-center transition-all duration-500 flex flex-col items-center justify-center text-center text-white border-transparent",
                    isActive ? "scale-100 opacity-100 shadow-card rotate-0" : "scale-90 opacity-40 shadow-none"
                  )}
                  style={{
                    backgroundColor: step.color,
                  }}
                >
                  <div className="relative mb-8">
                    <div
                      className="absolute inset-0 scale-[1.8] blur-xl opacity-40 transition-opacity duration-300"
                      style={{ backgroundColor: 'white' }}
                    />
                    <div
                      className="relative w-24 h-24 rounded-full flex items-center justify-center mb-0 z-10 border-2 border-white shadow-inner bg-white/20 text-white"
                    >
                      <step.icon className="w-10 h-10" />
                    </div>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-6 shadow-md border bg-white/20 border-white/30"
                  >
                    <span className="text-sm font-bold text-white">{i + 1}</span>
                  </div>
                  <h4 className="text-h4 mb-3 text-white">{step.label}</h4>
                  <p className="text-body-sm text-white/90">{step.sublabel}</p>
                </div>
              );
            })}
          </div>

          {/* Content Middle */}
          <div className={cn(
            "transition-opacity duration-200 min-h-[300px] mb-8",
            isFading ? "opacity-0" : "opacity-100"
          )}>
            <div className="inline-flex mb-6">
              <span
                className="px-4 py-1.5 rounded-full text-overline shadow-sm"
                style={{ backgroundColor: `${steps[displayedStep].color}15`, color: steps[displayedStep].color }}
              >
                {steps[displayedStep].badge}
              </span>
            </div>

            <h2 className="text-h2 text-navy mb-6">
              {steps[displayedStep].title}
            </h2>

            <p className="text-body-lg text-navy-soft mb-8">
              {steps[displayedStep].description}
            </p>

            <div className="flex flex-wrap gap-2">
              {steps[displayedStep].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 rounded-full border border-border bg-sky-tint text-xs font-semibold text-navy transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Steps (Dots) Bottom */}
          <div className="flex justify-center gap-3 pt-4 pb-12">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  handleInteraction();
                  changeStep(i);
                }}
                aria-label={`Go to step ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  activeStep === i ? "w-10 bg-navy" : "w-2 bg-navy/20"
                )}
              />
            ))}
          </div>
        </div>

        {/* Tablet and Desktop Layout (>= 768px) */}
        <div className="hidden md:grid grid-cols-2 gap-12 lg:gap-24 items-center min-h-[600px]">

          {/* Content Panel (Left) */}
          <div className="min-h-[480px]">
            <div className={cn(
              "transition-opacity duration-200 ease-in-out h-full flex flex-col justify-center",
              isFading ? "opacity-0" : "opacity-100"
            )}>
              <div className="inline-flex mb-6">
                <span
                  className="px-4 py-1.5 rounded-full text-overline shadow-sm"
                  style={{ backgroundColor: `${steps[displayedStep].color}15`, color: steps[displayedStep].color }}
                >
                  {steps[displayedStep].badge}
                </span>
              </div>

              <h2 className="text-h2 text-navy mb-3">
                {steps[displayedStep].title}
              </h2>

              <p className="text-body-lg text-navy-soft mb-4 max-w-lg">
                {steps[displayedStep].description}
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                {steps[displayedStep].tags.map((tag) => (
                  <span
                    key={tag}
                    className="min-h-[48px] flex items-center px-6 rounded-full border border-border bg-sky-tint text-sm font-semibold text-navy transition-colors hover:border-navy/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      handleInteraction();
                      changeStep(i);
                    }}
                    aria-label={`Go to step ${i + 1}`}
                    className="group relative min-w-[56px] min-h-[44px] flex items-center"
                  >
                    <div
                      className={cn(
                        "h-4 rounded-full transition-all duration-300",
                        activeStep === i
                          ? "w-full bg-navy shadow-lg"
                          : "w-full bg-border group-hover:bg-navy/20"
                      )}
                    />
                  </button>
                ))}
              </div>

              <p className="mt-8 text-navy-soft/60 text-sm font-medium">
                Tap a dot to switch steps
              </p>
            </div>
          </div>

          {/* Animation Panel (Right) */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-[500px]">
              {steps.map((step, i) => {
                const slot = (i - activeStep + 1 + 3) % 3;
                const isActive = slot === 1;

                const xPositions = [-120, 0, 120];
                const rotations = [-15, 0, 15];
                const scales = [0.9, 1.05, 0.9];
                const opacities = [0.6, 1, 0.6];

                const xOffset = xPositions[slot];
                const rotation = rotations[slot];
                const scale = scales[slot];
                const opacity = opacities[slot];
                const zIndex = isActive ? 50 : 20;

                return (
                  <div
                    key={i}
                    onClick={() => {
                      if (!isActive) {
                        handleInteraction();
                        changeStep(i);
                      }
                    }}
                    style={{
                      transform: `translate(calc(-50% + ${xOffset}px), -50%) rotate(${rotation}deg) scale(${scale})`,
                      opacity,
                      zIndex,
                      backgroundColor: step.color,
                    }}
                    className={cn(
                      "absolute top-1/2 left-1/2 w-[320px] lg:w-[360px] p-10 rounded-[40px] border border-transparent shadow-soft transition-all duration-500",
                      "cursor-pointer pointer-events-auto flex flex-col items-center justify-center text-center text-white",
                      isActive ? "shadow-card scale-110" : "hover:border-white/20"
                    )}
                  >
                    <div className="pointer-events-none w-full flex flex-col items-center">
                      <div className="relative mb-8">
                        <div
                          className="absolute inset-0 scale-[1.8] blur-xl opacity-40 transition-opacity duration-300"
                          style={{ backgroundColor: 'white' }}
                        />
                        <div
                          className="relative w-24 h-24 rounded-full flex items-center justify-center z-10 overflow-hidden border-2 border-white shadow-inner bg-white/20 text-white"
                        >
                          <step.icon className="w-10 h-10" />
                        </div>
                      </div>

                      <div className="w-9 h-9 rounded-full flex items-center justify-center mb-6 shadow-md border bg-white/20 border-white/30">
                        <span className="text-sm font-bold text-white">{i + 1}</span>
                      </div>

                      <h4 className="text-h4 mb-3 text-white">{step.label}</h4>
                      <p className="text-body-sm text-white/90">{step.sublabel}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .will-change-scroll { will-change: scroll-position; }
        @keyframes progress-step { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </section>
  );
}

