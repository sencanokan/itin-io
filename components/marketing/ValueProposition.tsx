"use client";

import { motion } from "framer-motion";
import { Video, ShieldCheck, FileCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Video Verification",
    description:
      "Verify your identity from home via a quick video call with our IRS-authorized agent. No office visits needed.",
  },
  {
    icon: ShieldCheck,
    title: "Keep Your Passport",
    description:
      "Unlike DIY applications, you never need to mail your passport to the IRS. We certify documents on your behalf.",
  },
  {
    icon: FileCheck,
    title: "Error Prevention",
    description:
      "Our team reviews every application before submission, catching errors that would cause delays or rejections.",
  },
  {
    icon: Zap,
    title: "Faster Processing",
    description:
      "2-4 weeks through our authorized channel vs 8-12 weeks for DIY applications mailed to the IRS.",
  },
];

const comparison = [
  { feature: "Processing Time", caa: "2-4 weeks", diy: "8-12 weeks" },
  { feature: "Passport Required", caa: "Keep yours safe", diy: "Mail to IRS" },
  { feature: "Error Review", caa: "Expert review included", diy: "Self-check" },
  { feature: "Application Support", caa: "Dedicated team", diy: "On your own" },
  { feature: "Status Tracking", caa: "Real-time dashboard", diy: "No tracking" },
  { feature: "Rejection Risk", caa: "Minimized", diy: "Higher" },
];

export function ValueProposition() {
  return (
    <section className="section bg-slate-50">
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
            Why ITIN.io
          </span>
          <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
            The smarter way to{" "}
            <span className="gradient-text">get your ITIN</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            As an IRS-authorized Certifying Acceptance Agent, we make the ITIN
            process faster, safer, and easier than doing it yourself.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-hover rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="mb-6 text-center text-xl font-bold text-slate-900">
            ITIN.io (CAA) vs DIY Application
          </h3>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
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
                    className={index < comparison.length - 1 ? "border-b border-slate-100" : ""}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
