"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, BookOpen, UserPlus } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Activities", href: "/activities" },
        { name: "Membership", href: "/membership" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-10 w-10 overflow-hidden rounded-md">
                            <Image
                                src="/assets/logo.png"
                                alt="Uganda Education Students Association (UESA) Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground">UESA</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <ThemeToggle />
                        <Link
                            href="/membership"
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Join UESA
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-3 py-2 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                                <ThemeToggle />
                            </div>
                            <Link
                                href="/membership"
                                onClick={() => setIsOpen(false)}
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow hover:bg-primary/90"
                            >
                                <UserPlus className="h-4 w-4" />
                                Join UESA
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
