"use client";

import { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CircleDollarSign,
  Clock3,
  CreditCard,
  FileText,
  Phone,
  UserPlus,
  UserRound,
} from "lucide-react";

import { LogoIcon } from "../logo";

const featureCards = [
  {
    title: "Capture",
    description:
      "Answer every call, text, and message 24/7. No participants lost to hold music or after-hours gaps.",
    visual: <CaptureVisual />,
  },
  {
    title: "Convert",
    description:
      "Turn referrals into qualified study visits in hours, not weeks, and improve your conversion rate.",
    visual: <ConvertVisual />,
  },
  {
    title: "Recover",
    description:
      "Cut no-shows in half and automatically backfill cancelled slots to keep your schedule full.",
    visual: <RecoverVisual />,
  },
] as const;

const metrics = [
  { value: "71%", label: "Reduction in no-shows" },
  { value: "40%", label: "Increase in referral conversion" },
  { value: "99%", label: "Decrease in hold time" },
  { value: "60%", label: "Calls resolved end-to-end" },
] as const;

const testimonials = [
  {
    role: "Practice Manager",
    name: "Clinical Operations Lead",
    quote:
      "WeForge helped our team match high inquiry volume with a calmer intake process. Fewer qualified participants fall through the cracks, and our site staff can spend more time with patients who are ready for care.",
  },
  {
    role: "Applied AI Manager",
    name: "Study Growth Director",
    quote:
      "Working with WeForge feels like adding a clinical recruitment team that understands the workflow. The system keeps refining intake, follow-up, and reporting around the outcomes we actually measure.",
  },
  {
    role: "Chief Administrative Officer",
    name: "Provider Network Partner",
    quote:
      "Our coordinators feel supported because routine outreach and qualification steps are handled consistently. It gives the team more room to focus on complex patient conversations.",
  },
] as const;

const frontOfficeItems = [
  {
    title: "Schedule Management",
    description:
      "Book, reschedule, and backfill cancellations automatically. Your team stays focused on patients, not the schedule.",
    icon: CalendarDays,
  },
  {
    title: "Referrals",
    description:
      "Every new patient referral gets a follow-up. Clarion reaches out, answers questions, and gets them scheduled.",
    icon: UserPlus,
  },
  {
    title: "Billing and Insurance",
    description:
      "Coverage questions and payments handled through natural conversations. No hold music, no back-and-forth.",
    icon: CreditCard,
  },
  {
    title: "24/7 Patient Support",
    description:
      "Refill requests, post-visit check-ins, and after-hours questions. Clarion handles them around the clock.",
    icon: Clock3,
  },
] as const;

export const Features = () => {
  return (
    <>
      <section
        id="features"
        className="mt-8 border-t border-[#d8d1bf] bg-brand-ivory px-4 text-brand-cocoa md:mt-28 md:pb-24d"
      >
        <div className="container mx-auto  border-x border-brand-border bg-brand-ivory">
          <ScaleYourPractice />
        </div>
      </section>

      <section className="border-y border-[#d8d1bf] bg-brand-ivory px-4 text-brand-cocoa">
        <div className="container mx-auto  border-x border-brand-border bg-brand-ivory">
          <ProviderImpact />
        </div>
      </section>

      <section className="mt-16 border-y border-[#d8d1bf] bg-brand-ivory px-4 text-brand-cocoa">
        <div className="container mx-auto border-x border-brand-border bg-brand-ivory">
          <FrontOfficeEngine />
        </div>
      </section>
    </>
  );
};

