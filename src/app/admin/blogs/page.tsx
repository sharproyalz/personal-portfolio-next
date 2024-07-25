import { BlogsView } from "~/app/admin/blogs/_components/blogs-view";
import { api } from "~/trpc/server";

export default async function ProjectsPage() {
  const blogs = await api.blog.getAll.query();

  return <BlogsView initialData={blogs} />;
}
