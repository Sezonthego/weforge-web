
import { StackingAgentCards } from "./stacking-agent-cards"

const Agent = () => {
  return (
    <section
      id="connected-recruitment-systems"
      className="border-t border-brand-border bg-brand-ivory px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-orange">
              Connected recruitment systems
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-brand-cocoa md:text-5xl lg:text-6xl">
              Everything you need in one place.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-brand-muted md:text-base">
            Connected recruitment systems that help clinical-research sites
            reduce manual coordination, guide potential participants more
            clearly, and manage follow-up more efficiently.
          </p>
        </div>

        <StackingAgentCards />
      </div>
    </section>
  )
}

export default Agent
