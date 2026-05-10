import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export type WaitlistSchemaType = z.infer<typeof waitlistSchema>;
