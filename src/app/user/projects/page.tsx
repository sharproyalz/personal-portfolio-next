import { Footer } from "~/components/footer";
import Navigation from "~/components/navigation";
import { ProjectsSection } from "./_components/project";

export default function ProjectsPage() {
  return (
    <>
      <div>
        <Navigation />

        <ProjectsSection />
      </div>
    </>
  );
}
