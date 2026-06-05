"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { BrainCircuit, Box, Rocket, LineChart } from "lucide-react";
import { Container } from "@/components/container";


type Accent = "orange" | "indigo";

const pillarsData = [
  {
    id: "design",
    step: "01",
    title: "We Design",
    label: "Design",
    accent: "orange" as Accent,
    icon: BrainCircuit,
    headline: "We design",
    description:
      "Define the recruitment and operational requirements needed for your clinical operations.",
    image: "/image/design-define-the-recruitment.webp",
    imageAlt: "Define recruitment and operational requirements",
  },
  {
    id: "implement",
    step: "02",
    title: "We implement",
    label: "Implement",
    accent: "indigo" as Accent,
    icon: Box,
    headline: "We implement",
    description:
      "Deploy recruitment pages, intelligent pre-screening, workflow automations, and operational systems.",
    image: "/image/implement.webp",
    imageAlt: "Deploy recruitment pages and operational systems",
  },
  {
    id: "operate",
    step: "03",
    title: "We operate",
    label: "Operate",
    accent: "orange" as Accent,
    icon: Rocket,
    headline: "We operate",
    description:
      "Manage recruitment workflows, patient routing, recruitment channels, and communication processes.",
    image: "/image/operate.webp",
    imageAlt: "Manage recruitment workflows and patient routing",
  },
  {
    id: "optimize",
    step: "04",
    title: "We optimize",
    label: "Optimize",
    accent: "indigo" as Accent,
    icon: LineChart,
    headline: "We optimize",
    description:
      "Continuously improve recruitment performance, operational efficiency, and system scalability over time.",
    image: "/image/optimize.webp",
    imageAlt: "Improve recruitment performance and scalability",
  },
];

type PillarCard = (typeof pillarsData)[number];

const dotClass = (accent: Accent) =>
  accent === "orange" ? "bg-brand-orange" : "bg-brand-indigo";

const CARD_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardStackTransition = {
  y: { type: "spring" as const, stiffness: 120, damping: 24, mass: 0.85 },
  scale: { type: "spring" as const, stiffness: 120, damping: 24, mass: 0.85 },
  rotateX: { type: "spring" as const, stiffness: 110, damping: 24, mass: 0.85 },
  opacity: { duration: 0.22, ease: CARD_EASE },
};

const TRANSITION_LOCK_MS = 520;

function PillarImage({
  card,
}: {
  card: PillarCard;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <PillarVisual
        icon={card.icon}
        accent={card.accent}
        step={card.step}
        label={card.label}
      />
    );
  }

  return (
    <div
      className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-brand-border"
    >
      <Image
        src={card.image}
        alt={card.imageAlt}
        fill
        onError={() => setImageError(true)}
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 480px"
        priority={card.id === "design"}
      />
    </div>
  );
}

// Fallback visual when a pillar image file is not yet in /public/image.
function PillarVisual({
  icon: Icon,
  accent,
  step,
  label,
}: {
  icon: React.ElementType;
  accent: Accent;
  step: string;
  label: string;
}) {
  const accentText =
    accent === "orange" ? "text-brand-orange" : "text-brand-indigo";
  const accentBg =
    accent === "orange" ? "bg-brand-orange/10" : "bg-brand-indigo/10";
  const accentRing =
    accent === "orange" ? "ring-brand-orange/20" : "ring-brand-indigo/20";

  return (
    <div className="relative flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-xl border border-brand-border bg-linear-to-br from-brand-peach/60 to-brand-ivory">
      <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[150px] font-bold leading-none text-brand-cocoa/5">
        {step}
      </span>
      <div className="flex flex-col items-center gap-4">
        <div
          className={`flex size-20 items-center justify-center rounded-2xl ring-1 ${accentBg} ${accentRing}`}
        >
          <Icon className={`size-10 ${accentText}`} strokeWidth={1.5} />
        </div>
        <p className="text-lg font-semibold text-brand-cocoa">{label}</p>
      </div>
    </div>
  );
}

