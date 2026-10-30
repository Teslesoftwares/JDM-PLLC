import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email address is required"),
  organisation: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  category: z.string().min(1, "Enquiry category is required"),
  consent: z.literal(true, {
    message: "Consent to the Privacy Notice is required",
  }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
