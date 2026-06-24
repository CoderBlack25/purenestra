import Form from "@/components/Form";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[85vh] md:min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center selection:bg-[#d6c7bc]"
      style={{ backgroundImage: "url('/png/hero-image.png')" }}
    >
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 w-full h-48 sm:h-64 md:h-80 bg-linear-to-t from-(--color-cream-muted) via-cream-muted/60 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 md:px-8 py-12 md:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-(--color-brown-main) leading-tight mb-4 sm:mb-6">
          <span className="text-[#B58063]">2X wider</span>, ultra soft, and
          built for skin that deserves better.
        </h1>

        <p className="text-(--color-brown-dark) text-sm sm:text-base font-plus-jakarta-sans mb-5 sm:mb-6 leading-relaxed max-w-xl mx-auto">
          PureNestra is the first baby wipe with Panthenol and Bisabolol which
          are skin-loving ingredients that soothe, nourish, and actively protect
          your baby&apos;s sensitive skin with every wipe.
        </p>

        <Form />

        <p className="text-(--color-brown-dark) text-xs sm:text-sm md:text-base font-plus-jakarta-sans leading-relaxed">
          Join the Waitlist & Get 10% Off at Launch
        </p>
      </div>
    </section>
  );
}
