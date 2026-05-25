"use server";

import { supabase } from "@/lib/supabase";

import WaitlistEmail from "@/emails/WaitlistEmail";

import { waitlistSchema } from "@/lib/validations/waitlist.schema";

import { MailService } from "@/lib/mail/mail.service";

type ActionResponse =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      message: string;
    };

export async function joinWaitlist(email: string): Promise<ActionResponse> {
  try {
    const validatedFields = waitlistSchema.safeParse({
      email,
    });

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Invalid email address",
      };
    }

    /**
     * Save email to database first
     */

    const { error } = await supabase.from("waitlist").insert({
      email: validatedFields.data.email,
    });

    if (error) {
      /**
       * PostgreSQL unique constraint violation
       */

      if (error.code === "23505") {
        return {
          success: false,
          message: "Email already joined waitlist",
        };
      }

      console.error("Supabase error:", error);

      return {
        success: false,
        message: "Failed to join waitlist",
      };
    }

    /**
     * Choose provider here
     * "resend" | "mailtrap"
     */

    const mailService = new MailService("resend");

    /**
     * Send notification email
     */

    await mailService.sendEmail({
      to: process.env.WAITLIST_RECEIVER_EMAIL as string,

      subject: "New Waitlist Signup",

      react: WaitlistEmail(),
    });

    return {
      success: true,
      message: "Successfully joined waitlist",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
