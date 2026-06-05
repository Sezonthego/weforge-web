"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import {
  LayoutGrid,
  FileText,
  Globe,
  Users,
  ClipboardList,
  Workflow,
  LineChart,
  Search,
  Plus,
  MoreHorizontal,
  Check,
  Target,
  ArrowDown,
  LockKeyhole,
  Sparkles,
  Video,
  Phone,
  Mail,
  FilePlus2,
  Megaphone,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Logo } from "./logo";
import {
  MOCKUP_EASE,
  type DotTone,
  studies,
  statusLines,
  activity,
  dotClass,
  usePrefersReducedMotion,
  SidebarItem,
  StudyRow,
  MockupBreadcrumb,
  MockupStatusLines,
  MockupActivityList,
  MockupField,
  MockupPanelCard,
  AnimatedPanel,
} from "./clinical-mockup-shared";

const EASE = MOCKUP_EASE;

export const WORKFLOW_STEPS = [
  {
    title: "Add study",
    tag: "Study intake",
    icon: FilePlus2,
    description:
      "The site submits study information, eligibility criteria, and operational constraints.",
  },
  {
    title: "Create materials",
    tag: "Paid + organic",
    icon: Megaphone,
    description:
      "WeForge turns the criteria into targeted paid campaigns and organic study pages.",
  },
  {
    title: "Guide participants",
    tag: "AI prequalification",
    icon: ClipboardList,
    description:
      "Participants land on a clear recruitment page and begin an AI-assisted questionnaire.",
  },
  {
    title: "Process criteria",
    tag: "Secure check",
    icon: ShieldCheck,
    description:
      "Answers are checked against the criteria and stored for authorized review.",
  },
  {
    title: "Manage follow-up",
    tag: "Remote screening",
    icon: UserRoundCheck,
    description:
      "Qualified participants enter the workspace for remote screening and retention workflows.",
  },
] as const;

const workflowNavActive: Record<number, string> = {
  0: "Studies",
  1: "Recruitment Pages",
  2: "Recruitment Pages",
  3: "Screening Queue",
  4: "Participants",
};

export function DashboardMockup() {
  const reducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const panelVariants = {
    hidden: { opacity: 0, x: 100, y: -80 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: EASE },
    },
  };

  return (
    <motion.div
      className="relative flex h-full w-full overflow-hidden bg-brand-ivory text-brand-cocoa"
      variants={containerVariants}
      initial={reducedMotion ? "visible" : "hidden"}
      animate="visible"
    >
      <DashboardSidebar
        panelVariants={panelVariants}
        footer={
          <div className="rounded-lg border border-brand-border bg-brand-peach/40 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-brand-muted">
              Live studies
            </p>
            <p className="mt-1.5 text-2xl font-semibold text-brand-cocoa">12</p>
            <p className="mt-0.5 text-[11px] text-brand-muted">
              4 actively recruiting
            </p>
          </div>
        }
      />

      <DashboardStudiesColumn panelVariants={panelVariants} />

      <motion.div
        className="flex h-full flex-1 flex-col overflow-hidden bg-brand-ivory"
        variants={panelVariants}
      >
        <DashboardPanelHeader
          breadcrumb={[
            { label: "Studies" },
            { label: "Dermatology Study" },
            { label: "Recruitment Overview", accent: true },
          ]}
        />
        <div className="flex-1 overflow-hidden p-6">
          <h2 className="text-xl font-semibold text-brand-cocoa">
            Dermatology Study Recruitment
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-muted">
            Recruitment workflow is active. New pre-screening responses are ready
            for review.
          </p>
          <div className="mt-7">
            <MockupStatusLines lines={statusLines} />
          </div>
          <MockupActivityList items={activity} />
        </div>
      </motion.div>

      <AddStudyAnimation reducedMotion={reducedMotion} />
    </motion.div>
  );
}

