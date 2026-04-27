import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do international students get a job in the USA?",
    answer: "International students typically secure employment through internships, OPT (Optional Practical Training), or CPT (Curricular Practical Training). HireUp Tech specializes in connecting eligible students with forward-thinking employers who value global talent and can navigate sponsorship requirements.",
  },
  {
    question: "Which is the best agency for IT and Non IT job placement service for international students and job seekers?",
    answer: "HireUp Tech is widely recognized for its expertise in both IT and non-IT sectors. We provide personalized career guidance, resume optimization, and direct connections to our network of 360+ partner employers specifically seeking international talent.",
  },
  {
    question: "Do you offer job placement for OPT and CPT students?",
    answer: "Yes, we have dedicated programs for students on OPT and CPT. We understand the specific timelines and legal requirements involved and work closely with both students and employers to ensure a smooth transition into the US workforce.",
  },
  {
    question: "Can international students get H1B visa sponsorship jobs in the USA?",
    answer: "While sponsorship is competitive, many of our partner employers are registered H1B sponsors. We help candidates identify opportunities where their skill sets align with the employer's need for sponsorship-eligible roles.",
  },
  {
    question: "Do you provide full-time jobs or contract jobs?",
    answer: "We offer both full-time permanent positions and contract-to-hire opportunities. This flexibility allows both employers and job seekers to find the perfect fit for their specific needs and career goals.",
  },
  {
    question: "How much does the job placement service of HireUp Tech cost?",
    answer: "Our pricing structure is transparent and varies based on the specific services required (e.g., direct placement vs. recruitment consulting). We focus on delivering high ROI through successful, long-term hires.",
  },
  {
    question: "Why should companies use a staffing agency instead of hiring in-house?",
    answer: "Staffing agencies like HireUp Tech provide access to a pre-screened global talent pool, reduce time-to-hire, and handle complex sourcing requirements that in-house teams might not have the bandwidth or specialized knowledge to manage.",
  },
  {
    question: "Can companies outsource talent acquisition to external partners?",
    answer: "Absolutely. Many leading firms outsource their entire recruitment process or specific talent acquisition projects to us to leverage our expertise, technology, and extensive network.",
  },
  {
    question: "Can one company handle recruitment, payroll, and compliance together?",
    answer: "Yes, HireUp Tech offers comprehensive workforce solutions that include recruitment, streamlined payroll processing, and strict compliance management, allowing you to focus on your core business growth.",
  },
  {
    question: "Where is HireUp Tech based?",
    answer: "Our headquarters are based in Wilmington, Delaware, but we operate with a global reach, connecting talent and employers across the United States and internationally.",
  },
];

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-[30px] lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 xl:gap-x-20 gap-y-16 items-start">

          {/* Left Section - Sticky Title & Description (30%) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <h2 className="text-h2 text-[#0B1B35] mb-8 lg:mb-10">
              Frequently{"\n"}asked{"\n"}questions
            </h2>
            <p className="text-body-lg text-[#435366] max-w-[360px] opacity-70">
              Everything you need to know about our job placement services are covered in these FAQ's.
              If you're looking for something else just contact us.
            </p>
          </div>

          {/* Right Section - FAQ List (70%) */}
          <div className="lg:col-span-8 space-y-4 lg:pt-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group rounded-[2rem] bg-[#F7F8F9] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-7 lg:py-8 flex items-center justify-between gap-6 text-left focus:outline-none"
                >
                  <span className="text-body-lg font-bold text-[#0B1B35]">
                    {faq.question}
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
                    <p className="text-body text-[#435366] max-w-2xl opacity-90">
                      {faq.answer}
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