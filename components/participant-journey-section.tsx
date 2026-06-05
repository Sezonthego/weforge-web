import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ClipboardCheck,
  Mail,
  MapPin,
  Phone,
  Route,
  Sparkles,
  UserCheck,
  Video,
} from "lucide-react";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";

const participantRows = [
  { icon: MapPin, label: "Study location" },
  { icon: ClipboardCheck, label: "Basic participation information" },
  { icon: Route, label: "What happens next" },
];

const participants = [
  {
    initials: "AM",
    name: "Amina M.",
    status: "Ready for review",
    action: "Call",
    tone: "orange",
  },
  {
    initials: "KP",
    name: "Kacper P.",
    status: "Follow-up needed",
    action: "Email",
    tone: "indigo",
  },
  {
    initials: "LS",
    name: "Lena S.",
    status: "Remote screening scheduled",
    action: "Video",
    tone: "green",
  },
] as const;

const benefitItems = [
  {
    icon: Sparkles,
    title: "Clearer participant information",
    description:
      "Help potential participants understand the study journey and next step.",
  },
  {
    icon: UserCheck,
    title: "Structured review",
    description:
      "Give research teams a clear view of participant status before follow-up.",
  },
  {
    icon: Bell,
    title: "Connected follow-up",
    description:
      "Coordinate phone, email, video, and reminder actions more consistently.",
  },
] as const;

const actionItems = [
  { icon: Phone, label: "Call" },
  { icon: Mail, label: "Email" },
  { icon: Video, label: "Video" },
  { icon: Bell, label: "Reminder" },
] as const;

function StatusDot({ tone }: { tone: "orange" | "indigo" | "green" }) {
  const color =
    tone === "orange"
      ? "bg-brand-orange"
      : tone === "indigo"
        ? "bg-brand-indigo"
        : "bg-[#6f9e84]";

  return <span className={`size-2 rounded-full ${color}`} aria-hidden="true" />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-cocoa/45">
      {children}
    </p>
  );
}

function ParticipantPanel() {
  return (
    <div className="group/participant rounded-3xl border border-brand-border bg-brand-ivory p-4 shadow-[0_22px_60px_rgba(32,21,21,0.08)] md:p-5">
      <SectionLabel>Participant view</SectionLabel>

      <div className="mt-4 overflow-hidden rounded-2xl border border-brand-border bg-brand-peach/70">
        <div className="flex items-center gap-2 border-b border-brand-border bg-brand-ivory/80 px-4 py-3">
          <span className="size-2 rounded-full bg-brand-orange" />
          <span className="size-2 rounded-full bg-brand-cocoa/20" />
          <span className="size-2 rounded-full bg-brand-indigo/45" />
          <span className="ml-2 h-5 flex-1 rounded-full bg-brand-peach/70" />
        </div>

        <div className="p-5 md:p-6">
          <div className="rounded-2xl border border-brand-border bg-brand-ivory p-5">
            <p className="text-xs font-medium text-brand-orange">
              Study recruitment page
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-cocoa">
              Dermatology Study
            </h3>
            <p className="mt-3 text-sm leading-6 text-brand-muted">
              Learn more about the study and check whether the next step may be
              relevant for you.
            </p>

            <div className="mt-5 space-y-2.5">
              {participantRows.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-ivory px-3.5 py-3 text-sm text-brand-cocoa transition-colors duration-300 group-hover/participant:border-brand-orange/25 group-hover/participant:bg-white"
                >
                  <Icon
                    className="size-4 shrink-0 text-brand-indigo"
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <button className="mt-5 w-full rounded-md bg-brand-orange px-4 py-3 text-sm font-semibold text-brand-ivory shadow-brand transition-colors hover:bg-[#e64700] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory">
              Check potential eligibility
            </button>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_0.85fr]">
            <div className="rounded-2xl border border-brand-border bg-brand-ivory p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-brand-cocoa">
                  Initial pre-screening
                </p>
                <span className="rounded-full bg-brand-orange/10 px-2.5 py-1 text-[11px] font-medium text-brand-orange">
                  3 of 4
                </span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-brand-peach">
                <div className="h-full w-3/4 rounded-full bg-brand-orange" />
              </div>
              <p className="mt-4 text-sm leading-5 text-brand-cocoa/80">
                Are you available for the required appointments?
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {["Yes", "No"].map((label) => (
                  <button
                    key={label}
                    className="rounded-md border border-brand-border bg-brand-ivory px-3 py-2 text-sm font-medium text-brand-cocoa transition-colors hover:border-brand-orange/35 hover:bg-brand-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex rounded-2xl border border-[#6f9e84]/25 bg-[#f2f8f4] p-4">
              <div className="mt-auto">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#4e7f64]">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  <span>Information received</span>
                </div>
                <p className="mt-2 text-sm leading-5 text-brand-cocoa/70">
                  The study team may contact you regarding the next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <>
      <div className="hidden h-full flex-col items-center justify-center gap-4 lg:flex">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cocoa/45">
          Structured handoff
        </p>
        <svg
          viewBox="0 0 132 48"
          className="h-12 w-full overflow-visible"
          role="img"
          aria-label="Information moves from the participant view to the team workspace"
        >
          <path
            d="M8 24H124"
            stroke="rgba(32,21,21,0.18)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {[8, 66, 124].map((x) => (
            <circle
              key={x}
              cx={x}
              cy="24"
              r="4"
              fill={x === 66 ? "#2B2358" : "#FFFDF9"}
              stroke={x === 66 ? "#2B2358" : "rgba(32,21,21,0.20)"}
              strokeWidth="1.5"
            />
          ))}
          <circle
            r="5"
            fill="#FF4F00"
            className="motion-reduce:hidden"
            aria-hidden="true"
          >
            <animateMotion
              dur="6.5s"
              repeatCount="indefinite"
              path="M8 24H124"
            />
          </circle>
          <circle
            cx="66"
            cy="24"
            r="5"
            fill="#FF4F00"
            className="hidden motion-reduce:block"
            aria-hidden="true"
          />
        </svg>
      </div>

      <div className="flex items-center justify-center py-2 lg:hidden">
        <div
          className="flex h-20 w-px flex-col items-center justify-between bg-brand-border"
          aria-label="Structured handoff from participant view to team workspace"
          role="img"
        >
          <span className="size-2 rounded-full bg-brand-orange" />
          <span className="size-2 rounded-full bg-brand-indigo" />
          <span className="size-2 rounded-full bg-brand-orange" />
        </div>
      </div>
    </>
  );
}

