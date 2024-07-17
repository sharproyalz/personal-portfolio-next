import { ProjectsView } from "~/app/admin/projects/_components/projects-view";
import { api } from "~/trpc/server";

export default async function ProjectsPage() {
  const projects = await api.project.getAll.query();

  return <ProjectsView initialData={projects} />;
}
