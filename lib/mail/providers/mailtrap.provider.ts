import { MailtrapClient } from "mailtrap";
import { render } from "@react-email/render";

import type { MailProvider, SendMailOptions } from "@/lib/mail/mail.interface";

const client = new MailtrapClient({
  token: process.env.MAILTRAP_API_TOKEN as string,
});

export class MailtrapProvider implements MailProvider {
  async sendEmail({ to, subject, react }: SendMailOptions): Promise<void> {
    const html = await render(react);

    await client.send({
      from: {
        email: process.env.EMAIL_FROM as string,
        name: "Waitlist",
      },

      to: [{ email: to }],

      subject,

      html,
    });
  }
}
