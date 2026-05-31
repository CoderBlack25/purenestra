"use server";

import { supabase } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/validations/waitlist.schema";
import { MailService } from "@/lib/mail/mail.service";

import WaitlistEmail from "@/emails/WaitlistEmail";
import AdminNotificationEmail from "@/emails/AdminNotificationEmail";

type ActionResponse =
  | { success: true; message: string }
  | { success: false; message: string };

export async function joinWaitlist(email: string): Promise<ActionResponse> {
  try {
    /**
     * 1. Validate input
     */
    const validatedFields = waitlistSchema.safeParse({ email });

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Invalid email address",
      };
    }

    const userEmail = validatedFields.data.email;

    /**
     * 2. Save to DB
     */
    const { error } = await supabase.from("waitlist").insert({
      email: userEmail,
    });

    if (error) {
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
     * 3. Mail service (single instance reused)
     */
    const mailService = new MailService("resend");

    const joinedAt = new Date().toISOString();

    /**
     * 4. Send email to CUSTOMER
     */
    const customerEmailPromise = mailService.sendEmail({
      to: userEmail,
      subject: "Welcome to PureNestra 💚",
      react: WaitlistEmail(), // customer template
    });

    /**
     * 5. Send email to ADMIN
     */
    const adminEmailPromise = mailService.sendEmail({
      to: process.env.WAITLIST_RECEIVER_EMAIL as string,
      subject: "New Waitlist Signup",
      react: AdminNotificationEmail({
        customerEmail: userEmail,
        joinedAt,
      }),
    });

    /**
     * 6. Run both in parallel
     */
    await Promise.all([customerEmailPromise, adminEmailPromise]);

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
