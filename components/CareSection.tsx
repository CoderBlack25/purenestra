"use client";

import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  index: number;
}

const features = [
  {
    title: "Panthenol (Pro-Vitamin B5)",
    description:
      "Helps skin hold onto moisture, making it softer and supporting a healthy skin barrier.",
  },
  {
    title: "Bisabolol",
    description:
      "A calming ingredient derived from chamomile, known for soothing sensitive and reactive skin.",
  },
  {
    title: "99% purified water",
    description:
      "The gentlest ingredient nature can offer. Pure, simple, and perfect for everyday use.",
  },
  {
    title: "100% Plant-Based Fabric",
    description:
      "Made from plant-based viscose that's incredibly soft, gentle, and kinder to delicate skin.",
  },
  {
    title: "pH-Balanced For Sensitive Skin",
    description:
      "Designed to support your baby’s natural skin barrier and help reduce irritation.",
  },
  {
    title: "Dermatologist Tested",
    description: "Carefully formulated and tested with sensitive skin in mind.",
  },
];

const FeatureCard = ({ title, description }: FeatureProps) => {
  return (
    <div className="bg-(--color-cream-soft) p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl text-left flex flex-col items-start gap-3 sm:gap-4 h-full">
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
      id="formula"
      className="bg-(--color-cream-muted) py-16 sm:py-20 md:py-24 selection:bg-[#d6c7bc] scroll-mt-16"
    >
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-(--color-brown-main) leading-tight mb-6 sm:mb-8 md:mb-10">
          What’s inside PureNestra?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} index={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
