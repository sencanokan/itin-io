import type { Metadata } from "next";
import { APIDocsContent } from "./APIDocsContent";

export const metadata: Metadata = {
  title: "API Documentation",
  description:
    "ITIN.io REST API documentation. Create ITIN applications, upload documents, and track status programmatically.",
};

export default function APIDocsPage() {
  return <APIDocsContent />;
}
