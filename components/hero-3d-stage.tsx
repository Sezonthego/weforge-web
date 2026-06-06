"use client";

import Link from "next/link";
import { Mic } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const trustItems = [
  "Research sites",
  "Study teams",
  "Recruitment ops",
  "Participant journeys",
  "Remote follow-up",
  "Screening teams",
] as const;

const waveBars = [
  42, 70, 56, 78, 62, 82, 88, 76, 54, 64, 50, 58, 66, 52, 74, 48, 42, 60, 76,
  54, 68, 86, 58, 46, 64, 52, 72, 80, 66, 54, 48, 60, 74, 88, 92, 68, 56, 78,
  84, 96,
] as const;

function AudioWave() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex w-full items-center justify-center px-6">
      <div
        className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-brand-ivory/55"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 h-32 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-ivory/90"
        aria-hidden="true"
      />
      <div
        className="flex h-32 w-full max-w-2xl items-center justify-center gap-2"
        aria-hidden="true"
      >
        {waveBars.map((height, index) => {
          const scale = 0.58 + ((index * 13) % 34) / 100;
          const duration = 0.72 + ((index * 7) % 34) / 100;
          const delay = (index % 9) * 0.055;

          return (
            <motion.span
              key={`${height}-${index}`}
              className="w-1 rounded-full bg-brand-ivory/90 shadow-[0_0_22px_rgba(255,253,249,0.22)]"
              style={{ height, transformOrigin: "center" }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scaleY: [scale, 1.08, 0.72, 1],
                      opacity: [0.72, 1, 0.82, 0.96],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration,
                      delay,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }
              }
            />
          );
        })}
      </div>
      <Link
        href="/#features"
        className="absolute inline-flex min-h-16 items-center gap-3 rounded-xl border border-brand-border bg-brand-ivory px-7 py-3 text-lg font-medium text-brand-cocoa shadow-[0_18px_48px_rgba(32,21,21,0.16)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory sm:min-h-14 sm:px-6 sm:text-base"
      >
        <Mic className="size-5 text-brand-cocoa" />
        Try it out
      </Link>
    </div>
  );
}

function HeroVisualPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      className="relative min-h-[420px] overflow-hidden border-t border-[#d8d1bf] bg-brand-indigo lg:min-h-[640px] lg:border-t-0 "
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(255, 243, 230, 0.72), transparent 26%), radial-gradient(circle at 78% 20%, rgba(255, 79, 0, 0.26), transparent 28%), linear-gradient(135deg, #FFF3E6 0%, #FFB072 24%, #2B2358 58%, #201515 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,253,249,0.55) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,249,0.18)_1px,transparent_1px),linear-gradient(rgba(255,253,249,0.14)_1px,transparent_1px)] bg-size-[76px_76px] opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(32,21,21,0.18)_72%)]" />
      <div className="relative flex h-full min-h-[420px] items-center justify-center lg:min-h-[640px]">
        <AudioWave />
      </div>
    </motion.div>
  );
}

function HeroTrustStrip() {
  const marqueeItems = [...trustItems, ...trustItems];

  return (
    <div className="  bg-brand-ivory px-6 py-8 sm:px-10 lg:px-12">
      <p className="text-center text-base font-normal text-brand-muted">
        Trusted by clinical-research teams
      </p>
      <div className="relative mt-7 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-brand-ivory to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-brand-ivory to-transparent"
          aria-hidden="true"
        />
        <div className="flex min-w-max animate-logo-marquee items-center gap-16 text-[clamp(1.5rem,2vw,2.375rem)] leading-none text-brand-cocoa/55 motion-reduce:animate-none">
          {marqueeItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-clarion-body font-normal tracking-[-0.03em]"
              aria-hidden={index >= trustItems.length}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero3DStage() {
  return (
    <section className="relative overflow-hidden bg-brand-ivory pt-20 font-clarion-body  border-b border-[#d8d1bf]">
      <div className="mx-auto max-w-[100rem]x container border-x border-[#d8d1bf]">
        <div className="grid border-y border-[#d8d1bf] bg-[#d8d1bf] lg:min-h-[640px] lg:grid-cols-[1.25fr_1fr] lg:gap-px">
          <div className="flex min-h-[420px] items-center bg-brand-ivory px-6 py-14 sm:px-8 sm:py-16 md:py-20 lg:min-h-[560px] lg:px-16 xl:px-[4.25rem]">
            <div className="max-w-[860px]">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, ease: "easeOut" }}
                className="font-clarion-display text-[clamp(2.05rem,8.8vw,5.15rem)] font-light leading-[1.1] tracking-[-0.02em] text-brand-cocoa lg:text-[clamp(4.5rem,4.7vw,5.35rem)]"
              >
                <span className="block whitespace-nowrap">
                  Recruit participants.
                </span>
                <span className="block whitespace-nowrap">
                  Reduce site burden.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.08, ease: "easeOut" }}
                className="mt-6 max-w-[660px] text-xl font-normal leading-[1.42] text-brand-muted md:text-2xl"
              >
                WeForge structures study intake, pre-screening, participant
                review, and follow-up workflows so research teams can move with
                less operational noise.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.16, ease: "easeOut" }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center rounded-xl bg-brand-cocoa px-5 py-3 text-base font-medium text-brand-ivory shadow-[0_14px_30px_rgba(32,21,21,0.16)] transition-colors hover:bg-brand-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory sm:px-6"
                >
                  Book an intro call
                </Link>
                <Link
                  href="/#features"
                  className="inline-flex min-h-14 items-center gap-2 rounded-xl border border-brand-border bg-brand-ivory px-5 py-3 text-base font-medium text-brand-cocoa transition-colors hover:bg-brand-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory sm:px-6"
                >
                  <Mic className="size-4 text-brand-orange" />
                  Try it out
                </Link>
              </motion.div>
            </div>
          </div>

          <HeroVisualPanel />
        </div>

        <HeroTrustStrip />
      </div>
    </section>
  );
}
