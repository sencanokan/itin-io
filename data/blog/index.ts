export type { BlogPost } from "./types";

// Import all posts - add new posts here
import itinVsSsn from "./posts/itin-vs-ssn";
import itinRenewal from "./posts/itin-renewal";
import itinCost from "./posts/itin-cost";
import itinForLlc from "./posts/itin-for-llc";
import itinBankAccount from "./posts/itin-bank-account";
import itinProcessingTime from "./posts/itin-processing-time";
import itinChecklist from "./posts/itin-checklist";
import itinExpired from "./posts/itin-expired";

// All posts sorted by date (newest first)
export const blogPosts = [
  itinExpired,
  itinChecklist,
  itinProcessingTime,
  itinBankAccount,
  itinForLlc,
  itinCost,
  itinRenewal,
  itinVsSsn,
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs() {
  return blogPosts.map((post) => post.slug);
}
