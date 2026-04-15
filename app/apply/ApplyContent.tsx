"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Shield,
  Clock,
  Lock,
  Globe,
  User,
  Mail,
  MapPin,
  FileText,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Phase = "quiz" | "form" | "submitted" | "not-eligible";

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; description?: string }[];
}

const questions: Question[] = [
  {
    id: "residency",
    question: "Are you a non-U.S. citizen or non-U.S. resident?",
    options: [
      {
        value: "yes",
        label: "Yes",
        description:
          "I am not a U.S. citizen and do not have a Social Security Number",
      },
      {
        value: "no",
        label: "No",
        description: "I am a U.S. citizen or already have an SSN",
      },
    ],
  },
  {
    id: "tax_obligation",
    question: "Do you have U.S. tax filing or reporting obligations?",
    options: [
      {
        value: "yes",
        label: "Yes",
        description:
          "I have U.S. income, investments, property, or need to file a U.S. tax return",
      },
      {
        value: "no",
        label: "No",
        description: "I do not have any U.S. tax obligations",
      },
      {
        value: "unsure",
        label: "I'm not sure",
        description: "I need help determining my tax obligations",
      },
    ],
  },
  {
    id: "passport",
    question: "Do you have a valid passport?",
    options: [
      {
        value: "yes",
        label: "Yes",
        description: "I have a current, unexpired passport",
      },
      {
        value: "no",
        label: "No",
        description:
          "I do not have a passport but have other identity documents",
      },
    ],
  },
];

const reasons = [
  "U.S. tax filing",
  "U.S. bank account",
  "Real estate investment",
  "Business ownership",
  "Tax treaty benefits",
  "Spouse/dependent on U.S. return",
  "Other",
];

export function ApplyContent() {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = questions[quizStep];
  const isEligible =
    answers.residency === "yes" &&
    (answers.tax_obligation === "yes" || answers.tax_obligation === "unsure");

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentQuestion.id === "residency" && value === "no") {
      setPhase("not-eligible");
      return;
    }
    if (currentQuestion.id === "tax_obligation" && value === "no") {
      setPhase("not-eligible");
      return;
    }

    if (quizStep < questions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setPhase(
        newAnswers.residency === "yes" &&
          (newAnswers.tax_obligation === "yes" ||
            newAnswers.tax_obligation === "unsure")
          ? "form"
          : "not-eligible"
      );
    }
  };

  const handleBack = () => {
    if (quizStep > 0) {
      setQuizStep(quizStep - 1);
    }
  };

  const handleReset = () => {
    setQuizStep(0);
    setAnswers({});
    setPhase("quiz");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhase("submitted");
  };

  // Total steps: 3 quiz + 1 form = 4
  const totalSteps = 4;
  const currentStep =
    phase === "quiz"
      ? quizStep
      : phase === "form"
        ? 3
        : phase === "submitted"
          ? 4
          : 0;

  return (
    <>
      {/* Hero - compact */}
      <section className="relative overflow-hidden bg-navy-900 pb-12 pt-28 lg:pb-16 lg:pt-36">
        <div className="absolute inset-0 bg-gradient-dark" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[100px]"
        />
        <div className="container-wide relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display-md font-bold tracking-tight text-white lg:text-display-lg">
              Apply for Your <span className="gradient-text">ITIN</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
              Answer 3 quick questions, fill out your details, and we handle the
              rest.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Application Flow */}
      <section className="py-12 lg:py-16">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl">
            {/* Progress Bar */}
            {phase !== "submitted" && phase !== "not-eligible" && (
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                  <span>
                    Step {Math.min(currentStep + 1, totalSteps)} of{" "}
                    {totalSteps}
                  </span>
                  <span>
                    {phase === "quiz" ? "Eligibility Check" : "Your Details"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "h-2 flex-1 rounded-full transition-all duration-300",
                        index <= currentStep ? "bg-primary-500" : "bg-slate-200"
                      )}
                    />
                  ))}
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* QUIZ PHASE */}
              {phase === "quiz" && (
                <motion.div
                  key={`quiz-${quizStep}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Question {quizStep + 1} of {questions.length}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {currentQuestion.question}
                  </h3>
                  <div className="mt-6 space-y-3">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className="flex w-full items-start gap-4 rounded-xl border border-slate-200 p-4 text-left transition-all hover:border-primary-300 hover:bg-primary-50/30"
                      >
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-slate-300">
                          <div className="h-2.5 w-2.5 rounded-full" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {option.label}
                          </p>
                          {option.description && (
                            <p className="mt-1 text-sm text-slate-500">
                              {option.description}
                            </p>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  {quizStep > 0 && (
                    <button
                      onClick={handleBack}
                      className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  )}
                </motion.div>
              )}

              {/* APPLICATION FORM PHASE */}
              {phase === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8"
                >
                  {/* Eligible badge */}
                  <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 p-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      You&apos;re eligible for an ITIN! Fill in your details to
                      start.
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Your Information
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    We&apos;ll use this to prepare your application.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
                          <User className="h-4 w-4 text-slate-400" />
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
                          <User className="h-4 w-4 text-slate-400" />
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Mail className="h-4 w-4 text-slate-400" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        Country of Citizenship
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        placeholder="e.g. United Kingdom"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
                        <FileText className="h-4 w-4 text-slate-400" />
                        Reason for ITIN
                      </label>
                      <select
                        required
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      >
                        <option value="">Select a reason...</option>
                        {reasons.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Start Over
                      </button>
                      <button
                        type="submit"
                        className="group ml-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-glow"
                      >
                        Submit Application
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* SUBMITTED PHASE */}
              {phase === "submitted" && (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Application Received!
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-slate-600">
                    Thank you! Our team will review your information and reach
                    out within 24 hours to guide you through the next steps.
                  </p>
                  <div className="mx-auto mt-6 max-w-sm rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      What happens next
                    </p>
                    <ol className="mt-3 space-y-2 text-left text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-600">
                          1
                        </span>
                        We review your eligibility details
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-600">
                          2
                        </span>
                        You&apos;ll receive an email with document upload instructions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-600">
                          3
                        </span>
                        Schedule your video verification call
                      </li>
                    </ol>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      IRS Authorized
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      2-4 Weeks
                    </div>
                  </div>
                </motion.div>
              )}

              {/* NOT ELIGIBLE PHASE */}
              {phase === "not-eligible" && (
                <motion.div
                  key="not-eligible"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <Globe className="h-8 w-8 text-slate-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    You may not need an ITIN
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-slate-600">
                    Based on your answers, an ITIN may not be required. However,
                    tax situations can be complex. Contact us for a free
                    consultation to confirm.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <a
                      href="mailto:hello@itin.io"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600"
                    >
                      Contact Us for Guidance
                    </a>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Security Assurance */}
      <section className="py-12 bg-slate-50">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Lock,
                  title: "256-bit Encryption",
                  description:
                    "Your data is encrypted in transit and at rest.",
                },
                {
                  icon: Shield,
                  title: "IRS Compliant",
                  description:
                    "All processes follow IRS Acceptance Agent requirements.",
                },
                {
                  icon: Globe,
                  title: "GDPR Compliant",
                  description:
                    "International data protection for all applicants.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                    <item.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
