"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

interface Ingredient {
  name: string;
  description: string;
  details: string;
}

const ingredients: Ingredient[] = [
  {
    name: "Purified Water",
    description: "96.8% — the gentle base",
    details:
      "The foundation of every wipe. Nearly 97% pure water, because the gentlest cleanser already exists in nature.",
  },
  {
    name: "Vegetable Glycerin",
    description: "Plant-based moisture lock",
    details:
      "A natural humectant that draws moisture into the skin and keeps delicate skin soft after every wipe.",
  },
  {
    name: "Panthenol (Pro-Vitamin B5)",
    description: "Skin barrier support",
    details:
      "Clinically recognized and naturally derived. Pro-Vitamin B5 helps the skin repair itself and stay resilient — especially important for newborns.",
  },
  {
    name: "Bisabolol (Natural Chamomile)",
    description: "Calms & soothes",
    details:
      "Botanically sourced from chamomile. Traditionally trusted, scientifically backed for sensitive and reactive skin.",
  },
];

const ProductFeature = () => {
  const [activeIngredient, setActiveIngredient] = useState<Ingredient>(
    ingredients[0],
  );

  return (
    <section
      id="formula"
      className="bg-(--color-cream-alt) py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex items-center justify-center selection:bg-[#d6c7bc] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
        <div className="flex flex-col max-w-xl mx-auto lg:mx-0">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-(--color-brown-main) leading-tight">
              Just what&apos;s needed.
            </h2>

            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-(--color-green-main) mb-4 sm:mb-6 leading-tight">
              Nothing more.
            </h2>

            <p className="text-(--color-brown-dark) leading-relaxed font-plus-jakarta-sans text-sm sm:text-base">
              We believe simplicity is the highest form of care. Our formula
              reads like a short poem — clean, intentional, and easy to
              understand.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {ingredients.map((ingredient, index) => {
              const isActive = activeIngredient.name === ingredient.name;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIngredient(ingredient)}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 text-left p-5 cursor-pointer ${
                    isActive
                      ? "border-(--color-green-main) bg-white shadow-lg"
                      : "border-(--color-beige-main) bg-transparent hover:bg-white/70 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                      isActive
                        ? "opacity-100 bg-linear-to-r from-[#f7f4ef] to-[#f2f8f1]"
                        : ""
                    }`}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={`font-serif text-lg sm:text-xl md:text-2xl mb-1 transition-colors ${
                          isActive
                            ? "text-(--color-green-main)"
                            : "text-(--color-brown-main)"
                        }`}
                      >
                        {ingredient.name}
                      </h3>

                      <p className="text-(--color-brown-dark) text-xs sm:text-sm md:text-base font-plus-jakarta-sans leading-relaxed">
                        {ingredient.description}
                      </p>
                    </div>

                    <div
                      className={`mt-1 transition-transform duration-300 ${
                        isActive ? "translate-x-1" : "group-hover:translate-x-1"
                      }`}
                    >
                      <FaArrowRightLong
                        size={18}
                        className={
                          isActive
                            ? "text-(--color-green-main)"
                            : "text-(--color-brown-dark)"
                        }
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-(--color-cream-muted) rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between w-full h-full max-w-xl mx-auto backdrop-blur-xl border border-white/40 shadow-[0_10px_50px_rgba(0,0,0,0.06)]">
          <div>
            <div className="relative w-full aspect-4/3 max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 md:mb-10">
              <Image
                src="/png/two-wipes.png"
                alt="PureNestra Baby Wipes"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-md border border-white/50 p-6 sm:p-8 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIngredient.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-(--color-green-main) font-medium mb-3">
                    Active Ingredient
                  </p>

                  <h3 className="font-serif text-2xl sm:text-3xl text-(--color-brown-main) mb-4 leading-tight">
                    {activeIngredient.name}
                  </h3>

                  <p className="text-(--color-brown-dark) font-plus-jakarta-sans leading-relaxed text-sm sm:text-base">
                    {activeIngredient.details}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="font-serif text-[#3E332B] text-base sm:text-lg md:text-xl mb-2">
              &quot;Plant-Based. Kind to Skin&quot;
            </p>

            <p className="text-[#3E332B] text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest opacity-80">
              The PureNestra promise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
