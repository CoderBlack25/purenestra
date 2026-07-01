"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  //const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // const toggleAccordion = (index: number) => {
  //   setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  // };
  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index],
    );
  };

  const faqAccordion = faqs.map((faq, index) => {
    //const isOpen = openIndex === index;
    const isOpen = openIndexes.includes(index);

    return (
      <motion.div
        key={index}
        initial={false}
        className="bg-(--color-cream-alt) rounded-2xl overflow-hidden shadow-sm"
      >
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full flex items-center justify-between px-6 py-5 text-left text-(--color-brown-main) transition-colors hover:bg-[#e6dcd4]"
        >
          <span className="text-[1.05rem] font-medium tracking-wide">
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-(--color-brown-main)"
          >
            <FiChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-6 pb-5 text-(--color-brown-dark) font-plus-jakarta-sans text-sm leading-relaxed max-w-[90%]">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
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
            src="/png/teddy.png"
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
