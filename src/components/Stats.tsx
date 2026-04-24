const timeline = [
  { year: "2024", value: "376+", label: "Candidates" },
  { year: "2025", value: "385+", label: "Candidates" },
  { year: "2026", value: "437+", label: "Candidates" },
  {
    year: "2026",
    value: "97.8%",
    label: "Placement success",
    highlight: true
  },
];

const bottomStats = [
  { value: "5+", label: "Year Of experience" },
  { value: "5K+", label: "Candidates Placed" },
  { value: "360+", label: "Partner Companies" },
  { value: "12+", label: "Countries Covered" },
];

export function Stats() {
  return (
    <section className="py-24 bg-[#F3F0E9] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-navy mb-6">
            Success Since <br className="md:hidden" /> Our Establishment
          </h2>
          <p className="text-navy-soft max-w-3xl mx-auto text-sm lg:text-base leading-relaxed opacity-70">
            HireUp Careers has facilitated the successful placement of 1750+ candidates,
            underscoring our proficiency in generating meaningful employment opportunities for individuals.
          </p>
        </div>

        {/* Timeline Timeline */}
        <div className="relative mb-20 px-4 flex justify-center">
          <div className="relative flex items-center gap-4 lg:gap-8">
            {/* Horizontal Line - Background */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white z-0 -translate-y-1/2"></div>

            <div className="flex justify-center items-stretch gap-4 lg:gap-8 relative z-10 w-full">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group relative pt-4">
                  {/* Year Tag - Positioned to overlap */}
                  <div className={`
                    absolute top-0 px-4 py-1.5 rounded-full text-[10px] font-bold z-20 shadow-sm
                    ${item.highlight ? 'bg-white text-black' : 'bg-primary text-white'}
                  `}>
                    {item.year}
                  </div>

                  {/* Card */}
                  <div className={`
                    w-32 lg:w-40 min-h-[140px] lg:min-h-[160px] rounded-[1.5rem] flex flex-col items-center justify-center text-center p-6 transition-all duration-300
                    ${item.highlight
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-black shadow-sm group-hover:shadow-md'}
                  `}>
                    <div className="text-2xl lg:text-3xl font-bold mb-1 mt-2">
                      {item.value}
                    </div>
                    <div className={`text-[9px] lg:text-[10px] font-medium leading-tight ${item.highlight ? 'text-white/90' : 'text-gray-400'}`}>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-2">
          {bottomStats.map((stat, idx) => (
            <div key={idx} className="text-center group fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="text-4xl lg:text-5xl font-bold text-black mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] lg:text-xs font-medium text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
