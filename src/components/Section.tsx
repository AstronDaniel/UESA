import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("w-full py-12 md:py-24 lg:py-32", className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-8">
                {children}
            </div>
        </section>
    );
}
