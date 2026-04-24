import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do international students get a job in the USA?",
    a: "International students succeed by combining the right skills, resume strategy, and interview preparation. With HireUp, candidates get expert guidance and access to opportunities that lead to real placements.",
  },
  {
    q: "Which is the best agency for IT and Non-IT job placement service for international students and job seekers?",
    a: "HireUp is one of the best placement partners for international students, offering structured support for both IT and Non-IT roles. We charge a one-time fee with no salary cuts or hourly commissions, making the process transparent and candidate-focused.",
  },
  {
    q: "Do you offer job placement for OPT and CPT students?",
    a: "Yes, we specialize in job placement for OPT and CPT students across IT and Non-IT roles. Our team has deep expertise in OPT/CPT profiles, including resume building, job responsibilities, and employer alignment.",
  },
  {
    q: "Can international students get H1B visa sponsorship jobs in the USA?",
    a: "Yes, HireUp helps candidates explore job opportunities that can lead to H1B visa sponsorship in the USA. While many candidates receive sponsorship, the final decision depends on the candidate's performance and the employer's requirements.",
  },
  {
    q: "Do you provide full-time jobs or contract jobs?",
    a: "We primarily focus on full-time or 40 hrs/week job opportunities that support long-term career growth. Our goal is to help candidates build stable careers, not just short-term placements.",
  },
  {
    q: "How much does the job placement service of HireUp cost?",
    a: "The cost varies based on profile, such as OPT/CPT students, US citizens/GC holders, and IT or Non-IT roles. HireUp offers customized plans for each category with a one-time fee model and no ongoing deductions.",
  },
  {
    q: "Why should companies use a staffing agency instead of hiring in-house?",
    a: "Staffing agencies reduce hiring time, cost, and effort by handling candidate sourcing and screening. HireUp enables faster hiring with pre-vetted candidates and flexible workforce solutions.",
  },
  {
    q: "Where is HireUp based?",
    a: "HireUp is based in Seattle, USA, with global operations. This enables seamless service delivery with a worldwide team.",
  },
];

export function ReferFAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-navy-soft max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our job placement services are covered in these FAQs.
            If you're looking for something else just contact us.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-sky-tint/40 px-5 data-[state=open]:bg-sky-tint"
            >
              <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-navy-soft leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
