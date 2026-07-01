"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  {
    src: "/png/wipe.png",
    alt: "PureNestra wipe in a soft, clean presentation",
  },
  {
    src: "/png/wipe2.png",
    alt: "PureNestra wipe close-up showing the soft fabric",
  },
  {
    src: "/png/wipe3.png",
    alt: "PureNestra wipe highlighting the gentle texture",
  },
  {
    src: "/png/wipe4.png",
    alt: "PureNestra wipe showcased in a calm, premium setting",
  },
  {
    src: "/png/wipe5.png",
    alt: "PureNestra wipe showcased in a calm, premium setting",
  },
];

export default function WipeCarouselSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-(--color-cream-muted) py-16 sm:py-20 md:py-24 selection:bg-[#d6c7bc] scroll-mt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,128,99,0.12),transparent_42%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-brown-dark/25 bg-white/70 px-4 py-1 text-sm font-medium font-plus-jakarta-sans text-(--color-brown-dark)">
            Gentle by design
          </span>

          <h2 className="mt-6 text-3xl tracking-tight text-(--color-brown-main) sm:text-4xl md:text-5xl">
            For parents who won&apos;t compromise on what touches their
            baby&apos;s skin.
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-(--color-brown-dark) font-plus-jakarta-sans">
            Babies have delicate, developing skin. What touches it every day
            should be chosen with care.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-(--color-brown-dark) font-plus-jakarta-sans">
            That&apos;s why PureNestra is thoughtfully designed with better
            ingredients, bigger wipes, extra durable, and gentler on sensitive
            skin.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["2X wider", "Plant-based fabric", "Dermatologist tested"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brown-dark/20 bg-(--color-cream-soft) px-3 py-1.5 text-sm font-medium text-(--color-brown-main)"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e7d8c8] bg-cream-soft/80 p-3 shadow-[0_20px_60px_rgba(100,73,49,0.08)] sm:p-4 md:p-5">
          <Carousel opts={{ loop: true, align: "start" }} className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="group relative aspect-4/5 overflow-hidden rounded-[1.5rem] bg-(--color-cream-muted)">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-4 transition duration-500 group-hover:scale-105 sm:p-6"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-0 bg-white/90 text-(--color-brown-main) shadow-sm hover:bg-white" />
            <CarouselNext className="right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-0 bg-white/90 text-(--color-brown-main) shadow-sm hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
