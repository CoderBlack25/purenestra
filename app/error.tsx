"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70dvh] w-full flex-col items-center justify-center bg-(--color-cream-muted) px-6 py-24 text-center">
      <h1 className="max-w-xl text-3xl leading-tight text-(--color-brown-main) sm:text-4xl md:text-5xl">
        Something went wrong.
      </h1>

      <p className="mt-4 max-w-md font-plus-jakarta-sans text-sm leading-relaxed text-(--color-brown-dark) sm:text-base">
        Sorry about that — this one is on us. Try again, and if it keeps
        happening please let us know at{" "}
        <a
          href="mailto:info@purenestra.com"
          className="underline underline-offset-4"
        >
          info@purenestra.com
        </a>
        .
      </p>

      {error.digest && (
        <p className="mt-3 font-plus-jakarta-sans text-xs text-(--color-brown-dark)/70">
          Reference: {error.digest}
        </p>
      )}

      <button
        type="button"
        onClick={reset}
        className="mt-8 cursor-pointer rounded-full bg-(--color-brown-soft) px-6 py-3 font-plus-jakarta-sans text-sm font-medium text-(--color-cream-light) transition hover:opacity-90"
      >
        Try again
      </button>
    </main>
  );
}
