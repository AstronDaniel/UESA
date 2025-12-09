import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Lightbulb, Target, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Vision & Mission Section */}
      <Section className="bg-muted/50">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To be a leading platform for education students in Uganda, empowering them to achieve academic excellence, fostering innovation, and promoting educational development for national growth.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To unite and empower education students in Uganda by providing opportunities for professional development, networking, and advocacy, while promoting education and awareness.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Goals Preview */}
      <Section>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Objectives</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            UESA is dedicated to addressing the critical challenges in Uganda's education sector through focused initiatives.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Goal 1 */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Community Building</h3>
            <p className="text-muted-foreground">
              Fostering a community of future educators and leaders to promote collaboration and knowledge sharing.
            </p>
          </div>

          {/* Goal 2 */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Innovation & Research</h3>
            <p className="text-muted-foreground">
              Encouraging research and innovation to develop the next generation of educators who can solve real-world problems.
            </p>
          </div>

          {/* Goal 3 */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Academic Excellence</h3>
            <p className="text-muted-foreground">
              Providing resources and support to help students achieve the highest standards in their educational pursuits.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
