"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  FileIcon,
  GoogleSheetsIcon,
  HubspotIcon,
  HumanIcon,
  SalesforceIcon,
  SettingsIcon,
} from "@/icons";
import { cn } from "@/lib/utils";

interface Items {
  icon: React.ReactNode;
  variant: string;
  title: string;
  description: string;
}

export const SkeletonOne = () => {
  const items = useMemo<Items[]>(
    () => [
    {
      icon: <FileIcon className="size-4" />,
      variant: "orange",
      title: "Study criteria",
      description:
        "Capture inclusion criteria, site constraints, and recruitment goals.",
    },
    {
      icon: <HumanIcon className="size-4" />,
      variant: "indigo",
      title: "Participant journey",
      description:
        "Map what patients see from ad or search through prequalification.",
    },
    {
      icon: <SettingsIcon className="size-4" />,
      variant: "orange",
      title: "Follow-up logic",
      description:
        "Define review, contact, and retention workflows after qualification.",
    },
    ],
    []
  );

  const ref = useRef(null);
  const isInView = useInView(ref);

  const [activeCards, setActiveCards] = useState<Items[] | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveCards((prev) => {
        if (!prev) {
          return [items[0]];
        }
        if (prev.length >= items.length) {
          clearInterval(interval);
          return prev;
        }
        return [items[prev.length], ...prev];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isInView, items]);

  return (
    <div
      ref={ref}
      className="flex-1 flex flex-col gap-2 rounded-t-3xl max-w-sm mx-auto w-full h-full bg-brand-ivory border border-brand-border inset-x-0 absolute p-2"
    >
      {activeCards &&
        activeCards.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            variant={item.variant}
            title={item.title}
            description={item.description}
          />
        ))}
    </div>
  );
};

export const Card = ({
  icon,
  variant,
  title,
  description,
}: {
  icon: React.ReactNode;
  variant?: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        scale: 0.8,
        y: -10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 300,
          damping: 25,
        },
        opacity: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.3, ease: "easeOut" },
      }}
      className="p-4 shadow-[0_18px_36px_rgba(32,21,21,0.10)] border border-brand-border rounded-2xl bg-brand-ivory flex items-start gap-4"
    >
      <div
        className={cn(
          "size-6 rounded-full text-brand-ivory flex items-center justify-center shrink-0 mt-1",
          variant === "orange" && "bg-brand-orange",
          variant === "indigo" && "bg-brand-indigo"
        )}
      >
        {icon}
      </div>
      <div>
        <p className="text-lg font-bold text-brand-cocoa">
          {title}
        </p>
        <p className="text-base font-normal text-brand-muted">
          {description}
        </p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          <Tag icon={<SalesforceIcon />} title="Criteria" />
          <Tag icon={<HubspotIcon />} title="Ads" />
          <Tag icon={<GoogleSheetsIcon />} title="Data" />
        </div>
      </div>
    </motion.div>
  );
};

const Tag = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="flex items-center gap-2 px-1 py-0.5 border border-brand-border rounded-sm text-sm">
      {icon}
      <p className="text-xs text-brand-muted">{title}</p>
    </div>
  );
};
