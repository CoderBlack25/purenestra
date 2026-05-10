import Image from "next/image";

export default function WipeSection() {
  return (
    <section className="bg-(--color-cream-alt) flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-14 sm:py-16 md:py-20 lg:py-24 selection:bg-[#d6c7bc]">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-(--color-brown-main) leading-snug sm:leading-tight mb-5 sm:mb-6 md:mb-10 tracking-tight">
          “Every wipe carries the same intention as{" "}
          <br className="hidden sm:block" />a parent&apos;s hand — soft, sure,
          and kind.”
        </h2>

        <div className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <p className="text-(--color-brown-dark) leading-relaxed font-plus-jakarta-sans text-sm sm:text-base md:text-lg">
            Purenestra was born from a parent&apos;s quiet promise — to care
            gently, purely, and intentionally.
            <br className="hidden sm:block" />
            Every wipe is designed to feel like a loving touch: soft, safe, and
            kind to delicate skin.
            <br className="hidden sm:block" />
            Because the smallest acts of care shape the world our children will
            grow into.
          </p>
        </div>

        <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-3xl mx-auto aspect-video">
          <Image
            src="/png/wipe.png"
            alt="PureNestra Baby Wipes"
            fill
            priority
            className="object-contain drop-shadow-xl sm:drop-shadow-2xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
          />
        </div>
      </div>
    </section>
  );
}
