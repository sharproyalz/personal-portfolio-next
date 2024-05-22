import { blogSchemas } from "~/zod-schemas/blog";
import { contactSchemas } from "~/zod-schemas/contact";
import { projectSchemas } from "~/zod-schemas/project";

export const schemas = {
  blog: blogSchemas,
  project: projectSchemas,
  contact: contactSchemas,
};
