import { z } from "zod";

export const blogSchema = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string(),
  imageId: z.string(),
  month: z.number().int(),
  year: z.number().int(),
  tags: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

