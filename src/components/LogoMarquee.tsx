const logos = [
  { name: "Google", domain: "google.com" },
  { name: "Meta", domain: "meta.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "PayPal", domain: "paypal.com" },
  { name: "Intel", domain: "intel.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "Capital One", domain: "capitalone.com" },
  { name: "Chase", domain: "chase.com" },
  { name: "Fidelity", domain: "fidelity.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "Bank of America", domain: "bankofamerica.com" },
  { name: "TikTok", domain: "tiktok.com" },
  { name: "Discover", domain: "discover.com" },
];

export function LogoMarquee() {
  // Duplicate the array to ensure a seamless infinite loop
  const list = [...logos, ...logos];

  return (
    <section className="py-14 bg-white border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">
          Candidates Placed in Leading Companies
        </p>
        
        {/* Mask gradient hides the sharp edges of the marquee on both ends */}
        <div 
          className="overflow-hidden relative" 
          style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
        >
          <div className="marquee-track gap-16 flex w-max animate-marquee">
            {list.map((company, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center min-w-[140px] px-4 opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
              >
                <img
                  src={`https://img.logo.dev/${company.domain}?token=${import.meta.env.VITE_LOGO_TOKEN}&height=60`}
                  alt={`${company.name} logo`}
                  className="max-h-8 w-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to text if the image fails to load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.innerText = company.name;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}