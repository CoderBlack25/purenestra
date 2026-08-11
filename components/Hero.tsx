import Image from "next/image";
import Form from "@/components/Form";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85dvh] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-[90dvh] selection:bg-[#d6c7bc] scroll-mt-24"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/png/hero-image.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-1 bg-white/10 pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 z-2 h-48 w-full bg-linear-to-t from-(--color-cream-muted) via-cream-muted/60 to-transparent pointer-events-none sm:h-64 md:h-80"></div>

      <div className="relative z-10 max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-12 md:px-8 md:py-0">
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
