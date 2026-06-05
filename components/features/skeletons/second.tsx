import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconCircleDashedCheck,
  IconLoader2,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";

export const SkeletonTwo = () => {
  return (
    <div
      style={{
        transform: "rotateZ(-20deg) rotateY(20deg) rotateX(20deg)",
      }}
      className={cn(
        "max-w-[85%] absolute inset-0 h-full my-auto bg-brand-peach mx-auto w-full p-3 border border-brand-border shadow-2xl rounded-2xl flex flex-col",
        "[--pattern-fg:rgba(32,21,21,0.05)] translate-x-10 mask-radial-from-50% mask-b-from-50%"
      )}
    >
      <div className="flex gap-3 items-center">
        <IconCircleDashedCheck className="size-4" />
        <p className="text-sm font-semibold text-brand-cocoa">
          Recruitment Workflow
        </p>
      </div>
      <div className="relative h-40 flex-1 mt-4 border border-brand-border rounded-2xl bg-brand-ivory group">
        <Pattern />
        <div className="absolute inset-0 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 bg-brand-ivory h-full w-full rounded-2xl">
          <Row
            icon={<IconCheck className="size-4" />}
            text="Build study page"
            time="10s"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-4" />}
            text="Launch paid path"
            time="20s"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-4" />}
            text="Screen questionnaire"
            time="30s"
          />
          <GradientHr />
          <Row
            icon={
              <IconLoader2 className="rounded-full p-0.5 size-4 animate-spin" />
            }
            text="Waiting for Approval"
            time="40s"
            variant="warning"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-4" />}
            text="Participant added"
            time="50s"
          />
          <GradientHr />
        </div>
      </div>
    </div>
  );
};

const GradientHr = () => {
  return (
    <div className="h-px w-full bg-linear-to-r from-transparent via-brand-border to-transparent"></div>
  );
};

const Row = ({
  icon,
  text,
  time,
  variant = "success",
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
  variant?: "success" | "warning" | "danger";
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "size-4 flex items-center justify-center rounded-full text-white",
            variant === "success" && "bg-brand-orange",
            variant === "warning" && "bg-brand-indigo"
          )}
        >
          {icon}
        </div>
        <p className="text-brand-muted font-medium text-sm">
          {text}
        </p>
      </div>
      <div className="flex items-center gap-1 text-brand-muted">
        <IconRipple className="size-3" />
        <p className="text-[10px] font-bold">{time}</p>
      </div>
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
  );
};
