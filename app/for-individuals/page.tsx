import type { Metadata } from "next";
import { IndividualsContent } from "./IndividualsContent";

export const metadata: Metadata = {
  title: "ITIN for Individuals",
  description:
    "Get your Individual Taxpayer Identification Number online. IRS-authorized processing, no passport mailing, 2-4 week turnaround. Apply from anywhere in the world.",
};

export default function ForIndividualsPage() {
  return <IndividualsContent />;
}
