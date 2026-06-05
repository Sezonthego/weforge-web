"use client";

import { motion } from "motion/react";
import { FAQIcon } from "@/icons";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

const faqItems = [
  {
    question: "Who is WeForge built for?",
    answer:
      "WeForge is designed for clinical research sites looking to improve recruitment operations, reduce manual workload, streamline patient qualification, and build more scalable and efficient recruitment systems.",
  },
  {
    question: "Is WeForge a software platform or a service?",
    answer:
      "WeForge currently operates as a service-led infrastructure partner, helping research sites design and operate tailored recruitment environments while continuously improving operational workflows and recruitment performance.",
  },
  {
    question: "How does WeForge help reduce recruitment drop-off?",
    answer:
      "Recruitment drop-off often happens because of friction across the patient journey, including unclear study information, delayed or inconsistent communication, lack of engagement tools, and fragmented manual workflows. WeForge helps structure the entire recruitment process into one unified infrastructure designed to guide participants through a more coherent, engaging, and easy-to-navigate recruitment experience.",
  },
  {
    question: "How does WeForge help improve patient targeting?",
    answer:
      "WeForge conducts detailed patient and audience research based on your study criteria to build structured targeting profiles for potential participants. Using this data, we deploy targeted recruitment campaigns across relevant digital channels designed to reach, engage, and guide more suitable participants into the recruitment process. Combined with structured qualification workflows and AI-assisted pre-screening, this helps reduce unqualified inquiries and improve recruitment efficiency overall.",
  },
  {
    question: "How do we get started with WeForge?",
    answer:
      "We start with a conversation focused on understanding your current recruitment challenges, operational pain points, and workflow inefficiencies. From there, we analyze your existing processes, identify areas creating friction, and design a structured recruitment infrastructure tailored to your operational needs and study requirements.",
  },
] as const;

export const FAQ = () => {
  return (
    <section id="faq" className="bg-brand-ivory pt-10 md:pt-20 lg:pt-32 px-4 overflow-hidden">
      <Container>
        <FAQIcon />
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-orange">
          FAQ
        </p>
        <Heading className="mt-4 mb-4 md:mb-6">Clarity above everything.</Heading>
        <SubHeading className="mb-10 md:mb-20 max-w-2xl">
          Clear answers to help you better understand how WeForge operates and
          supports modern clinical recruitment workflows.
        </SubHeading>
        <div className="flex flex-col gap-4">
          {faqItems.map((item) => (
            <Question
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        <div className="mt-16 md:mt-24 rounded-3xl bg-brand-peach p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold font-display text-brand-cocoa">
              Still have questions?
            </h3>
            <p className="mt-3 text-brand-muted">
              Our team is available to answer any question you may have. It only
              takes a button click to start the conversation.
            </p>
          </div>
          <Button asChild className=" shrink-0 w-full md:w-auto">
            <Link href="#contact">Let&apos;s chat</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

const Question = ({
  question,
  answer,
}: {
  question?: string;
  answer?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-full p-4 md:p-8 bg-brand-peach overflow-hidden rounded-3xl text-left"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-brand-cocoa text-lg md:text-2xl font-bold font-display">
          {question}
        </h3>
        <div className="size-6 relative rounded-full bg-brand-orange flex items-center justify-center shrink-0">
          <IconPlus
            className={cn(
              "text-brand-ivory size-6 absolute inset-0 transition-all duration-200",
              open && "scale-0 rotate-90"
            )}
          />
          <IconMinus
            className={cn(
              "text-brand-ivory size-6 absolute inset-0 scale-0 -rotate-90 transition-all duration-200",
              open && "scale-100 rotate-0"
            )}
          />
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          height: open ? "auto" : 0,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <motion.p
          key={String(open)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="text-left mt-4 text-brand-muted"
        >
          {answer}
        </motion.p>
      </motion.div>
    </button>
  );
};
