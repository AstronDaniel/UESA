"use client";

import { useState } from "react";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import ImageCarousel from "@/components/ImageCarousel";
import ActivityModal, { ActivityData } from "@/components/ActivityModal";
import Image from "next/image";
import { Calendar, GraduationCap, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ActivitiesPage() {
    const [selectedActivity, setSelectedActivity] = useState<ActivityData | null>(null);

    const gallerySlides = [
        { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop", alt: "Students collaborating", title: "Collaborative Learning" },
        { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", alt: "Mentorship session", title: "Mentorship Programs" },
        { src: "https://images.unsplash.com/photo-1544928147-79a77456a1d3?q=80&w=2070&auto=format&fit=crop", alt: "Annual Conference", title: "Annual Conference 2024" },
        { src: "https://images.unsplash.com/photo-1427504746696-ea5abd7dfe83?q=80&w=2070&auto=format&fit=crop", alt: "Library study", title: "Resource Sharing" },
    ];

    const activities: ActivityData[] = [
        {
            id: "conference",
            title: "Conferences & Seminars",
            category: "Academic",
            description: "Organizing events to enhance students' skills and knowledge in education through expert talks and workshops.",
            fullDescription: "Our annual conferences bring together leading educators, policy makers, and students to discuss the pressing issues in the Ugandan education sector. Participants engage in panel discussions, workshops, and networking sessions designed to broaden their understanding of global and local educational trends.",
            mainImage: "https://images.unsplash.com/photo-1544928147-79a77456a1d3?q=80&w=2070&auto=format&fit=crop",
            date: "Annually",
            location: "Makerere University Main Hall",
            gallery: [
                { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop", alt: "Keynote Speaker" },
                { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", alt: "Audience" },
                { src: "https://images.unsplash.com/photo-1505373877841-8d43f7d38730?q=80&w=2070&auto=format&fit=crop", alt: "Workshop" },
            ]
        },
        {
            id: "development",
            title: "Professional Development",
            category: "Training",
            description: "Providing training and mentorship to help students develop their pedagogical skills and career paths.",
            fullDescription: "We offer continuous professional development programs that focus on modern teaching methodologies, classroom management, and digital literacy. Our mentorship program connects students with experienced teachers to provide guidance and support as they transition into the workforce.",
            mainImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
            date: "Monthly Workshops",
            gallery: [
                { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", alt: "Training Session" },
                { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", alt: "Group Work" },
                { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", alt: "Discussion" },
            ]
        },
        {
            id: "networking",
            title: "Networking Events",
            category: "Community",
            description: "Socializing events to promote networking among members and building a strong community of future educators.",
            fullDescription: "Building a strong professional network is crucial. We organize mixers, dinners, and team-building activities that allow students to connect with peers from different universities, share experiences, and build lasting professional relationships.",
            mainImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop",
            date: "Quarterly",
            gallery: [
                { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", alt: "Social Mixer" },
                { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop", alt: "Team Building" },
                { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop", alt: "Dinner" },
            ]
        }
    ];

    return (
        <>
            <PageHeader
                title="Activities & Events"
                description="Empowering members through impactful programs and gatherings."
                imageSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
            />

            <Section>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Event Gallery</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A glimpse into the vibrant community and events at UESA.</p>
                </div>
                <ImageCarousel slides={gallerySlides} />
            </Section>

            <Section className="bg-muted/30">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                            onClick={() => setSelectedActivity(activity)}
                        >
                            <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                <Image
                                    src={activity.mainImage}
                                    alt={activity.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black backdrop-blur-sm shadow-sm">
                                    {activity.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">{activity.title}</h3>
                                <p className="text-muted-foreground line-clamp-2 mb-4">
                                    {activity.description}
                                </p>
                                <div className="flex items-center text-sm font-medium text-primary">
                                    View Details
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <ActivityModal
                activity={selectedActivity}
                onClose={() => setSelectedActivity(null)}
            />
        </>
    );
}
