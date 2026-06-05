"use client";

import { Container } from "../container";
import { cn } from "@/lib/utils";
import React from "react";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";

export const FeaturesSecondary = () => {
  return (
    <section id="methodology" className="bg-brand-peach px-4 py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-brand-border divide-y md:divide-y-0 md:divide-x divide-brand-border">
          <div>
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-brand-cocoa">
                Research and audience mapping
              </h2>
              <p className="text-brand-muted text-balance max-w-md mt-2">
                We translate study criteria into participant profiles, channel
                assumptions, and clear recruitment paths.
              </p>
            </div>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>

          <div>
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-brand-cocoa">
                Infrastructure design
              </h2>
              <p className="text-brand-muted text-balance max-w-md mt-2">
                We connect pages, questionnaires, status tracking, and follow-up
                so recruitment feels operationally coherent.
              </p>
            </div>
            <CardSkeleton className="mask-radial-from-50% mask-t-from-50%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
          <SecondaryFeatures
            number="01"
            title="Map the study"
            description="Clarify criteria, patient profiles, channel fit, and operational friction before anything launches."
          />
          <SecondaryFeatures
            number="02"
            title="Build the funnel"
            description="Create the paid path, organic study page, and questionnaire structure around participant clarity."
          />
          <SecondaryFeatures
            number="03"
            title="Operate follow-up"
            description="Move qualified participants into a workspace for review, contact, and retention workflows."
          />
        </div>
      </Container>
    </section>
  );
};

export const SecondaryFeatures = ({
  number,
  title,
  description,
  className,
}: {
  number?: string;
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-4 max-w-sm", className)}>
      <div className="flex items-center gap-3">
        <div className="font-display text-5xl font-bold text-brand-orange">
          {number}
        </div>
        <div className="font-bold text-lg text-brand-cocoa">
          {title}
        </div>
      </div>
      <div className="text-base text-brand-muted">{description}</div>
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
