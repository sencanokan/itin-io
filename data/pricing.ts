export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceDetail?: string;
  features: PricingFeature[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
}

export const individualPricing: PricingTier[] = [
  {
    name: "Standard",
    description: "Everything you need to get your ITIN",
    price: "$349",
    priceDetail: "per application",
    features: [
      { text: "Complete W-7 form preparation", included: true },
      { text: "Document review & verification", included: true },
      { text: "Video identity verification", included: true },
      { text: "IRS submission & tracking", included: true },
      { text: "Email support", included: true },
      { text: "Processing in 4-6 weeks", included: true },
      { text: "Dedicated agent", included: false },
      { text: "Priority processing", included: false },
    ],
    cta: "Get Started",
    ctaHref: "/apply",
  },
  {
    name: "Premium",
    description: "Fastest processing with dedicated support",
    price: "$499",
    priceDetail: "per application",
    features: [
      { text: "Complete W-7 form preparation", included: true },
      { text: "Document review & verification", included: true },
      { text: "Video identity verification", included: true },
      { text: "IRS submission & tracking", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Priority processing (3-4 weeks)", included: true },
      { text: "Dedicated agent", included: true },
      { text: "Family application discount", included: true },
    ],
    cta: "Get Started",
    ctaHref: "/apply",
    highlighted: true,
    badge: "Most Popular",
  },
];

export const partnerPricing: PricingTier[] = [
  {
    name: "Starter",
    description: "For firms getting started with ITIN services",
    price: "$199",
    priceDetail: "per application",
    features: [
      { text: "Up to 25 applications/month", included: true },
      { text: "Branded client portal", included: true },
      { text: "Application tracking dashboard", included: true },
      { text: "Email support", included: true },
      { text: "Standard processing", included: true },
      { text: "API access", included: false },
      { text: "Custom domain", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Become a Partner",
    ctaHref: "/contact",
  },
  {
    name: "Growth",
    description: "For growing firms with regular ITIN needs",
    price: "$149",
    priceDetail: "per application",
    features: [
      { text: "Up to 100 applications/month", included: true },
      { text: "Branded client portal", included: true },
      { text: "Application tracking dashboard", included: true },
      { text: "Priority support", included: true },
      { text: "Priority processing", included: true },
      { text: "REST API access", included: true },
      { text: "Custom domain", included: true },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Become a Partner",
    ctaHref: "/contact",
    highlighted: true,
    badge: "Best Value",
  },
  {
    name: "Enterprise",
    description: "Custom solutions for high-volume partners",
    price: "Custom",
    priceDetail: "volume-based pricing",
    features: [
      { text: "Unlimited applications", included: true },
      { text: "Full whitelabel solution", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Priority processing", included: true },
      { text: "Full API access + webhooks", included: true },
      { text: "Custom domain + branding", included: true },
      { text: "Dedicated account manager", included: true },
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
  },
];
