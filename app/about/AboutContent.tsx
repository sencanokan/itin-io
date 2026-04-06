"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  Award,
  MapPin,
  Clock,
} from "lucide-react";

const stats = [
  { value: "10,000+", label: "ITINs Processed", icon: Award },
  { value: "120+", label: "Countries Served", icon: Globe },
  { value: "99.2%", label: "Success Rate", icon: ShieldCheck },
  { value: "3-4 wk", label: "Avg. Processing", icon: Clock },
];

const offices = [
  { city: "Texas", country: "United States", role: "Headquarters & IRS Operations" },
  { city: "London", country: "United Kingdom", role: "European Operations" },
  { city: "Istanbul", country: "Turkey", role: "Global Support Center" },
];

const values = [
  {
    title: "Compliance First",
    description: "We maintain the highest standards of IRS compliance. Every application is reviewed by authorized agents.",
  },
  {
    title: "Global Access",
    description: "Anyone, anywhere in the world should be able to access U.S. tax services easily and affordably.",
  },
  {
    title: "Transparency",
    description: "No hidden fees, no surprises. Clear pricing, real-time tracking, and honest communication throughout.",
  },
  {
    title: "Security",
    description: "Your personal data and identity documents are protected with enterprise-grade encryption and strict protocols.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-dark" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[100px]"
        />
        <div className="container-wide relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-4 py-2 text-sm text-accent-gold backdrop-blur-sm">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
              IRS-Authorized Certifying Acceptance Agent
            </span>
            <h1 className="mt-6 text-display-lg font-bold tracking-tight text-white lg:text-display-xl">
              Powered by{" "}
              <span className="gradient-text">Clemta</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 lg:text-xl">
              We&apos;re on a mission to make U.S. tax identification accessible to
              everyone, everywhere in the world.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* IRS Authorization */}
      <section className="section">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-accent-gold/20 bg-accent-gold/5 p-8 lg:p-12"
          >
            <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:gap-8">
              <div className="mb-6 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-gold/20 lg:mb-0">
                <svg className="h-10 w-10 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  What does IRS-Authorized mean?
                </h2>
                <p className="mt-3 text-slate-600">
                  ITIN.io is operated by Clemta, an IRS-authorized Certifying
                  Acceptance Agent (CAA). This is a special designation granted by
                  the Internal Revenue Service that allows us to verify identity
                  documents and certify them on behalf of applicants. This means
                  you never need to mail your original passport to the IRS — we
                  verify it via a secure video call and submit certified copies
                  directly.
                </p>
                <p className="mt-3 text-slate-600">
                  Only authorized CAAs can provide this level of service. This
                  authorization ensures your application is handled with the
                  highest standards of compliance and security.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                  <stat.icon className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Our Story
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Making ITIN accessible <span className="gradient-text">globally</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl space-y-4 text-lg text-slate-600"
          >
            <p>
              Clemta was founded with a simple belief: starting and managing a U.S.
              business should be accessible to entrepreneurs worldwide. As we helped
              thousands of international business owners form companies in the U.S.,
              we saw firsthand how challenging the ITIN process was.
            </p>
            <p>
              Applicants were forced to mail their passports internationally, wait
              months for processing, and navigate complex IRS forms without guidance.
              Many applications were rejected due to simple errors.
            </p>
            <p>
              We built ITIN.io to solve this problem. By becoming an IRS-authorized
              Certifying Acceptance Agent, we can verify documents via video call,
              prepare error-free applications, and submit directly through authorized
              channels — cutting processing time in half and eliminating the need to
              mail passports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Our <span className="gradient-text">values</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Global Presence
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Offices <span className="gradient-text">worldwide</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-3">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{office.city}</h3>
                <p className="text-sm text-slate-500">{office.country}</p>
                <p className="mt-2 text-xs text-slate-400">{office.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-50">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Ready to <span className="gradient-text">work with us</span>?
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-glow"
              >
                Apply for ITIN
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
