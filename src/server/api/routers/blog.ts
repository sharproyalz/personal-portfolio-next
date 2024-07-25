import { Tag } from "lucide-react";
import { z } from "zod";
import prisma from "~/lib/prisma";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { schemas } from "~/zod-schemas";

export const blogRouter = createTRPCRouter({
  create: publicProcedure
    .input(schemas.blog.create)
    .mutation(({ input, ctx }) => {
      return ctx.db.blog.create({
        data: {
          ...input,
          blogTags: {
            create: input.blogTags,
          },
        },
      });
    }),

  get: publicProcedure.input(schemas.blog.get).query(({ input, ctx }) => {
    return ctx.db.blog.findUnique({
      where: input,
      include: { blogTags: true },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.blog.findMany({
      include: { blogTags: true },
      orderBy: { date: "asc" },
    });
  }),

  update: publicProcedure
    .input(schemas.blog.update)
    .mutation(({ ctx, input }) => {
      const { id, blogTags, ...data } = input;

      return ctx.db.blog.update({
        where: { id },
        include: { blogTags: true },
        data: {
          ...data,
          blogTags: {
            deleteMany: {}, // Optionally clear existing tags
            create: blogTags || [],
          },
        },
      });
    }),
});
