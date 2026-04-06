import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ITIN.io. Contact us for individual ITIN applications, partnership inquiries, or general questions.",
};

export default function ContactPage() {
  return <ContactContent />;
}
