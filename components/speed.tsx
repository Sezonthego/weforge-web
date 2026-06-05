"use client";

import { useEffect, useState } from "react";
import { Container } from "./container";
import {
  WorkflowDashboardMockup,
  WORKFLOW_STEPS,
} from "./dashboard-mockup";
import { usePrefersReducedMotion } from "./clinical-mockup-shared";

const AUTOPLAY_MS = 3500;

export const Speed = () => {
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const timer = setTimeout(() => {
      setActive((i) => (i + 1) % WORKFLOW_STEPS.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [active, paused, reducedMotion]);

  const progress = ((active + 1) / WORKFLOW_STEPS.length) * 100;

  return (
    <section id="workflow" className="bg-brand-ivory px-4 py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Five-step recruitment workflow
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand-cocoa md:text-5xl">
            From study details to participant follow-up.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted md:text-lg">
            Intake, recruitment materials, participant prequalification, secure
            processing, and managed screening — one connected recruitment system.
          </p>
        </div>

        <div
          className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-brand-border bg-brand-ivory shadow-[0_28px_70px_rgba(32,21,21,0.08)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="aspect-16/10 min-h-[480px] w-full md:min-h-[520px]">
            <WorkflowDashboardMockup
              step={active}
              onStepChange={setActive}
              progress={progress}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
