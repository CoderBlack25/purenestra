import Image from "next/image";

interface Ingredient {
  name: string;
  description: string;
}

const ingredients: Ingredient[] = [
  {
    name: "Purified Water",
    description: "99% — the gentle base",
  },
  {
    name: "Plant-Based Fiber",
    description: "100% biodegradable cloth",
  },
  {
    name: "Aloe & Chamomile",
    description: "Calms and soothes delicate skin",
  },
  {
    name: "Vitamin E",
    description: "A soft layer of nourishment",
  },
];

export default function ProductFeature() {
  return (
    <section
      id="formula"
      className="bg-(--color-cream-alt) py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex items-center justify-center selection:bg-[#d6c7bc] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
        <div className="flex flex-col max-w-lg mx-auto lg:mx-0">
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

          <div className="flex flex-col">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="py-3 sm:py-4 border-b border-(--color-beige-main)"
              >
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-(--color-brown-main) mb-1">
                  {ingredient.name}
                </h3>

                <p className="text-(--color-brown-dark) text-xs sm:text-sm md:text-base font-plus-jakarta-sans leading-relaxed">
                  {ingredient.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-(--color-cream-muted) rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-between w-full h-full max-w-md mx-auto lg:max-w-none">
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

          <div className="text-center">
            <p className="font-serif text-[#3E332B] text-base sm:text-lg md:text-xl mb-2">
              &quot;Pure as a leaf in morning light.&quot;
            </p>

            <p className="text-[#3E332B] text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest opacity-80">
              The PureNest promise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
