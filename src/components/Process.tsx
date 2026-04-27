import { Search, FileEdit, Megaphone, UserPlus, GraduationCap, BadgeCheck } from "lucide-react";

const steps = [
  {
    title: "Profile Assessment",
    text: "Understand your career goals & challenges.",
    icon: Search,
    color: "bg-white",
    iconBg: "bg-gray-100",
  },
  {
    title: "Resume & Profile Crafting",
    text: "Optimized resumes and online profiles.",
    icon: FileEdit,
    color: "bg-[#FFFB7D]",
    iconBg: "bg-white/40",
  },
  {
    title: "Job Marketing",
    text: "Strategic applications & vendor network leverage.",
    icon: Megaphone,
    color: "bg-[#FFD6A5]",
    iconBg: "bg-white/40",
  },
  {
    title: "Direct Hiring Manager Outreach",
    text: "Referral-based, personalized approach.",
    icon: UserPlus,
    color: "bg-[#D7CCFB]",
    iconBg: "bg-white/40",
  },
  {
    title: "Interview Prep & Technical Training",
    text: "Expert-led sessions.",
    icon: GraduationCap,
    color: "bg-[#A0E7E5]",
    iconBg: "bg-white/40",
  },
  {
    title: "Final Placement & Support",
    text: "Guaranteed interviews & onboarding assistance.",
    icon: BadgeCheck,
    color: "bg-[#E2F2D9]",
    iconBg: "bg-white/40",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-[#0B1B35] max-w-3xl mx-auto">
            A Simple, Transparent Process for Everyone
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`group relative flex flex-col items-start text-left p-8 sm:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${step.color}`}
            >
              {/* Step Badge */}
              <div className="mb-8 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-black text-white text-overline">
                Step {i + 1}
              </div>

              {/* Icon */}
              <div className={`mb-8 w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                <step.icon className="w-7 h-7 text-[#0B1B35]" />
              </div>

              {/* Content */}
              <h3 className="text-h3 text-[#0B1B35] mb-4">
                {step.title}
              </h3>
              <p className="text-body text-[#0B1B35]/70">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
