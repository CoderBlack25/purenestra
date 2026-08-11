"use server";

import { supabase } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/validations/waitlist.schema";
import { MailService } from "@/lib/mail/mail.service";

import WaitlistEmail from "@/emails/WaitlistEmail";
import AdminNotificationEmail from "@/emails/AdminNotificationEmail";

/**
 * Messages are display-ready so the client never branches on copy.
 */
export type WaitlistFormState = {
  status: "success" | "error";
  message: string;
} | null;

export async function joinWaitlist(
  _prevState: WaitlistFormState,
  formData: FormData,
): Promise<WaitlistFormState> {
  try {
    const validatedFields = waitlistSchema.safeParse({
      email: formData.get("email"),
    });

    if (!validatedFields.success) {
      return {
        status: "error",
        message: "Please enter a valid email address.",
      };
    }

    const userEmail = validatedFields.data.email;

    const { error } = await supabase.from("waitlist").insert({
      email: userEmail,
    });

    if (error) {
      if (error.code === "23505") {
        return {
          status: "error",
          message: "Looks like this email is already on the waitlist.",
        };
      }

      console.error("Supabase error:", error);

      return {
        status: "error",
        message: "Something went wrong. Please try again.",
      };
    }

    const mailService = new MailService("resend");

    const joinedAt = new Date().toISOString();

    const customerEmailPromise = mailService.sendEmail({
      to: userEmail,
      subject: "Welcome to PureNestra 💚",
      react: WaitlistEmail(),
    });

    const adminEmailPromise = mailService.sendEmail({
      to: process.env.WAITLIST_RECEIVER_EMAIL as string,
      subject: "New Waitlist Signup",
      react: AdminNotificationEmail({
        customerEmail: userEmail,
        joinedAt,
      }),
    });

    await Promise.all([customerEmailPromise, adminEmailPromise]);

    return {
      status: "success",
      message:
        "Thanks for joining the waitlist! You’ll be among the first to know when our gentle baby wipes launch.",
    };
  } catch (error) {
    console.error(error);

    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
