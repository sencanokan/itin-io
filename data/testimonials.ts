export interface Testimonial {
  name: string;
  country: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Carlos M.",
    country: "Brazil",
    role: "E-commerce Business Owner",
    content:
      "I needed an ITIN to open a U.S. bank account for my online business. ITIN.io made the entire process seamless. The video verification was quick, and I received my ITIN in just 3 weeks. Highly recommended!",
    rating: 5,
  },
  {
    name: "Aisha K.",
    country: "United Kingdom",
    role: "Real Estate Investor",
    content:
      "As a UK-based investor with U.S. property, I was dreading the ITIN application process. ITIN.io handled everything remotely, and I never had to mail my passport. The team was incredibly responsive and professional.",
    rating: 5,
  },
  {
    name: "Takeshi Y.",
    country: "Japan",
    role: "Software Developer",
    content:
      "I received stock options from my U.S. employer and needed an ITIN for tax filing. The application process with ITIN.io was straightforward and much faster than I expected. Great service!",
    rating: 5,
  },
  {
    name: "Maria S.",
    country: "Germany",
    role: "Freelance Consultant",
    content:
      "Working with U.S. clients required me to get an ITIN. ITIN.io guided me through every step and their document review caught an error I would have missed. Saved me weeks of delays!",
    rating: 5,
  },
  {
    name: "David L.",
    country: "Canada",
    role: "Tax Professional",
    content:
      "We integrated ITIN.io's whitelabel service into our tax preparation practice. Our clients love the seamless experience, and the API integration was straightforward. It's been a great addition to our service offering.",
    rating: 5,
  },
  {
    name: "Priya R.",
    country: "India",
    role: "Business Owner",
    content:
      "I was worried about sending my passport to the IRS from India. With ITIN.io, the video verification meant I kept my passport safe. The whole process was smooth and professionally handled.",
    rating: 5,
  },
];
