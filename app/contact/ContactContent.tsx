"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageSquare,
  Building2,
  FileText,
  Clock,
  Globe,
} from "lucide-react";

const contactOptions = [
  {
    icon: FileText,
    title: "I need an ITIN",
    description: "Start your individual ITIN application online",
    cta: "Start Application",
    href: "/apply",
    color: "bg-primary-100 text-primary-600",
  },
  {
    icon: Building2,
    title: "I'm a business",
    description: "Explore whitelabel partnership opportunities",
    cta: "Explore Partnership",
    href: "/for-businesses",
    color: "bg-cyan-100 text-cyan-600",
  },
];

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@itin.io",
    href: "mailto:hello@itin.io",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
  {
    icon: Globe,
    label: "Offices",
    value: "Texas, London, Istanbul",
  },
];

export function ContactContent() {
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Have questions about ITINs or our partnership program? We&apos;re here
              to help.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Quick Routing */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto grid max-w-3xl gap-6 lg:grid-cols-2">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={option.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-primary-300 hover:shadow-card-hover"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${option.color}`}>
                    <option.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{option.title}</h3>
                  <p className="mt-2 text-slate-600">{option.description}</p>
                  <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-primary-600 transition-all group-hover:gap-3">
                    {option.cta}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Send us a message
              </h2>
              <p className="mt-2 text-slate-600">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    I&apos;m interested in...
                  </label>
                  <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                    <option>Individual ITIN Application</option>
                    <option>Business Partnership / Whitelabel</option>
                    <option>API Integration</option>
                    <option>ITIN Renewal</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-600"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Contact Info
              </h2>
              <div className="mt-8 space-y-6">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100">
                      <item.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-base font-semibold text-slate-900 hover:text-primary-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-slate-900">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Schedule Call Card */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                <MessageSquare className="h-8 w-8 text-primary-500" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Prefer to talk?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Schedule a free consultation call with our ITIN experts.
                </p>
                <Link
                  href="/apply"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
                >
                  Schedule a Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