export function WorkflowDashboardMockup({
  step,
  onStepChange,
  progress,
}: {
  step: number;
  onStepChange: (index: number) => void;
  progress: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const current = WORKFLOW_STEPS[step];
  const activeNav = workflowNavActive[step] ?? "Studies";

  return (
    <div className="relative flex h-full min-h-[480px] w-full flex-col overflow-hidden bg-brand-ivory text-brand-cocoa">
      <div className="shrink-0 border-b border-brand-border bg-white/80 px-4 py-2.5">
        <div className="flex items-center justify-between text-[11px] text-brand-muted">
          <span>Recruitment workflow</span>
          <span>
            Step {step + 1} of {WORKFLOW_STEPS.length}
          </span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-brand-indigo/15">
          <motion.div
            className="h-full rounded-full bg-brand-orange"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: EASE }}
          />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <DashboardSidebar
          activeNavLabel={activeNav}
          footer={
            <div className="space-y-1">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                Workflow
              </p>
              {WORKFLOW_STEPS.map((s, index) => (
                <WorkflowStepButton
                  key={s.title}
                  index={index}
                  title={s.title}
                  tag={s.tag}
                  icon={s.icon}
                  state={
                    index === step
                      ? "active"
                      : index < step
                        ? "done"
                        : "todo"
                  }
                  onClick={() => onStepChange(index)}
                />
              ))}
            </div>
          }
        />

        <DashboardStudiesColumn />

        <div className="flex min-h-[380px] min-w-0 flex-1 flex-col overflow-hidden bg-brand-ivory md:min-h-0">
          <DashboardPanelHeader
            breadcrumb={[
              { label: "Recruitment" },
              { label: current.tag },
              { label: current.title, accent: true },
            ]}
          />
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatedPanel stepKey={step} reducedMotion={reducedMotion}>
              <h2 className="text-xl font-semibold text-brand-cocoa">
                {current.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-muted">
                {current.description}
              </p>
              <div className="mt-6">
                <WorkflowStepContent step={step} reducedMotion={reducedMotion} />
              </div>
            </AnimatedPanel>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardSidebar({
  panelVariants,
  footer,
  activeNavLabel = "Studies",
}: {
  panelVariants?: Variants;
  footer: React.ReactNode;
  activeNavLabel?: string;
}) {
  const navItems = [
    { icon: LayoutGrid, label: "Overview" },
    { icon: FileText, label: "Studies" },
    { icon: Globe, label: "Recruitment Pages" },
    { icon: Users, label: "Participants" },
    { icon: ClipboardList, label: "Screening Queue" },
    { icon: Workflow, label: "Follow-Up Workflows" },
    { icon: LineChart, label: "Insights" },
  ];

  const className = panelVariants
    ? "flex h-full w-full shrink-0 flex-col border-r border-brand-border bg-white md:w-[230px]"
    : "flex w-full shrink-0 flex-col border-b border-brand-border bg-white md:h-full md:w-[230px] md:border-b-0 md:border-r";

  const inner = (
    <>
      <div className="border-b border-brand-border p-4">
        <Logo />
      </div>

      <div className="p-3">
        <button
          data-add-study
          className="flex w-full items-center gap-2 rounded-md bg-brand-orange px-3 py-2 text-xs font-semibold text-brand-ivory shadow-brand"
        >
          <Plus className="size-4" />
          Add study
        </button>
      </div>

      <div className="px-3 pb-1">
        <div className="flex items-center gap-2 rounded-md border border-brand-border bg-brand-peach/50 px-2.5 py-1.5 text-xs text-brand-muted">
          <Search className="size-3.5" />
          <span>Search studies</span>
        </div>
      </div>

      <nav className="mt-3 space-y-0.5 px-3">
        {navItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={item.label === activeNavLabel}
          />
        ))}
      </nav>

      <div className="mt-auto border-t border-brand-border p-4">{footer}</div>
    </>
  );

  if (panelVariants) {
    return (
      <motion.div variants={panelVariants} className={className}>
        {inner}
      </motion.div>
    );
  }

  return <div className={className}>{inner}</div>;
}

function DashboardStudiesColumn({ panelVariants }: { panelVariants?: Variants }) {
  const className = panelVariants
    ? "flex h-full w-[330px] shrink-0 flex-col border-r border-brand-border bg-brand-peach/25"
    : "flex w-full shrink-0 flex-col border-b border-brand-border bg-brand-peach/25 md:h-full md:w-[330px] md:border-b-0 md:border-r";

  const inner = (
    <>
      <div className="flex items-center justify-between border-b border-brand-border px-4 py-3.5">
        <h3 className="text-sm font-semibold text-brand-cocoa">Active studies</h3>
        <MoreHorizontal className="size-4 text-brand-muted" />
      </div>
      <div className="flex-1">
        {studies.map((study) => (
          <StudyRow key={study.name} {...study} />
        ))}
      </div>
    </>
  );

  if (panelVariants) {
    return (
      <motion.div variants={panelVariants} className={className}>
        {inner}
      </motion.div>
    );
  }

  return <div className={className}>{inner}</div>;
}

