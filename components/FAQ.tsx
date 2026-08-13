"use client";

import { useId, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "When will PureNestra be available?",
    answer:
      "We’re working behind the scenes and will announce our launch date soon. Waitlist members hear first, join so you won’t miss it.",
  },
  {
    question: "What makes PureNestra different?",
    answer:
      "PureNestra is 2X wider than most wipes and the first to combine Panthenol and Bisabolol which are ingredients that actively soothe and nourish skin, not just clean it. Everything inside is plant-based, pH-balanced, and dermatologist tested. Nothing hidden. Nothing extra.",
  },
  {
    question: "Why should I join the waitlist?",
    answer:
      "You’ll get 10% off at launch, early access before the general public, and exclusive updates and sneak peeks",
  },
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const accordionId = useId();

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index],
    );
  };

  const faqAccordion = faqs.map((faq, index) => {
    const isOpen = openIndexes.includes(index);

    const triggerId = `${accordionId}-trigger-${index}`;
    const panelId = `${accordionId}-panel-${index}`;

    return (
      <div
        key={index}
        className="bg-(--color-cream-alt) rounded-2xl overflow-hidden shadow-sm"
      >
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => toggleAccordion(index)}
          className="w-full flex items-center justify-between px-6 py-5 text-left text-(--color-brown-main) transition-colors hover:bg-[#e6dcd4]"
        >
          <span className="text-[1.05rem] font-medium tracking-wide">
            {faq.question}
          </span>
          <FiChevronDown
            size={20}
            className={`shrink-0 text-(--color-brown-main) transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          inert={!isOpen}
          className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-5 text-(--color-brown-dark) font-plus-jakarta-sans text-sm leading-relaxed max-w-[90%]">
              {faq.answer}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      id="questions"
      className="w-full bg-(--color-cream-muted) py-24 px-6 flex flex-col items-center selection:bg-[#d6c7bc] scroll-mt-16"
    >
      <div className="max-w-2xl text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-(--color-brown-main) leading-tight">
          FAQs
        </h2>
      </div>

      <div className="relative w-full max-w-5xl">
        <div className="flex flex-col gap-3 relative z-10">{faqAccordion}</div>

        <div className="absolute top-26 -translate-y-1/2 -right-37 z-20 pointer-events-none hidden lg:block">
          <Image
            src="/png/teddy.webp"
            alt="Decorative brand element"
            width={120}
            height={120}
            priority
            className="object-contain drop-shadow-md w-30 sm:w-40 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
