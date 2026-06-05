"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

export const MOCKUP_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type DotTone = "orange" | "indigo" | "green";

export const dotClass: Record<DotTone, string> = {
  orange: "bg-brand-orange",
  indigo: "bg-brand-indigo",
  green: "bg-[#6f9e84]",
};

export const textTone: Record<DotTone, string> = {
  orange: "text-brand-orange",
  indigo: "text-brand-indigo",
  green: "text-[#5a8a70]",
};

export const studies = [
  {
    initials: "DS",
    name: "Dermatology Study",
    detail: "Recruitment workflow is active",
    status: "Recruiting",
    time: "2h",
    tone: "orange" as DotTone,
    active: true,
  },
  {
    initials: "SR",
    name: "Sleep Research Study",
    detail: "New profiles awaiting review",
    status: "Review needed",
    time: "1d",
    tone: "indigo" as DotTone,
  },
  {
    initials: "MS",
    name: "Metabolic Study",
    detail: "Recruitment page is live",
    status: "Active",
    time: "2d",
    tone: "green" as DotTone,
  },
  {
    initials: "WH",
    name: "Women's Health Study",
    detail: "Follow-up workflow is running",
    status: "Follow-up",
    time: "3d",
    tone: "orange" as DotTone,
  },
] as const;

export const statusLines = [
  { label: "Recruitment page", value: "Published", tone: "green" as DotTone },
  { label: "Targeted campaigns", value: "Active", tone: "orange" as DotTone },
  { label: "Organic visibility", value: "Active", tone: "orange" as DotTone },
  { label: "Pre-screening", value: "Running", tone: "indigo" as DotTone },
] as const;

export const activity = [
  "New pre-screening responses received",
  "Participant profiles marked for review",
  "Recruitment page updated",
  "Follow-up reminder scheduled",
] as const;

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function SidebarItem({
  icon: Icon,
  label,
  active,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-xs transition-colors ${
        active
          ? "bg-brand-orange/10 text-brand-cocoa ring-1 ring-inset ring-brand-orange/25"
          : "text-brand-muted hover:bg-brand-peach/60 hover:text-brand-cocoa"
      }`}
    >
      <Icon className={`size-4 ${active ? "text-brand-orange" : ""}`} />
      <span className="flex-1">{label}</span>
    </div>
  );
}

export function StudyRow({
  initials,
  name,
  detail,
  status,
  time,
  tone,
  active,
}: {
  initials: string;
  name: string;
  detail: string;
  status: string;
  time: string;
  tone: DotTone;
  active?: boolean;
}) {
  return (
    <div
      className={`border-b border-brand-border/60 px-4 py-3.5 transition-colors ${
        active ? "bg-white" : "hover:bg-white/70"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-brand-cocoa ring-1 ring-inset ring-brand-border">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="truncate text-xs font-semibold text-brand-cocoa">
              {name}
            </p>
            <span className={`size-1.5 shrink-0 rounded-full ${dotClass[tone]}`} />
          </div>
          <p className="mt-0.5 truncate text-[11px] text-brand-muted">
            {detail}
          </p>
          <p className={`mt-1 text-[10px] font-medium ${textTone[tone]}`}>
            {status}
          </p>
        </div>
        <span className="shrink-0 text-[10px] text-brand-muted/70">{time}</span>
      </div>
    </div>
  );
}

export function MockupBreadcrumb({
  parts,
}: {
  parts: { label: string; accent?: boolean }[];
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs">
      {parts.map((part, i) => (
        <span key={`${part.label}-${i}`} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-brand-border">·</span>}
          <span
            className={
              part.accent ? "text-brand-orange" : i === 0 ? "text-brand-muted" : "text-brand-cocoa/80"
            }
          >
            {part.label}
          </span>
        </span>
      ))}
    </div>
  );
}

export function MockupStatusLines({
  lines,
}: {
  lines: readonly { label: string; value: string; tone: DotTone }[];
}) {
  return (
    <div className="divide-y divide-brand-border border-y border-brand-border">
      {lines.map((line) => (
        <div
          key={line.label}
          className="flex items-center justify-between py-3"
        >
          <span className="text-sm text-brand-cocoa/80">{line.label}</span>
          <span className="flex items-center gap-2 text-sm font-medium">
            <span className={`size-1.5 rounded-full ${dotClass[line.tone]}`} />
            <span className={textTone[line.tone]}>{line.value}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function MockupActivityList({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-8 max-w-xl">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
        Recent activity
      </p>
      <div className="mt-4 space-y-3.5">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm">
            <span className="size-1.5 shrink-0 rounded-full bg-brand-orange" />
            <span className="text-brand-muted">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MockupField({
  label,
  value,
  filled = true,
}: {
  label: string;
  value: string;
  filled?: boolean;
}) {
  return (
    <div>
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
        {label}
      </p>
      <div
        className={`flex min-h-[38px] items-center rounded-md border px-3 py-2 text-xs transition-colors ${
          filled
            ? "border-brand-orange/35 bg-brand-peach/40 text-brand-cocoa"
            : "border-brand-border bg-brand-ivory text-brand-muted/50"
        }`}
      >
        {filled ? (
          value
        ) : (
          <span className="italic">…</span>
        )}
      </div>
    </div>
  );
}

export function MockupPanelCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-brand-border bg-white p-5 shadow-[0_12px_30px_rgba(32,21,21,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}

export function AnimatedPanel({
  stepKey,
  reducedMotion,
  children,
  className = "",
}: {
  stepKey: number;
  reducedMotion: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stepKey}
        initial={
          reducedMotion ? false : { opacity: 0, y: 10, filter: "blur(4px)" }
        }
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={
          reducedMotion ? undefined : { opacity: 0, y: -6, filter: "blur(4px)" }
        }
        transition={{ duration: 0.35, ease: MOCKUP_EASE }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
