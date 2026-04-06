"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Building2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 p-8 md:p-12 lg:p-16"
        >
          {/* Background decorations */}
          <div className="absolute left-0 top-0 h-full w-full">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-accent-cyan/20 blur-3xl" />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Content */}
          <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Text */}
            <div>
              <h2 className="text-display-sm font-bold tracking-tight text-white lg:text-display-md">
                Ready to get your{" "}
                <span className="gradient-text">ITIN</span>?
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Start your application today or explore partnership
                opportunities. Our IRS-authorized team is ready to help.
              </p>

              {/* Features */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "IRS-authorized service",
                  "No passport mailing",
                  "3-4 week processing",
                  "100% online process",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <svg
                        className="h-5 w-5 text-accent-green"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/apply"
                className="group flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Apply Now</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Start your ITIN application in minutes
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary-400 transition-all group-hover:gap-3">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>

              <Link
                href="/for-businesses"
                className="group flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/20">
                  <Building2 className="h-6 w-6 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Become a Partner
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Offer ITIN services under your brand
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-accent-cyan transition-all group-hover:gap-3">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
