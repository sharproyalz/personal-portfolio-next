import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { schemas } from "~/zod-schemas";

export const contactRouter = createTRPCRouter({
  send: publicProcedure
    .input(schemas.contact.send)
    .mutation(({ input, ctx }) => {
      return ctx.db.contact.create({ data: input });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.contact.findMany();
  }),
});
