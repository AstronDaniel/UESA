"use client";

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageCarouselProps {
    slides: { src: string; alt: string; title: string }[];
    className?: string;
}

export default function ImageCarousel({ slides, className }: ImageCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className={cn("relative mx-auto w-full max-w-5xl px-4 md:px-12", className)}>
            <div className="overflow-hidden rounded-xl bg-muted" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    {slides.map((slide, index) => (
                        <div className="relative min-w-0 flex-[0_0_100%] aspect-video" key={index}>
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-24 text-white">
                                <h3 className="text-2xl font-bold">{slide.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background p-2 shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:left-4"
                onClick={scrollPrev}
            >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous slide</span>
            </button>

            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background p-2 shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:right-4"
                onClick={scrollNext}
            >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next slide</span>
            </button>
        </div>
    )
}