function ScaleYourPractice() {
  return (
    <>
      <div className="px-6 py-14 text-center md:py-20 border-b border-brand-border">
        <h2 className="font-clarion-display text-4xl font-light leading-none tracking-normal text-brand-cocoa md:text-5xl">
          Scale your practice
        </h2>
        <p className="mx-auto mt-7 max-w-3xl font-clarion-body text-lg leading-8 text-brand-muted md:text-2xl">
          Simplify everyday tasks so your team can focus on what matters most.
        </p>
      </div>

      <div className="grid lg:grid-cols-3">
        {featureCards.map((card) => (
          <article
            key={card.title}
            className="border-b border-brand-border last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="flex min-h-[320px] items-center justify-center overflow-hidden border-b border-brand-border px-6 py-12 md:min-h-[364px]">
              {card.visual}
            </div>
            <div className="px-9 py-10 md:px-12">
              <h3 className="font-clarion-body text-2xl font-medium text-brand-cocoa">
                {card.title}
              </h3>
              <p className="mt-3 max-w-[520px] font-clarion-body text-lg leading-7 text-brand-muted">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function ProviderImpact() {
  return (
    <>
      <div className="border-b border-brand-border px-6 py-8 text-center md:py-10">
        <h2 className="mx-auto max-w-6xl font-clarion-display text-4xl font-light leading-tight tracking-normal text-brand-cocoa md:text-5xl">
          Empowering providers to deliver exceptional care
        </h2>
      </div>

      <div className="grid border-b border-brand-border sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`border-b border-brand-border px-9 py-10 md:px-12 sm:odd:border-r sm:even:border-r-0 lg:border-b-0 ${
              index === metrics.length - 1 ? "lg:border-r-0!" : "lg:border-r"
            }`}
          >
            <p className="font-clarion-display text-5xl font-light leading-none text-brand-cocoa md:text-6xl">
              {metric.value}
            </p>
            <p className="mt-3 font-clarion-body text-lg leading-7 text-brand-muted">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      <TestimonialBand />
    </>
  );
}

function TestimonialBand() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="relative min-h-[430px] overflow-hidden px-8 py-12 md:px-12 md:py-14 lg:min-h-[492px]">
      <div
        className="pointer-events-none absolute inset-x-[-8%] bottom-0 h-64 bg-[radial-gradient(72%_95%_at_50%_116%,rgba(255,79,0,0.44)_0%,rgba(255,176,114,0.28)_36%,rgba(255,243,230,0.46)_58%,rgba(255,253,249,0)_82%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-[4%] bottom-0 h-40 bg-[radial-gradient(78%_96%_at_50%_106%,rgba(43,35,88,0.18)_0%,rgba(255,79,0,0.2)_42%,rgba(255,253,249,0)_78%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="relative grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <LogoIcon className="size-12 text-brand-cocoa" />
            <div className="leading-none">
              <p className="font-clarion-body text-4xl font-bold tracking-normal text-brand-cocoa">
                weforge
              </p>
              <p className="mt-1 font-clarion-body text-xs font-medium italic text-brand-muted">
                clinical
              </p>
            </div>
          </div>
          <p className="mt-8 font-clarion-body text-lg leading-7 text-brand-muted">
            {active.name}
            <br />
            {active.role}
          </p>
        </div>

        <div>
          <blockquote className="max-w-5xl font-clarion-body text-xl leading-8 text-brand-cocoa md:text-2xl md:leading-10">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
        </div>
      </div>

      <div className="relative mt-18 flex items-center justify-between gap-6 md:mt-24">
        <div className="flex items-center gap-4 lg:ml-[326px]">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goToPrevious}
            className="flex size-8 items-center justify-center text-brand-cocoa transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goToNext}
            className="flex size-8 items-center justify-center text-brand-cocoa transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.name}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={
                activeIndex === index
                  ? "h-2 w-5 rounded-full bg-brand-orange transition-all"
                  : "size-2 rounded-full bg-brand-border transition-all hover:bg-brand-muted"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FrontOfficeEngine() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % frontOfficeItems.length);
      setProgressKey((current) => current + 1);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, progressKey]);

  const setActiveItem = (index: number) => {
    setActiveIndex(index);
    setProgressKey((current) => current + 1);
  };

  return (
    <div className="grid min-h-[760px] lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col border-b border-brand-border px-8 py-14 lg:border-b-0 lg:border-r md:px-12 lg:px-14">
        <div>
          <h2 className="font-clarion-display text-4xl font-light leading-tight tracking-normal text-brand-cocoa md:whitespace-nowrap md:text-5xl">
            Your front office revenue engine
          </h2>
          <p className="mt-4 max-w-2xl font-clarion-body text-lg leading-7 text-brand-muted">
            Everything your front office handles today, done automatically and
            at any hour.
          </p>
        </div>

        <div className="mt-auto space-y-6 pt-16">
          {frontOfficeItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <button
                type="button"
                key={item.title}
                onClick={() => setActiveItem(index)}
                className="group grid w-full grid-cols-[56px_1fr] gap-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`flex size-14 items-center justify-center ${
                    isActive ? " text-brand-cocoa" : " text-brand-muted"
                  }`}
                >
                  <Icon className="size-6" />
                </span>
                <span className="block border-b border-transparent pb-4">
                  <span
                    className={`block font-clarion-body text-2xl leading-8 transition-colors ${
                      isActive
                        ? "text-brand-cocoa"
                        : "text-brand-muted group-hover:text-brand-cocoa"
                    }`}
                  >
                    {item.title}
                  </span>
                  {isActive ? (
                    <>
                      <span className="mt-3 block max-w-xl font-clarion-body text-lg leading-7 text-brand-muted">
                        {item.description}
                      </span>
                      <span className="mt-3 block h-px max-w-[505px] overflow-hidden bg-brand-border">
                        <span
                          key={progressKey}
                          className="block h-full origin-left animate-[front-office-progress_4s_linear_forwards] bg-brand-orange"
                        />
                      </span>
                    </>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="relative min-h-[620px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image/wefrge-dashboard-mockup.webp')",
        }}
        aria-label="WeForge dashboard mockup"
        role="img"
      />
    </div>
  );
}

function BrandTile({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex size-[118px] items-center justify-center rounded-[22px] bg-[linear-gradient(180deg,#fffdf9_0%,#fff3e6_100%)] text-brand-cocoa shadow-[0_0_38px_rgba(255,79,0,0.2),0_18px_45px_rgba(32,21,21,0.08)] ${className}`}
    >
      <LogoIcon className="size-16" />
    </div>
  );
}

function CaptureVisual() {
  return (
    <div className="relative h-[246px] w-[420px] max-w-none origin-center scale-[0.82] sm:scale-100">
      <div className="absolute left-2 top-[62px] flex size-11 items-center justify-center rounded-full bg-[#3194aa] text-white shadow-[0_10px_22px_rgba(49,148,170,0.18)]">
        <Phone className="size-5" />
      </div>
      <div className="absolute left-[74px] right-[70px] top-[82px] border-t-4 border-dotted border-[#a79f92]" />
      <BrandTile className="absolute left-1/2 top-0 -translate-x-1/2" />
      <div className="absolute right-4 top-[62px] flex size-11 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_10px_22px_rgba(255,79,0,0.2)]">
        <Check className="size-6" />
      </div>
      <div className="absolute left-1/2 top-[120px] h-10 -translate-x-1/2 border-l-4 border-dotted border-[#70c7d7]" />
      <div className="absolute bottom-0 left-1/2 flex w-[320px] -translate-x-1/2 items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-[0_12px_30px_rgba(32,21,21,0.08)]">
        <div className="flex size-14 items-center justify-center rounded-full bg-[#e3ded4] text-brand-cocoa">
          <UserRound className="size-8" />
        </div>
        <div>
          <p className="font-clarion-body text-lg font-semibold text-brand-cocoa">
            Dr. Marcus Breyer
          </p>
          <p className="mt-1 font-clarion-body text-base text-brand-muted">
            Mon 24, 9:40 AM
          </p>
        </div>
      </div>
    </div>
  );
}

function ConvertVisual() {
  return (
    <div className="relative h-[268px] w-[430px] max-w-none origin-center scale-[0.78] sm:scale-100">
      <DocumentPreview className="absolute left-4 top-4 rotate-0" />
      <DocumentPreview className="absolute left-[176px] top-4 opacity-80" compact />
      <div className="absolute left-[248px] top-0 h-[268px] w-1 bg-[#74d6e0] shadow-[0_0_20px_rgba(116,214,224,0.8)]" />
      <BrandTile className="absolute left-[228px] top-[116px] size-13 rounded-xl shadow-[0_0_24px_rgba(255,79,0,0.2),0_10px_20px_rgba(32,21,21,0.08)] [&_svg]:size-8" />
      <div className="absolute right-2 top-52 h-10 w-[122px] rounded-b-md bg-[#c6f8ee] opacity-80 blur-[1px]" />
      <div className="absolute right-8 top-[52px] flex w-[164px] items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-[0_12px_24px_rgba(32,21,21,0.1)]">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#e3ded4] text-brand-cocoa">
          <UserRound className="size-6" />
        </div>
        <div>
          <p className="font-clarion-body text-[11px] font-semibold">
            Dr. Mira Solano
          </p>
          <p className="mt-0.5 font-clarion-body text-[10px] text-brand-muted">
            Thu 13, 11:00 AM
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-[116px] w-[164px] rounded-lg bg-white p-3 shadow-[0_12px_24px_rgba(32,21,21,0.1)]">
        <p className="font-clarion-body text-[11px] text-brand-muted">
          EHR Notes:
        </p>
        <div className="mt-3 space-y-2">
          {[88, 96, 80, 92, 50].map((width) => (
            <div
              key={width}
              className="h-2 rounded-full bg-[#ddd8cb]"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-11 flex size-5 items-center justify-center rounded-full bg-brand-orange text-white">
        <Check className="size-3.5" />
      </div>
    </div>
  );
}

function RecoverVisual() {
  const cells = Array.from({ length: 35 }, (_, index) => index);

  return (
    <div className="relative h-[246px] w-[430px] max-w-none origin-center scale-[0.78] sm:scale-100">
      <div className="absolute left-4 top-3 rounded-lg bg-white p-3 shadow-[0_13px_30px_rgba(32,21,21,0.08)]">
        <div className="mb-4 h-2.5 w-14 rounded-full bg-[#ded9cc]" />
        <div className="grid grid-cols-5 gap-1">
          {cells.map((cell) => (
            <div
              key={cell}
              className={`size-6 rounded-[2px] ${
                cell === 17 || cell === 23
                  ? "bg-[#e0d9cf]"
                  : "bg-[#bfe8da]"
              }`}
            />
          ))}
        </div>
        <div className="absolute left-[62px] top-[62px] flex size-16 items-center justify-center rounded-full border-2 border-white/90 bg-white/20">
          <div className="flex h-10 w-12 items-center justify-center rounded-md bg-[#ffd9cf] font-clarion-body text-sm font-semibold text-brand-orange">
            x
          </div>
        </div>
      </div>
      <div className="absolute left-[150px] top-[96px] w-[204px] border-t-4 border-dotted border-[#71c7d4]" />
      <BrandTile className="absolute left-[166px] top-[82px] size-12 rounded-xl shadow-[0_0_24px_rgba(255,79,0,0.2),0_10px_20px_rgba(32,21,21,0.08)] [&_svg]:size-7" />
      <div className="absolute right-8 top-[78px] flex w-[164px] items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-[0_12px_24px_rgba(32,21,21,0.1)]">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#e3ded4] text-brand-cocoa">
          <UserRound className="size-6" />
        </div>
        <div>
          <p className="font-clarion-body text-[11px] font-semibold">
            Dr. Sophia Kellen
          </p>
          <p className="mt-0.5 font-clarion-body text-[10px] text-brand-muted">
            Fri 21, 8:50 AM
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-[90px] flex size-11 items-center justify-center rounded-full bg-[#9bdcbc] text-brand-cocoa shadow-[0_10px_22px_rgba(155,220,188,0.18)]">
        <CircleDollarSign className="size-6" />
      </div>
    </div>
  );
}

function DocumentPreview({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`h-[210px] bg-white p-3 shadow-[0_8px_18px_rgba(32,21,21,0.08)] ring-1 ring-brand-border ${
        compact ? "w-[84px]" : "w-[154px]"
      } ${className}`}
    >
      <div className="mb-5 flex items-center gap-2">
        <FileText className="size-4 text-brand-muted" />
        <div className="h-2 w-8 border border-[#cfc7b8]" />
      </div>
      <div className="mb-6 flex justify-between">
        <div className="h-1.5 w-8 rounded-full bg-[#cfc7b8]" />
        <CalendarDays className="size-4 text-brand-muted" />
      </div>
      <div className="space-y-2">
        {Array.from({ length: compact ? 8 : 10 }, (_, index) => (
          <div
            key={index}
            className="h-1 rounded-full bg-[#b9ad9c]"
            style={{ width: `${compact ? 42 + (index % 2) * 20 : 52 + (index % 4) * 12}%` }}
          />
        ))}
      </div>
      <div className="mt-12 flex items-center justify-between">
        <div className="h-1.5 w-4 rounded-full bg-[#b9ad9c]" />
        <div className="h-1.5 w-8 rounded-full bg-[#b9ad9c]" />
      </div>
    </div>
  );
}
