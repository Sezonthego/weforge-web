import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";

const articles = [
  {
    category: "Recruitment Ops",
    title: "How to reduce drop-off before pre-screening starts",
    description:
      "A practical look at participant clarity, channel fit, and the first qualification handoff.",
  },
  {
    category: "Study Pages",
    title: "What clinical study pages need to answer quickly",
    description:
      "The information participants need before committing time to an eligibility questionnaire.",
  },
  {
    category: "Follow-up",
    title: "Designing remote screening workflows that feel human",
    description:
      "How structured contact options help coordinators move from interest to scheduled review.",
  },
] as const;

export const InsightsPreview = () => {
  return (
    <section className="bg-brand-peach px-4 py-16 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Insights
            </p>
            <Heading className="mt-4 max-w-3xl">
              Practical thinking for clinical recruitment teams.
            </Heading>
            <SubHeading className="mt-5">
              Guides and operational notes on participant acquisition,
              prequalification, and retention workflows.
            </SubHeading>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cocoa hover:text-brand-orange"
          >
            View all insights
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.title}
              href="/blog"
              className="group rounded-xl border border-brand-border bg-brand-ivory p-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(32,21,21,0.10)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                {article.category}
              </p>
              <h3 className="mt-4 text-xl font-bold leading-tight text-brand-cocoa">
                {article.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                {article.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-cocoa group-hover:text-brand-orange">
                Read preview
                <ArrowRight className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
