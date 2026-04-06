import { Hero } from "@/components/marketing/Hero";
import { AudienceRouter } from "@/components/marketing/AudienceRouter";
import { ValueProposition } from "@/components/marketing/ValueProposition";
import { ProcessTimeline } from "@/components/marketing/ProcessTimeline";
import { TrustSignals } from "@/components/marketing/TrustSignals";
import { Testimonials } from "@/components/marketing/Testimonials";
import { FAQ } from "@/components/marketing/FAQ";
import { CTASection } from "@/components/marketing/CTASection";
import { homeFAQs } from "@/data/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <AudienceRouter />
      <ValueProposition />
      <ProcessTimeline />
      <TrustSignals />
      <Testimonials />
      <FAQ faqs={homeFAQs} />
      <CTASection />
    </>
  );
}
