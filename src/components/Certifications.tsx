import certificationImg from "@/assets/images/certification.png";

export function Certifications() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Container */}
          <div className="relative fade-up order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-3 scale-105 blur-xl" />
            <div className="relative bg-white rounded-[2.5rem] p-4 shadow-card border border-border overflow-hidden group">
              <div className="relative rounded-[2rem] overflow-hidden bg-muted">
                <img
                  src={certificationImg}
                  alt="Certification"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-6 rounded-3xl shadow-pop flex flex-col items-center justify-center">
                <span className="text-xl font-bold uppercase tracking-widest">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Verified</span>
              </div>
            </div>

            {/* Decorative dots or shapes */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Right: Content Container */}
          <div className="relative fade-up lg:pl-10 order-1 lg:order-2" style={{ animationDelay: "200ms" }}>
            <span className="text-overline text-primary mb-4 block tracking-[0.3em]">Recognition</span>
            <h2 className="text-h2 text-navy mb-8 leading-tight">
              Our Professional <br /> <span className="text-primary">Certifications</span>
            </h2>

            <div className="relative">
              {/* Main Content Box */}
              <div className="relative z-10 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-soft border border-border group overflow-hidden">
                {/* Decoration: Top-right corner half circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full transition-transform duration-500 group-hover:scale-125" />

                {/* Decoration: Bottom-left small circle */}
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-primary rounded-full transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />

                <div className="relative z-10">
                  {/* <h3 className="text-h3 text-navy mb-4">U.S. E-Verified Certified- 2025</h3> */}
                  <p className="text-body text-navy-soft mb-8 leading-relaxed">
                    At HireUp Tech Careers, we prioritize excellence in every placement. Our certifications are a testament to our rigorous screening processes and our commitment to maintaining the highest industry standards. We ensure that both candidates and employers experience a seamless, trustworthy, and efficient recruitment journey.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                      <div className="w-10 h-10 rounded-full bg-primary text-white grid place-items-center font-bold">✓</div>
                      <div>
                        <div className="font-bold text-navy text-sm">U.S. E-Verified Certified- 2025</div>
                        <div className="text-xs text-navy-soft/70">Compliane with U.S. employment standards, ensuring verified workforce solutions.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
