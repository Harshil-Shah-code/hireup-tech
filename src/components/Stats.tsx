const stats = [
  { value: "500+", label: "Companies We Help" },
  { value: "120", label: "Corporate Programs" },
  { value: "85", label: "Training Courses" },
  { value: "200+", label: "Partners" },
];

export function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent to-white border border-border">
              <div className="text-4xl lg:text-5xl font-extrabold text-orange">{s.value}</div>
              <div className="mt-2 text-sm font-semibold text-navy-soft">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
