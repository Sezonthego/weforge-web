"use client";

import {
  ArrowRight,
  Bone,
  Brain,
  CalendarCheck,
  CircleAlert,
  Eye,
  HeartHandshake,
  HeartPulse,
  RefreshCw,
  Stethoscope,
  Venus,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Container } from "@/components/container";

const practiceAreas = [
  {
    label: "Cardiology",
    icon: HeartPulse,
    patient: "David Goldstein",
    phone: "(555) 704-3119",
    doctor: "Dr. Sophia Kellen",
    appointment: "Fri 21, 8:50 AM (30 mins)",
    status: "Scheduled",
    statusIcon: CalendarCheck,
    summary:
      "Patient David Goldstein called to confirm his upcoming stress test appointment. The AI assistant verified his details and confirmed the test with Dr. Sophia Kellen for Friday at 8:50 AM.",
    note:
      "David asked whether he should hold his beta blocker before the test. A nurse should call back to review his medication list and provide prep instructions.",
    background:
      "radial-gradient(circle at 72% 22%, rgba(210, 255, 238, 0.58), transparent 20%), linear-gradient(90deg, rgba(3, 68, 40, 0.96) 0 27%, rgba(20, 139, 91, 0.9) 27% 55%, rgba(169, 239, 222, 0.72) 55% 100%), repeating-linear-gradient(0deg, rgba(20, 88, 70, 0.25) 0 2px, transparent 2px 13px)",
    rail: "#0c6d45",
    avatar: "linear-gradient(135deg, #d7f4ef, #f9eee2)",
  },
  {
    label: "Dermatology",
    icon: Brain,
    patient: "Ava Thompson",
    phone: "(555) 801-2337",
    doctor: "Dr. Emily Crayford",
    appointment: "Wed 17, 12:10 PM (30 mins)",
    status: "Rescheduled",
    statusIcon: RefreshCw,
    summary:
      "Patient Ava Thompson called to reschedule a skin check appointment. The AI assistant verified her details and moved the visit to Wednesday at 12:10 PM with Dr. Emily Crayford.",
    note:
      "Ava requested information about earlier openings this week in case of cancellations. Front desk should notify her if an earlier slot becomes available.",
    background:
      "radial-gradient(circle at 78% 46%, rgba(255, 226, 194, 0.42), transparent 24%), linear-gradient(90deg, rgba(122, 59, 17, 0.96) 0 27%, rgba(168, 92, 43, 0.82) 27% 55%, rgba(140, 83, 43, 0.72) 55% 100%), repeating-radial-gradient(circle at 76% 50%, rgba(255,255,255,0.1) 0 1px, transparent 1px 5px)",
    rail: "#8b4819",
    avatar: "linear-gradient(135deg, #ffe0c6, #f7f2ea)",
  },
  {
    label: "Gastroenterology",
    icon: Stethoscope,
    patient: "Michael Torres",
    phone: "(555) 662-5083",
    doctor: "Dr. Mira Solano",
    appointment: "Thu 13, 11:00 AM (20 mins)",
    status: "Rescheduled",
    statusIcon: RefreshCw,
    summary:
      "Patient Michael Torres called to adjust his GI consultation time. The AI assistant rescheduled him with Dr. Mira Solano for Thursday at 11:00 AM and confirmed the change via SMS.",
    note:
      "Michael reported new symptoms that may require provider review before the appointment. Please flag his chart for a nurse callback.",
    background:
      "radial-gradient(circle at 66% 32%, rgba(255, 223, 186, 0.55), transparent 24%), radial-gradient(circle at 82% 72%, rgba(208, 80, 39, 0.58), transparent 28%), linear-gradient(90deg, rgba(207, 87, 25, 0.95) 0 27%, rgba(255, 153, 92, 0.82) 27% 55%, rgba(180, 57, 33, 0.78) 55% 100%)",
    rail: "#db6f28",
    avatar: "linear-gradient(135deg, #ffd7ba, #eef8f4)",
  },
  {
    label: "Ophthalmology",
    icon: Eye,
    patient: "Miguel Alvarez",
    phone: "(555) 390-4478",
    doctor: "Dr. Aisha Renford",
    appointment: "Thu 12, 3:30 PM (30 mins)",
    status: "Scheduled",
    statusIcon: CalendarCheck,
    summary:
      "Patient Miguel Alvarez reached out to finalize his upcoming eye exam. The AI assistant verified his ID and confirmed an appointment with Dr. Aisha Renford for Thursday at 3:30 PM.",
    note:
      "Miguel requested assistance transferring records from his previous optometrist. A team member should follow up to obtain the release form.",
    background:
      "radial-gradient(circle at 76% 46%, rgba(225, 235, 226, 0.45), transparent 10%), radial-gradient(circle at 80% 48%, rgba(13, 14, 19, 0.8), transparent 18%), radial-gradient(circle at 80% 48%, rgba(124, 105, 61, 0.7), transparent 34%), linear-gradient(90deg, rgba(80, 47, 6, 0.98) 0 27%, rgba(58, 79, 82, 0.82) 27% 55%, rgba(122, 115, 88, 0.7) 55% 100%)",
    rail: "#594207",
    avatar: "linear-gradient(135deg, #e4ecec, #f7efd9)",
  },
  {
    label: "Orthopedics",
    icon: Bone,
    patient: "Hannah Cohen",
    phone: "(555) 316-9924",
    doctor: "Dr. Marcus Breyer",
    appointment: "Mon 24, 9:40 AM (30 mins)",
    status: "Scheduled",
    statusIcon: CalendarCheck,
    summary:
      "Patient Hannah Cohen called to schedule a post-operative follow-up for her knee replacement. The AI assistant verified her identity and booked her with Dr. Marcus Breyer for Monday at 9:40 AM.",
    note:
      "Hannah requested clarification on when to resume weight-bearing activities. The clinical team should review her post-op protocol before the visit.",
    background:
      "radial-gradient(circle at 70% 38%, rgba(221, 241, 247, 0.52), transparent 18%), radial-gradient(circle at 82% 76%, rgba(14, 28, 42, 0.62), transparent 26%), linear-gradient(90deg, rgba(8, 67, 72, 0.96) 0 27%, rgba(35, 116, 132, 0.82) 27% 55%, rgba(14, 22, 32, 0.78) 55% 100%)",
    rail: "#0e6c73",
    avatar: "linear-gradient(135deg, #d6eff3, #fff4e1)",
  },
  {
    label: "Primary Care",
    icon: Stethoscope,
    patient: "Alisha Grant",
    phone: "(555) 741-1192",
    doctor: "Dr. Suresh Patel",
    appointment: "Thu 19, 2:45 PM (30 mins)",
    status: "Scheduled",
    statusIcon: CalendarCheck,
    summary:
      "Patient Alisha Grant reached out to set up her annual primary care visit. After confirming her identity, the AI assistant booked her with Dr. Suresh Patel for Thursday at 2:45 PM.",
    note:
      "Alisha mentioned she needs her vaccination records emailed for work. Clinic staff should send her the latest immunization summary.",
    background:
      "radial-gradient(circle at 78% 18%, rgba(35, 58, 66, 0.5), transparent 16%), linear-gradient(90deg, rgba(29, 115, 129, 0.96) 0 27%, rgba(50, 144, 158, 0.82) 27% 55%, rgba(10, 55, 70, 0.86) 55% 100%), repeating-linear-gradient(100deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 7px)",
    rail: "#287f8d",
    avatar: "linear-gradient(135deg, #cdf5ef, #eff8fb)",
  },
  {
    label: "Value-Based Care",
    icon: HeartHandshake,
    patient: "Elena Petrova",
    phone: "(555) 630-1482",
    doctor: "Dr. Raymond Chu",
    appointment: "Wed 10, 4:15 PM (30 mins)",
    status: "Rescheduled",
    statusIcon: RefreshCw,
    summary:
      "Patient Elena Petrova called to reschedule her annual wellness visit. The AI assistant moved her appointment with Dr. Raymond Chu to Wednesday at 4:15 PM and confirmed via SMS.",
    note:
      "Elena is due for diabetic eye screening and A1C lab work. Care coordination should flag these care gaps for closure at this visit.",
    background:
      "radial-gradient(circle at 70% 12%, rgba(238, 255, 244, 0.56), transparent 18%), linear-gradient(90deg, rgba(55, 169, 183, 0.96) 0 27%, rgba(114, 214, 197, 0.76) 27% 55%, rgba(63, 162, 143, 0.72) 55% 100%), repeating-linear-gradient(88deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 16px)",
    rail: "#32aabc",
    avatar: "linear-gradient(135deg, #d8fbf3, #edf6e9)",
  },
  {
    label: "Women's Health",
    icon: Venus,
    patient: "Sofia Martinez",
    phone: "(555) 315-8842",
    doctor: "Dr. William Linton",
    appointment: "Tue 8, 2:05 PM (30 mins)",
    status: "Scheduled",
    statusIcon: CalendarCheck,
    summary:
      "Patient Sofia Martinez called to schedule her 28-week prenatal checkup. The AI assistant verified her information and booked her with Dr. William Linton for Tuesday at 2:05 PM.",
    note:
      "Sofia mentioned increased swelling in her ankles and hands. The nursing team should triage for blood pressure check and possible earlier appointment.",
    background:
      "radial-gradient(circle at 72% 28%, rgba(255, 240, 228, 0.64), transparent 20%), radial-gradient(circle at 82% 72%, rgba(255, 111, 72, 0.42), transparent 30%), linear-gradient(90deg, rgba(226, 105, 44, 0.94) 0 27%, rgba(255, 174, 126, 0.76) 27% 55%, rgba(255, 140, 104, 0.72) 55% 100%)",
    rail: "#e66f36",
    avatar: "linear-gradient(135deg, #ffe5d7, #fff6f1)",
  },
] as const;

