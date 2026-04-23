import { Quote, Star } from "lucide-react";

const items = [
  {
    title: "Excellent!",
    text: "I would highly recommend HireUp Tech Careers — it's well worth it. I have been working with Krishna; he was very cooperative and always available whenever I needed, even after working hours.",
    name: "Jyoti Singh",
    role: "Software Developer",
  },
  {
    title: "Wonderful!",
    text: "I recently had the pleasure of working with the team at HireUp Tech Careers to help me secure a new job. From the moment I reached out, I was impressed by their professionalism and dedication to finding the right fit for me.",
    name: "Rutul Shah",
    role: "Full Stack Developer",
  },
  {
    title: "Perfectly!",
    text: "I applied at many places and tried so many online platforms but couldn't find a good position in my field. HireUp Tech Careers made it possible — I definitely recommend them whether you're a fresher or experienced.",
    name: "Gautam Patil",
    role: "Business Analyst",
  },
  {
    title: "Wonderful!",
    text: "It's a great organization to work with. In my experience, the service Ved provided was excellent. He was very professional and punctual in terms of communication and meetings.",
    name: "Tahira Singh",
    role: "Quality Analyst",
  },
];

export function Testimonials() {
  return (
    <section id="career" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(white 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-orange/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange uppercase mb-3">
            What Peeps Say
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            See What They Have to Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-orange mb-3" />
              <h4 className="text-white font-bold mb-2">{t.title}</h4>
              <p className="text-white/80 text-sm leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-orange text-orange" />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-white/60 text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
