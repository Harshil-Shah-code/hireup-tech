import type { ServiceConfig } from "@/components/service/types";
import {
  Briefcase, FileText, MessageCircle, Send, Award, BadgeCheck, Users, UserCheck, ShieldCheck,
  GraduationCap, Search, ClipboardCheck, FileSearch, Building2, Database, Code2, Cloud, Cpu, Layers,
} from "lucide-react";
import jobPlacementImg from "@/assets/services/hero-job-placement.jpg";
import recruitmentImg from "@/assets/services/hero-recruitment.jpg";
import talentImg from "@/assets/services/hero-talent-acquisition.jpg";
import bgvImg from "@/assets/services/hero-background-verification.jpg";
import trainingImg from "@/assets/services/hero-it-training.jpg";

const sharedCommitment = [
  { title: "Candidate-First Approach", text: "We prioritize long-term success by aligning roles with skills, goals, and growth potential." },
  { title: "Quality-Driven Hiring", text: "Every candidate is screened for the right balance of skills, experience, and cultural fit." },
  { title: "Transparency at Every Step", text: "Clear communication, honest feedback, and structured processes — no hidden steps." },
  { title: "Long-Term Partnerships", text: "We build lasting relationships with candidates and employers beyond the first placement." },
];

export const jobPlacement: ServiceConfig = {
  slug: "/services/job-placement",
  eyebrow: "Job Placement",
  title: "Turning Jobless Grads Into Job-Bless Professionals",
  description:
    "Specialized job placement support for F-1, H-1B, H-4, GC, and USC candidates. From ATS-optimized resumes to recruiter-led applications and interview coaching — we help job seekers launch full-time careers in the U.S.",
  primaryCta: { label: "Calculate Free Resume Score", href: "/#contact" },
  secondaryCta: { label: "Watch our success", href: "#success" },
  heroImage: jobPlacementImg,
  heroLabels: { left: "Before HireUp", right: "After HireUp" },
  stats: [
    { value: "1,200+", label: "Successful Placements", text: "Candidates placed in dream full-time roles across the USA." },
    { value: "98%", label: "Resume Success Rate", text: "Exceptional shortlisting rate from our resume expertise." },
    { value: "300+", label: "Partner Companies", text: "Direct placements with Fortune 500 and innovative startups." },
    { value: "45 days", label: "Avg. Time to Placement", text: "From job search to job offer, delivered within 45 days on average." },
  ],
  solution: {
    heading: "Complete Job Search Solution",
    description:
      "From professional resume writing to interview coaching and full-service applications, we provide everything you need to secure your dream job in the USA.",
    cta: { label: "Start your journey", href: "/#contact" },
    items: [
      { icon: Briefcase, title: "Full-Time Job Placement", text: "We help candidates secure full-time roles with reputable U.S. companies — no temporary contracts." },
      { icon: FileText, title: "Resume Writing & Optimization", text: "Your resume rebuilt by experts to be ATS-friendly and recruiter-ready." },
      { icon: MessageCircle, title: "Interview Preparation & Coaching", text: "Mock interviews and technical guidance so you walk in confident and ready." },
      { icon: Send, title: "Job Application Services", text: "Structured, strategic applications handled for you so you can focus on interviews." },
    ],
  },
  comparison: {
    heading: "Why Job Seekers Choose HireUp",
    subheading: "Compare the difference between navigating the market alone and with HireUp.",
    without: {
      label: "The Job Search Struggle",
      salary: "$50K – $70K",
      time: "6–8 Months",
      points: [
        "Applying to hundreds of jobs with no response",
        "Unable to find full-time roles",
        "Resumes not optimized for ATS systems",
        "Difficulty finding quality job opportunities",
        "Lack of practical job knowledge",
        "Pressure of the 90-day OPT cycle",
      ],
    },
    with: {
      label: "The HireUp Advantage",
      salary: "$85K – $170K",
      time: "2–4 Months",
      points: [
        "Strategic applications for 3–4 interviews weekly",
        "Full-time roles only — no contracts",
        "ATS-friendly resume for higher shortlists",
        "Dedicated recruiter for daily quality applications",
        "Practical job knowledge for interview success",
        "98% of jobs secured during the OPT cycle",
      ],
    },
  },
  process: [
    { step: "Step 1", duration: "30 minutes", title: "Free Consultation", text: "Quick consultation to understand background, skills, goals, and visa status." },
    { step: "Step 2", duration: "3–5 days", title: "Profile Enhancement", text: "ATS-optimized resume, LinkedIn profile, and portfolio to match industry expectations." },
    { step: "Step 3", duration: "1–2 weeks", title: "Interview Process", text: "Mock interviews, communication coaching, and technical guidance." },
    { step: "Step 4", duration: "Ongoing", title: "Job Matching & Apps", text: "Recruiters submit targeted applications daily for matching roles." },
    { step: "Step 5", duration: "Final stage", title: "Successful Placement", text: "Interview follow-ups, offer negotiation, and onboarding guidance." },
  ],
  commitment: sharedCommitment,
  faqs: [
    { q: "How do international students get a job in the USA?", a: "By combining the right skills, resume strategy, and interview preparation. With HireUp, candidates get expert guidance and access to opportunities that lead to real placements." },
    { q: "Do you offer placement for OPT and CPT students?", a: "Yes, we specialize in placement for OPT and CPT students across IT and Non-IT roles, including resume building, job responsibility framing, and employer alignment." },
    { q: "Can international students get H-1B sponsorship roles?", a: "Yes, we help candidates explore opportunities that can lead to H-1B sponsorship. The final decision depends on candidate performance and employer requirements." },
    { q: "Do you provide full-time or contract jobs?", a: "We focus on full-time, 40 hrs/week opportunities that support long-term career growth — not short-term placements." },
    { q: "How much does the job placement service cost?", a: "Cost varies based on your profile (OPT/CPT, USC/GC, IT or Non-IT). HireUp offers customized one-time-fee plans with no ongoing deductions." },
  ],
};

