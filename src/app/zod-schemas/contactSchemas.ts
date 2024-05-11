import { z } from "zod";

export const contactSchema = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

