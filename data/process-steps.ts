export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  detail: string;
  duration: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Apply Online",
    description: "Complete your application in minutes",
    detail:
      "Fill out our simple online form with your personal information. We'll auto-generate your W-7 form and determine exactly which documents you need.",
    duration: "10 minutes",
    icon: "FileText",
  },
  {
    step: 2,
    title: "Upload Documents",
    description: "Securely submit your identity documents",
    detail:
      "Upload a scan or photo of your passport and any supporting documents through our encrypted portal. Our team reviews everything for accuracy before proceeding.",
    duration: "Same day",
    icon: "Upload",
  },
  {
    step: 3,
    title: "Video Verification",
    description: "Quick identity verification via video call",
    detail:
      "Schedule a short video call with our IRS-authorized agent. We'll verify your identity and certify your documents so you never need to mail your passport.",
    duration: "15 minutes",
    icon: "Video",
  },
  {
    step: 4,
    title: "Receive Your ITIN",
    description: "We submit to the IRS and you get your number",
    detail:
      "We submit your completed application directly to the IRS. Track your application status in real-time through your dashboard. Your ITIN arrives by mail.",
    duration: "3-4 weeks",
    icon: "CheckCircle",
  },
];

export const detailedProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Create Your Account",
    description: "Sign up and start your application",
    detail:
      "Create a free account on ITIN.io. Answer a few questions about why you need an ITIN, and we'll create a personalized application plan for you. Our system auto-fills your W-7 form based on your answers.",
    duration: "5-10 minutes",
    icon: "UserPlus",
  },
  {
    step: 2,
    title: "Upload Your Documents",
    description: "Submit required identity documents",
    detail:
      "Upload a clear photo or scan of your valid passport (the only document most applicants need). Our team reviews your documents within 24 hours and notifies you if anything needs correction.",
    duration: "Same day review",
    icon: "Upload",
  },
  {
    step: 3,
    title: "Video Verification",
    description: "Meet with our IRS-authorized agent",
    detail:
      "Book a convenient time for a short video call. Our Certifying Acceptance Agent will verify your identity, review your documents, and certify everything for IRS submission. Available Monday-Friday, multiple time zones.",
    duration: "15 minutes",
    icon: "Video",
  },
  {
    step: 4,
    title: "IRS Submission",
    description: "We handle the paperwork",
    detail:
      "Your completed W-7 form, certified documents, and tax return are packaged and submitted to the IRS through our authorized channel. You'll receive a confirmation and tracking number.",
    duration: "1-2 business days",
    icon: "Send",
  },
  {
    step: 5,
    title: "Receive Your ITIN",
    description: "Get your tax identification number",
    detail:
      "The IRS processes your application and mails your ITIN notice (CP565) to you. We'll notify you as soon as it's issued. Your ITIN is a permanent number that doesn't expire as long as you use it regularly.",
    duration: "3-4 weeks after submission",
    icon: "CheckCircle",
  },
];
