import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, Phone, ChevronDown, BadgeCheck, Users, UserCheck,
  ShieldCheck, Calculator, GraduationCap,
} from "lucide-react";

const services = [
  { icon: BadgeCheck, title: "Job Placement", text: "Your Partner in Career Success Across the USA" },
  { icon: Users, title: "Recruitment & Staffing", text: "Technical Staffing Solutions That Scale Your Business" },
  { icon: UserCheck, title: "Talent Acquisition", text: "Full-Cycle Talent Acquisition Solutions" },
  { icon: ShieldCheck, title: "Background Verification", text: "Comprehensive Employee Background Check USA" },
  { icon: Calculator, title: "Accounting & Taxes", text: "Your seamless Accounting and Tax partner" },
  { icon: GraduationCap, title: "IT Training", text: "Training that prepares candidates for real world careers" },
];

const nav = [
  { label: "Services", to: "/#services", hasDropdown: true },
  { label: "About Us", to: "/about" },
  { label: "Refer & Earn", to: "/refer-earn" },
  { label: "Contact", to: "/contact-us" },
];

export function SiteHeader() {
  const [, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Decorative cloud blobs behind the pill */}
      {/* <div aria-hidden className="absolute inset-x-0 top-0 h-32 overflow-hidden">
        <div className="absolute -top-10 left-[8%] w-72 h-32 rounded-full bg-white/40 blur-2xl float-slow" />
        <div className="absolute -top-6 left-[38%] w-96 h-28 rounded-full bg-white/35 blur-2xl float-slower" />
        <div className="absolute -top-12 right-[10%] w-80 h-32 rounded-full bg-white/40 blur-2xl float-slow" />
      </div> */}

      <div className="pointer-events-auto mx-auto max-w-7xl px-4 sm:px-6 mt-4">
        <div
          className="relative flex items-center justify-between rounded-full pl-5 pr-2 sm:pl-6 sm:pr-2.5 h-16 overflow-hidden
            border border-white/40
            bg-gradient-to-b from-white/30 via-navy/15 to-navy/25
            backdrop-blur-2xl backdrop-saturate-150"
          onMouseLeave={() => setServicesOpen(false)}
        >
          {/* Glossy highlight sweep */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/35 to-transparent"
          />
          {/* Inner soft ring */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/20"
          />

          <Link to="/" className="relative flex items-center gap-2 group">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-orange tracking-tight">Hire</span>
              <span className="text-2xl font-bold text-white tracking-tight">Up</span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/80 hidden sm:block">
              Tech Careers
            </span>
          </Link>

          <nav className="relative hidden lg:flex items-center gap-0.5">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.to}
                onMouseEnter={() => setServicesOpen(item.hasDropdown ? true : false)}
                className="px-3.5 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full flex items-center gap-1 text-white hover:text-orange transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 opacity-80 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="relative hidden lg:flex items-center">
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur pl-5 pr-2 py-2 text-sm font-semibold text-navy hover:bg-orange hover:text-white transition-all"
            >
              Book Free Call
              <span className="grid place-items-center w-9 h-9 rounded-full bg-orange text-white group-hover:bg-white group-hover:text-orange transition-colors">
                <Phone className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="relative lg:hidden p-2.5 rounded-full bg-white/90 text-navy"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Services mega-dropdown (desktop) */}
        {servicesOpen && (
          <div
            className="hidden lg:block mt-2 rounded-3xl border border-white/50 bg-white/95 backdrop-blur-2xl overflow-hidden"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="grid grid-cols-3 gap-1 p-4">
              {services.map((s) => (
                <a
                  key={s.title}
                  href="#services"
                  className="flex items-start gap-3 p-4 rounded-2xl hover:bg-accent transition-colors group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl grid place-items-center bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy mb-0.5">{s.title}</h4>
                    <p className="text-xs text-navy-soft leading-snug">{s.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {open && (
          <div className="pointer-events-auto lg:hidden mt-3 rounded-3xl border border-white/50 bg-white/95 backdrop-blur-2xl overflow-hidden">
            <div className="px-4 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-semibold text-navy hover:bg-accent rounded-xl"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-border my-2" />
              {services.map((s) => (
                <a
                  key={s.title}
                  href="#services"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-navy hover:bg-accent rounded-xl"
                >
                  <s.icon className="w-4 h-4 text-orange" />
                  {s.title}
                </a>
              ))}
              <Link
                to="/contact-us"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="w-4 h-4" /> Book Free Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
