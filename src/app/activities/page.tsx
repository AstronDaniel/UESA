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
        { src: "/assets/images/image1.jpg", alt: "Students collaborating", title: "Collaborative Learning" },
        { src: "/assets/images/image2.jpg", alt: "Mentorship session", title: "Mentorship Programs" },
        { src: "/assets/images/image3.jpg", alt: "Annual Conference", title: "Annual Conference 2024" },
        { src: "/assets/images/image4.jpg", alt: "Library study", title: "Resource Sharing" },
    ];

    const activities: ActivityData[] = [
        {
            id: "conference",
            title: "Conferences & Seminars",
            category: "Academic",
            description: "Organizing events to enhance students' skills and knowledge in education through expert talks and workshops.",
            fullDescription: "Our annual conferences bring together leading educators, policy makers, and students to discuss the pressing issues in the Ugandan education sector. Participants engage in panel discussions, workshops, and networking sessions designed to broaden their understanding of global and local educational trends.",
            mainImage: "/assets/images/image5.jpg",
            date: "Annually",
            location: "Makerere University Main Hall",
            gallery: [
                { src: "/assets/images/image5.jpg", alt: "Keynote Speaker" },
                { src: "/assets/images/image3.jpg", alt: "Audience" },
                { src: "/assets/images/image2.jpg", alt: "Workshop" },
            ]
        },
        {
            id: "development",
            title: "Professional Development",
            category: "Training",
            description: "Providing training and mentorship to help students develop their pedagogical skills and career paths.",
            fullDescription: "We offer continuous professional development programs that focus on modern teaching methodologies, classroom management, and digital literacy. Our mentorship program connects students with experienced teachers to provide guidance and support as they transition into the workforce.",
            mainImage: "/assets/images/image2.jpg",
            date: "Monthly Workshops",
            gallery: [
                { src: "/assets/images/image2.jpg", alt: "Training Session" },
                { src: "/assets/images/image3.jpg", alt: "Group Work" },
                { src: "/assets/images/image4.jpg", alt: "Discussion" },
            ]
        },
        {
            id: "networking",
            title: "Networking Events",
            category: "Community",
            description: "Socializing events to promote networking among members and building a strong community of future educators.",
            fullDescription: "Building a strong professional network is crucial. We organize mixers, dinners, and team-building activities that allow students to connect with peers from different universities, share experiences, and build lasting professional relationships.",
            mainImage: "/assets/images/image4.jpg",
            date: "Quarterly",
            gallery: [
                { src: "/assets/images/image4.jpg", alt: "Social Mixer" },
                { src: "/assets/images/image3.jpg", alt: "Team Building" },
                { src: "/assets/images/image2.jpg", alt: "Dinner" },
            ]
        }
    ];

    return (
        <>
            <PageHeader
                title="Activities & Events"
                description="Empowering members through impactful programs and gatherings."
                imageSrc="/assets/images/image5.jpg"
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
