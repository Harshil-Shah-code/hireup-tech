import { Mail, Phone } from "lucide-react";
import footerCtaWoman from "@/assets/footer-cta-woman.avif";
import { Link } from "@tanstack/react-router";
import { useCalendly } from "./CalendlyProvider";

export function SiteFooter() {
  const { openCalendly } = useCalendly();

  return (
    <footer className="relative bg-[#000000] text-white pt-40 lg:pt-52">
      {/* Top CTA Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-5 lg:px-8 z-30">
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-[#2D34CC] to-[#7137D2] flex flex-col lg:flex-row items-stretch lg:items-end overflow-hidden lg:overflow-visible">

          {/* Content Wrap */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16 pb-0 lg:pb-20 relative z-10">
            <h2 className="text-h2 text-white mb-2 lg:mb-6">
              Got a Job Hunt Stress or <br className="hidden sm:block" />
              Hiring Problem? We Love Those
            </h2>
            <div className="text-body text-white/85 mb-5 lg:mb-10 max-w-xl">
              Big careers and great teams usually start with a simple message.
              Send us one and let's see what we can build together.
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openCalendly()}
                className="px-8 py-4 bg-white text-[#0A1D37] font-bold rounded-full flex items-center gap-2 hover:opacity-90 transition shadow-lg"
              >
                Book Free Call
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.72017 1.29871C7.64649 1.23005 7.58738 1.14725 7.54639 1.05525C7.5054 0.963247 7.48336 0.863934 7.48158 0.763231C7.4798 0.662528 7.49833 0.562499 7.53605 0.46911C7.57377 0.375722 7.62991 0.290888 7.70113 0.21967C7.77235 0.148451 7.85719 0.0923064 7.95057 0.0545854C8.04396 0.0168643 8.14399 -0.00166006 8.24469 0.000116722C8.3454 0.00189351 8.44471 0.023935 8.53671 0.064927C8.62871 0.105919 8.71151 0.165021 8.78017 0.238708L12.7802 4.23871C12.9206 4.37933 12.9995 4.56996 12.9995 4.76871C12.9995 4.96746 12.9206 5.15808 12.7802 5.29871L8.78017 9.29871C8.71151 9.3724 8.62871 9.4315 8.53671 9.47249C8.44471 9.51348 8.3454 9.53552 8.24469 9.5373C8.14399 9.53908 8.04396 9.52055 7.95057 9.48283C7.85719 9.44511 7.77235 9.38896 7.70113 9.31775C7.62991 9.24653 7.57377 9.16169 7.53605 9.06831C7.49833 8.97492 7.4798 8.87489 7.48158 8.77419C7.48336 8.67348 7.5054 8.57417 7.54639 8.48217C7.58738 8.39017 7.64649 8.30737 7.72017 8.23871L10.4402 5.51871H0.750172C0.551259 5.51871 0.360493 5.43969 0.219841 5.29904C0.0791887 5.15839 0.000171661 4.96762 0.000171661 4.76871C0.000171661 4.5698 0.0791887 4.37903 0.219841 4.23838C0.360493 4.09773 0.551259 4.01871 0.750172 4.01871H10.4402L7.72017 1.29871Z" fill="currentColor"></path>
                </svg>
              </button>
              <Link
                to="/contact-us"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0A1D37] transition"
              >
                Start Your Journey
              </Link>
            </div>
          </div>

          {/* Image Wrap */}
          <div className="relative flex-shrink-0 w-full lg:w-[45%] h-[200px] sm:h-[300px] lg:h-[480px] lg:mt-0 self-end">
            <img
              src={footerCtaWoman}
              alt="Social professional woman"
              className="relative lg:absolute bottom-0 right-1/2 lg:right-[-5%] translate-x-1/2 lg:translate-x-0 w-full lg:w-auto h-[140%] lg:h-[135%] object-contain object-bottom z-20 pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pb-12 pt-45 sm:pt-40 lg:pt-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Services Column */}
          <div>
            <h4 className="text-overline text-white/50 mb-8">
              Our Services
            </h4>
            <ul className="space-y-4 text-body-sm">
              {[
                { title: "Job Placement", to: "/services/job-placement" },
                { title: "Recruitment & Staffing", to: "/services/recruitment-staffing" },
                { title: "Background Verification", to: "/services/background-verification" },
                { title: "Talent Acquisition", to: "/services/talent-acquisition" },
                { title: "IT Training", to: "/services/it-training" }
              ].map((item) => (
                <li key={item.title}>
                  <Link to={item.to} className="text-white/60 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-overline text-white/50 mb-8">
              Company
            </h4>
            <ul className="space-y-4 text-body-sm">
              <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/refer-earn" className="text-white/60 hover:text-white transition-colors">Refer and Earn</Link></li>
              <li><Link to="/contact-us" className="text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="text-overline text-white/50 mb-8">
              Corporate Address
            </h4>
            <div className="space-y-6">
              <p className="text-white/70 max-w-xs text-body-sm">
                {import.meta.env.VITE_ADDRESS}
              </p>

              <a href={`mailto:${import.meta.env.VITE_INFO_EMAIL_ADDRESS}`} className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full border border-white/20 grid place-items-center group-hover:border-white/40 transition">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-body-sm">{import.meta.env.VITE_INFO_EMAIL_ADDRESS}</span>
              </a>

              <div className="flex items-center gap-4 pt-4">
                {[
                  {
                    href: `${import.meta.env.VITE_LINKEDIN_URL}`,
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )
                  },
                  {
                    href: `${import.meta.env.VITE_WHATSAPP_URL}`,
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                      </svg>
                    )
                  },
                  {
                    href: `tel:${import.meta.env.VITE_TEL_NUMBER}`,
                    svg: (
                      <Phone className="w-5 h-5 text-current" />
                    )
                  }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {item.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} HireUp. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-white/40 hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-xs text-white/40 hover:text-white transition">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
