const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "These wipes cleaned both pee and poo really well and didn't cause any skin reactions. They're gentle, effective, and I'd happily use them again.",
      feedback:
        "The wipes sometimes stick together, which can be inconvenient during quick diaper changes.",
      improvement:
        "We've refined the dispensing experience to help wipes separate more easily for quicker, one-handed access.",
      author: "Early Beta Tester",
    },
    {
      quote:
        "We compared these wipes with the brand we currently use and immediately noticed a difference. I even did a blind softness test and could tell which one was PureNestra.",
      feedback:
        "I would love slightly larger wipes so fewer are needed for bigger cleanups.",
      improvement:
        "Based on tester feedback, we've increased the size of each wipe to provide better coverage and reduce the number of wipes needed per change.",
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
              <blockquote className="space-y-6">
                <p className="text-lg leading-relaxed font-medium">
                  &quot;{testimonial.quote}&quot;
                </p>
              </blockquote>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="mb-2 text-sm font-semibold text-amber-800">
                  Suggested Improvement
                </p>

                <p className="text-sm leading-relaxed text-amber-700">
                  {testimonial.feedback}
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4">
                <p className="mb-2 text-sm font-semibold text-green-800">
                  ✓ What We Improved
                </p>

                <p className="text-sm leading-relaxed text-green-700">
                  {testimonial.improvement}
                </p>
              </div>

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

        <div className="mt-12 rounded-3xl border border-(--color-brown-dark) text-(--color-brown-dark) p-6 text-center font-plus-jakarta-sans">
          <h3 className="text-lg font-semibold">
            Parent Tested. Parent Improved.
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Every piece of feedback from our beta testing program was reviewed
            and used to refine PureNestra before launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
