"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/data/faq";

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

export function FAQ({
  faqs,
  title = "Frequently asked questions",
  subtitle = "Everything you need to know about getting your ITIN. Can't find the answer? Contact our team.",
  badge = "FAQ",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
            {badge}
          </span>
          <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
            {title.includes("questions") ? (
              <>
                Frequently asked{" "}
                <span className="gradient-text">questions</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {subtitle}
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-left transition-all hover:border-primary-200 hover:bg-primary-50/30"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>
                <div
                  className={cn(
                    "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all",
                    openIndex === index
                      ? "bg-primary-500 text-white"
                      : "bg-slate-100 text-slate-600"
                  )}
                >
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600">
            Still have questions?{" "}
            <a
              href="/contact"
              className="font-semibold text-primary-600 hover:text-primary-700"
            >
              Get in touch with our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
