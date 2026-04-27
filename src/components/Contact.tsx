import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [accepted, setAccepted] = useState(false);

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
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-3xl p-7 sm:p-9 shadow-pop border border-border"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" placeholder="Your full name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Phone" type="tel" placeholder="+1" />
            <div className="mt-4">
              <label className="text-overline text-navy-soft mb-1.5 block">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help?"
                className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-body-sm focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition"
              />
            </div>

            <label className="mt-4 flex items-center gap-2 text-body-sm text-navy-soft">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="w-4 h-4 accent-orange"
              />
              I accept the <a href="#" className="text-orange font-semibold hover:underline">Terms and Conditions</a>
            </label>

            <button
              type="submit"
              disabled={!accepted}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-orange text-white px-6 py-3.5 text-sm font-semibold shadow-pop hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <Send className="w-4 h-4" /> Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="mt-4 first:mt-0">
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
