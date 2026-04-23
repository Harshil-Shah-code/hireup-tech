const logos = [
  "Google", "Meta", "Amazon", "Microsoft", "PayPal", "Intel", "Accenture",
  "Capital One", "Chase", "Fidelity", "Stripe", "Bank of America", "TikTok", "Discover",
];

export function LogoMarquee() {
  const list = [...logos, ...logos];
  return (
    <section className="py-14 bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-navy-soft uppercase mb-8">
          Candidates Placed in Leading Companies
        </p>
        <div className="overflow-hidden relative" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
          <div className="marquee-track gap-12">
            {list.map((name, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center min-w-[140px] h-12 px-6 text-navy font-bold text-lg opacity-60 hover:opacity-100 transition"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