export const recruitmentStaffing: ServiceConfig = {
  slug: "/services/recruitment-staffing",
  eyebrow: "Recruitment & Staffing",
  title: "Technical Staffing Solutions That Scale Your Business",
  description:
    "Skilled professionals matched to your business needs. From contract to full-time technical talent, we deliver pre-vetted candidates who hit the ground running.",
  primaryCta: { label: "Hire talent now", href: "/#contact" },
  secondaryCta: { label: "See how it works", href: "#process" },
  heroImage: recruitmentImg,
  stats: [
    { value: "5,000+", label: "Talent Network", text: "Pre-vetted technical candidates ready for deployment." },
    { value: "72 hrs", label: "Avg. Time to Submit", text: "From requisition to qualified shortlist in 72 hours." },
    { value: "92%", label: "Retention Rate", text: "Long-term retention across our placed candidates." },
    { value: "200+", label: "Active Clients", text: "Companies trust HireUp for their staffing needs." },
  ],
  solution: {
    heading: "End-to-End Staffing Built for Speed and Quality",
    description:
      "We source, screen, and submit only the talent that fits your role, your stack, and your culture — so your hiring managers spend less time filtering and more time building.",
    cta: { label: "Talk to a staffing expert", href: "/#contact" },
    items: [
      { icon: Users, title: "Contract Staffing", text: "Flexible, on-demand technical talent for short and long-term projects." },
      { icon: Briefcase, title: "Contract-to-Hire", text: "Try before you hire with low-risk conversion paths." },
      { icon: BadgeCheck, title: "Full-Time Placement", text: "Direct hires for permanent roles, fully managed end-to-end." },
      { icon: Layers, title: "Managed Teams", text: "Dedicated pods of engineers, analysts, and specialists." },
    ],
  },
  comparison: {
    heading: "Why Companies Partner With HireUp",
    subheading: "Compare in-house hiring with HireUp staffing.",
    without: {
      label: "Hiring On Your Own",
      salary: "$15K+ per hire",
      time: "60–90 days",
      points: [
        "Hours spent screening unqualified resumes",
        "Long open-role cycles drain productivity",
        "Limited reach into passive candidates",
        "Compliance and onboarding overhead",
        "Inconsistent skill validation",
        "High cost-per-hire without guarantee",
      ],
    },
    with: {
      label: "Staffing With HireUp",
      salary: "Pay only for results",
      time: "3–10 days",
      points: [
        "Pre-vetted shortlists in under 72 hours",
        "Access to a 5,000+ talent network",
        "Skill, culture, and tech-stack matched",
        "Compliance, payroll, and onboarding handled",
        "Replacement guarantee on all placements",
        "Transparent rates, no hidden markups",
      ],
    },
  },
  process: [
    { step: "Step 1", duration: "1 day", title: "Discovery Call", text: "Understand role, stack, team culture, and timeline." },
    { step: "Step 2", duration: "2–3 days", title: "Sourcing", text: "Tap our active network plus targeted outreach." },
    { step: "Step 3", duration: "1–2 days", title: "Screening", text: "Technical, behavioral, and reference checks before submission." },
    { step: "Step 4", duration: "Ongoing", title: "Interviews", text: "Coordinated interview loops with your hiring team." },
    { step: "Step 5", duration: "Final stage", title: "Onboarding", text: "Offer support, paperwork, and day-one onboarding." },
  ],
  commitment: sharedCommitment,
  faqs: [
    { q: "Why use a staffing agency instead of hiring in-house?", a: "Staffing agencies cut hiring time and cost by handling sourcing and screening. HireUp delivers pre-vetted candidates with flexible workforce models." },
    { q: "What roles do you staff?", a: "Software engineers, data analysts, cloud and DevOps engineers, product managers, business analysts, QA, and more across IT and Non-IT." },
    { q: "Do you handle payroll and compliance?", a: "Yes, we handle W-2/1099 payroll, tax compliance, and onboarding so you don't have to." },
    { q: "What's your replacement policy?", a: "Every placement comes with a replacement guarantee. If a hire doesn't work out within the agreed window, we replace at no additional cost." },
    { q: "Can you scale up quickly?", a: "Yes — our managed teams model lets you scale from one engineer to a full pod in weeks, not quarters." },
  ],
};

