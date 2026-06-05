"use client";

import { motion } from "motion/react";
import { Mail, Phone, ShieldCheck, Video } from "lucide-react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";

const rows = [
  {
    name: "Amina M.",
    study: "Dermatology Study",
    status: "Qualified",
    tone: "orange",
  },
  {
    name: "Kacper P.",
    study: "Sleep Research",
    status: "Info needed",
    tone: "indigo",
  },
  {
    name: "Lena S.",
    study: "Metabolic Study",
    status: "Scheduled",
    tone: "orange",
  },
] as const;

export const Trusted = () => {
  return (
    <section className="bg-brand-ivory px-4 py-16 md:py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Participant management
            </p>
            <Heading as="h1" className="mt-4 lg:text-left text-center lg:text-5xl">
              Manage screening without calling it a CRM.
            </Heading>

            <SubHeading className="py-8 lg:text-left text-center mx-auto lg:mx-0">
              Qualified participants move into a focused workspace where your
              team can review status, contact them remotely, and continue
              follow-up workflows.
            </SubHeading>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-brand-border bg-brand-ivory shadow-[0_28px_70px_rgba(32,21,21,0.14)]"
          >
            <div className="grid min-h-[430px] grid-cols-[110px_1fr]">
              <aside className="bg-brand-cocoa p-4 text-brand-ivory">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-peach/60">
                  Workspace
                </p>
                <div className="mt-6 space-y-3 text-xs">
                  {["New", "Review", "Screen", "Retain"].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-md px-3 py-2 ${
                        index === 1 ? "bg-brand-orange" : "bg-white/5"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </aside>

              <div className="bg-brand-ivory">
                <div className="flex items-center justify-between border-b border-brand-border p-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                      Remote screening queue
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-brand-cocoa">
                      Participant overview
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-brand-indigo px-3 py-1.5 text-xs font-semibold text-brand-ivory">
                    <ShieldCheck className="size-4 text-brand-orange" />
                    Secure status
                  </div>
                </div>

                <div className="p-5">
                  <div className="space-y-3">
                    {rows.map((row, index) => (
                      <motion.div
                        key={row.name}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.12, duration: 0.45 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-peach p-4"
                      >
                        <div
                          className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-brand-ivory ${
                            row.tone === "orange"
                              ? "bg-brand-orange"
                              : "bg-brand-indigo"
                          }`}
                        >
                          {row.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-bold text-brand-cocoa">
                            {row.name}
                          </p>
                          <p className="truncate text-sm text-brand-muted">
                            {row.study}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold text-brand-ivory ${
                            row.tone === "orange"
                              ? "bg-brand-orange"
                              : "bg-brand-indigo"
                          }`}
                        >
                          {row.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-brand-border bg-brand-ivory text-sm font-semibold text-brand-cocoa">
                    <WorkspaceAction icon={<Video className="size-4" />} label="Video" />
                    <WorkspaceAction icon={<Phone className="size-4" />} label="Call" />
                    <WorkspaceAction icon={<Mail className="size-4" />} label="Email" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

function WorkspaceAction({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex items-center justify-center gap-2 border-r border-brand-border px-4 py-4 last:border-r-0 hover:bg-brand-peach">
      <span className="text-brand-orange">{icon}</span>
      {label}
    </button>
  );
}
