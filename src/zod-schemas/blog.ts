import { z } from "zod";

export const blogSchemas = {
  create: z.object({
    id: z.string().cuid().optional(),
    title: z.string(),
    article: z.string(),
    image: z.string(),
    imageId: z.string(),
    month: z.number().int(),
    year: z.number().int(),

    blogTag: z
      .object({
        id: z.string(),
        name: z.string(),
      })
      .optional(),
  }),

  get: z.object({
    id: z.string().cuid(),
  }),
};
