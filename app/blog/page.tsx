import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Insights - WeForge",
  description:
    "Clinical recruitment insights, guides, and updates from the WeForge team.",
};

export default function BlogPage() {
  return (
    <section className="bg-brand-peach py-20 md:py-32 px-4 min-h-[60vh]">
      <Container className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
          Insights
        </p>
        <Heading className="mt-4 mb-4" as="h1">
          Clinical recruitment insights are coming soon.
        </Heading>
        <SubHeading>
          We&apos;re preparing weekly articles on patient recruitment, site
          operations, and medtech workflows. A CMS will power this section for
          SEO and lead generation.
        </SubHeading>
        <div className="mt-10 rounded-2xl border border-brand-border bg-brand-ivory p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
            Article categories
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {["Recruitment Ops", "Study Pages", "Participant Retention"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-brand-border bg-brand-peach p-4 text-sm font-semibold text-brand-cocoa"
                >
                  {item}
                </div>
              )
            )}
          </div>
          <Button asChild className="mt-8 ">
            <Link href="/#contact">Get notified</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
