import Form from "@/components/Form";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[85vh] md:min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center selection:bg-[#d6c7bc]"
      style={{ backgroundImage: "url('/png/hero-image.png')" }}
    >
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 w-full h-48 sm:h-64 md:h-80 bg-linear-to-t from-(--color-cream-muted) via-cream-muted/60 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 text-center max-w-2xl px-4 sm:px-6 md:px-8 py-12 md:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-(--color-brown-main) leading-tight mb-4 sm:mb-6">
          Your baby&apos;s skin deserves the <br />{" "}
          <span className="text-[#B58063]">shortest</span> ingredient list
          possible.
        </h1>

        <p className="text-(--color-brown-dark) text-sm sm:text-base font-plus-jakarta-sans mb-5 sm:mb-6 leading-relaxed max-w-xl mx-auto">
          PureNest baby wipes contains nearly 97% purified water. 100% plant
          fiber. Pro-Vitamin B5 and natural chamomile for skin that stays soft
          and calm.
        </p>

        <Form />

        <p className="text-(--color-brown-dark) text-xs sm:text-sm md:text-base font-plus-jakarta-sans leading-relaxed">
          No spam. Unsubscribe anytime. Read our quiet privacy promise.
        </p>
      </div>
    </section>
  );
}