type PracticeArea = (typeof practiceAreas)[number];

function PracticeAreaItem({
  area,
  active,
  onActivate,
}: {
  area: PracticeArea;
  active: boolean;
  onActivate: () => void;
}) {
  const Icon = area.icon;

  return (
    <Link
      href="/contact"
      onFocus={onActivate}
      onMouseEnter={onActivate}
      className="group flex min-h-20 items-center gap-4 text-brand-cocoa transition-[gap,color] duration-300 ease-out hover:gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ivory"
    >
      <span
        className={`flex shrink-0 items-center justify-center transition-all duration-300 ease-out md:size-16 ${
          active
            ? "size-20 bg-[#ded9ce]"
            : "size-14 bg-[#f0eee7] group-hover:size-20 group-hover:bg-[#ded9ce] group-focus-visible:size-20 group-focus-visible:bg-[#ded9ce]"
        }`}
      >
        <Icon
          className={`size-5 stroke-[1.8] text-brand-cocoa transition-transform duration-300 ease-out ${
            active ? "scale-125" : "group-hover:scale-125"
          }`}
          aria-hidden="true"
        />
      </span>
      <span className="min-w-0 text-lg leading-tight tracking-normal transition-transform duration-300 ease-out group-hover:translate-x-0.5 md:text-xl">
        {area.label}
      </span>
      <ArrowRight
        className={`size-7 shrink-0 transition-all duration-300 ease-out ${
          active
            ? "translate-x-0 opacity-100"
            : "-translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
        }`}
        aria-hidden="true"
      />
    </Link>
  );
}

