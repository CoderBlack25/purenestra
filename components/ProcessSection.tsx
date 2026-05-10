const steps = [
  {
    id: "01",
    title: "Join the nest",
    description:
      "Drop your email below. No spam — just a single, gentle note when we're ready.",
  },
  {
    id: "02",
    title: "Get early access",
    description:
      "Waitlist members shop first, with founding-member pricing and a free sample pack.",
  },
  {
    id: "03",
    title: "Soft delivery",
    description:
      "Your wipes arrive in plastic-free packaging — ready for the most tender moments.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="ritual"
      className="bg-(--color-cream-muted) py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 text-center selection:bg-[#d6c7bc] scroll-mt-16"
    >
      <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-(--color-brown-main) leading-tight">
          Three quiet steps to <br />
          your first{" "}
          <span className="text-(--color-green-main)">PureNestra.</span>
        </h2>

        <p className="text-(--color-brown-dark) leading-relaxed font-plus-jakarta-sans max-w-xs sm:max-w-md md:max-w-lg text-sm sm:text-base">
          Every wipe is a quiet promise — to your baby&apos;s skin, and to the
          world they&apos;ll inherit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center px-2">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-(--color-green-main) mb-3 sm:mb-4">
              {step.id}
            </span>

            <h3 className="text-lg sm:text-xl md:text-2xl text-(--color-brown-main) mb-2 sm:mb-3">
              {step.title}
            </h3>

            <p className="text-(--color-brown-dark) text-xs sm:text-sm md:text-base leading-relaxed max-w-xs sm:max-w-sm md:max-w-md font-plus-jakarta-sans">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