export const talentAcquisition: ServiceConfig = {
  slug: "/services/talent-acquisition",
  eyebrow: "Talent Acquisition",
  title: "Full-Cycle Talent Acquisition Solutions",
  description:
    "Strategic hiring support to build long-term, high-performing teams. We act as an extension of your people team — from employer branding to executive search.",
  primaryCta: { label: "Build your team", href: "/#contact" },
  secondaryCta: { label: "Our approach", href: "#process" },
  heroImage: talentImg,
  stats: [
    { value: "150+", label: "Companies Served", text: "From early-stage startups to Fortune 500 enterprises." },
    { value: "30 days", label: "Avg. Time to Fill", text: "Senior and specialized roles closed in 30 days." },
    { value: "4.9/5", label: "Client Satisfaction", text: "Trusted by hiring leaders for repeat engagements." },
    { value: "85%", label: "Offer Acceptance", text: "Strong employer branding drives high acceptance rates." },
  ],
  solution: {
    heading: "Talent Acquisition That Compounds Over Time",
    description:
      "We don't just fill seats — we help you build a sustainable hiring engine with the people, process, and brand to attract top talent on demand.",
    cta: { label: "Schedule a strategy call", href: "/#contact" },
    items: [
      { icon: UserCheck, title: "Executive Search", text: "Confidential, retained search for leadership and director-level roles." },
      { icon: Search, title: "Sourcing as a Service", text: "Dedicated sourcers feeding your pipeline with qualified candidates." },
      { icon: Award, title: "Employer Branding", text: "Career pages, content, and EVP that attract the right talent." },
      { icon: ClipboardCheck, title: "Hiring Process Design", text: "Structured interview loops, scorecards, and SLAs that scale." },
    ],
  },
  comparison: {
    heading: "Why Outsource Talent Acquisition",
    subheading: "Internal TA vs. partnering with HireUp.",
    without: {
      label: "Stretched Internal TA",
      salary: "Slower roadmap",
      time: "60–120 days",
      points: [
        "Recruiters drowning in active reqs",
        "No bandwidth for passive sourcing",
        "Inconsistent candidate experience",
        "Hiring manager fatigue",
        "Limited employer brand investment",
        "Reactive, not strategic",
      ],
    },
    with: {
      label: "TA With HireUp",
      salary: "Predictable hiring",
      time: "30–45 days",
      points: [
        "Embedded recruiters acting as your team",
        "Always-on sourcing across niches",
        "Branded, structured candidate experience",
        "Hiring manager enablement and training",
        "Employer brand and content support",
        "Strategic workforce planning",
      ],
    },
  },
  process: [
    { step: "Step 1", duration: "Week 1", title: "Discovery", text: "Map roles, personas, scorecards, and success metrics." },
    { step: "Step 2", duration: "Week 1–2", title: "Pipeline Build", text: "Sourcing, outreach, and candidate engagement at scale." },
    { step: "Step 3", duration: "Week 2–4", title: "Interviewing", text: "Structured loops with calibrated scorecards." },
    { step: "Step 4", duration: "Week 4+", title: "Offer & Close", text: "Negotiation support and offer-stage candidate care." },
    { step: "Step 5", duration: "Day 1+", title: "Onboarding", text: "Smooth handoff to your people team for ramp-up." },
  ],
  commitment: sharedCommitment,
  faqs: [
    { q: "Can companies outsource talent acquisition entirely?", a: "Yes. Many businesses outsource TA to improve hiring efficiency and access wider talent pools. HireUp acts as an extended hiring partner end-to-end." },
    { q: "What's the difference between TA and staffing?", a: "Staffing fills individual roles. Talent acquisition builds a hiring system — sourcing, branding, process, and analytics — for sustained hiring." },
    { q: "Do you support executive search?", a: "Yes. We run confidential retained searches for VP, Director, and C-suite roles with full market mapping." },
    { q: "How do you measure success?", a: "Time-to-fill, quality-of-hire, offer acceptance rate, candidate NPS, and 6-month retention." },
    { q: "Can you embed recruiters into our team?", a: "Yes. Our embedded RPO model places dedicated recruiters inside your team using your tools and brand." },
  ],
};

