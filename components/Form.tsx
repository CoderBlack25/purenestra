"use client";

import { useActionState, useId } from "react";

import { joinWaitlist } from "@/actions/waitlist.action";

const Form = () => {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null);

  const emailId = useId();
  const errorId = `${emailId}-error`;

  const hasError = state?.status === "error";

  if (state?.status === "success") {
    return (
      <div
        role="status"
        className="mx-auto mb-2 flex max-w-md flex-col items-center gap-1 rounded-2xl bg-(--color-cream-soft) px-5 py-4 text-center font-plus-jakarta-sans"
      >
        <p className="text-sm font-semibold text-(--color-brown-main) sm:text-base">
          You’re on the list 🤍
        </p>
        <p className="text-xs text-(--color-brown-dark) sm:text-sm">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <div>
      <form
        action={formAction}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-2 font-plus-jakarta-sans"
      >
        <div className="w-full">
          <label htmlFor={emailId} className="sr-only">
            Email address
          </label>

          <input
            id={emailId}
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Your@email.com"
            aria-invalid={hasError || undefined}
            aria-describedby={hasError ? errorId : undefined}
            className="w-full px-5 sm:px-6 py-3 bg-[#FCF6F1] rounded-full text-black font-medium border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B58063] placeholder:text-(--color-gray-main) placeholder:font-medium text-sm sm:text-base aria-invalid:ring-2 aria-invalid:ring-red-500"
          />

          {hasError && (
            <p
              id={errorId}
              role="alert"
              className="text-red-600 text-sm mt-2 pl-3"
            >
              {state.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto bg-(--color-brown-soft) text-(--color-cream-light) font-medium px-5 sm:px-6 py-3 rounded-full hover:opacity-90 transition whitespace-nowrap cursor-pointer text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Joining..." : "Join waitlist"}
        </button>
      </form>
    </div>
  );
};

export default Form;
