import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JoinCTA() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Ready to Shape the Future of Education?
                </h2>
                <p className="mx-auto max-w-[600px] text-lg mb-8 opacity-90">
                    Join UESA today and become part of a community dedicated to educational excellence and professional growth.
                </p>
                <Link
                    href="/membership"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-background px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                    Become a Member
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </section>
    );
}
