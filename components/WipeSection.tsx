export default function WipeSection() {
  return (
    <section className="bg-(--color-cream-alt) flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-14 sm:pt-16 md:pt-20 lg:pt-24 selection:bg-[#d6c7bc]">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-(--color-brown-main) leading-snug sm:leading-tight mb-5 sm:mb-6 md:mb-10 tracking-tight">
          “For parents who won&apos;t compromise on{" "}
          <br className="hidden sm:block" /> what touches their baby&apos;s
          skin.”
        </h2>

        <div className="flex flex-col gap-2 max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 text-(--color-brown-dark) leading-relaxed font-plus-jakarta-sans text-sm sm:text-base md:text-lg">
          <p>
            Babies have delicate, developing skin. What touches it every day
            should be chosen with care.
          </p>
          <p>
            That&apos;s why PureNestra is thoughtfully designed with better
            ingredients, bigger wipes, extra durable, and gentler on sensitive
            skin.
          </p>
        </div>
      </div>
    </section>
  );
}
