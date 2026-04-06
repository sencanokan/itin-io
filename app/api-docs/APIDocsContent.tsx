"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Webhook, Key, TestTube } from "lucide-react";

const endpoints = [
  {
    method: "POST",
    path: "/v1/applications",
    description: "Create a new ITIN application",
    methodColor: "bg-green-100 text-green-700",
  },
  {
    method: "GET",
    path: "/v1/applications/:id",
    description: "Get application status and details",
    methodColor: "bg-blue-100 text-blue-700",
  },
  {
    method: "POST",
    path: "/v1/applications/:id/documents",
    description: "Upload identity documents",
    methodColor: "bg-green-100 text-green-700",
  },
  {
    method: "GET",
    path: "/v1/applications",
    description: "List all applications with filters",
    methodColor: "bg-blue-100 text-blue-700",
  },
  {
    method: "POST",
    path: "/v1/webhooks",
    description: "Configure webhook endpoints",
    methodColor: "bg-green-100 text-green-700",
  },
  {
    method: "DELETE",
    path: "/v1/applications/:id",
    description: "Cancel a pending application",
    methodColor: "bg-red-100 text-red-700",
  },
];

const curlExample = `curl -X POST https://api.itin.io/v1/applications \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "applicant": {
      "first_name": "John",
      "last_name": "Smith",
      "date_of_birth": "1990-01-15",
      "country_of_citizenship": "GB",
      "reason": "tax_filing"
    },
    "callback_url": "https://yourapp.com/webhooks/itin"
  }'`;

const jsExample = `import { ITINClient } from '@itin-io/sdk';

const client = new ITINClient('sk_live_...');

// Create application
const app = await client.applications.create({
  applicant: {
    first_name: 'John',
    last_name: 'Smith',
    date_of_birth: '1990-01-15',
    country_of_citizenship: 'GB',
    reason: 'tax_filing',
  },
  callback_url: 'https://yourapp.com/webhooks/itin',
});

console.log(app.id);     // "itin_abc123"
console.log(app.status); // "pending_documents"`;

const pythonExample = `from itin_io import Client

client = Client(api_key="sk_live_...")

# Create application
app = client.applications.create(
    applicant={
        "first_name": "John",
        "last_name": "Smith",
        "date_of_birth": "1990-01-15",
        "country_of_citizenship": "GB",
        "reason": "tax_filing",
    },
    callback_url="https://yourapp.com/webhooks/itin",
)

print(app.id)     # "itin_abc123"
print(app.status) # "pending_documents"`;

const webhookExample = `// Webhook payload example
{
  "event": "application.status_changed",
  "data": {
    "application_id": "itin_abc123",
    "status": "submitted_to_irs",
    "previous_status": "documents_verified",
    "updated_at": "2024-03-15T10:30:00Z"
  }
}`;

const features = [
  {
    icon: Key,
    title: "API Key Authentication",
    description: "Secure API keys with test and live modes. Rotate keys without downtime.",
  },
  {
    icon: Webhook,
    title: "Real-time Webhooks",
    description: "Receive instant notifications when application status changes.",
  },
  {
    icon: TestTube,
    title: "Sandbox Environment",
    description: "Test your integration with our sandbox before going live.",
  },
  {
    icon: Code2,
    title: "SDKs & Libraries",
    description: "Official SDKs for JavaScript, Python, and more. Community libraries available.",
  },
];

export function APIDocsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-dark" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-cyan/20 blur-[100px]"
        />
        <div className="container-wide relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              <Code2 className="h-4 w-4" />
              API Documentation
            </span>
            <h1 className="mt-6 text-display-lg font-bold tracking-tight text-white lg:text-display-xl">
              ITIN.io <span className="gradient-text">API</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Integrate ITIN services into your application with our REST API.
              Create applications, upload documents, and track status
              programmatically.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-glow"
              >
                Request API Access
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Features */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
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

      {/* Endpoints */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              API <span className="gradient-text">Endpoints</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            {endpoints.map((endpoint, index) => (
              <div
                key={endpoint.path}
                className={`flex items-center gap-4 px-6 py-4 ${
                  index < endpoints.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <span className={`rounded-md px-3 py-1 text-xs font-bold ${endpoint.methodColor}`}>
                  {endpoint.method}
                </span>
                <code className="flex-1 text-sm font-medium text-slate-900">
                  {endpoint.path}
                </code>
                <span className="hidden text-sm text-slate-500 sm:block">
                  {endpoint.description}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-primary-500/10 blur-[80px]" />
        </div>
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-display-sm font-bold tracking-tight text-white lg:text-display-md">
              Code <span className="gradient-text">Examples</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Get started quickly with examples in your preferred language.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* cURL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950"
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-slate-500">cURL</span>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-slate-300">
                <code>{curlExample}</code>
              </pre>
            </motion.div>

            {/* JavaScript */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950"
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-slate-500">JavaScript</span>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-slate-300">
                <code>{jsExample}</code>
              </pre>
            </motion.div>

            {/* Python */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950"
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-slate-500">Python</span>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-slate-300">
                <code>{pythonExample}</code>
              </pre>
            </motion.div>

            {/* Webhook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950"
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-slate-500">Webhook Payload</span>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-slate-300">
                <code>{webhookExample}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Ready to <span className="gradient-text">integrate</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              Request API access and start building your ITIN integration today.
              Our team will help you get set up.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-glow"
              >
                Request API Access
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/for-businesses"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50"
              >
                View Partner Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
