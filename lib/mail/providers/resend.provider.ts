import { Resend } from "resend";
import type { MailProvider, SendMailOptions } from "@/lib/mail/mail.interface";

const resend = new Resend(process.env.RESEND_API_KEY);

export class ResendProvider implements MailProvider {
  async sendEmail({ to, subject, react }: SendMailOptions): Promise<void> {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to,
      subject,
      react,
    });

    if (error) {
      throw new Error(error.message);
    }
  }
}
