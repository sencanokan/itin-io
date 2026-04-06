"use client";

import { motion } from "framer-motion";
import { FileText, Upload, Video, CheckCircle } from "lucide-react";

const iconMap = {
  FileText,
  Upload,
  Video,
  CheckCircle,
};

const steps = [
  {
    step: 1,
    title: "Apply Online",
    description: "Complete your application in minutes",
    duration: "10 min",
    icon: "FileText" as keyof typeof iconMap,
    color: "bg-primary-100 text-primary-600",
  },
  {
    step: 2,
    title: "Upload Documents",
    description: "Securely submit your passport & docs",
    duration: "Same day",
    icon: "Upload" as keyof typeof iconMap,
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: 3,
    title: "Video Verification",
    description: "Quick video call with our CAA agent",
    duration: "15 min",
    icon: "Video" as keyof typeof iconMap,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    step: 4,
    title: "Receive Your ITIN",
    description: "We submit to IRS, you get your number",
    duration: "3-4 weeks",
    icon: "CheckCircle" as keyof typeof iconMap,
    color: "bg-green-100 text-green-600",
  },
];

export function ProcessTimeline() {
  return (
    <section className="section">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
            Simple Process
          </span>
          <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
            Get your ITIN in{" "}
            <span className="gradient-text">4 easy steps</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Our streamlined process makes getting your ITIN simple and
            stress-free. Most applicants complete steps 1-3 in a single day.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-slate-200 to-slate-200 lg:block" />
                )}

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-card">
                  {/* Step number */}
                  <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">
                    {step.step}
                  </div>

                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
