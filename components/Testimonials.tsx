const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "These wipes cleaned both pee and poo really well and didn't cause any skin reactions. They're gentle, effective, and I'd happily use them again.",
      author: "L.U",
    },
    {
      quote:
        "We compared these wipes with the brand we currently use and immediately noticed a difference. I even did a blind softness test and could tell which one was PureNestra.",
      author: "O.O",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-(--color-cream-muted)">
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
            Parent Tested. Parent Approved.
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
