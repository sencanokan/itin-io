import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-16 lg:py-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-display-sm font-bold tracking-tight lg:text-display-md">
              Ready to get your{" "}
              <span className="gradient-text">ITIN</span>?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Join thousands of applicants worldwide who have obtained their ITIN
              through our IRS-authorized service. Get started in minutes.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600"
              >
                Apply Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-stripe">
                <span className="text-xl font-bold text-white">i</span>
              </div>
              <span className="text-2xl font-bold text-white">ITIN.io</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              IRS-authorized Certifying Acceptance Agent. Get your ITIN fast and
              easy from anywhere in the world. Powered by Clemta.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:hello@itin.io"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                hello@itin.io
              </a>
            </div>
            {/* IRS Authorized Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-4 py-2 text-sm text-accent-gold">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
              IRS-Authorized CAA
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white">Stay Updated</h3>
            <p className="mt-4 text-sm text-slate-400">
              Get the latest ITIN updates and tax tips delivered to your inbox.
            </p>
            <form className="mt-4 space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} ITIN.io by Clemta. All rights
              reserved.
            </p>
            <p className="text-sm text-slate-500">
              IRS-Authorized Certifying Acceptance Agent
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
