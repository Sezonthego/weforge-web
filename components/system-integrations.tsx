import Image from "next/image";

const integrationRows = [
  [
    {
      name: "Healthie",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa198a82be9be180a11_Frame%2044060.svg",
    },
    {
      name: "athenahealth",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa35684f637c0b24a77_Frame%2044061.svg",
    },
    {
      name: "NextGen Healthcare",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa2447fbdc9fe9004c0_Frame%2044062.svg",
    },
    {
      name: "Cerner",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa2d26f43b54e0b571f_Frame%2044063.svg",
    },
    {
      name: "eClinicalWorks",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa208181ddffddfbdec_Frame%2044064.svg",
    },
    {
      name: "Modernizing Medicine",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215faf26c1656ffac61b66_Frame%2044065.svg",
    },
    {
      name: "Epic",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa01b2aa595c0dc0cd5_Frame%2044066.svg",
    },
  ],
  [
    {
      name: "Veradigm",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/696e3fa35f2de960446b1306_VERADIGM-logo.svg",
    },
    {
      name: "OpenPhone",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa036c53b627d2f6705_Frame%2044067.svg",
    },
    {
      name: "Talkdesk",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa0ce671c44a6cf6a71_Frame%2044068.svg",
    },
    {
      name: "Five9",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa05684f637c0b24697_Frame%2044069.svg",
    },
    {
      name: "Genesys",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa050713a029101eeb5_Frame%2044070.svg",
    },
    {
      name: "Spruce",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215fa021e9c8f98eac94e7_Frame%2044071.svg",
    },
    {
      name: "Dialpad",
      src: "https://cdn.prod.website-files.com/672129b642cb0117f4c53944/67215f957adb34388bd2d9d9_Frame%2044072.svg",
    },
  ],
] as const;

function LogoList({
  logos,
  ariaHidden,
}: {
  logos: (typeof integrationRows)[number];
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20 lg:gap-24 lg:pr-24"
      aria-hidden={ariaHidden}
    >
      {logos.map((logo) => (
        <div
          key={`${ariaHidden ? "duplicate" : "logo"}-${logo.name}`}
          className="flex h-16 w-36 shrink-0 items-center justify-center md:w-48 lg:w-56"
        >
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.name}
            width={220}
            height={64}
            unoptimized
            className="max-h-11 w-auto max-w-full object-contain opacity-70 grayscale"
          />
        </div>
      ))}
    </div>
  );
}

function LogoMarquee({
  logos,
  reverse = false,
  duration,
}: {
  logos: (typeof integrationRows)[number];
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div
      className="overflow-hidden"
      style={{ ["--logo-marquee-duration" as string]: duration }}
    >
      <div
        className="flex w-max animate-logo-marquee motion-reduce:animate-none"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        <LogoList logos={logos} />
        <LogoList logos={logos} ariaHidden />
      </div>
    </div>
  );
}

export function SystemIntegrations() {
  return (
    <section className="overflow-hidden border-y border-brand-border bg-brand-ivory py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="mx-auto max-w-6xl font-clarion-display text-4xl font-light leading-tight tracking-normal text-brand-cocoa md:text-5xl">
          Clarion connects with your existing systems
        </h2>
      </div>

      <div className="mt-12 space-y-8 md:mt-14 md:space-y-10">
        <LogoMarquee logos={integrationRows[0]} duration="42s" />
        <LogoMarquee logos={integrationRows[1]} reverse duration="44s" />
      </div>
    </section>
  );
}
