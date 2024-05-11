import { z } from "zod";

export const projectSchema = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string(),
  imageId: z.string(),
  monthStart: z.number().int(),
  yearStart: z.number().int(),
  monthEnd: z.number().int().optional(),
  yearEnd: z.number().int().optional(),
  tags: z.object({
    id: z.string(),
    name: z.string(),
  }),
});
