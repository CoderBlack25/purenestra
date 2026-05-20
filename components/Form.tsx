"use client";

import { useTransition } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  waitlistSchema,
  type WaitlistSchemaType,
} from "@/lib/validations/waitlist.schema";

import { joinWaitlist } from "@/actions/waitlist.action";

const Form = () => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistSchemaType>({
    resolver: zodResolver(waitlistSchema),

    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: WaitlistSchemaType) => {
    startTransition(async () => {
      const response = await joinWaitlist(data.email);

      if (!response.success) {
        if (response.message === "Email already joined waitlist") {
          toast.error("Looks like this email is already on the waitlist.");

          return;
        }

        toast.error("Something went wrong. Please try again.");

        return;
      }

      toast.success(
        "Thanks for joining the waitlist! You’ll be among the first to know when our gentle baby wipes launch.",
      );

      reset();
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-2 font-plus-jakarta-sans"
      >
        <div className="w-full">
          <input
            type="email"
            placeholder="Your@email.com"
            {...register("email")}
            className="w-full px-5 sm:px-6 py-3 bg-[#FCF6F1] rounded-full text-black font-medium border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B58063] placeholder:text-(--color-gray-main) placeholder:font-medium text-sm sm:text-base"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2 pl-3">
              {errors.email.message}
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
