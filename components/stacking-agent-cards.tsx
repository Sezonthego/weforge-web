"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type RecruitmentSystem = {
  label: string
  title: string
  desc: string
  highlights: [string, string]
  img: string
  plannedImg: string
  alt: string
}

const CONNECTED_RECRUITMENT_SYSTEMS: RecruitmentSystem[] = [
  {
    label: "DISCOVERY",
    title: "Help suitable participants discover active studies.",
    desc: "Support study visibility through search-aware recruitment content and clearer first entry points for potential participants.",
    highlights: ["Organic visibility", "Study discovery"],
    // TODO: Swap img to /images/weforge/search-visibility-glass.webp once the final asset is added.
    // plannedImg: "/image/search-visibility-glass.webp",
    img: "/image/search-visibility-glass.webp",
    alt: "Glass magnifying form representing study discovery",
  },
  {
    label: "ACQUISITION",
    title: "Reach relevant audiences through targeted recruitment paths.",
    desc: "Shape paid and organic recruitment routes around study criteria, site availability, and participant readiness.",
    highlights: ["Targeted campaigns", "Criteria-led setup"],
    // TODO: Swap img to /images/weforge/acquisition-paths-glass.webp once the final asset is added.
    plannedImg: "/image/acquisition-paths-glass.webp",
    img:
      "/image/acquisition-paths-glass.webp",
    alt: "Glass pathway object representing participant acquisition routes",
  },
  {
    label: "STUDY PAGES",
    title: "Create clearer entry points for potential participants.",
    desc: "Turn complex protocol needs into focused recruitment pages that explain the study and guide the next step.",
    highlights: ["Study-specific pages", "Guided next step"],
    // TODO: Swap img to /images/weforge/recruitment-pages-glass.webp once the final asset is added.
    plannedImg: "/images/weforge/recruitment-pages-glass.webp",
    img:
      "/image/recruitment-pages-glass.webp",
    alt: "Glass funnel form representing recruitment page structure",
  },
  {
    label: "PRE-SCREENING",
    title: "Guide participants through a clearer initial questionnaire.",
    desc: "Collect early participant signals through structured questions that help teams review interest with less back-and-forth.",
    highlights: ["Guided questions", "Review-ready profiles"],
    // TODO: Swap img to /images/weforge/prescreening-glass.webp once the final asset is added.
    plannedImg: "/images/weforge/prescreening-glass.webp",
    img:
      "/image/acquisition-paths-glass.webp",
    alt: "Glass hourglass form representing pre-screening flow",
  },
  {
    label: "FOLLOW-UP",
    title: "Coordinate participant follow-up from one connected workspace.",
    desc: "Keep calls, email, video screening, reminders, and follow-up workflows organized across the participant journey.",
    highlights: ["Call · Email · Video", "Follow-up workflows"],
    // TODO: Swap img to /images/weforge/followup-workspace-glass.webp once the final asset is added.
    plannedImg: "/images/weforge/followup-workspace-glass.webp",
    img:
      "/image/search-visibility-glass.webp",
    alt: "Glass workspace form representing participant follow-up",
  },
]

const STICKY_TOP = 80
const STICKY_STEP = 16
const SCALE_STEP = 0.035
const OFFSET_STEP = 8

function SystemTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-brand-peach px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-orange">
      {children}
    </span>
  )
}

