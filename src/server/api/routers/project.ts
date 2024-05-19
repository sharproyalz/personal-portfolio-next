import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { schemas } from "~/zod-schemas";

export const projectRouter = createTRPCRouter({
  create: publicProcedure
    .input(schemas.project.create)
    .mutation(({ input, ctx }) => {
      return ctx.db.project.create({ data: input });
    }),

  get: publicProcedure.input(schemas.project.get).query(({ input, ctx }) => {
    return ctx.db.project.findUnique({ where: input });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.project.findMany();
  }),
});
