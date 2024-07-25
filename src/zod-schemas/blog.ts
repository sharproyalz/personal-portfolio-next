import { z } from "zod";

export const blogSchemas = {
  create: z.object({
    id: z.string().cuid().optional(),
    title: z.string().min(1, "Title is empty"),
    content: z.string().min(1, "Content is empty"),
    date: z.string().min(1, "Date is empty"),
    link: z.string().optional(),

    image: z.string().min(1, "Image is empty"),
    imageId: z.string().min(1, "ImageId is empty"),

    blogTags: z
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

  update: z.object({
    id: z.string().cuid(),
    title: z.string().optional(),
    content: z.string().optional(),
    date: z.string().optional(),
    link: z.string().optional(),

    image: z.string().optional(),
    imageId: z.string().optional(),

    blogTags: z
      .object({
        id: z.string().cuid().optional(),
        name: z.string(),
      })
      .array()
      .optional(),
  }),
};
