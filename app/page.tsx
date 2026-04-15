import { Hero } from "@/components/marketing/Hero";
import { AudienceRouter } from "@/components/marketing/AudienceRouter";
import { ValueProposition } from "@/components/marketing/ValueProposition";
import { ProcessTimeline } from "@/components/marketing/ProcessTimeline";
import { TrustSignals } from "@/components/marketing/TrustSignals";
import { Testimonials } from "@/components/marketing/Testimonials";
import { FAQ } from "@/components/marketing/FAQ";
import { CTASection } from "@/components/marketing/CTASection";
import { homeFAQs } from "@/data/faq";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ITIN.io",
  description:
    "IRS-authorized Certifying Acceptance Agent providing online ITIN application services worldwide.",
  url: "https://itin.io",
  logo: "https://itin.io/images/logo.svg",
  parentOrganization: {
    "@type": "Organization",
    name: "Clemta",
    url: "https://clemta.com",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@itin.io",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ITIN Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Standard ITIN Application",
          description:
            "Complete ITIN application with document verification, W-7 preparation, and IRS submission.",
        },
        price: "349",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premium ITIN Application",
          description:
            "Priority ITIN processing with dedicated agent and expedited review.",
        },
        price: "499",
        priceCurrency: "USD",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
