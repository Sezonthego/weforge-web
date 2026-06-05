import { ArrowRight, Mail, Phone, Video } from "lucide-react";
import Link from "next/link";
import type React from "react";

import { Container } from "@/components/container";

const therapeuticAreas = [
  {
    label: "Pulmonology",
    src: "https://trialbee.com/wp-content/uploads//2025/08/Group-2.svg",
  },
  {
    label: "Respiratory",
    src: "https://trialbee.com/wp-content/uploads//2025/08/Group-1.svg",
  },
  {
    label: "Autoimmune",
    src: "https://trialbee.com/wp-content/uploads//2025/08/Group.svg",
  },
  {
    label: "Vaccines",
    src: "https://trialbee.com/wp-content/uploads//2025/08/syringe_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24-1.svg",
  },
  {
    label: "Dermatology",
    src: "https://trialbee.com/wp-content/uploads//2025/08/007-rash-1-1.svg",
  },
  {
    label: "Infectious Disease",
    src: "https://trialbee.com/wp-content/uploads//2025/08/032-virus-1.svg",
  },
  {
    label: "Medical Device",
    src: "https://trialbee.com/wp-content/uploads//2025/08/eye-1.svg",
  },
  {
    label: "Mental Health",
    src: "https://trialbee.com/wp-content/uploads//2025/08/008-love-1.svg",
  },
  {
    label: "Nephrology",
    src: "https://trialbee.com/wp-content/uploads//2025/08/011-kidneys-1.svg",
  },
  {
    label: "Neurology/CNS",
    src: "https://trialbee.com/wp-content/uploads//2025/08/018-brain-3-1.svg",
  },
  {
    label: "Oncology",
    src: "https://trialbee.com/wp-content/uploads//2025/08/022-pink-ribbon-1.svg",
  },
  {
    label: "Endocrine",
    src: "https://trialbee.com/wp-content/uploads//2025/08/001-endocrine-1.svg",
  },
] as const;

const pathwayRows = [
  {
    label: "Study profile",
    value: "Therapeutic area, site needs, and participation details",
  },
  {
    label: "Eligibility flow",
    value: "Area-specific questions without heavy participant burden",
  },
  {
    label: "Review rhythm",
    value: "Follow-up timing, routing, and team handoff rules",
  },
] as const;

