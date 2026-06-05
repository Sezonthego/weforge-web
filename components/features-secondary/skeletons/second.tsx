import { LogoIcon } from "@/components/logo";
import {
  FacebookMeta,
  GoogleSheetsIcon,
  InstagramIcon,
  SlackIcon,
} from "@/icons";
import { cn } from "@/lib/utils";
import React from "react";

export const SkeletonTwo = () => {
  return (
    <div
      className="flex-1 gap-2 rounded-t-3xl w-full h-full flex items-center justify-center inset-x-0 absolute p-2"
      style={{
        transform: "rotateX(20deg) rotateY(20deg) rotateZ(-20deg)",
      }}
    >
      <Circle className="flex items-center justify-center border border-brand-border shadow-sm bg-brand-ivory">
        <LogoIcon className="size-10 text-brand-cocoa" />
        <div className="size-12 flex items-center justify-center bg-brand-ivory border border-brand-border shadow-[0_12px_28px_rgba(32,21,21,0.10)] rounded-sm animate-orbit [--translate-position:120px] absolute inset-0 m-auto [--orbit-duration:10s]">
          <SlackIcon className="size-8" />
        </div>
        <div className="size-12 flex items-center justify-center bg-brand-ivory border border-brand-border shadow-[0_12px_28px_rgba(32,21,21,0.10)] rounded-sm animate-orbit [--translate-position:160px] absolute inset-0 m-auto [--orbit-duration:15s]">
          <FacebookMeta className="size-8" />
        </div>
        <div className="size-12 flex items-center justify-center bg-brand-ivory border border-brand-border shadow-[0_12px_28px_rgba(32,21,21,0.10)] rounded-sm animate-orbit [--translate-position:200px] absolute inset-0 m-auto [--orbit-duration:20s]">
          <InstagramIcon className="size-8" />
        </div>
        <div className="size-12 flex items-center justify-center bg-brand-ivory border border-brand-border shadow-[0_12px_28px_rgba(32,21,21,0.10)] rounded-sm animate-orbit [--translate-position:220px] absolute inset-0 m-auto [--orbit-duration:25s]">
          <GoogleSheetsIcon className="size-8" />
        </div>
      </Circle>

      <Circle className="shadow border border-brand-border size-60 bg-brand-peach/80 z-9"></Circle>

      <Circle className="shadow border border-brand-border size-80 bg-brand-peach/60 z-8"></Circle>

      <Circle className="shadow border border-brand-border size-100 bg-brand-peach/40 z-7"></Circle>

      <Circle className="shadow border border-brand-border size-120 bg-brand-peach/20 z-6"></Circle>
    </div>
  );
};

const Circle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "size-40 bg-brand-ivory border border-brand-border absolute inset-0 m-auto rounded-full z-10",
        className
      )}
    >
      {children}
    </div>
  );
};
