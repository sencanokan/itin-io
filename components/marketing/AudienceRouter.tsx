"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, User, Building2 } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "I Need an ITIN",
    description: "Individual applicant looking to get or renew an ITIN",
    features: [
      "Apply online from anywhere in the world",
      "Keep your passport - no mailing required",
      "Get your ITIN in 3-4 weeks",
    ],
    cta: "Start Application",
    href: "/for-individuals",
    color: "primary",
  },
  {
    icon: Building2,
    title: "I'm a Business",
    description: "Firm or platform looking to offer ITIN services",
    features: [
      "White-label ITIN services under your brand",
      "API integration for seamless workflows",
      "Volume pricing and dedicated support",
    ],
    cta: "Explore Partnership",
    href: "/for-businesses",
    color: "cyan",
  },
];

export function AudienceRouter() {
  return (
    <section className="section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
            Get Started
          </span>
          <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
            How can we <span className="gradient-text">help you</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Whether you need an ITIN for yourself or want to offer ITIN services
            to your clients, we have you covered.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={audience.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-primary-300 hover:shadow-card-hover lg:p-10"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    audience.color === "primary"
                      ? "bg-primary-100 text-primary-600"
                      : "bg-cyan-100 text-cyan-600"
                  }`}
                >
                  <audience.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {audience.title}
                </h3>
                <p className="mt-2 text-slate-600">{audience.description}</p>
                <ul className="mt-6 space-y-3">
                  {audience.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-green"
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
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-2 pt-8 text-base font-semibold text-primary-600 transition-all group-hover:gap-3">
                  {audience.cta}
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
