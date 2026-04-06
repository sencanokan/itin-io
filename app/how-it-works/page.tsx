import type { Metadata } from "next";
import { HowItWorksContent } from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how to get your ITIN in 4 easy steps. Apply online, upload documents, verify via video call, and receive your ITIN in 2-4 weeks.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
