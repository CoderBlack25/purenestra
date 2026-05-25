import Image from "next/image";
import Form from "@/components/Form";

const JoinWaitlist = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-linear-to-b from-(--color-cream-muted) to-[#D2D6C3] overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-14 sm:pt-16 md:pt-20 selection:bg-[#d6c7bc]">
      <div className="absolute top-10 left-6 lg:left-24 hidden lg:block">
        <Image
          src="/png/sun.png"
          alt="sun"
          width={120}
          height={120}
          className="w-auto h-auto"
        />
      </div>

      <div className="absolute right-6 top-1/3 lg:right-24 hidden lg:block">
        <Image
          src="/png/butterfly.png"
          alt="butterfly"
          width={160}
          height={160}
          className="w-auto h-auto"
        />
      </div>

      <div className="absolute bottom-0 left-4 lg:left-24 hidden lg:block">
        <Image
          src="/png/leaf-left.png"
          alt="leaf decoration"
          width={160}
          height={160}
          className="w-auto h-auto"
        />
      </div>

      <div className="absolute bottom-0 right-4 lg:right-24 hidden lg:block">
        <Image
          src="/png/leaf-right.png"
          alt="leaf decoration"
          width={160}
          height={160}
          className="w-auto h-auto"
        />
      </div>

      <div className="max-w-2xl w-full text-center flex flex-col items-center gap-5 sm:gap-6">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-(--color-brown-main) leading-tight">
          Be among the first to <br />
          hold a <span className="text-(--color-green-main)">PureNestra.</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-(--color-brown-main) leading-tight">
          Launching July 1, 2026 — waitlist closes soon.
        </h2>

        <div className="text-xs sm:text-sm md:text-base text-(--color-brown-dark) font-plus-jakarta-sans max-w-xs sm:max-w-md">
          <p>Founding members receive:</p>
          <ul className="font-semibold">
            <li>Early access — shop before the public</li>
            <li>A complimentary sample pack</li>
            <li>20% off your very first order</li>
          </ul>
        </div>

        <div className="w-28 sm:w-36 md:w-44 lg:w-52 -mb-8 sm:-mb-10 md:-mb-12 z-10">
          <Image
            src="/png/baby.png"
            alt="baby"
            width={220}
            height={220}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full bg-(--color-cream-muted) rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col gap-4 mb-16 sm:mb-20 md:mb-24 max-w-lg shadow-sm">
          <Form />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            {/* <Image
              src="/png/people.png"
              alt="people"
              width={95}
              height={40}
              className="w-20 sm:w-24 h-auto object-contain"
            /> */}

            <p className="text-(--color-brown-dark) font-semibold font-plus-jakarta-sans text-xs sm:text-sm">
              Be among the first Canadian families to try PureNestra.{" "}
              <br className="hidden sm:block" />
              Founding members get early access, a free sample pack, and 20% off
              at launch.
            </p>
          </div>

          <p className="text-xs sm:text-sm text-(--color-brown-dark) font-plus-jakarta-sans text-center">
            No spam. Unsubscribe anytime. Read our quiet privacy promise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlist;
