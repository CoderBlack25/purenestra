import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70dvh] w-full flex-col items-center justify-center bg-(--color-cream-muted) px-6 py-24 text-center">
      <p className="font-plus-jakarta-sans text-sm font-medium tracking-wide text-(--color-green-main)">
        404
      </p>

      <h1 className="mt-4 max-w-xl text-3xl leading-tight text-(--color-brown-main) sm:text-4xl md:text-5xl">
        We couldn’t find that page.
      </h1>

      <p className="mt-4 max-w-md font-plus-jakarta-sans text-sm leading-relaxed text-(--color-brown-dark) sm:text-base">
        The link may be out of date, or the page may have moved. Everything about
        PureNestra is still on the home page.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-(--color-brown-soft) px-6 py-3 font-plus-jakarta-sans text-sm font-medium text-(--color-cream-light) transition hover:opacity-90"
      >
        Back to home
      </Link>
    </main>
  );
}
