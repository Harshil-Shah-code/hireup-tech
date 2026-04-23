const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "5.4K+", label: "Candidates Placed" },
  { value: "360+", label: "Partner Companies" },
  { value: "12+", label: "Countries Covered" },
];

export function AboutStats() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-orange/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white">{s.value}</div>
              <div className="mt-2 text-sm font-medium text-white/70 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
