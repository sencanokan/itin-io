"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Shield,
  Clock,
  Lock,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
        description: "I am not a U.S. citizen and do not have a Social Security Number",
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
        description: "I have U.S. income, investments, property, or need to file a U.S. tax return",
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
        description: "I do not have a passport but have other identity documents",
      },
    ],
  },
];

export function ApplyContent() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[step];
  const isEligible =
    answers.residency === "yes" &&
    (answers.tax_obligation === "yes" || answers.tax_obligation === "unsure");

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      // If first question answered "no", skip to result
      if (currentQuestion.id === "residency" && value === "no") {
        setShowResult(true);
        return;
      }
      if (currentQuestion.id === "tax_obligation" && value === "no") {
        setShowResult(true);
        return;
      }
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setShowResult(false);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-32 lg:pb-28 lg:pt-40">
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              Start Your Application
            </span>
            <h1 className="mt-6 text-display-lg font-bold tracking-tight text-white lg:text-display-xl">
              Apply for Your{" "}
              <span className="gradient-text">ITIN</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Check your eligibility in 30 seconds, then start your application.
              Our IRS-authorized team handles the rest.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Eligibility Checker */}
      <section className="section">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              Step 1
            </span>
            <h2 className="mt-4 text-display-sm font-bold tracking-tight text-slate-900 lg:text-display-md">
              Check your <span className="gradient-text">eligibility</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 max-w-2xl">
            {/* Progress */}
            {!showResult && (
              <div className="mb-8 flex items-center gap-2">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-2 flex-1 rounded-full transition-all",
                      index <= step ? "bg-primary-500" : "bg-slate-200"
                    )}
                  />
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Question {step + 1} of {questions.length}
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
                  {step > 0 && (
                    <button
                      onClick={handleBack}
                      className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 text-center"
                >
                  {isEligible ? (
                    <>
                      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        You&apos;re eligible for an ITIN!
                      </h3>
                      <p className="mx-auto mt-3 max-w-md text-slate-600">
                        Based on your answers, you qualify for an ITIN. Start your
                        full application now and get your ITIN in 2-4 weeks.
                      </p>
                      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link
                          href="/contact"
                          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-glow"
                        >
                          Start Full Application
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
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
                    </>
                  ) : (
                    <>
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
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-600"
                        >
                          Contact Us for Guidance
                        </Link>
                        <button
                          onClick={handleReset}
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50"
                        >
                          Retake Quiz
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Security Assurance */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Lock,
                  title: "256-bit Encryption",
                  description: "Your data is encrypted in transit and at rest using industry-standard protocols.",
                },
                {
                  icon: Shield,
                  title: "IRS Compliant",
                  description: "All processes follow IRS Acceptance Agent Program requirements.",
                },
                {
                  icon: Globe,
                  title: "GDPR Compliant",
                  description: "We follow international data protection regulations for all applicants.",
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
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
