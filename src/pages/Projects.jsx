import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectGrid from "../components/projects/ProjectGrid";
import { getProjects } from "../services/projectService";
import { setPageMeta } from "../utils/seo";

export default function Projects() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("category") || "All";
  const [filter, setFilter] = useState(initial);
  const projects = getProjects();

  useEffect(() => {
    setPageMeta({
      title: "Our Projects",
      description: "Explore complete furniture transformations from original spaces to delivery, installation and finished interiors.",
    });
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter, projects]);

  const onChange = (next) => {
    setFilter(next);
    if (next === "All") setParams({});
    else setParams({ category: next });
  };

  return (
    <main className="bg-ivory px-5 pb-20 pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">Our Projects</p>
          <h1 className="mt-4 font-display text-6xl leading-none text-charcoal sm:text-7xl">Complete furniture transformations.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-charcoal/66">
            Explore complete furniture transformations, from the original space and furniture delivery to installation and the finished interior.
          </p>
        </div>
        <div className="my-10">
          <ProjectFilters value={filter} onChange={onChange} />
        </div>
        <ProjectGrid projects={filtered} />
      </div>
    </main>
  );
}
