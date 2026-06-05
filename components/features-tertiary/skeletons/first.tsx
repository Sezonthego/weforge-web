"use client";

import React from "react";
import { motion } from "motion/react";
import {
  AdminIcon,
  DraftingIcon,
  EmailIcon,
  RecentActivityIcon,
  ReviewIcon,
} from "@/icons";
import { IconClock } from "@tabler/icons-react";

export const SkeletonOne = () => {
  const cardItems = [
    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-brand-orange text-brand-ivory shrink-0">
          <EmailIcon />
        </div>
      ),
      title: "Participant message",
      description: "Follow-up email prepared for qualified participant",
      badge: (
        <div className="flex items-center gap-1 border border-brand-border bg-brand-peach rounded-md px-1 py-0.5">
          <IconClock className="size-3" />
          <span className="text-[10px] font-bold text-brand-muted">
            15s
          </span>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-brand-indigo text-brand-ivory shrink-0">
          <ReviewIcon />
        </div>
      ),
      title: "Eligibility review",
      description:
        "Coordinator review requested before participant contact",
      badge: (
        <div className="flex items-center gap-1 border border-brand-indigo/20 bg-brand-indigo/10 rounded-md px-1 py-0.5">
          <p className="text-[10px] font-bold text-brand-indigo">REVIEW</p>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-brand-orange text-brand-ivory shrink-0">
          <DraftingIcon />
        </div>
      ),
      title: "Questionnaire check",
      description: "Answers processed against study criteria",
      badge: (
        <div className="flex items-center gap-1 border border-brand-orange/20 bg-brand-orange/10 rounded-md px-1 py-0.5">
          <p className="text-[10px] font-bold text-brand-orange">PROCESSING</p>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-brand-cocoa text-brand-ivory shrink-0">
          <AdminIcon />
        </div>
      ),
      title: "Site approval",
      description: "Study team confirms the next screening step",
      badge: (
        <div className="flex items-center gap-1 border border-brand-orange/20 bg-brand-orange/10 rounded-md px-1 py-0.5">
          <p className="text-[10px] font-bold text-brand-orange">PROCESSING</p>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-brand-orange text-brand-ivory shrink-0">
          <EmailIcon />
        </div>
      ),
      title: "Weekly recruitment report",
      description: "Generated study performance summary",
      badge: (
        <div className="flex items-center gap-1 border border-brand-border bg-brand-peach rounded-md px-1 py-0.5">
          <IconClock className="size-3" />
          <span className="text-[10px] font-bold text-brand-muted">
            2m
          </span>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-brand-indigo text-brand-ivory shrink-0">
          <ReviewIcon />
        </div>
      ),
      title: "Organic page review",
      description:
        "Study page checked for clear participant guidance",
      badge: (
        <div className="flex items-center gap-1 border border-brand-indigo/20 bg-brand-indigo/10 rounded-md px-1 py-0.5">
          <p className="text-[10px] font-bold text-brand-indigo">REVIEW</p>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-brand-orange text-brand-ivory shrink-0">
          <DraftingIcon />
        </div>
      ),
      title: "Retention workflow",
      description: "Follow-up sequence updated for eligible participants",
      badge: (
        <div className="flex items-center gap-1 border border-brand-orange/20 bg-brand-orange/10 rounded-md px-1 py-0.5">
          <p className="text-[10px] font-bold text-brand-orange">ACTIVE</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex-1 flex flex-col gap-2 rounded-t-3xl mx-auto w-full h-full bg-brand-peach border border-brand-ivory/20 inset-x-10 inset-y-2 absolute pt-2 px-2">
      <Card>
        {cardItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="w-full"
          >
            <CardItem
              index={index}
              key={item.title}
              title={item.title}
              icon={item.icon}
              description={item.description}
              badge={item.badge}
            />
          </motion.div>
        ))}
      </Card>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-[0_18px_36px_rgba(32,21,21,0.12)] border border-brand-border rounded-tl-2xl bg-brand-ivory flex flex-col flex-1 items-start">
      <div className="flex items-center gap-2 border-b w-full px-4 py-2">
        <RecentActivityIcon />
        <span className="text-sm font-bold text-brand-cocoa">
          Processing Activity
        </span>
      </div>
      {children}
    </div>
  );
};

export const CardItem = ({
  icon,
  title,
  badge,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  badge: React.ReactNode;
  description: string;
  index: number;
}) => {
  return (
    <div className="flex items-center justify-between w-full pl-4 pt-4 relative overflow-hidden">
      <div className="flex items-center gap-2">
        {icon}
        <div className="text-sm text-brand-cocoa">
          {title}
        </div>
        {badge}
      </div>

      <motion.p className="text-sm text-brand-muted flex-nowrap max-w-[16rem] w-full text-left whitespace-nowrap">
        {description.split("").map((item, idx) => (
          <motion.span
            key={idx}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: idx * 0.01 + index * 0.1,
            }}
          >
            {item}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