// Mobile Image Slider Component
function MobileImageSlider({ cards }: { cards: readonly PillarCard[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  return (
    <div className="block lg:hidden px-4 sm:px-6">
      {/* Current Card Content */}
      <div className="mb-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-brand-border">
          <div className="p-6 sm:p-8">
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-3 h-3 rounded-full ${dotClass(cards[currentIndex].accent)}`}
              />
              <span className="text-lg font-semibold text-brand-cocoa">
                {cards[currentIndex].title}
              </span>
            </div>

            {/* Card Content */}
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-cocoa mb-4">
              {cards[currentIndex].headline}
            </h3>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-6">
              {cards[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative">
        <div
          className="overflow-hidden rounded-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {cards.map((card) => (
              <div key={card.id} className="w-full shrink-0">
                <PillarImage card={card} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-brand-orange w-6"
                  : "bg-brand-cocoa/20 hover:bg-brand-cocoa/40"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200"
        >
          <svg
            className="w-5 h-5 text-brand-cocoa"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % cards.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200"
        >
          <svg
            className="w-5 h-5 text-brand-cocoa"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

const DESKTOP_AUTOPLAY_MS = 4000;

export default function ProductPillars() {
  const [cardOrder, setCardOrder] = useState(pillarsData);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const advanceDesktopCard = useCallback(() => {
    setIsTransitioning(true);
    setCardOrder((order) => {
      const [active, ...rest] = order;
      if (rest.length === 0) return order;
      const [next, ...remaining] = rest;
      return [next, ...remaining, active];
    });
    window.setTimeout(() => setIsTransitioning(false), TRANSITION_LOCK_MS);
  }, []);

  // Desktop: advance to the next stacked card on a calm interval.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    let interval: ReturnType<typeof setInterval> | undefined;

    const startAutoplay = () => {
      if (interval) clearInterval(interval);
      if (!mq.matches) return;
      interval = setInterval(advanceDesktopCard, DESKTOP_AUTOPLAY_MS);
    };

    startAutoplay();
    mq.addEventListener("change", startAutoplay);
    return () => {
      if (interval) clearInterval(interval);
      mq.removeEventListener("change", startAutoplay);
    };
  }, [advanceDesktopCard]);

  const handleCardClick = (clickedCardId: string) => {
    if (isTransitioning) return;

    // If you click the already-active card, do nothing
    if (cardOrder[0].id === clickedCardId) return;

    setIsTransitioning(true);

    // Split out the current active (first) and the rest
    const [activeCard, ...rest] = cardOrder;

    // Pull the clicked card out of `rest`
    const clickedCard = rest.find((c) => c.id === clickedCardId)!;
    const withoutClicked = rest.filter((c) => c.id !== clickedCardId);

    // New order: clicked → all the other non-clicked cards → old active card
    const newOrder = [clickedCard, ...withoutClicked, activeCard];
    setCardOrder(newOrder);
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), TRANSITION_LOCK_MS);
  };

  return (
    <section className="py-24 bg-brand-peach rounded-t-4xl border border-brand-border relative ">
        <Container>
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative border-2 border-red-400"> */}
        {/* Header */}
        <div className="text-start mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-brand-cocoa md:text-6xl">
            Patient recruitment, forged simply<span className="text-brand-orange">.</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-brand-muted">
            We design, deploy, and operate modern recruitment infrastructure
            through structured workflows, recruitment systems, and scalable
            operational environments.
          </p>

      
        </div>

        {/* Desktop Stacked Cards Container - Hidden on mobile, visible from lg up */}
        <div className="relative max-w-6xl mx-auto pt-30 hidden lg:block">
          {/* Stacked Cards */}
          <div className="relative h-[600px] perspective-1000 ">
            {cardOrder.map((card, index) => {
              const isActive = index === 0;
              // Ensure active card always has highest z-index, with a significant gap
              const zIndex = isActive ? 50 : cardOrder.length - index;
              const translateY = index * -55;
              const scale = 1 - index * 0.04;
              const opacity = isActive ? 1 : 0.7;

              return (
                <motion.div
                  key={card.id}
                  initial={false}
                  animate={{
                    y: translateY,
                    scale,
                    opacity: isActive ? 1 : Math.max(opacity, 0.88),
                    rotateX: index * 1.2,
                  }}
                  transition={cardStackTransition}
                  whileHover={
                    !isActive && !isTransitioning
                      ? {
                          y: translateY - 12,
                          scale: scale + 0.008,
                          opacity: 1,
                          transition: { duration: 0.25, ease: CARD_EASE },
                        }
                      : {}
                  }
                  onClick={() => handleCardClick(card.id)}
                  className="absolute inset-0 cursor-pointer transform-gpu will-change-transform"
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex,
                    pointerEvents: isTransitioning ? "none" : "auto",
                  }}
                >
                  <div
                    className={`relative h-full overflow-hidden rounded-2xl bg-white ring-1 transition-shadow duration-300 ${
                      isActive
                        ? "shadow-[0_26px_70px_rgba(32,21,21,0.16)] ring-brand-border"
                        : "shadow-[0_14px_34px_rgba(32,21,21,0.09)] ring-brand-border/60"
                    }`}
                  >
                    <div className="grid lg:grid-cols-2 h-full">
                      {/* Text Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                        <div className="absolute top-3 mb-2 flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${dotClass(card.accent)}`}
                          />
                          <span className="text-lg font-semibold text-brand-cocoa">
                            {card.title}
                          </span>
                        </div>

                        <h3
                          className={`text-3xl font-bold sm:text-4xl ${
                            isActive ? "text-brand-cocoa" : "text-brand-cocoa/45"
                          }`}
                        >
                          {card.headline}
                        </h3>

                        <p
                          className={`text-lg leading-relaxed ${
                            isActive ? "text-brand-muted" : "text-brand-muted/45"
                          }`}
                        >
                          {card.description}
                        </p>
                      </div>

                      {/* Visual Content */}
                      <div className="relative p-4 lg:p-8 flex items-center">
                        <div className={`relative w-full ${isActive ? "" : "opacity-75"}`}>
                          <PillarImage card={card} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Sliding Images - Visible on mobile, hidden from lg up */}
        <MobileImageSlider cards={pillarsData} />
      {/* </div> */}
      </Container>
    </section>
  );
}
