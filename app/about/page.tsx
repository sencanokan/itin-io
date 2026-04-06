import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "ITIN.io is powered by Clemta, an IRS-authorized Certifying Acceptance Agent with offices in Texas, London, and Istanbul. Learn about our mission and team.",
};

export default function AboutPage() {
  return <AboutContent />;
}
