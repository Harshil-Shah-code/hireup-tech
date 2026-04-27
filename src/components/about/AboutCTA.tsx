import { Mail, Building2 } from "lucide-react";
import ctaIllustration from "@/assets/cta-illustration.png";

export function AboutCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F2F2EC]">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="p-10 sm:p-16 lg:p-20 order-2 lg:order-1">
              <h2 className="text-h1 text-[#0A1D37] mb-8">
                Ready to Take <br /> the Next Step?
              </h2>
              <p className="text-body text-[#435366] max-w-md mb-12">
                Whether you're a job seeker looking for your next opportunity or a company seeking
                exceptional talent, we're here to help you succeed. Connect with us today.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E5E5DE] grid place-items-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0A1D37]" />
                  </div>
                  <div>
                    <div className="text-overline text-[#435366]/60 mb-0.5">
                      Email us on
                    </div>
                    <div className="text-body-sm font-bold text-[#0A1D37]">
                      hello@hireuptech.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E5E5DE] grid place-items-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-[#0A1D37]" />
                  </div>
                  <div>
                    <div className="text-overline text-[#435366]/60 mb-0.5">
                      Visit Us
                    </div>
                    <div className="text-body-sm font-bold text-[#0A1D37]">
                      N Orange St. 4th Floor , <br />
                      Wilmington, DE, New Castle, US, 19801
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <img
                src={ctaIllustration}
                alt="Illustration showing a path to success"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
