"use client";

import Image from "next/image";

const logos = [
  { title: "Open AI", src: "/openai.webp" },
  { title: "Hello Patient", src: "/hello-patient.webp" },
  { title: "Granola", src: "/granola.webp" },
  { title: "Character AI", src: "/characterai.png" },
  { title: "Oracle", src: "/oracle.webp" },
  { title: "Portola", src: "/portola.webp" },
] as const;

function LogoRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 md:gap-20 pr-12 md:pr-20"
      aria-hidden={ariaHidden}
    >
      {logos.map((logo) => (
        <div
          key={`${ariaHidden ? "dup" : "orig"}-${logo.title}`}
          className="flex h-14 w-32 shrink-0 items-center justify-center md:h-16 md:w-36"
        >
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.title}
            width={120}
            height={48}
            className="h-8 w-auto max-w-[120px] object-contain opacity-80 "
          />
        </div>
      ))}
    </div>
  );
}

export const LogoCloud = () => {
  return (
    <section className="relative overflow-hidden bg-background pb-10 pt-10 md:pb-16 md:pt-20 lg:pt-28 px-4">
      <h2 className="text-center text-lg font-light text-foreground-muted max-w-xl mx-auto text-brand-cocoa ">
       Built for modern clinical-research teams
      
      </h2>

      <div className="relative mt-10 md:mt-14">
        <div
          className="overflow-hidden"
          style={{ ["--logo-marquee-duration" as string]: "35s" }}
        >
          <div className="flex w-max animate-logo-marquee motion-reduce:animate-none">
            <LogoRow />
            <LogoRow ariaHidden />
            <LogoRow ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
};