function TeamPanel() {
  return (
    <div className="group/team rounded-3xl border border-brand-border bg-brand-ivory p-4 shadow-[0_22px_60px_rgba(32,21,21,0.08)] md:p-5">
      <SectionLabel>Team view</SectionLabel>

      <div className="mt-4 rounded-2xl border border-brand-border bg-brand-peach/70 p-5 md:p-6">
        <div className="rounded-2xl border border-brand-border bg-brand-ivory p-5">
          <h3 className="text-2xl font-semibold tracking-tight text-brand-cocoa">
            Participant workspace
          </h3>
          <p className="mt-3 text-sm leading-6 text-brand-muted">
            Review status, coordinate screening, and manage follow-up actions.
          </p>

          <div className="mt-5 divide-y divide-brand-border overflow-hidden rounded-xl border border-brand-border bg-brand-ivory">
            {participants.map((participant) => (
              <div
                key={participant.name}
                className="flex items-center gap-3 px-4 py-3.5 transition-colors duration-300 group-hover/team:bg-white"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-peach text-[11px] font-semibold text-brand-cocoa ring-1 ring-inset ring-brand-border">
                  {participant.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-semibold text-brand-cocoa">
                      {participant.name}
                    </p>
                    <StatusDot tone={participant.tone} />
                  </div>
                  <p className="mt-0.5 truncate text-xs text-brand-muted">
                    {participant.status}
                  </p>
                </div>
                <button className="shrink-0 rounded-full border border-brand-border bg-brand-ivory px-3 py-1.5 text-xs font-medium text-brand-cocoa transition-colors hover:border-brand-orange/35 hover:bg-brand-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory">
                  {participant.action}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {actionItems.map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="flex items-center justify-center gap-2 rounded-md border border-brand-border bg-brand-ivory px-3 py-2 text-xs font-semibold text-brand-cocoa transition-colors hover:border-brand-orange/35 hover:bg-brand-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory"
              >
                <Icon className="size-3.5 text-brand-indigo" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-brand-border bg-brand-ivory p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-cocoa/45">
            Workflow status
          </p>
          <div className="mt-4 grid gap-2 text-sm font-medium text-brand-cocoa sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            <span className="rounded-lg bg-brand-peach px-3 py-2">
              Questionnaire completed
            </span>
            <ArrowRight
              className="hidden size-4 text-brand-orange sm:block"
              aria-hidden="true"
            />
            <span className="rounded-lg bg-brand-indigo/10 px-3 py-2 text-brand-indigo">
              Ready for review
            </span>
            <ArrowRight
              className="hidden size-4 text-brand-orange sm:block"
              aria-hidden="true"
            />
            <span className="rounded-lg bg-brand-peach px-3 py-2">
              Follow-up scheduled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ParticipantJourneySection() {
  return (
    <section className="bg-brand-ivory px-4 py-20 md:py-28">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange">
            Participant journey
          </p>
          <Heading className="max-w-4xl">
            A clearer journey for participants. A simpler process for your team.
          </Heading>
          <SubHeading className="mt-6 max-w-3xl leading-8">
            From first discovery to pre-screening and follow-up, WeForge helps
            create a participant journey that is easier to understand and easier
            for clinical-research teams to manage.
          </SubHeading>
        </div>

        <div className="mt-12 rounded-[2rem] border border-brand-border bg-brand-peach/45 p-3 shadow-[0_28px_90px_rgba(32,21,21,0.08)] md:p-5 lg:mt-16">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] lg:items-stretch">
            <ParticipantPanel />
            <Connector />
            <TeamPanel />
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {benefitItems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-border bg-brand-ivory p-5 shadow-[0_14px_34px_rgba(32,21,21,0.06)]"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-brand-cocoa">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
