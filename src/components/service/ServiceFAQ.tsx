import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { ServiceConfig } from "./types";

export function ServiceFAQ({ cfg }: { cfg: ServiceConfig }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-[30px] lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 xl:gap-x-20 gap-y-16 items-start">

          {/* Left Section - Sticky Title & Description (30%) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#0B1B35] leading-[1.05] tracking-tight mb-8 lg:mb-10">
              Frequently{"\n"}asked{"\n"}questions
            </h2>
            <p className="text-[#435366] text-md lg:text-lg max-w-[360px] opacity-70">
              Everything you need to know about our {cfg.title.toLowerCase()} services are covered in these FAQ's.
              If you're looking for something else just contact us.
            </p>
          </div>

          {/* Right Section - FAQ List (70%) */}
          <div className="lg:col-span-8 space-y-4 lg:pt-2">
            {cfg.faqs.map((faq, index) => (
              <div
                key={index}
                className="group rounded-[2rem] bg-[#F7F8F9] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-7 lg:py-8 flex items-center justify-between gap-6 text-left focus:outline-none"
                >
                  <span className="text-base lg:text-[1.125rem] font-bold text-[#0B1B35] leading-snug">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 border border-transparent">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-[#0B1B35]" strokeWidth={3} />
                    ) : (
                      <Plus className="w-4 h-4 text-[#0B1B35]" strokeWidth={3} />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[500px]" : "max-h-0"
                    }`}
                >
                  <div
                    className={`px-8 pb-8 pt-0 transition-opacity duration-300 ${openIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <div className="h-px w-full bg-[#0B1B35]/5 mb-6" />
                    <p className="text-[#435366] leading-relaxed text-sm lg:text-[1rem] max-w-2xl opacity-90">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