export const backgroundVerification: ServiceConfig = {
  slug: "/services/background-verification",
  eyebrow: "Background Verification",
  title: "Comprehensive Employee Background Checks USA",
  description:
    "Confidently hire with verified credentials. From identity and education to employment, criminal, and credit checks — fast, compliant, and FCRA-aligned.",
  primaryCta: { label: "Start a verification", href: "/#contact" },
  secondaryCta: { label: "View check types", href: "#process" },
  heroImage: bgvImg,
  stats: [
    { value: "50,000+", label: "Checks Completed", text: "Verifications processed across industries." },
    { value: "48 hrs", label: "Avg. Turnaround", text: "Most checks delivered in under 48 hours." },
    { value: "100%", label: "FCRA Compliant", text: "Every check follows U.S. compliance and consent norms." },
    { value: "99.7%", label: "Accuracy Rate", text: "Verified-source data with full audit trails." },
  ],
  solution: {
    heading: "Hire With Confidence, Not Guesswork",
    description:
      "Our verification suite covers everything you need to make confident hiring decisions — packaged for speed, accuracy, and compliance.",
    cta: { label: "Request a quote", href: "/#contact" },
    items: [
      { icon: ShieldCheck, title: "Identity Verification", text: "SSN trace, address history, and identity validation." },
      { icon: GraduationCap, title: "Education Checks", text: "Degree and certification verification from issuing institutions." },
      { icon: Building2, title: "Employment History", text: "Direct verification of titles, tenure, and reasons for separation." },
      { icon: FileSearch, title: "Criminal & Credit", text: "County, state, federal, and credit checks aligned to role risk." },
    ],
  },
  comparison: {
    heading: "Why Compliant BGV Matters",
    subheading: "Self-attested vs. HireUp-verified hiring.",
    without: {
      label: "Self-Attested Hiring",
      salary: "Hidden risk",
      time: "Unverified",
      points: [
        "Resume fraud goes undetected",
        "Compliance gaps create legal exposure",
        "No audit trail for decisions",
        "Inconsistent process across teams",
        "Surprise red flags after onboarding",
        "Damaged trust with clients and customers",
      ],
    },
    with: {
      label: "Verified With HireUp",
      salary: "De-risked hires",
      time: "24–72 hours",
      points: [
        "Verified credentials from source",
        "FCRA-compliant consent and adverse action",
        "Full audit trail and reporting dashboard",
        "Standardized, role-based check packages",
        "Red flags surfaced before day one",
        "Stronger trust with clients and regulators",
      ],
    },
  },
  process: [
    { step: "Step 1", duration: "1 hour", title: "Initiate Check", text: "Trigger via dashboard, ATS, or API with candidate consent." },
    { step: "Step 2", duration: "Same day", title: "Candidate Consent", text: "Candidate completes secure consent and document upload." },
    { step: "Step 3", duration: "24–48 hrs", title: "Verification", text: "Identity, education, employment, and criminal checks executed." },
    { step: "Step 4", duration: "Real-time", title: "Reporting", text: "Live status updates and downloadable verified reports." },
    { step: "Step 5", duration: "On adverse", title: "Adverse Action", text: "Compliant adverse-action workflow with timely candidate notice." },
  ],
  commitment: sharedCommitment,
  faqs: [
    { q: "Are your checks FCRA compliant?", a: "Yes. Every check follows FCRA consent, disclosure, and adverse-action requirements." },
    { q: "How fast are background checks?", a: "Most packages complete in 24–72 hours, depending on jurisdictions and component types." },
    { q: "Can you integrate with our ATS?", a: "Yes. We integrate with major ATS platforms via API and pre-built connectors." },
    { q: "What checks do you offer?", a: "Identity, education, employment, criminal (county/state/federal), credit, drug screening, and global watchlist checks." },
    { q: "What if a candidate disputes a result?", a: "We provide a documented dispute resolution workflow with re-verification at no extra cost." },
  ],
};