const followUpActions = [
  { label: "Call", icon: Phone },
  { label: "Email", icon: Mail },
  { label: "Video", icon: Video },
] as const;

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-brand-border bg-brand-ivory shadow-[0_18px_50px_rgba(32,21,21,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

function TherapeuticIcon({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <span
      className={`block shrink-0 bg-brand-orange ${className}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
      aria-hidden="true"
    />
  );
}

function AreaPill({ area }: { area: (typeof therapeuticAreas)[number] }) {
  return (
    <div className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-brand-border bg-brand-peach/60 px-4 py-2.5 text-sm font-medium text-brand-cocoa shadow-[0_8px_20px_rgba(32,21,21,0.05)]">
      <TherapeuticIcon src={area.src} className="size-4" />
      <span className="whitespace-nowrap">{area.label}</span>
    </div>
  );
}

/**
 * Single-row marquee shared across the section so every track reads as one
 * consistent component. Pauses on hover and respects reduced motion.
 */
function AreaMarquee({
  items,
  duration = "32s",
  reverse = false,
  className = "",
}: {
  items: readonly (typeof therapeuticAreas)[number][];
  duration?: string;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-brand-ivory to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-brand-ivory to-transparent" />
      <div
        className="flex w-max gap-3 py-1 animate-logo-marquee group-hover:paused motion-reduce:animate-none"
        style={{
          animationDuration: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((area, index) => (
          <AreaPill key={`${area.label}-${index}`} area={area} />
        ))}
      </div>
    </div>
  );
}

function PathwayPreview() {
  const coverage = [
    therapeuticAreas[4],
    therapeuticAreas[9],
    therapeuticAreas[10],
  ];

  return (
    <div className="relative flex h-full min-h-[560px] flex-col p-6 md:p-8">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(32,21,21,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,21,21,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[linear-gradient(to_bottom,black,transparent_85%)]"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
          Area pathway builder
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-cocoa">
          Area-specific recruitment paths
        </h3>
        <p className="mt-2 text-sm leading-6 text-brand-muted">
          Adapt study pages, pre-screening steps, and follow-up cadence to the
          needs of each therapeutic area.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {coverage.map((area) => (
            <span
              key={area.label}
              className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-ivory px-3 py-1.5 text-xs font-semibold text-brand-cocoa"
            >
              <TherapeuticIcon src={area.src} className="size-3.5" />
              {area.label}
            </span>
          ))}
          <span className="inline-flex items-center rounded-full bg-brand-peach px-3 py-1.5 text-xs font-semibold text-brand-orange">
            +9 more
          </span>
        </div>

        <div className="relative mt-8">
          <div
            className="absolute left-4 top-5 bottom-5 w-px -translate-x-1/2 bg-brand-border"
            aria-hidden="true"
          />
          <ol className="space-y-5">
            {pathwayRows.map((row, index) => (
              <li key={row.label} className="relative flex gap-4">
                <span className="z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-semibold text-brand-ivory shadow-[0_8px_18px_rgba(255,79,0,0.28)]">
                  {index + 1}
                </span>
                <div className="pt-0.5">
                  <p className="text-sm font-semibold text-brand-cocoa">
                    {row.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-5 text-brand-muted">
                    {row.value}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/contact"
          className="group/cta mt-auto inline-flex w-fit items-center gap-2 rounded-xl bg-brand-cocoa px-4 py-3 text-sm font-semibold text-brand-ivory transition-colors hover:bg-brand-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory"
        >
          Review area support
          <ArrowRight className="size-4 text-brand-orange transition-transform group-hover/cta:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

export function TherapeuticAreasSection() {
  return (
    <section className="bg-brand-ivory px-4 py-20 md:py-28">
      <Container>
        <div className=" text-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Therapeutic expertise
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-brand-cocoa md:text-6xl">
            Success Across Therapeutic Areas
          </h2>
          <p className="mt-4  text-base leading-7 text-brand-muted">
            One consistent operating model, tuned to the eligibility logic and
            follow-up rhythm each therapeutic area needs.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-[230px_310px_170px]">
          <BentoCard className="lg:col-span-4 lg:row-span-3">
            <PathwayPreview />
          </BentoCard>

          <BentoCard className="lg:col-span-4 lg:row-span-2">
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(32,21,21,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,21,21,0.05)_1px,transparent_1px)] bg-size-[86px_86px] mask-[radial-gradient(circle_at_top_left,black,transparent_75%)]"
              aria-hidden="true"
            />
            <div className="relative flex h-full min-h-[420px] flex-col justify-between p-6 md:p-8">
              <div>
                <div className="flex items-end gap-3">
                  <span className="text-8xl font-semibold leading-none tracking-tight text-brand-cocoa md:text-9xl">
                    12
                  </span>
                  <span className="mb-4 rounded-full bg-brand-orange/10 px-3 py-1 text-sm font-semibold text-brand-orange">
                    therapeutic pathways
                  </span>
                </div>
                <p className="mt-5 text-xl font-medium text-brand-cocoa/70">
                  Workflows shaped around clearer participant journeys.
                </p>
              </div>
              <p className="max-w-md text-base leading-7 text-brand-muted">
                WeForge keeps the operating model consistent while allowing each
                study pathway to define its own eligibility signals, review
                steps, and outreach rhythm.
              </p>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-4">
            <div className="flex h-full min-h-[230px] flex-col justify-between p-6 md:p-8">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-indigo">
                  Therapeutic coverage
                </p>
                <span className="rounded-full bg-brand-peach px-3 py-1 text-xs font-semibold text-brand-cocoa">
                  12 areas
                </span>
              </div>
              <AreaMarquee
                items={therapeuticAreas}
                duration="30s"
                className="-mx-6 md:-mx-8"
              />
              <p className="text-sm leading-6 text-brand-muted">
                Specialized recruitment support across a growing set of
                therapeutic areas.
              </p>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-4">
            <div className="absolute right-0 top-0 h-40 w-40 bg-brand-peach blur-2xl" />
            <div className="relative flex h-full min-h-[260px] flex-col justify-center p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-indigo">
                Consistent process
              </p>
              <p className="mt-6 max-w-md text-xl leading-8 text-brand-muted">
                Different therapeutic areas can require different participant
                questions, eligibility logic, and follow-up timing. The review
                experience stays structured for the team.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {followUpActions.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-peach px-3 py-1.5 text-sm font-semibold text-brand-cocoa"
                  >
                    <Icon className="size-3.5 text-brand-indigo" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-8">
            <div className="flex h-full min-h-[170px] flex-col gap-5 p-6 md:flex-row md:items-center md:p-8">
              <div className="max-w-xs shrink-0">
                <p className="text-lg font-semibold text-brand-cocoa">
                  Reusable recruitment building blocks
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  The same system components can be arranged for different study
                  needs without making the participant journey heavier.
                </p>
              </div>
              <AreaMarquee
                items={therapeuticAreas}
                duration="36s"
                reverse
                className="min-w-0 flex-1 md:-mr-8"
              />
            </div>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}
