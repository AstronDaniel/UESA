"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    description?: string;
    imageSrc: string;
    className?: string;
    children?: React.ReactNode;
}

export default function PageHeader({
    title,
    description,
    imageSrc,
    className,
    children,
}: PageHeaderProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

    return (
        <div
            ref={ref}
            className={cn(
                "relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden bg-muted text-center",
                className
            )}
        >
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 h-[120%] w-full">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            <div className="relative z-10 w-full max-w-4xl px-4 py-20">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
                >
                    {title}
                </motion.h1>
                {description && (
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-lg text-white/90 md:text-xl"
                    >
                        {description}
                    </motion.p>
                )}
                {children && (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="mt-8"
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
