"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Scale,
  Landmark,
  CreditCard,
  Users,
  Palette,
  LayoutDashboard,
  Code2,
  Layers,
  Headphones,
  ShieldCheck,
  Check,
  X,
} from "lucide-react";
import { FAQ } from "@/components/marketing/FAQ";
import { businessFAQs } from "@/data/faq";
import { partnerPricing } from "@/data/pricing";

const useCases = [
  {
    icon: Building2,
    title: "Accounting Firms",
    description: "Add ITIN services to your tax preparation practice. Serve international clients seamlessly.",
    stat: "60% of our partners",
  },
  {
    icon: Scale,
    title: "Immigration Attorneys",
    description: "Streamline ITIN processing for your clients as part of immigration services.",
    stat: "Growing segment",
  },
  {
    icon: CreditCard,
    title: "Fintech Companies",
    description: "Enable ITIN verification in your onboarding flow via API integration.",
    stat: "API-first",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    description: "Process ITINs for international workers and contractors efficiently.",
    stat: "Bulk processing",
  },
  {
    icon: Landmark,
    title: "Tax Prep Software",
    description: "Integrate ITIN capabilities directly into your existing tax platform.",
    stat: "White-label ready",
  },
];

const features = [
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Your logo, colors, and domain. Clients see your brand, not ours.",
  },
  {
    icon: LayoutDashboard,
    title: "Client Dashboard",
    description: "Track all applications in real-time with a comprehensive management dashboard.",
  },
  {
    icon: Code2,
    title: "REST API",
    description: "Full API access to create applications, upload documents, and receive webhooks.",
  },
  {
    icon: Layers,
    title: "Bulk Processing",
    description: "Submit multiple applications at once via CSV upload or batch API calls.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Account manager and priority support for you and your clients.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Handled",
    description: "We handle all IRS regulations, CAA requirements, and document security.",
  },
];

const codeExample = `// Create an ITIN application via API
const response = await fetch('https://api.itin.io/v1/applications', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    applicant: {
      first_name: 'John',
      last_name: 'Smith',
      date_of_birth: '1990-01-15',
      country_of_citizenship: 'GB',
      reason: 'tax_filing',
    },
    callback_url: 'https://yourapp.com/webhooks/itin',
  }),
});

const { application_id, status } = await response.json();
// => { application_id: "itin_abc123", status: "pending_documents" }`;

export function BusinessContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-dark" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute right-1/3 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-cyan/20 blur-[100px]"
        />
        <div className="container-wide relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              For Partners & Businesses
            </span>
            <h1 className="mt-6 text-display-lg font-bold tracking-tight text-white lg:text-display-xl">
              White-Label ITIN Services
              <br />
              <span className="gradient-text">for Your Clients</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 lg:text-xl">
              Offer ITIN services under your brand. API access, custom dashboard,
              bulk processing. Powered by our IRS-authorized CAA.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-glow"
              >
                Become a Partner
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/api-docs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <Code2 className="h-5 w-5" />
                View API Docs
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Use Cases
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Built for <span className="gradient-text">your industry</span>
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
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                    <useCase.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {useCase.stat}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{useCase.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitelabel Features */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Platform Features
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Everything you need to{" "}
              <span className="gradient-text">scale</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration / API Preview */}
      <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-primary-500/10 blur-[80px]" />
        </div>
        <div className="container-wide relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80">
                API Integration
              </span>
              <h2 className="mt-4 text-display-sm font-bold tracking-tight text-white lg:text-display-md">
                Integrate in <span className="gradient-text">minutes</span>
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Our REST API makes it easy to create ITIN applications, upload
                documents, and receive real-time status updates via webhooks.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Create applications programmatically",
                  "Upload documents via secure endpoints",
                  "Receive webhook notifications",
                  "Sandbox environment for testing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-green/20">
                      <Check className="h-4 w-4 text-accent-green" />
                    </div>
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/api-docs"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300"
              >
                View API Documentation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Code Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950"
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-slate-500">api-example.js</span>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-slate-300">
                <code>{codeExample}</code>
              </pre>
            </motion.div>
          </div>

          {/* Integration Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm">
              Your Platform
            </div>
            <ArrowRight className="h-5 w-5 text-primary-400 sm:rotate-0 rotate-90" />
            <div className="rounded-xl border border-primary-500/30 bg-primary-500/10 px-6 py-3 text-sm font-medium text-primary-300">
              ITIN.io API
            </div>
            <ArrowRight className="h-5 w-5 text-primary-400 sm:rotate-0 rotate-90" />
            <div className="rounded-xl border border-accent-gold/30 bg-accent-gold/10 px-6 py-3 text-sm font-medium text-accent-gold">
              IRS
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Pricing */}
      <section className="section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Partner Pricing
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Plans that <span className="gradient-text">scale with you</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
            {partnerPricing.map((tier, index) => (
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
                  {tier.priceDetail && (
                    <span className="ml-2 text-sm text-slate-500">{tier.priceDetail}</span>
                  )}
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
        faqs={businessFAQs}
        subtitle="Common questions about our whitelabel ITIN partnership program."
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
              Ready to <span className="gradient-text">partner</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              Schedule a demo to see how ITIN.io can help you offer ITIN services
              to your clients.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-glow"
              >
                Schedule a Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/api-docs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50"
              >
                <Code2 className="h-5 w-5" />
                View API Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