export const itTraining: ServiceConfig = {
  slug: "/services/it-training",
  eyebrow: "IT Training",
  title: "Training That Prepares Candidates for Real-World Tech Careers",
  description:
    "Hands-on, instructor-led training programs designed to turn aspiring engineers into job-ready professionals. Real projects, real mentorship, real outcomes.",
  primaryCta: { label: "Explore programs", href: "/#contact" },
  secondaryCta: { label: "How it works", href: "#process" },
  heroImage: trainingImg,
  stats: [
    { value: "2,500+", label: "Trainees Graduated", text: "Learners trained and placed across the U.S." },
    { value: "12 weeks", label: "Avg. Cohort Length", text: "Intensive, focused programs with measurable outcomes." },
    { value: "92%", label: "Job-Ready Score", text: "Trainees pass technical assessments at hiring partners." },
    { value: "20+", label: "Specialized Tracks", text: "From cloud and data to QA and full-stack engineering." },
  ],
  // solution: {
  //   heading: "Practical Training, Built Around Real Roles",
  //   description:
  //     "Every cohort is designed with input from hiring partners — so the curriculum maps to the skills companies actually pay for.",
  //   cta: { label: "Apply for the next cohort", href: "/#contact" },
  //   items: [
  //     { icon: Code2, title: "Full-Stack Engineering", text: "JavaScript, React, Node, SQL, and modern deployment workflows." },
  //     { icon: Database, title: "Data & Analytics", text: "SQL, Python, ETL, BI tools, and analytics storytelling." },
  //     { icon: Cloud, title: "Cloud & DevOps", text: "AWS, Docker, Kubernetes, CI/CD, and observability." },
  //     { icon: Cpu, title: "QA & Automation", text: "Manual + automation testing, Selenium, Cypress, and Playwright." },
  //   ],
  // },
  comparison: {
    heading: "Why Choose HireUp Training",
    subheading: "Generic online courses vs. HireUp cohorts.",
    without: {
      label: "Generic Online Courses",
      salary: "Low completion",
      time: "Self-paced",
      points: [
        "No live mentorship or accountability",
        "Outdated curriculum, no employer input",
        "No real projects or portfolio",
        "No interview or placement support",
        "Solo learning, no peer network",
        "Certificate that employers don't recognize",
      ],
    },
    with: {
      label: "HireUp Cohorts",
      salary: "92% job-ready",
      time: "8–12 weeks",
      points: [
        "Live instructors and 1:1 mentorship",
        "Curriculum co-designed with hiring partners",
        "Capstone projects you can showcase",
        "Built-in placement and interview prep",
        "Strong cohort community and alumni network",
        "Direct pipeline into hiring partner roles",
      ],
    },
  },
  process: [
    { step: "Step 1", duration: "Week 0", title: "Apply & Assess", text: "Application, aptitude check, and intro call to align goals." },
    { step: "Step 2", duration: "Week 1–2", title: "Foundations", text: "Core fundamentals, tooling, and habits for engineering work." },
    { step: "Step 3", duration: "Week 3–8", title: "Deep Dive", text: "Track-specific deep dives with weekly hands-on assignments." },
    { step: "Step 4", duration: "Week 9–10", title: "Capstone", text: "Real-world capstone project reviewed by industry mentors." },
    { step: "Step 5", duration: "Week 11+", title: "Placement", text: "Resume, interview prep, and direct hiring-partner introductions." },
  ],
  commitment: sharedCommitment,
  faqs: [
    { q: "Do I need prior coding experience?", a: "Some tracks require basics; others start from foundations. Our intake assessment helps you pick the right cohort." },
    { q: "Is the training online or in-person?", a: "Live online cohorts with recorded sessions, plus optional in-person bootcamp weeks for select tracks." },
    { q: "Do you guarantee placement?", a: "We don't guarantee jobs but offer end-to-end placement support and direct introductions to hiring partners." },
    { q: "What's the typical cost?", a: "Programs vary by track and length. We offer income-share-style and installment plans for eligible learners." },
    { q: "Will I get a certificate?", a: "Yes. Trainees receive a HireUp completion certificate plus capstone portfolio they can share with employers." },
  ],
};

export const allServices: Record<string, ServiceConfig> = {
  "job-placement": jobPlacement,
  "recruitment-staffing": recruitmentStaffing,
  "talent-acquisition": talentAcquisition,
  "background-verification": backgroundVerification,
  "it-training": itTraining,
};
