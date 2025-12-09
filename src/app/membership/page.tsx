import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import JoinCTA from "@/components/JoinCTA";
import { Check, UserPlus, Users } from "lucide-react";

export default function MembershipPage() {
    return (
        <>
            <PageHeader
                title="Membership"
                description="Join the movement. Open to all students passionate about education."
                imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
            />

            <Section>
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Who Can Join?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <UserPlus className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Education Students</h3>
                                    <p className="text-muted-foreground">
                                        Students pursuing education-related programs including primary, secondary, special needs, and early childhood education.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                    <UserPlus className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Passionate About Education</h3>
                                    <p className="text-muted-foreground">
                                        Students from other disciplines who are interested in the field of education and wish to contribute to its development.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-semibold text-xl mb-4">Membership Benefits</h3>
                            <ul className="space-y-3">
                                {[
                                    "Access to professional development workshops",
                                    "Networking with peers and industry leaders",
                                    "Mentorship opportunities",
                                    "Platform for advocacy and student voice",
                                    "Participation in national conferences"
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                        <Check className="h-4 w-4 text-green-500" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                        <h2 className="text-2xl font-bold mb-6">Join UESA Today</h2>
                        <p className="text-muted-foreground mb-8">
                            Fill out our membership form to get started. Membership fees contribute to the sustainability of the association.
                        </p>
                        {/* Placeholder Form */}
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First name</label>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last name</label>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="john@example.com" type="email" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="institution" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Institution</label>
                                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="institution" placeholder="Makerere University" />
                            </div>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-4">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
            <JoinCTA />
        </>
    );
}
