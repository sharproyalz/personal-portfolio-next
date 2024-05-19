import { z } from "zod";

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
      return ctx.db.blog.create({ data: input });
    }),

  get: publicProcedure.input(schemas.blog.get).query(({ input, ctx }) => {
    return ctx.db.blog.findUnique({ where: input });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.blog.findMany();
  }),
});
