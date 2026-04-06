export interface FAQItem {
  question: string;
  answer: string;
}

export const homeFAQs: FAQItem[] = [
  {
    question: "What is an ITIN and who needs one?",
    answer:
      "An Individual Taxpayer Identification Number (ITIN) is a 9-digit number issued by the IRS for federal tax purposes. It's required for non-residents and resident aliens who cannot obtain a Social Security Number (SSN) but have U.S. tax filing obligations. This includes foreign nationals with U.S. income, non-resident business owners, and dependents or spouses of U.S. taxpayers.",
  },
  {
    question: "How long does it take to get an ITIN through ITIN.io?",
    answer:
      "As an IRS-authorized Certifying Acceptance Agent (CAA), we typically process ITIN applications in 2-4 weeks. During peak tax season (January-April), processing may take 8-10 weeks. This is significantly faster than DIY applications which take 8-12 weeks, since we submit directly through authorized channels.",
  },
  {
    question: "Do I need to mail my passport to the IRS?",
    answer:
      "No! This is one of the biggest advantages of using a Certifying Acceptance Agent like ITIN.io. We verify your identity documents via secure video call and certify them on your behalf. You keep your passport at all times. DIY applicants must mail their original passport to the IRS and wait 8-12 weeks to get it back.",
  },
  {
    question: "Can I apply from outside the United States?",
    answer:
      "Absolutely. Our entire process is designed for remote applicants. You can complete your application online from anywhere in the world. Document verification is done via secure video conference, so you never need to visit a U.S. office or mail any documents internationally.",
  },
  {
    question: "What is a Certifying Acceptance Agent (CAA)?",
    answer:
      "A CAA is an individual or organization authorized by the IRS to assist foreign nationals in obtaining ITINs. CAAs have special authority to verify and certify identity documents, which means applicants don't need to mail original documents to the IRS. ITIN.io is powered by Clemta, an IRS-authorized CAA.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "The primary document is a valid passport, which proves both identity and foreign status. If you don't have a passport, you'll need two alternative documents such as a national ID card, U.S. driver's license, or birth certificate. All documents must be originals or certified copies from the issuing agency.",
  },
  {
    question: "How much does it cost to get an ITIN?",
    answer:
      "The IRS does not charge a fee for issuing an ITIN. Our professional service fee covers the complete application process including form preparation, document verification, submission, and tracking. Visit our pricing page for current rates.",
  },
  {
    question: "Do ITINs expire?",
    answer:
      "Yes, ITINs that have not been used on a federal tax return at least once in the last three consecutive years expire. Additionally, ITINs with middle digits 70-88, 90-92, and 94-99 have already expired unless renewed. We also offer ITIN renewal services.",
  },
];

export const individualFAQs: FAQItem[] = [
  {
    question: "How do I know if I need an ITIN?",
    answer:
      "You need an ITIN if you have U.S. tax filing or reporting obligations and are not eligible for a Social Security Number. Common scenarios include: earning rental income from U.S. property, receiving U.S.-sourced investment income, being claimed as a dependent on a U.S. tax return, or opening certain U.S. bank accounts.",
  },
  {
    question: "Can I use an ITIN to work in the United States?",
    answer:
      "No, an ITIN does not authorize you to work in the United States. It is only for tax purposes. If you need work authorization, you must apply for the appropriate visa or work permit through U.S. Citizenship and Immigration Services (USCIS).",
  },
  {
    question: "What happens after I submit my application?",
    answer:
      "After submission, the IRS reviews your application. You'll receive a notice with your ITIN by mail, typically within 2-4 weeks when filed through our CAA service. We provide status updates throughout the process so you always know where your application stands.",
  },
  {
    question: "Can I apply for an ITIN for my spouse or dependents?",
    answer:
      "Yes, you can apply for ITINs for your spouse and dependents who need them for tax purposes. We offer family application packages that make it easy to submit multiple applications together.",
  },
  {
    question: "What if my ITIN application is rejected?",
    answer:
      "Our CAA service includes thorough document review and error prevention, which significantly reduces rejection risk. However, if your application is rejected, we'll work with you to understand the reason, correct any issues, and resubmit at no additional charge.",
  },
  {
    question: "Is the video verification process secure?",
    answer:
      "Yes, our video verification uses end-to-end encrypted connections. Your identity documents are only viewed during the live session by our IRS-authorized agents. We follow strict data protection protocols and never store images of your documents after verification is complete.",
  },
];

export const businessFAQs: FAQItem[] = [
  {
    question: "What is whitelabel ITIN service?",
    answer:
      "Our whitelabel service allows your business to offer ITIN application services under your own brand. Your clients interact with your branded portal while we handle the CAA processing, IRS submission, and compliance in the background. It's perfect for accounting firms, immigration attorneys, and fintech companies.",
  },
  {
    question: "How does the API integration work?",
    answer:
      "Our REST API allows you to programmatically create ITIN applications, upload documents, check statuses, and receive webhook notifications. We provide SDKs for popular languages, comprehensive documentation, and a sandbox environment for testing.",
  },
  {
    question: "What volume discounts do you offer?",
    answer:
      "We offer tiered pricing based on monthly application volume. The more applications you process, the lower your per-application cost. Contact our partnerships team for custom enterprise pricing for high-volume needs.",
  },
  {
    question: "Can I customize the client-facing experience?",
    answer:
      "Yes, our whitelabel solution allows full customization including your logo, brand colors, custom domain, and email templates. Your clients will have a seamless branded experience throughout the entire ITIN application process.",
  },
  {
    question: "What compliance responsibilities do I have as a partner?",
    answer:
      "As an ITIN.io partner, we handle all IRS compliance requirements including CAA certification, document verification, and secure submission. You're responsible for ensuring your clients provide accurate information and valid documents. We provide compliance guidelines and training materials.",
  },
  {
    question: "How do I get started as a partner?",
    answer:
      "Simply fill out our partner application form or schedule a demo with our partnerships team. We'll walk you through the integration process, set up your branded portal, and provide API credentials. Most partners are up and running within 1-2 weeks.",
  },
];
