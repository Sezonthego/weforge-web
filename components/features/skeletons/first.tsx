import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconExclamationCircle,
  IconPrison,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";

export const SkeletonOne = () => {
  return (
    <div
      style={{
        transform: "rotateZ(15deg) rotateY(-20deg) rotateX(30deg) scale(1.2)",
      }}
      className="perspective-distant h-full w-full absolute -translate-y-12 mask-radial-from-50% mask-r-from-50%"
    >
      <SkeletonCard
        className="absolute bottom-0 left-12 z-30 max-w-[90%]"
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Study Intake"
        description="Captures study details, inclusion criteria, site availability, and recruitment goals."
        badge={<Badge text="Ready" />}
      />

      <SkeletonCard
        className="absolute bottom-10 left-8 z-20"
        icon={<IconExclamationCircle className="size-4" />}
        title="Eligibility Rules"
        description="Transforms study criteria into clear prequalification logic for participants."
        badge={<Badge text="Review" variant="success" />}
      />

      <SkeletonCard
        className="absolute bottom-20 left-4 max-w-[80%] z-10"
        icon={<IconPrison className="size-4" />}
        title="Recruitment Risk"
        description="Flags questions or handoffs that could create participant drop-off."
        badge={<Badge text="Low" variant="warning" />}
      />
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[85%] h-fit my-auto bg-brand-ivory mx-auto w-full p-3 rounded-2xl border border-brand-border shadow-2xl text-brand-cocoa",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-sm font-semibold text-brand-cocoa">
          {title}
        </p>
        {badge}
      </div>
      <p className="text-sm text-brand-muted font-light mt-3">
        {description}
      </p>
      <div className="flex items-center gap-2 flex-wrap mt-3">
        <Tag text="Criteria" />
        <Tag text="Study page" />
        <Tag text="Follow-up" />
      </div>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="px-2 py-1 text-xs rounded-sm bg-brand-peach text-brand-cocoa">
      {text}
    </div>
  );
};

const Badge = ({
  variant = "success",
  text,
}: {
  variant?: "danger" | "success" | "warning";
  text?: string;
}) => {
  return (
    <div
      className={cn(
        "px-1 py-0.5 rounded-full flex items-center gap-1 w-fit",
        variant === "danger" &&
          "bg-brand-orange/10 border border-brand-orange text-brand-orange",
        variant === "warning" &&
          "bg-brand-indigo/10 border border-brand-indigo text-brand-indigo",
        variant === "success" &&
          "bg-brand-peach border border-brand-orange/30 text-brand-orange"
      )}
    >
      <IconClock className={cn("size-3")} />
      <IconRipple className={cn("size-3")} />
      <p className="text-xs font-bold">{text}</p>
    </div>
  );
};
