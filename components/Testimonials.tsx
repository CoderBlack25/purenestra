const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "These wipes cleaned both pee and poo really well and didn't cause any skin reactions. They're gentle, effective, and I'd happily use them again.",
      feedback:
        "The only thing I'd improve is how the wipes separate from the pack. They sometimes stick together, which can be inconvenient during quick diaper changes.",
      author: "Early Beta Tester",
    },
    {
      quote:
        "We compared these wipes with the brand we currently use and immediately noticed a difference. I even did a blind softness test and could tell which one was PureNestra.",
      feedback:
        "They absorb more, clean better, and feel softer on my baby's skin. My only suggestion would be slightly larger wipes so fewer are needed for bigger cleanups.",
      author: "Early Beta Tester",
    },
  ];

  return (
    <section className="py-24 bg-(--color-cream-muted)">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border px-4 py-1 text-sm font-medium font-plus-jakarta-sans text-(--color-brown-dark)">
            Early Feedback
          </span>

          <h2 className="mt-6 text-3xl tracking-tight md:text-5xl text-(--color-brown-main)">
            Loved by Early Testers
          </h2>

          <p className="mt-4 text-lg text-(--color-brown-dark) font-plus-jakarta-sans">
            Real feedback from parents who tested PureNestra before launch.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group rounded-3xl border bg-(--color-cream-soft) p-8 transition-all duration-300 hover:shadow-lg font-plus-jakarta-sans text-(--color-brown-dark)"
            >
              <div className="mb-6 flex gap-1 text-lg text-yellow-400">
                {[...Array(5)].map((_, star) => (
                  <span key={star}>★</span>
                ))}
              </div>

              <blockquote className="space-y-6">
                <p className="text-lg leading-relaxed font-medium">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="rounded-2xl bg-muted/50 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold">
                      Suggested improvement:
                    </span>{" "}
                    {testimonial.feedback}
                  </p>
                </div>
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                  BT
                </div>

                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    Product Testing Program
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-(--color-brown-dark) bg-muted/30 p-6 text-center">
          <p className="text-sm text-muted-foreground text-(--color-brown-dark) font-plus-jakarta-sans">
            Feedback collected from parents who tested PureNestra wipes before
            public launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
