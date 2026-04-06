"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { individualPricing, partnerPricing } from "@/data/pricing";
import type { PricingTier } from "@/data/pricing";
import { FAQ } from "@/components/marketing/FAQ";
import { homeFAQs } from "@/data/faq";

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative rounded-2xl border p-8",
        tier.highlighted
          ? "border-primary-300 bg-white shadow-card-hover"
          : "border-slate-200 bg-white"
      )}
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
        {tier.priceDetail && (
          <span className="ml-2 text-sm text-slate-500">
            {tier.priceDetail}
          </span>
        )}
      </div>
      <Link
        href={tier.ctaHref}
        className={cn(
          "mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all",
          tier.highlighted
            ? "bg-primary-500 text-white hover:bg-primary-600"
            : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
        )}
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
            <span
              className={
                feature.included ? "text-slate-700" : "text-slate-400"
              }
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function PricingContent() {
  const [tab, setTab] = useState<"individual" | "partner">("individual");

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
            <h1 className="text-display-lg font-bold tracking-tight text-white lg:text-display-xl">
              Simple, transparent{" "}
              <span className="gradient-text">pricing</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              No hidden fees. Choose the plan that works for you.
            </p>

            {/* Tab Toggle */}
            <div className="mt-10 inline-flex rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
              <button
                onClick={() => setTab("individual")}
                className={cn(
                  "rounded-lg px-6 py-2.5 text-sm font-semibold transition-all",
                  tab === "individual"
                    ? "bg-primary-500 text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                Individual
              </button>
              <button
                onClick={() => setTab("partner")}
                className={cn(
                  "rounded-lg px-6 py-2.5 text-sm font-semibold transition-all",
                  tab === "partner"
                    ? "bg-primary-500 text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                Partner
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Pricing Cards */}
      <section className="section">
        <div className="container-wide">
          {tab === "individual" ? (
            <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
              {individualPricing.map((tier, index) => (
                <PricingCard key={tier.name} tier={tier} index={index} />
              ))}
            </div>
          ) : (
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
              {partnerPricing.map((tier, index) => (
                <PricingCard key={tier.name} tier={tier} index={index} />
              ))}
            </div>
          )}

          {/* Money-back guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600">
              All plans include a satisfaction guarantee.{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                Questions? Contact us
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={homeFAQs.slice(0, 6)}
        subtitle="Common questions about our pricing and services."
      />
    </>
  );
}
