import type { Metadata } from "next";
import { ApplyContent } from "./ApplyContent";

export const metadata: Metadata = {
  title: "Apply for ITIN",
  description:
    "Start your ITIN application online. Check your eligibility and begin the process in minutes. IRS-authorized processing.",
};

export default function ApplyPage() {
  return <ApplyContent />;
}
