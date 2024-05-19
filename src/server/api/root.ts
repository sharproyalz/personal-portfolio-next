import { blogRouter } from "~/server/api/routers/blog";
import { contactRouter } from "~/server/api/routers/contact";
import { projectRouter } from "~/server/api/routers/project";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  blog: blogRouter,
  contact: contactRouter,
  project: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
