"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { LogoIcon } from "@/components/logo";

export const SkeletonTwo = () => {
  return (
    <div className="flex-1 gap-2 rounded-t-3xl w-full h-full px-8 flex-col items-center justify-center space-y-4">
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        <Item stagger={0} />
        <Item src="/7.webp" stagger={1} />
        <Item src="/8.webp" stagger={2} />
        <Item stagger={3} />
      </div>

      <div className="grid grid-cols-5 gap-1 justify-center w-full mx-auto">
        <Item stagger={4} />
        <Item src="/9.webp" stagger={5} />
        <Item containerClassName="from-brand-orange/50 via-transparent to-brand-indigo/50" stagger={6}>
          <div className="h-full w-full flex items-center justify-center bg-brand-ivory rounded-[12px] p-2 md:p-0">
            <LogoIcon className="size-12 text-brand-cocoa" />
          </div>
        </Item>
        <Item src="/10.webp" stagger={7} />
        <Item stagger={8} />
      </div>

      <div className="grid grid-cols-4 gap-1 justify-center max-w-md mx-auto">
        <Item stagger={9} />
        <Item src="/11.webp" stagger={10} />
        <Item src="/12.webp" stagger={11} />
        <Item stagger={12} />
      </div>
    </div>
  );
};

const Item = ({
  children,
  className,
  src = "",
  containerClassName,
  stagger = 0,
}: {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  containerClassName?: string;
  stagger?: number;
}) => {
  return (
    <div
      className={cn(
        "w-full justify-self-center aspect-square rounded-xl border border-dashed border-brand-ivory/25 relative p-0.5 overflow-hidden",
        "[--pattern-fg:rgba(255,253,249,0.10)]",
        className
      )}
    >
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.35 + (stagger % 3) * 0.08,
          delay: 0.12 + stagger * 0.05,
          ease: "easeInOut",
        }}
        className={cn(
          "flex items-center justify-center w-full h-full  relative rounded-[12px] p-px z-10",
          src && "bg-linear-to-br from-brand-orange via-brand-peach to-brand-indigo",
          containerClassName
        )}
      >
        {children ?? (
          <>
            {src && (
              <Image
                src={src}
                alt="item"
                height={120}
                width={120}
                className="object-cover aspect-square object-center rounded-[12px] relative z-20"
                draggable="false"
              />
            )}
          </>
        )}
      </motion.div>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[5px_5px] bg-fixed"></div>
    </div>
  );
};
