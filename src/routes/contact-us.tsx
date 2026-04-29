import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { AboutFAQ } from "@/components/about/AboutFAQ";
import { useCalendly } from "@/components/CalendlyProvider";
import { toast } from "sonner";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | HireUp Tech Careers" },
      {
        name: "description",
        content: "Get in touch with HireUp Tech Careers for recruitment, staffing, and global talent solutions.",
      },
      { property: "og:title", content: "Contact HireUp Tech Careers" },
      {
        property: "og:description",
        content: "Have questions? We're here to help. Reach out to discuss your staffing or career needs.",
      },
    ],
  }),
  component: ContactUsPage,
});

function ContactUsPage() {
  const { openCalendly } = useCalendly();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY || "");
    formData.append("subject", "New Inquiry from Contact Us Page - HireUp");
    formData.append("from_name", "HireUp Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to connect to the mail server. Please check your internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Contact Hero Section - Matching AboutHero style */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-navy">
          {/* Navy radial glow background matching AboutHero */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.32_0.18_265)_0%,_oklch(0.22_0.1_265)_45%,_oklch(0.15_0.06_265)_100%)]" />
            <div className="absolute top-1/4 left-1/3 w-[40rem] h-[40rem] rounded-full bg-orange/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Left Side: Content */}
              <div className="text-white fade-up">
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em]">
                  Contact Us
                </div>

                <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl leading-[1.05]">
                  Got Questions?<br />
                  <span className="text-white/90">Let's Talk</span>
                </h1>

                <p className="mt-8 max-w-md text-lg text-white/60 leading-relaxed font-medium">
                  Connect with people behind HireUp to discuss your need and discover how our services can support your goal.
                </p>

                <div className="mt-12 flex flex-wrap gap-5">
                  <button
                    onClick={() => openCalendly()}
                    className="group inline-flex items-center gap-3 rounded-full bg-white text-navy px-9 py-5 text-sm font-bold transition-all hover:bg-orange hover:text-white hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
                  >
                    Connect Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <Link to="/services/job-placement" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-9 py-5 text-sm font-bold text-white transition-all hover:bg-white hover:text-navy hover:border-white">
                    Explore Services
                  </Link>
                </div>
              </div>

              {/* Right Side: Form Card */}
              <div className="relative fade-up" style={{ animationDelay: "0.2s" }}>
                {/* Floating Glow behind card */}
                <div aria-hidden className="absolute inset-0 bg-orange/20 blur-3xl rounded-full" />

                <div className="relative rounded-[2.5rem] bg-white p-8 shadow-2xl md:p-12">
                  <h2 className="text-3xl font-bold text-navy sm:text-4xl tracking-tight leading-tight">
                    Let's Make<br />Something Happen
                  </h2>
                  <p className="mt-3 text-navy-soft font-medium opacity-70">
                    You can reach us anytime
                  </p>

                  <form onSubmit={handleSubmit} className="mt-12 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-navy/40 uppercase tracking-widest pl-1">Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          className="w-full rounded-2xl border-none bg-accent/90 px-6 py-4 text-sm font-semibold text-navy placeholder:text-navy/40 focus:bg-accent/90 focus:ring-2 focus:ring-orange/20 transition-all outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-navy/40 uppercase tracking-widest pl-1">Email address</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-2xl border-none bg-accent/90 px-6 py-4 text-sm font-semibold text-navy placeholder:text-navy/40 focus:bg-accent/90 focus:ring-2 focus:ring-orange/20 transition-all outline-none"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-navy/40 uppercase tracking-widest pl-1">Phone number</label>
                      <input
                        name="phone"
                        type="tel"
                        className="w-full rounded-2xl border-none bg-accent/90 px-6 py-4 text-sm font-semibold text-navy placeholder:text-navy/40 focus:bg-accent/90 focus:ring-2 focus:ring-orange/20 transition-all outline-none"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-navy/40 uppercase tracking-widest pl-1">Enter your message...</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full rounded-2xl border-none bg-accent/90 px-6 py-5 text-sm font-semibold text-navy placeholder:text-navy/40 focus:bg-accent/90 focus:ring-2 focus:ring-orange/20 transition-all outline-none resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-4">
                      <p className="text-[11px] leading-relaxed text-navy/40 font-medium max-w-[300px]">
                        By submitting this form, you agree to receive emails, calls, or messages from HireUp regarding your inquiry.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full sm:w-auto rounded-2xl bg-navy px-10 py-5 text-sm font-bold text-white shadow-xl shadow-navy/20 transition-all hover:bg-orange hover:shadow-orange/30 hover:-translate-y-1 active:translate-y-0 disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutFAQ />
      </main>
      <div className="pt-80 md:pt-60 lg:pt-80 w-full"></div>
      <SiteFooter />
    </div>
  );
}
