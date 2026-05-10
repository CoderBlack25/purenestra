"use server";

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
     * Choose provider here
     * "resend" | "mailtrap"
     */

    const mailService = new MailService("resend");

    await mailService.sendEmail({
      to: process.env.WAITLIST_RECEIVER_EMAIL as string,

      subject: "New Waitlist Signup",

      react: WaitlistEmail({
        email: validatedFields.data.email,
      }),
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
