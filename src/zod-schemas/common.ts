import { z } from "zod";

export const commonSchemas = {
  delete: z.object({
    id: z.string().cuid(),
  }),
};
