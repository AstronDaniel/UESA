"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-32 pb-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-50"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl opacity-50 transform translate-x-1/3"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                            Uganda Education Students Association (UESA)
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                            Empowering Future <span className="text-primary">Educators</span> & Leaders
                        </h1>
                        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                            Uniting education students to foster academic excellence, innovation, and sustainable development across Uganda.
                        </p>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row">
                            <Link
                                href="/membership"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Join UESA
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
                    >
                        <div className="relative aspect-video overflow-hidden rounded-xl bg-muted shadow-2xl ring-1 ring-gray-900/10 dark:ring-gray-300/10">
                            {/* Dummy Image from Unsplash - Education/Classroom Theme */}
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                                alt="Students in a classroom"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
                        </div>
                        {/* Floating stats card or element could go here */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 hidden md:block rounded-lg bg-card p-4 shadow-lg border border-border"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">55:1</p>
                                    <p className="text-xs text-muted-foreground">Pupil-Teacher Ratio</p>
                                </div>
                                <div className="h-8 w-px bg-border" />
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-secondary">60%</p>
                                    <p className="text-xs text-muted-foreground">Absenteeism Rate</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
