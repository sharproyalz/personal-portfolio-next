import { z } from "zod";

export const projectSchemas = {
  create: z.object({
    id: z.string().cuid().optional(),
    title: z.string(),
    link: z.string(),
    date: z.string(),
    image: z.string(),
    imageId: z.string(),
    projectTags: z
      .array(
        z.object({
          name: z.string(),
        }),
      )
      .optional(),
  }),

  get: z.object({
    id: z.string().cuid(),
  }),
};
