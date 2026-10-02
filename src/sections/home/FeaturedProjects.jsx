import SectionHeader from "../../components/ui/SectionHeader";
import ProjectCard from "../../components/projects/ProjectCard";
import { getFeaturedProjects } from "../../services/projectService";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();
  return (
    <section className="bg-porcelain px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="02 · Selected Work" title="Featured Projects" text="Complete furniture transformations captured from the original space to the finished interior." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} large={index === 0} />)}
        </div>
      </div>
    </section>
  );
}
