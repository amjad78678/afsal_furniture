import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import BeforeAfterSlider from "../../components/media/BeforeAfterSlider";
import SectionHeader from "../../components/ui/SectionHeader";
import { getFeaturedProjects } from "../../services/projectService";

export default function TransformationShowcase() {
  const projects = getFeaturedProjects().slice(0, 3);
  return (
    <section className="bg-ivory px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="03 · Transformations" title="See the Transformation" text="Drag across each image to compare the original space with the completed interior." />
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => {
            const comparison = project.comparisons[0];
            return (
              <article key={project.slug} className="group">
                <BeforeAfterSlider {...comparison} />
                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-walnut transition hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-walnut"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
