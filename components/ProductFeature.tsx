interface Ingredient {
  name: string;
  description: string;
}

const ingredients: Ingredient[] = [
  {
    name: "Panthenol (Pro-Vitamin B5)",
    description:
      "Helps skin hold onto moisture, making it softer and supporting a healthy skin barrier.",
  },
  {
    name: "Bisabolol",
    description:
      "A calming ingredient derived from chamomile, known for soothing sensitive and reactive skin.",
  },
  {
    name: "97% Water",
    description:
      "The gentlest ingredient nature can offer. Pure, simple, and perfect for everyday use.",
  },
  {
    name: "100% Plant-Based Fabric",
    description:
      "Made from plant-based viscose that's incredibly soft, gentle, and kinder to delicate skin.",
  },
  {
    name: "pH-Balanced For Sensitive Skin",
    description:
      "Designed to support your baby’s natural skin barrier and help reduce irritation.",
  },
  {
    name: "Dermatologist Tested",
    description: "Carefully formulated and tested with sensitive skin in mind.",
  },
];

const ProductFeature = () => {
  return (
    <section
      id="formula"
      className="bg-(--color-cream-alt) py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex items-center justify-center selection:bg-[#d6c7bc] scroll-mt-16"
    >
      <div className="flex flex-col max-w-6xl mx-auto lg:mx-0">
        <div className="flex justify-center items-center text-center mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-(--color-brown-main) leading-tight">
            What’s inside PureNestra?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ingredients.map((ingredient, index) => {
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border transition-all duration-300 text-left p-5 border-(--color-green-main) bg-white shadow-lg"
              >
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-1 transition-colors text-(--color-green-main)">
                      {ingredient.name}
                    </h3>

                    <p className="text-(--color-brown-dark) text-xs sm:text-sm md:text-base font-plus-jakarta-sans leading-relaxed">
                      {ingredient.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
