import { z } from "zod";

export const projectSchemas = {
  create: z.object({
    id: z.string().cuid().optional(),
    title: z.string().min(1, "Title is empty"),
    link: z.string().min(1, "Link is empty"),
    date: z.string().min(1, "Date is empty"),
    image: z.string().min(1, "Image is empty"),
    imageId: z.string().min(1, "ImageId is empty"),
    projectTags: z
      .array(
        z.object({
          name: z.string(),
        }),
      )
      .min(1, "Tags is empty"),
  }),

  get: z.object({
    id: z.string().cuid(),
  }),
};
