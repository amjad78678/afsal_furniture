import { getRelatedProjects } from "../../services/projectService";
import ProjectCard from "./ProjectCard";

export default function RelatedProjects({ project }) {
  const related = getRelatedProjects(project);
  if (!related.length) return null;
  return (
    <section className="bg-ivory px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 font-display text-4xl text-charcoal">You May Also Like</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => <ProjectCard key={item.slug} project={item} />)}
        </div>
      </div>
    </section>
  );
}
