"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  DollarSign,
  Home,
  Briefcase,
  GraduationCap,
  Users,
  FileText,
  Upload,
  Video,
  Send,
  CheckCircle,
  UserPlus,
  Shield,
  Clock,
  Check,
  X,
} from "lucide-react";
import { FAQ } from "@/components/marketing/FAQ";
import { individualFAQs } from "@/data/faq";
import { individualPricing } from "@/data/pricing";

const useCases = [
  {
    icon: DollarSign,
    title: "U.S. Income",
    description: "Non-residents earning income from U.S. sources",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Foreign investors in U.S. property",
  },
  {
    icon: Briefcase,
    title: "Business Owners",
    description: "Non-resident owners of U.S. businesses",
  },
  {
    icon: GraduationCap,
    title: "Tax Treaty Benefits",
    description: "Claiming tax treaty benefits with the U.S.",
  },
  {
    icon: Users,
    title: "Spouses & Dependents",
    description: "Family members on a U.S. tax return",
  },
  {
    icon: FileText,
    title: "Bank Accounts",
    description: "Opening U.S. bank or financial accounts",
  },
];

const detailedSteps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    description: "Sign up and start your application",
    detail: "Create a free account, answer a few questions about why you need an ITIN, and we auto-fill your W-7 form.",
    duration: "5-10 minutes",
  },
  {
    icon: Upload,
    title: "Upload Your Documents",
    description: "Submit required identity documents",
    detail: "Upload a clear photo or scan of your valid passport. Our team reviews documents within 24 hours.",
    duration: "Same day review",
  },
  {
    icon: Video,
    title: "Video Verification",
    description: "Meet with our IRS-authorized agent",
    detail: "Book a short video call for identity verification. Available Monday-Friday, multiple time zones.",
    duration: "15 minutes",
  },
  {
    icon: Send,
    title: "IRS Submission",
    description: "We handle the paperwork",
    detail: "Your W-7, certified documents, and tax return are submitted to the IRS through our authorized channel.",
    duration: "1-2 business days",
  },
  {
    icon: CheckCircle,
    title: "Receive Your ITIN",
    description: "Get your tax identification number",
    detail: "The IRS processes your application and mails your ITIN notice. We notify you as soon as it's issued.",
    duration: "3-4 weeks",
  },
];

const documents = [
  { name: "Valid Passport", required: true, note: "Primary document - proves identity and foreign status" },
  { name: "Form W-7", required: true, note: "We complete this for you automatically" },
  { name: "Federal Tax Return", required: true, note: "Or qualifying exception documentation" },
  { name: "National ID Card", required: false, note: "Alternative if no passport available" },
  { name: "U.S. Driver's License", required: false, note: "Supporting document if needed" },
  { name: "Birth Certificate", required: false, note: "For dependent applications" },
];

export function IndividualsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-dark" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute left-1/3 top-1/3 h-[400px] w-[400px] rounded-full bg-primary-500/30 blur-[100px]"
        />
        <div className="container-wide relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              For Individuals
            </span>
            <h1 className="mt-6 text-display-lg font-bold tracking-tight text-white lg:text-display-xl">
              Get Your ITIN
              <br />
              <span className="gradient-text">Without the Hassle</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 lg:text-xl">
              Apply online from anywhere in the world. Our IRS-authorized team
              handles everything so you can focus on what matters.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-glow"
              >
                Start Application
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Who Needs an ITIN */}
      <section className="section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Who Needs an ITIN
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Is an ITIN <span className="gradient-text">right for you</span>?
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                  <useCase.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{useCase.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="section bg-slate-50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Step by Step
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              How it <span className="gradient-text">works</span>
            </h2>
          </motion.div>
          <div className="mt-12 space-y-6">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                    <step.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  {index < detailedSteps.length - 1 && (
                    <div className="mt-4 h-full w-0.5 bg-slate-200" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{step.description}</p>
                  <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Requirements */}
      <section className="section" id="documents">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Documents
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              What you <span className="gradient-text">need</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Most applicants only need a valid passport. We handle the W-7 form for you.
            </p>
          </motion.div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {documents.map((doc, index) => (
              <div
                key={doc.name}
                className={`flex items-center gap-4 px-6 py-4 ${
                  index < documents.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  doc.required ? "bg-green-100" : "bg-slate-100"
                }`}>
                  {doc.required ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <X className="h-4 w-4 text-slate-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{doc.name}</p>
                  <p className="text-sm text-slate-500">{doc.note}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                  doc.required
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-100 text-slate-500"
                }`}>
                  {doc.required ? "Required" : "If needed"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Pricing
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Simple, transparent{" "}
              <span className="gradient-text">pricing</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
            {individualPricing.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-primary-300 bg-white shadow-card-hover"
                    : "border-slate-200 bg-white"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-semibold text-white">
                    {tier.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{tier.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                  <span className="ml-2 text-sm text-slate-500">{tier.priceDetail}</span>
                </div>
                <Link
                  href={tier.ctaHref}
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-primary-500 text-white hover:bg-primary-600"
                      : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 flex-shrink-0 text-accent-green" />
                      ) : (
                        <X className="h-5 w-5 flex-shrink-0 text-slate-300" />
                      )}
                      <span className={feature.included ? "text-slate-700" : "text-slate-400"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={individualFAQs}
        subtitle="Common questions about applying for an ITIN as an individual."
      />

      {/* CTA */}
      <section className="section bg-slate-50">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Ready to <span className="gradient-text">apply</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              Start your ITIN application today. Most applicants complete the
              online steps in under 30 minutes.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-glow"
              >
                Start Application
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                IRS Authorized
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                3-4 Week Processing
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