function GlassImage({
  system,
  priority,
  mobile = false,
}: {
  system: RecruitmentSystem
  priority: boolean
  mobile?: boolean
}) {
  return (
    <div
      className={
        mobile
          ? "relative h-64 w-full overflow-hidden border-t border-brand-border bg-brand-peach/60 md:hidden"
          : "pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden bg-brand-peach/60 md:block"
      }
    >
      <Image
        src={system.img}
        alt={system.alt}
        fill
        priority={priority}
        unoptimized
        sizes={mobile ? "100vw" : "(min-width: 768px) 58vw, 100vw"}
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className={
          mobile
            ? "absolute inset-0 bg-linear-to-b from-transparent via-brand-ivory/10 to-brand-ivory"
            : "absolute inset-0 bg-linear-to-r from-brand-ivory via-brand-ivory/70 to-brand-ivory/0"
        }
      />
      <div
        aria-hidden="true"
        className={
          mobile
            ? "absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-brand-ivory to-transparent"
            : "absolute inset-y-0 left-0 w-40 bg-linear-to-r from-brand-ivory to-transparent"
        }
      />
    </div>
  )
}

export function StackingAgentCards() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [depth, setDepth] = useState<number[]>(
    CONNECTED_RECRUITMENT_SYSTEMS.map(() => 0)
  )
  const [visible, setVisible] = useState<boolean[]>(
    CONNECTED_RECRUITMENT_SYSTEMS.map(() => false)
  )

  useEffect(() => {
    function onScroll() {
      const nextDepth = CONNECTED_RECRUITMENT_SYSTEMS.map((_, i) => {
        let count = 0

        for (let j = i + 1; j < CONNECTED_RECRUITMENT_SYSTEMS.length; j += 1) {
          const el = cardRefs.current[j]
          if (!el) continue

          const rect = el.getBoundingClientRect()
          const stickyTop = STICKY_TOP + j * STICKY_STEP

          if (rect.top <= stickyTop + 2) {
            count += 1
          }
        }

        return count
      })

      setDepth(nextDepth)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => {
        setVisible(CONNECTED_RECRUITMENT_SYSTEMS.map(() => true))
      })

      return () => window.cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number((entry.target as HTMLElement).dataset.cardIndex)

          if (entry.isIntersecting && Number.isFinite(index)) {
            setVisible(current => {
              if (current[index]) return current

              const next = [...current]
              next[index] = true
              return next
            })
          }
        })
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 }
    )

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="flex flex-col"
      style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}
    >
      {CONNECTED_RECRUITMENT_SYSTEMS.map((system, i) => {
        const d = depth[i]
        const scale = 1 - d * SCALE_STEP
        const translateY = d * OFFSET_STEP

        return (
          <div
            key={system.label}
            ref={el => {
              cardRefs.current[i] = el
            }}
            data-card-index={i}
            className={`sticky  mb-5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
              visible[i] ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ top: `${STICKY_TOP + i * STICKY_STEP}px`, zIndex: 10 + i }}
          >
            <div
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition: "transform 0.32s cubic-bezier(0.16,1,0.3,1)",
                willChange: "transform",
              }}
            >
              <article className="group relative overflow-hidden rounded-[1.6rem] border border-brand-border bg-brand-ivory shadow-[0_22px_70px_rgba(32,21,21,0.08)]">
                <GlassImage system={system} priority={i === 0} />

                <div className="relative z-10 flex min-h-[460px] flex-col md:min-h-[430px]">
                  <div className="flex flex-1 flex-col justify-between p-6 md:max-w-[58%] md:p-10 lg:p-12">
                    <div>
                      <SystemTag>{system.label}</SystemTag>
                      <h3 className="mt-8 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-brand-cocoa md:text-3xl">
                        {system.title}
                      </h3>
                      <p className="mt-5 max-w-xl text-base leading-8 text-brand-muted">
                        {system.desc}
                      </p>
                    </div>

                    {/* <div className="mt-10 border-t border-brand-border pt-6">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {system.highlights.map(highlight => (
                          <div
                            key={highlight}
                            className="rounded-2xl border border-brand-border bg-brand-peach/60 px-4 py-3"
                          >
                            <p className="text-sm font-semibold text-brand-cocoa">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div> */}
                  </div>

                  <GlassImage system={system} priority={i === 0} mobile />
                </div>
              </article>
            </div>
          </div>
        )
      })}
    </div>
  )
}
