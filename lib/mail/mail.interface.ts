export type SendMailOptions = {
  to: string;
  subject: string;
  react: React.ReactNode;
};

export interface MailProvider {
  sendEmail(options: SendMailOptions): Promise<void>;
}
