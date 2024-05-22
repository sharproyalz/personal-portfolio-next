import { z } from "zod";

export const contactSchemas = {
  send: z.object({
    name: z.string(),
    email: z.string(),
    message: z.string(),
  }),
};