function PracticeMockup({ area }: { area: PracticeArea }) {
  const StatusIcon = area.statusIcon;
  const initials = useMemo(
    () =>
      area.doctor
        .replace("Dr. ", "")
        .split(" ")
        .map((part) => part[0])
        .join(""),
    [area.doctor]
  );

  return (
    <div
      className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-brand-cocoa transition-colors duration-500 md:min-h-[640px]"
      style={{ backgroundImage: area.background }}
    >
      <div
        className="absolute inset-y-0 left-0 w-[27%] transition-colors duration-500"
        style={{ backgroundColor: area.rail }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-48 top-8 h-[760px] w-[760px] rounded-full border border-white/35 transition-colors duration-500"
        aria-hidden="true"
      />
      <div
        className="absolute -left-56 top-16 h-[760px] w-[760px] rounded-full border border-white/25"
        aria-hidden="true"
      />
      <div
        className="absolute -left-64 top-24 h-[760px] w-[760px] rounded-full border border-white/20"
        aria-hidden="true"
      />

      <div
        key={area.label}
        className="relative mx-6 w-full max-w-[580px] animate-in fade-in-0 slide-in-from-bottom-3 duration-300 rounded-[10px] bg-brand-ivory p-6 shadow-[0_24px_70px_rgba(15,35,25,0.24)] md:p-9"
      >
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-brand-cocoa">
            {area.patient}
          </h3>
          <p className="mt-1 text-lg text-brand-muted">{area.phone}</p>
        </div>

        <p className="mt-6 max-w-[34rem] text-base leading-7 text-brand-cocoa">
          {area.summary}
        </p>

        <div className="mt-5 rounded-xl border border-emerald-200 bg-white/72 p-4">
          <div className="flex items-center gap-4">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-brand-cocoa"
              style={{ backgroundImage: area.avatar }}
            >
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-brand-cocoa">{area.doctor}</p>
              <p className="mt-0.5 text-sm text-brand-muted">
                {area.appointment}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100 px-2.5 py-1 text-sm font-medium text-emerald-900">
              <StatusIcon className="size-4" aria-hidden="true" />
              {area.status}
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-4 rounded-xl border border-cyan-200 bg-white/72 p-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-brand-cocoa">
            <CircleAlert className="size-5" aria-hidden="true" />
          </span>
          <p className="text-base leading-6 text-brand-cocoa">{area.note}</p>
        </div>
      </div>
    </div>
  );
}

export function PracticeSection() {
  const [activeLabel, setActiveLabel] = useState<PracticeArea["label"]>(
    practiceAreas[0].label
  );
  const activeArea =
    practiceAreas.find((area) => area.label === activeLabel) ??
    practiceAreas[0];
  const firstColumn = practiceAreas.filter((_, index) => index % 2 === 0);
  const secondColumn = practiceAreas.filter((_, index) => index % 2 === 1);

  return (
    <section className="border-y border-brand-border bg-brand-ivory">
      <Container className="px-0">
        <div className="grid border-x border-brand-border lg:grid-cols-2">
          <PracticeMockup area={activeArea} />

          <div className="flex min-h-[640px] flex-col border-t border-brand-border px-6 py-12 md:px-12 lg:border-l lg:border-t-0 lg:px-14">
            <div>
              <h2 className="font-clarion-display text-4xl font-light tracking-normal text-brand-cocoa md:text-5xl">
                Built for your practice
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-7 text-brand-muted">
                No two practices operate the same. Your AI agent is configured
                to match yours exactly.
              </p>
            </div>

            <div className="mt-auto grid gap-x-14 gap-y-3 pt-16 md:grid-cols-2">
              <div className="space-y-3">
                {firstColumn.map((area) => (
                  <PracticeAreaItem
                    key={area.label}
                    active={area.label === activeArea.label}
                    area={area}
                    onActivate={() => setActiveLabel(area.label)}
                  />
                ))}
              </div>
              <div className="space-y-3">
                {secondColumn.map((area) => (
                  <PracticeAreaItem
                    key={area.label}
                    active={area.label === activeArea.label}
                    area={area}
                    onActivate={() => setActiveLabel(area.label)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
