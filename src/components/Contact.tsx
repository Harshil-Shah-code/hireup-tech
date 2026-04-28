import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY || "");
    formData.append("subject", "New Message from Contact Us - HireUp");
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
    <section id="contact" className="py-24 bg-gradient-to-br from-accent via-white to-orange-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-overline text-orange mb-3 block">
              Get In Touch
            </span>
            <h2 className="text-h2 text-navy">
              Let's Build Your Next Career Move
            </h2>
            <p className="mt-4 text-body text-navy-soft max-w-md">
              Stay ahead with the latest job trends, expert tips, and exclusive opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow icon={MapPin} label="411 University St, Seattle, USA" />
              <ContactRow icon={Mail} label="hello@hireuptechcareers.com" />
              <ContactRow icon={Phone} label="+1 (484) 850-7957" />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-7 sm:p-9 shadow-pop border border-border"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Name" placeholder="Your full name" required />
              <Field name="email" label="Email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="mt-5">
              <Field name="phone" label="Phone" type="tel" placeholder="Phone number" required />
            </div>
            <div className="mt-4">
              <label className="text-overline text-navy-soft mb-1.5 block">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="How can we help?"
                className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition"
              />
            </div>

            {/* <div className="mt-4 flex items-center gap-2 text-body-sm text-navy-soft">
              By submitting this form, you agree to our <a href="#" className="text-orange font-semibold hover:underline">Terms and Conditions</a>
            </div> */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-orange text-white px-6 py-3.5 text-sm font-semibold shadow-pop hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <Send className="w-4 h-4" /> {isSubmitting ? "Sending..." : "Submit Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col">
      <label className="text-overline text-navy-soft mb-1.5 block">{label}</label>
      <input
        {...rest}
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-card border border-border">
      <div className="w-11 h-11 rounded-xl bg-orange-soft text-orange grid place-items-center">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-body-sm font-semibold text-navy">{label}</span>
    </div>
  );
}
