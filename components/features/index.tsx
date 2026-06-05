import { Container } from "../container";
import { Heading } from "../heading";
import { SubHeading } from "../subheading";
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./card";
import { IconPlus } from "@tabler/icons-react";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonTwo } from "./skeletons/second";

export const Features = () => {
  return (
    <section id="features" className="bg-brand-ivory pt-10 md:pt-20 lg:pt-32 px-4">
      <Container className="flex flex-col">
        <div className="flex lg:flex-row flex-col lg:items-baseline-last justify-between gap-10">
          <Heading className="text-center lg:text-left">
            Recruitment capabilities without operational noise.
          </Heading>
          <SubHeading className="text-center lg:text-left mx-auto lg:mx-0">
            WeForge structures study intake, participant journeys, qualification
            logic, and follow-up workflows into a clinical-recruitment system
            your team can actually operate.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 md:my-20">
          <Card className="rounded-bl-3xl rounded-tl-3xl">
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
            <CardContent className="flex items-center justify-between">
              <CardTitle>Study Intake and Criteria Capture</CardTitle>
              <CardCTA>
                <IconPlus />
              </CardCTA>
            </CardContent>
          </Card>
          <Card>
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
            <CardContent className="flex items-center justify-between">
              <CardTitle>Targeted Ads and Organic Study Pages</CardTitle>
              <CardCTA>
                <IconPlus />
              </CardCTA>
            </CardContent>
          </Card>
          <Card className="rounded-tr-3xl rounded-br-3xl">
            <CardSkeleton>
              <SkeletonThree />
            </CardSkeleton>
            <CardContent className="flex items-center justify-between">
              <CardTitle>
              Pre-Screening and Participant Follow-Up
              </CardTitle>
              <CardCTA>
                <IconPlus />
              </CardCTA>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};
