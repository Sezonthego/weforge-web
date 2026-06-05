"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { GoogleSheetsIcon, HubspotIcon, SalesforceIcon } from "@/icons";
import { cn } from "@/lib/utils";
import {
  IconClipboardData,
  IconFeatherFilled,
  IconFilter2Search,
  IconPointerUp,
} from "@tabler/icons-react";

export const SkeletonFour = () => {
  const items = useMemo(
    () => [
    {
      title: "Consent context",
      icon: <IconClipboardData className="size-4 text-brand-orange" />,
      className: "bg-brand-peach border border-brand-orange/20",
      description:
        "Keep study expectations, consent language, and participant-facing context close to each workflow.",
    },
    {
      title: "Secure storage",
      icon: <GoogleSheetsIcon className="size-4" />,
      className: "bg-brand-ivory border border-brand-border",
      description:
        "Keep questionnaire answers and status changes organized for authorized review.",
    },
    {
      title: "Retention logic",
      icon: <IconFeatherFilled className="size-4 text-brand-orange" />,
      className: "bg-brand-peach border border-brand-orange/20",
      description:
        "Trigger timely follow-up actions after qualification, review, or missed contact.",
    },
    {
      title: "Coordinator review",
      icon: <IconPointerUp className="size-4 text-brand-cocoa" />,
      className: "bg-brand-ivory border border-brand-border",
      description:
        "Route unclear or sensitive participant statuses to the right team member.",
    },
    {
      title: "Criteria quality",
      icon: <IconFilter2Search className="size-4 text-brand-indigo" />,
      className: "bg-brand-peach border border-brand-indigo/20",
      description:
        "Check answer completeness before participant details move into follow-up.",
    },
    ],
    []
  );

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentIndexRef = useRef(0);
  const [selected, setSelected] = useState(items[0]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % items.length;
      setSelected(items[currentIndexRef.current]);
    }, 2000);
  }, [items, stopAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  return (
    <div>
      <div
        className="gap-4 flex max-w-lg mx-auto items-center justify-center flex-wrap mb-4"
        onMouseEnter={stopAutoPlay} // pause when hovering buttons area
        onMouseLeave={() => startAutoPlay()}
      >
        {items.map((item, index) => (
          <button
            key={item.title}
            onClick={() => {
              // keep ref in sync so autoplay doesn't jump
              currentIndexRef.current = index;
              setSelected(item);
              // restart timer so user has time to read
              stopAutoPlay();
              startAutoPlay();
            }}
            className={cn(
              "px-2 py-1 rounded-sm flex items-center justify-center gap-1 cursor-pointer text-xs active:scale-98 transition duration-200 opacity-60 text-brand-cocoa",
              selected.title === item.title && "opacity-100 inset-shadow-sm",
              item.className
            )}
          >
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-brand-peach border border-brand-ivory/20 max-w-[20rem] lg:max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2">
        <Card
          icon={selected.icon}
          title={selected.title}
          description={selected.description}
        />
      </div>
    </div>
  );
};

export const Card = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  variant?: "blue" | "red" | "green";
  title: string;
  description: string;
}) => {
  const tags = [
    { icon: <SalesforceIcon />, title: "Status" },
    { icon: <HubspotIcon />, title: "Review" },
    { icon: <GoogleSheetsIcon />, title: "Data" },
  ];
  return (
    <motion.div
      key={title}
      className="p-4 shadow-[0_18px_36px_rgba(32,21,21,0.12)] border border-brand-border rounded-2xl bg-brand-ivory flex flex-col items-start gap-4"
    >
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          className={cn(
            "size-6 rounded-full text-brand-ivory bg-brand-orange flex items-center justify-center shrink-0 mt-1"
          )}
        >
          {icon}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.1, ease: "easeInOut" }}
          className="text-lg font-bold text-brand-cocoa shrink-0"
        >
          {title}
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, ease: "easeInOut" }}
      >
        <p className="text-base font-normal text-brand-muted">
          Handling rule
        </p>
        <p className="text-sm font-normal text-brand-muted rounded-sm border border-dashed border-brand-border px-2 py-1 mt-2 mb-4">
          {description}
        </p>
        <div className="hidden md:flex mt-2 flex-row flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, ease: "easeInOut" }}
              key={index}
            >
              <Tag key={tag.title + index} icon={tag.icon} title={tag.title} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Tag = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="flex items-center gap-2 px-1 py-0.5 border border-brand-border rounded-sm text-sm">
      {icon} <p className="text-xs text-brand-muted">{title}</p>
    </div>
  );
};
