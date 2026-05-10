import type { MailProvider } from "./mail.interface";

import { ResendProvider } from "./providers/resend.provider";
import { MailtrapProvider } from "./providers/mailtrap.provider";

export const mailProviders = {
  resend: new ResendProvider(),
  mailtrap: new MailtrapProvider(),
} satisfies Record<string, MailProvider>;

export type MailProviderName = keyof typeof mailProviders;

export class MailService {
  private provider: MailProvider;

  constructor(providerName: MailProviderName) {
    this.provider = mailProviders[providerName];
  }

  async sendEmail(...args: Parameters<MailProvider["sendEmail"]>) {
    return this.provider.sendEmail(...args);
  }
}
