import type { Metadata } from "next";
import { BusinessContent } from "./BusinessContent";

export const metadata: Metadata = {
  title: "ITIN for Businesses - Whitelabel ITIN Services",
  description:
    "Offer ITIN services under your brand. API integration, custom dashboard, bulk processing for accounting firms, immigration attorneys, and fintech companies.",
};

export default function ForBusinessesPage() {
  return <BusinessContent />;
}
