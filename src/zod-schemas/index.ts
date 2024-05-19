import { blogSchemas } from "~/zod-schemas/blog";
import { projectSchemas } from "~/zod-schemas/project";

export const schemas = {
  blog: blogSchemas,
  project: projectSchemas,
};