function DashboardPanelHeader({
  breadcrumb,
}: {
  breadcrumb: { label: string; accent?: boolean }[];
}) {
  return (
    <div className="flex shrink-0 items-center justify-between border-b border-brand-border px-6 py-3.5">
      <MockupBreadcrumb parts={breadcrumb} />
      <MoreHorizontal className="size-4 text-brand-muted" />
    </div>
  );
}

function WorkflowStepButton({
  index,
  title,
  tag,
  icon: Icon,
  state,
  onClick,
}: {
  index: number;
  title: string;
  tag: string;
  icon: React.ElementType;
  state: "active" | "done" | "todo";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={state === "active"}
      className={`flex w-full items-center gap-2.5 rounded-md px-2 py-2 text-left text-xs transition-colors ${
        state === "active"
          ? "bg-brand-orange/10 text-brand-cocoa ring-1 ring-inset ring-brand-orange/25"
          : "text-brand-muted hover:bg-brand-peach/60 hover:text-brand-cocoa"
      }`}
    >
      <span
        className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
          state === "active"
            ? "bg-brand-orange text-brand-ivory"
            : state === "done"
              ? "bg-[#6f9e84] text-brand-ivory"
              : "bg-white ring-1 ring-inset ring-brand-border"
        }`}
      >
        {state === "done" ? <Check className="size-3" /> : index + 1}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1 font-semibold">
          <Icon className="size-3 shrink-0" />
          <span className="truncate">{title}</span>
        </span>
        <span className="block truncate text-[10px] text-brand-muted">{tag}</span>
      </span>
    </button>
  );
}

function WorkflowStepContent({
  step,
  reducedMotion,
}: {
  step: number;
  reducedMotion: boolean;
}) {
  switch (step) {
    case 0:
      return <WorkflowIntakeStep />;
    case 1:
      return <WorkflowMaterialsStep />;
    case 2:
      return <WorkflowQuestionnaireStep reducedMotion={reducedMotion} />;
    case 3:
      return <WorkflowCriteriaStep />;
    default:
      return <WorkflowFollowUpStep />;
  }
}

function WorkflowIntakeStep() {
  return (
    <MockupPanelCard className="max-w-md">
      <div className="flex items-center gap-2">
        <span className="flex size-7 items-center justify-center rounded-md bg-brand-orange/10">
          <Plus className="size-4 text-brand-orange" />
        </span>
        <p className="text-sm font-semibold text-brand-cocoa">Add a new study</p>
      </div>
      <div className="mt-4 space-y-3">
        <MockupField label="Study title" value="Dermatology Recruitment Study" />
        <MockupField label="Location" value="Warsaw, Poland" />
        <MockupField
          label="Participant criteria"
          value="Adults aged 18–65 · Selected study criteria"
        />
      </div>
      <button className="mt-5 w-full rounded-md bg-brand-orange px-3 py-2.5 text-xs font-semibold text-brand-ivory shadow-brand">
        Submit study intake
      </button>
    </MockupPanelCard>
  );
}

function WorkflowMaterialsStep() {
  return (
    <div className="max-w-lg">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-brand-border bg-brand-peach/30 p-4">
          <div className="flex size-9 items-center justify-center rounded-lg bg-brand-orange text-brand-ivory">
            <Target className="size-4" />
          </div>
          <p className="mt-3 text-sm font-semibold text-brand-cocoa">Targeted ads</p>
          <p className="mt-0.5 text-[11px] text-brand-muted">Paid acquisition</p>
          <p className="mt-2 text-sm font-bold text-brand-orange">73 inquiries</p>
        </div>
        <div className="rounded-xl border border-brand-border bg-brand-peach/30 p-4">
          <div className="flex size-9 items-center justify-center rounded-lg bg-brand-indigo text-brand-ivory">
            <Globe className="size-4" />
          </div>
          <p className="mt-3 text-sm font-semibold text-brand-cocoa">
            Organic study page
          </p>
          <p className="mt-0.5 text-[11px] text-brand-muted">SEO visibility</p>
          <p className="mt-2 text-sm font-bold text-brand-indigo">41 inquiries</p>
        </div>
      </div>
      <div className="my-2 flex justify-center">
        <ArrowDown className="size-4 text-brand-muted" />
      </div>
      <MockupPanelCard className="flex items-center justify-between p-4!">
        <div>
          <p className="text-sm font-semibold text-brand-cocoa">Recruitment page</p>
          <p className="mt-0.5 text-xs text-brand-muted">
            Educates participants and guides next steps
          </p>
        </div>
        <span className="flex items-center gap-2 text-xs font-medium">
          <span className="size-1.5 rounded-full bg-[#6f9e84]" />
          <span className="text-[#5a8a70]">Published</span>
        </span>
      </MockupPanelCard>
    </div>
  );
}

function WorkflowQuestionnaireStep({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const checks = [
    { label: "Condition history confirmed", tone: "green" as DotTone },
    { label: "Location within study radius", tone: "green" as DotTone },
    { label: "Availability needs coordinator review", tone: "indigo" as DotTone },
  ];

  return (
    <MockupPanelCard className="max-w-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-brand-orange" />
          <p className="text-sm font-semibold text-brand-cocoa">
            AI-assisted prequalification
          </p>
        </div>
        <span className="rounded-full bg-brand-orange px-2 py-0.5 text-[10px] font-semibold text-brand-ivory">
          68%
        </span>
      </div>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-brand-indigo/15">
        <motion.div
          className="h-full rounded-full bg-brand-orange"
          initial={reducedMotion ? { width: "68%" } : { width: "12%" }}
          animate={{ width: "68%" }}
          transition={{ duration: 0.7, ease: EASE }}
        />
      </div>
      <div className="mt-4 space-y-2.5">
        {checks.map((c) => (
          <div
            key={c.label}
            className="flex items-center gap-3 rounded-lg border border-brand-border bg-brand-peach/25 px-3 py-2.5 text-sm"
          >
            <span
              className={`flex size-5 items-center justify-center rounded-full ${dotClass[c.tone]}`}
            >
              <Check className="size-3 text-brand-ivory" />
            </span>
            <span className="text-brand-cocoa/80">{c.label}</span>
          </div>
        ))}
      </div>
    </MockupPanelCard>
  );
}

function WorkflowCriteriaStep() {
  const lines = [
    { label: "Eligibility criteria", value: "Matched", tone: "green" as DotTone },
    { label: "Answers processed", value: "Complete", tone: "green" as DotTone },
    { label: "Coordinator review", value: "Requested", tone: "indigo" as DotTone },
  ];

  return (
    <div className="max-w-lg space-y-4">
      <MockupPanelCard>
        <p className="text-sm font-semibold text-brand-cocoa">
          Answers processed against study criteria
        </p>
        <div className="mt-3">
          <MockupStatusLines lines={lines} />
        </div>
      </MockupPanelCard>
      <div className="flex items-center gap-3 rounded-xl bg-brand-indigo p-4 text-brand-ivory">
        <LockKeyhole className="size-4 shrink-0 text-brand-orange" />
        <p className="text-xs leading-relaxed text-brand-ivory/85">
          Eligible profiles are securely stored for authorized follow-up.
        </p>
      </div>
    </div>
  );
}

function WorkflowFollowUpStep() {
  const participants = [
    {
      initials: "AM",
      name: "Amina M.",
      study: "Dermatology Study",
      status: "Qualified",
      tone: "orange" as DotTone,
    },
    {
      initials: "KP",
      name: "Kacper P.",
      study: "Sleep Research",
      status: "Info needed",
      tone: "indigo" as DotTone,
    },
    {
      initials: "LS",
      name: "Lena S.",
      study: "Metabolic Study",
      status: "Scheduled",
      tone: "green" as DotTone,
    },
  ];

  return (
    <div className="max-w-lg overflow-hidden rounded-xl border border-brand-border bg-white shadow-[0_12px_30px_rgba(32,21,21,0.05)]">
      <div className="border-b border-brand-border px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Participant workspace
        </p>
        <p className="mt-0.5 text-sm font-semibold text-brand-cocoa">
          Remote screening queue
        </p>
      </div>
      <div className="divide-y divide-brand-border">
        {participants.map((p) => (
          <div key={p.name} className="flex items-center gap-3 px-4 py-3">
            <span
              className={`flex size-8 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-brand-ivory ${
                p.tone === "orange"
                  ? "bg-brand-orange"
                  : p.tone === "indigo"
                    ? "bg-brand-indigo"
                    : "bg-[#6f9e84]"
              }`}
            >
              {p.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-brand-cocoa">
                {p.name}
              </p>
              <p className="truncate text-[11px] text-brand-muted">{p.study}</p>
            </div>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                p.tone === "orange"
                  ? "bg-brand-orange/10 text-brand-orange"
                  : p.tone === "indigo"
                    ? "bg-brand-indigo/10 text-brand-indigo"
                    : "bg-[#6f9e84]/15 text-[#5a8a70]"
              }`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 divide-x divide-brand-border border-t border-brand-border bg-brand-peach/25">
        {[
          { icon: Video, label: "Video" },
          { icon: Phone, label: "Call" },
          { icon: Mail, label: "Email" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2 py-3 text-xs font-semibold text-brand-cocoa"
          >
            <Icon className="size-4 text-brand-orange" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Add study micro-animation                                          */
/* ------------------------------------------------------------------ */

const STEPS = [
  { id: "idle", duration: 1600 },
  { id: "moving", duration: 1300 },
  { id: "click", duration: 380 },
  { id: "modal", duration: 650 },
  { id: "field1", duration: 750 },
  { id: "field2", duration: 750 },
  { id: "field3", duration: 850 },
  { id: "submitting", duration: 750 },
  { id: "confirm", duration: 2200 },
  { id: "closing", duration: 700 },
] as const;

type StepId = (typeof STEPS)[number]["id"];

const modalSteps: StepId[] = [
  "modal",
  "field1",
  "field2",
  "field3",
  "submitting",
  "confirm",
];

function AddStudyAnimation({ reducedMotion }: { reducedMotion: boolean }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;
    timer.current = setTimeout(() => {
      setStepIndex((i) => (i + 1) % STEPS.length);
    }, STEPS[stepIndex].duration);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [stepIndex, enabled]);

  if (!enabled) return null;

  const step = STEPS[stepIndex].id;
  const modalOpen = modalSteps.includes(step);
  const onAddButton = step === "moving" || step === "click";
  const onSubmit = step === "submitting";

  const cursorTarget = onAddButton
    ? { x: 150, y: 120 }
    : onSubmit
      ? { x: 858, y: 560 }
      : { x: 780, y: 470 };

  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              className="absolute inset-0 bg-brand-cocoa/10 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-brand-border bg-white p-6 shadow-[0_24px_60px_rgba(32,21,21,0.12)]"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {step === "confirm" ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#6f9e84]/15">
                    <Check className="size-6 text-[#5a8a70]" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-brand-cocoa">
                    Study intake received
                  </h4>
                  <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-brand-muted">
                    Recruitment setup is being prepared.
                  </p>
                </div>
              ) : (
                <>
                  <h4 className="text-base font-semibold text-brand-cocoa">
                    Add a new study
                  </h4>
                  <div className="mt-5 space-y-4">
                    <ModalField
                      label="Study title"
                      value="Dermatology Recruitment Study"
                      filled={["field1", "field2", "field3", "submitting"].includes(
                        step
                      )}
                    />
                    <ModalField
                      label="Location"
                      value="Warsaw, Poland"
                      filled={["field2", "field3", "submitting"].includes(step)}
                    />
                    <ModalField
                      label="Participant criteria"
                      value="Adults aged 18–65 · Selected study criteria"
                      filled={["field3", "submitting"].includes(step)}
                    />
                  </div>
                  <button
                    className={`mt-6 w-full rounded-md px-3 py-2.5 text-xs font-semibold text-brand-ivory transition-transform ${
                      onSubmit
                        ? "scale-[0.98] bg-brand-orange/90"
                        : "bg-brand-orange"
                    }`}
                  >
                    Submit study intake
                  </button>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute left-0 top-0"
        initial={false}
        animate={{
          x: cursorTarget.x,
          y: cursorTarget.y,
          scale: step === "click" || onSubmit ? 0.85 : 1,
        }}
        transition={{
          x: { duration: 1.1, ease: EASE },
          y: { duration: 1.1, ease: EASE },
          scale: { duration: 0.2, ease: EASE },
        }}
      >
        <CursorIcon />
      </motion.div>
    </div>
  );
}

function ModalField({
  label,
  value,
  filled,
}: {
  label: string;
  value: string;
  filled: boolean;
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
        <AnimatePresence mode="wait">
          {filled ? (
            <motion.span
              key="value"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {value}
            </motion.span>
          ) : (
            <motion.span
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="italic"
            >
              …
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CursorIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
    >
      <path
        d="M5 3l14 7-6 1.6L9.6 18 5 3z"
        fill="#FFFDF9"
        stroke="#201515"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
