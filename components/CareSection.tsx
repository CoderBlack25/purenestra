"use client";

import React from "react";
import Image from "next/image";
import {
  LuDroplets,
  LuLeaf,
  LuHeart,
  LuSparkles,
  LuShieldCheck,
  LuRecycle,
} from "react-icons/lu";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const features = [
  {
    title: "99% Pure Water",
    icon: LuDroplets,
    description:
      "Every wipe is a quiet promise — to your baby's skin, and to the world they'll inherit.",
  },
  {
    title: "100% Plant Fiber",
    icon: LuLeaf,
    description:
      "A whisper-light formula that cleanses without harsh chemicals or residue.",
  },
  {
    title: "Sensitive Skin Safe",
    icon: LuHeart,
    description:
      "Hypoallergenic, pH balanced, dermatologist tested. Fragrance-free always.",
  },
  {
    title: "Ultra-Soft Touch",
    icon: LuSparkles,
    description:
      "Every wipe is a quiet promise — to your baby's skin, and to the world they'll inherit.",
  },
  {
    title: "Free From Nasties",
    icon: LuShieldCheck,
    description:
      "No alcohol, no parabens, no synthetic fragrance. Just what's needed.",
  },
  {
    title: "Planet Conscious",
    icon: LuRecycle,
    description:
      "Biodegradable wipes in recyclable packaging — care that returns to the earth.",
  },
];

const FeatureCard = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="bg-(--color-cream-soft) p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl text-left flex flex-col items-start gap-3 sm:gap-4 h-full">
      <div className="bg-(--color-beige-variant) p-2 sm:p-3 rounded-xl sm:rounded-2xl text-(--color-green-main)">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl text-(--color-brown-main)">
        {title}
      </h3>

      <p className="text-(--color-brown-dark) font-plus-jakarta-sans leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default function CareSection() {
  return (
    <section
      id="home"
      className="bg-(--color-cream-muted) py-16 sm:py-20 md:py-24 selection:bg-[#d6c7bc] scroll-mt-16"
    >
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-8">
          <Image
            src="/png/teddy-sleeping.png"
            alt="Care illustration"
            width={120}
            height={120}
            className="object-contain w-30 sm:w-40 md:w-50 h-auto"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-(--color-brown-main) leading-tight">
            Care that feels as <br />
            <span className="text-(--color-green-main)">pure</span> as it looks.
          </h2>

          <p className="text-(--color-brown-dark) leading-relaxed font-plus-jakarta-sans max-w-xs sm:max-w-md md:max-w-lg text-sm sm:text-base">
            Every wipe is a quiet promise — to your baby&apos;s skin, and to the
            world they&apos;ll inherit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} index={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
