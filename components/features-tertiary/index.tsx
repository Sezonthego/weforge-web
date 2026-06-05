"use client";

import { Container } from "../container";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/three";
import { SkeletonFour } from "./skeletons/fourth";

export const FeaturesTertiary = () => {
  return (
    <section className="bg-brand-indigo px-4 py-16 text-brand-ivory md:py-24 lg:py-32">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Responsible data handling
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl">
              Designed for trust around participant data.
            </h2>
          </div>
          <Button asChild className="w-full md:w-auto">
            <Link href="/#contact">Discuss privacy needs</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-brand-ivory/15 divide-brand-ivory/15">
          <div className="md:border-r md:border-b border-brand-ivory/15">
            <div>
              <div className="p-4 md:p-8">
                <h3 className="text-lg font-bold text-brand-ivory">
                  Secure criteria processing
                </h3>
                <p className="text-brand-peach/70 text-balance max-w-md mt-2">
                  Eligibility answers are processed against study rules with
                  clear status visibility.
                </p>
              </div>
              <CardSkeleton>
                <SkeletonOne />
              </CardSkeleton>
            </div>
          </div>

          <div className="md:border-b border-brand-ivory/15">
            <div className="p-4 md:p-8">
              <h3 className="text-lg font-bold text-brand-ivory">
                Access-aware workspaces
              </h3>
              <p className="text-brand-peach/70 text-balance max-w-md mt-2">
                Participant details stay focused around review, screening, and
                follow-up actions.
              </p>
            </div>
            <CardSkeleton className="mask-radial-from-30%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>

          <div className="md:border-r border-brand-ivory/15">
            <div className="p-4 md:p-8">
              <h3 className="text-lg font-bold text-brand-ivory">
                Privacy-first handling
              </h3>
              <p className="text-brand-peach/70 text-balance max-w-md mt-2">
                Visual status states make sensitive processing legible without
                making the interface loud.
              </p>
            </div>
            <CardSkeleton className="mask-radial-from-20% mask-r-from-50%">
              <SkeletonThree />
            </CardSkeleton>
          </div>

          <div>
            <div className="p-4 md:p-8">
              <h3 className="text-lg font-bold text-brand-ivory">
                Responsible follow-up
              </h3>
              <p className="text-brand-peach/70 text-balance max-w-md mt-2">
                Predefined workflows help teams continue contact and retention
                without ad hoc handling.
              </p>
            </div>
            <CardSkeleton className="mask-radial-from-80%">
              <SkeletonFour />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const SecondaryFeatures = ({
  icon,
  title,
  description,
  className,
}: {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-4 max-w-sm", className)}>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center size-6 rounded-full bg-brand-orange text-brand-ivory">
          {icon}
        </div>
        <div className="font-bold text-lg text-brand-ivory">
          {title}
        </div>
      </div>
      <div className="text-base text-brand-peach/70">{description}</div>
    </div>
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
        "h-80 sm:h-60 flex flex-col md:h-80 relative overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};
