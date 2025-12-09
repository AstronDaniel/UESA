import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { AlertTriangle, Globe, MapPin, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <PageHeader
                title="About UESA"
                description="Understanding the challenge and our structured approach to the solution."
                imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Problem Statement Section */}
            <Section>
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="inline-flex items-center rounded-full border border-destructive/20 bg-destructive/5 px-3 py-1 text-sm font-medium text-destructive mb-4">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        The Challenge
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">The Global Teacher Shortage</h2>
                    <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                        UNESCO reports that by 2030, the world will need 44 million more primary and secondary teachers.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Global Context */}
                    <div className="rounded-xl border border-border bg-card p-6">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                            <Globe className="h-5 w-5" />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold">Global Context</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Many countries struggle with low teacher retention, inadequate training, and declining interest in the profession. Learning poverty has worsened due to COVID-19 school closures.
                        </p>
                    </div>

                    {/* Africa Context */}
                    <div className="rounded-xl border border-border bg-card p-6">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold">In Africa</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The percentage of trained teachers in Sub-Saharan Africa dropped from 84% (2000) to 69% (2019). STEM subjects face shortfalls, and overcrowded classrooms hinder learning.
                        </p>
                    </div>

                    {/* Uganda Context */}
                    <div className="rounded-xl border border-border bg-card p-6 ring-2 ring-primary/10">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold">In Uganda</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Severe shortage in rural areas with a pupil-teacher ratio of 55:1 (vs 40:1 standard). Teacher absenteeism is estimated at 60% in some areas, and many lack proper qualifications.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Governance Structure */}
            <Section className="bg-muted/30">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="relative aspect-square lg:aspect-auto lg:h-[500px] overflow-hidden rounded-xl bg-muted">
                        {/* Dummy Image - Meeting/Leadership */}
                        <Image
                            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
                            alt="Committee Meeting"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Governance Structure</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                UESA is organized to ensure effective leadership and broad representation.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Users className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">National Executive Committee</h3>
                                    <p className="text-muted-foreground">Responsible for strategic decision-making and overseeing UESA's activities.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                                    <Users className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Campus Representatives</h3>
                                    <p className="text-muted-foreground">Coordinating activities at individual universities and linking national to local.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                                    <Users className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">General Assembly</h3>
                                    <p className="text-muted-foreground">Comprising all members, providing a platform for discussion and decision-making.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
