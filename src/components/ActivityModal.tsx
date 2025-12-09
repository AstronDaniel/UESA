"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export interface ActivityImage {
    src: string;
    alt: string;
}

export interface ActivityData {
    id: string;
    title: string;
    category: string;
    date?: string;
    location?: string;
    description: string;
    fullDescription: string;
    mainImage: string;
    gallery: ActivityImage[];
}

interface ActivityModalProps {
    activity: ActivityData | null;
    onClose: () => void;
}

export default function ActivityModal({ activity, onClose }: ActivityModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (activity) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [activity]);

    return (
        <AnimatePresence>
            {activity && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card shadow-2xl pointer-events-auto border border-border"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-white transition-colors hover:bg-black/40 backdrop-blur-md"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* Header Image */}
                            <div className="relative h-64 w-full md:h-80">
                                <Image
                                    src={activity.mainImage}
                                    alt={activity.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                                        {activity.category}
                                    </span>
                                    <h2 className="text-3xl font-bold md:text-4xl">{activity.title}</h2>
                                    {(activity.date || activity.location) && (
                                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/90">
                                            {activity.date && (
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {activity.date}
                                                </div>
                                            )}
                                            {activity.location && (
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" />
                                                    {activity.location}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <div className="prose max-w-none dark:prose-invert">
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        {activity.fullDescription}
                                    </p>
                                </div>

                                {/* Sub-Gallery */}
                                <h3 className="mt-8 mb-4 text-xl font-bold">Gallery</h3>
                                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                    {activity.gallery.map((image, index) => (
                                        <div
                                            key={index}
                                            className="relative aspect-square overflow-hidden rounded-lg bg-muted"
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover transition-transform hover:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
