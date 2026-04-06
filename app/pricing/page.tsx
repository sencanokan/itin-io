import type { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent ITIN service pricing for individuals and business partners. Starting from $349 per application.",
};

export default function PricingPage() {
  return <PricingContent />;
}
