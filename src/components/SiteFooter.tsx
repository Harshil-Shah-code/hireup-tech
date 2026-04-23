import { Mail, ArrowRight } from "lucide-react";
import footerCtaWoman from "@/assets/footer-cta-woman.avif";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#000000] text-white pt-40 lg:pt-52">
      {/* Top CTA Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-5 lg:px-8 z-30">
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-[#2D34CC] to-[#7137D2] flex flex-col lg:flex-row items-stretch lg:items-end overflow-hidden lg:overflow-visible">

          {/* Content Wrap */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16 lg:pb-20 relative z-10">
            <h2 className="text-xl sm:text-4xl lg:text-3xl font-extrabold text-white leading-[1.2] lg:leading-[1.1] mb-2lg:mb-6">
              Got a Job Hunt Stress or <br className="hidden sm:block" />
              Hiring Problem? We Love Those
            </h2>
            <div className="text-white/85 text-sm lg:text-base leading-relaxed mb-5 lg:mb-10 max-w-xl">
              Big careers and great teams usually start with a simple message.
              Send us one and let's see what we can build together.
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/hello-netbounceplacement"
                target="_blank"
                className="px-8 py-4 bg-white text-[#0A1D37] font-bold rounded-full flex items-center gap-2 hover:opacity-90 transition shadow-lg"
              >
                Book Free Call
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.72017 1.29871C7.64649 1.23005 7.58738 1.14725 7.54639 1.05525C7.5054 0.963247 7.48336 0.863934 7.48158 0.763231C7.4798 0.662528 7.49833 0.562499 7.53605 0.46911C7.57377 0.375722 7.62991 0.290888 7.70113 0.21967C7.77235 0.148451 7.85719 0.0923064 7.95057 0.0545854C8.04396 0.0168643 8.14399 -0.00166006 8.24469 0.000116722C8.3454 0.00189351 8.44471 0.023935 8.53671 0.064927C8.62871 0.105919 8.71151 0.165021 8.78017 0.238708L12.7802 4.23871C12.9206 4.37933 12.9995 4.56996 12.9995 4.76871C12.9995 4.96746 12.9206 5.15808 12.7802 5.29871L8.78017 9.29871C8.71151 9.3724 8.62871 9.4315 8.53671 9.47249C8.44471 9.51348 8.3454 9.53552 8.24469 9.5373C8.14399 9.53908 8.04396 9.52055 7.95057 9.48283C7.85719 9.44511 7.77235 9.38896 7.70113 9.31775C7.62991 9.24653 7.57377 9.16169 7.53605 9.06831C7.49833 8.97492 7.4798 8.87489 7.48158 8.77419C7.48336 8.67348 7.5054 8.57417 7.54639 8.48217C7.58738 8.39017 7.64649 8.30737 7.72017 8.23871L10.4402 5.51871H0.750172C0.551259 5.51871 0.360493 5.43969 0.219841 5.29904C0.0791887 5.15839 0.000171661 4.96762 0.000171661 4.76871C0.000171661 4.5698 0.0791887 4.37903 0.219841 4.23838C0.360493 4.09773 0.551259 4.01871 0.750172 4.01871H10.4402L7.72017 1.29871Z" fill="currentColor"></path>
                </svg>
              </a>
              <Link
                to="/contact-us"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0A1D37] transition"
              >
                Start Your Journey
              </Link>
            </div>
          </div>

          {/* Image Wrap */}
          <div className="relative flex-shrink-0 w-full lg:w-[45%] h-[300px] lg:h-[480px] lg:mt-0 self-end">
            <img
              src={footerCtaWoman}
              alt="Social professional woman"
              className="relative lg:absolute bottom-0 right-1/2 lg:right-[-5%] translate-x-1/2 lg:translate-x-0 w-full lg:w-auto h-[140%] lg:h-[135%] object-contain object-bottom z-20 pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pb-12 pt-32 sm:pt-40 lg:pt-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Services Column */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase mb-8">
              Our Services
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {["Job Placement", "Recruitment & Staffing", "Background Verification", "Talent Acquisition", "Payroll & Teams", "IT Training"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase mb-8">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Refer and Earn</a></li>
              <li><Link to="/contact-us" className="text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase mb-8">
              Corporate Address
            </h4>
            <div className="space-y-6">
              <p className="text-white/70 leading-relaxed max-w-xs text-[15px]">
                N Orange St., Wilmington, DE, US, 19801
              </p>

              <a href="mailto:hello@hireuptech.com" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full border border-white/20 grid place-items-center group-hover:border-white/40 transition">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[15px]">hello@hireuptech.com</span>
              </a>

              <div className="flex items-center gap-4 pt-4">
                {[
                  {
                    href: "#",
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )
                  },
                  {
                    href: "#",
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )
                  },
                  {
                    href: "#",
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    )
                  },
                  {
                    href: "#",
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )
                  },
                  {
                    href: "#",
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )
                  }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
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
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
