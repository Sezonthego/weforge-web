import { cn } from "@/lib/utils";
import React from "react";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-l mx-auto bg-brand-peach rounded-lg border border-brand-border",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "text-lg flex justify-between md:text-2xl font-bold font-display text-brand-cocoa",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("px-4 pb-6 md:px-8 md:pb-6", className)}>{children}</div>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "border items-center flex justify-center border-brand-orange/25 bg-brand-ivory text-brand-orange hover:bg-brand-orange hover:text-brand-ivory rounded-full shrink-0 size-5 md:size-10 active:scale-[0.98] transition-colors",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-80 sm:h-60 md:h-80 relative overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};
