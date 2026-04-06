"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  UserPlus,
  Upload,
  Video,
  Send,
  CheckCircle,
  Clock,
  Shield,
  AlertCircle,
} from "lucide-react";
import { FAQ } from "@/components/marketing/FAQ";
import { homeFAQs } from "@/data/faq";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Account & Apply",
    description:
      "Sign up for free and complete our simple online application. Answer a few questions about why you need an ITIN, and our system auto-generates your W-7 form.",
    duration: "5-10 minutes",
    tips: [
      "Have your passport ready for reference",
      "Know your reason for needing an ITIN",
      "Your W-7 is auto-filled based on your answers",
    ],
  },
  {
    icon: Upload,
    title: "Upload Your Documents",
    description:
      "Upload a clear photo or scan of your valid passport through our secure encrypted portal. Our team reviews all documents within 24 hours.",
    duration: "Same day review",
    tips: [
      "Passport is the only document most applicants need",
      "Make sure the photo is clear and all text is readable",
      "We'll notify you immediately if anything needs correction",
    ],
  },
  {
    icon: Video,
    title: "Video Identity Verification",
    description:
      "Schedule a short video call with our IRS-authorized Certifying Acceptance Agent. We verify your identity and certify your documents so you never need to mail your passport.",
    duration: "15 minutes",
    tips: [
      "Available Monday-Friday across multiple time zones",
      "Have your original passport ready to show on camera",
      "The call typically takes only 10-15 minutes",
    ],
  },
  {
    icon: Send,
    title: "We Submit to the IRS",
    description:
      "Your completed W-7 form, certified documents, and tax return are packaged and submitted to the IRS through our authorized submission channel.",
    duration: "1-2 business days",
    tips: [
      "You receive a confirmation and tracking reference",
      "No action needed from you at this stage",
      "We handle all IRS communication on your behalf",
    ],
  },
  {
    icon: CheckCircle,
    title: "Receive Your ITIN",
    description:
      "The IRS processes your application and mails your ITIN notice (CP565) to your address. We notify you as soon as it's issued.",
    duration: "2-4 weeks after submission",
    tips: [
      "Your ITIN is a permanent 9-digit number starting with 9",
      "Use it for all U.S. tax filings and financial activities",
      "Renew every 3 years if actively used",
    ],
  },
];

const comparison = [
  {
    feature: "Total Processing Time",
    caa: "2-4 weeks",
    diy: "8-12 weeks",
  },
  {
    feature: "Passport Handling",
    caa: "Keep your passport (video verification)",
    diy: "Mail original to IRS for 8-12 weeks",
  },
  {
    feature: "Application Review",
    caa: "Expert review catches errors before submission",
    diy: "No review - errors cause rejection & restart",
  },
  {
    feature: "Form W-7 Completion",
    caa: "Auto-generated from your answers",
    diy: "Fill out complex form manually",
  },
  {
    feature: "Status Tracking",
    caa: "Real-time dashboard with notifications",
    diy: "No tracking available",
  },
  {
    feature: "Support",
    caa: "Dedicated team throughout the process",
    diy: "IRS phone line (long wait times)",
  },
  {
    feature: "Rejection Handling",
    caa: "We fix and resubmit at no extra cost",
    diy: "Start over from scratch",
  },
  {
    feature: "Cost",
    caa: "Starting at $349",
    diy: "Free (but risk of costly mistakes)",
  },
];

export function HowItWorksContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-dark" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[100px]"
        />
        <div className="container-wide relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              How It Works
            </span>
            <h1 className="mt-6 text-display-lg font-bold tracking-tight text-white lg:text-display-xl">
              Get your ITIN in{" "}
              <span className="gradient-text">5 simple steps</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Our streamlined process makes getting your ITIN simple and
              stress-free. Most applicants complete steps 1-3 in a single day.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-tight">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex gap-6 rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
                  {/* Step indicator */}
                  <div className="hidden flex-col items-center sm:flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100">
                      <step.icon className="h-7 w-7 text-primary-600" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="mt-4 h-full w-0.5 bg-gradient-to-b from-primary-200 to-slate-200" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white sm:hidden">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                        <Clock className="h-3 w-3" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-slate-600">{step.description}</p>

                    {/* Tips */}
                    <div className="mt-4 rounded-xl bg-slate-50 p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Tips
                      </p>
                      <ul className="space-y-2">
                        {step.tips.map((tip) => (
                          <li
                            key={tip}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAA vs DIY Comparison */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Comparison
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              ITIN.io vs <span className="gradient-text">doing it yourself</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary-600">
                    ITIN.io (CAA)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                    DIY (Mail to IRS)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={
                      index < comparison.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-primary-600">
                      {row.caa}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {row.diy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={homeFAQs} />

      {/* CTA */}
      <section className="section bg-slate-50">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Ready to <span className="gradient-text">get started</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              Start your ITIN application today. Our IRS-authorized team is
              ready to help.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-glow"
              >
                Apply Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                IRS Authorized
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                2-4 Week Processing
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
