import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Badge from "../ui/Badge";
import ResponsiveImage from "../media/ResponsiveImage";
import { getProjectMediaCount } from "../../services/projectService";

export default function ProjectCard({ project, large = false }) {
  const mediaCount = getProjectMediaCount(project);
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group block overflow-hidden rounded-sm bg-white shadow-soft transition duration-500 hover:-translate-y-1 active:scale-[0.985] ${
        large ? "lg:col-span-2" : ""
      }`}
    >
      <ResponsiveImage
        src={project.coverImage}
        alt={`${project.title} cover`}
        className={large ? "aspect-[16/10]" : "aspect-[4/3]"}
        imgClassName="transition duration-700 group-hover:scale-105"
      />
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge>{project.category}</Badge>
          {project.comparisons?.length > 0 && <Badge>Before & After</Badge>}
          <Badge>{mediaCount} Photos</Badge>
          {project.videos?.length > 0 && <Badge>{project.videos.length} Videos</Badge>}
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl leading-none text-charcoal">{project.title}</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-charcoal/50">
              {project.location} · {project.completedDate}
            </p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-clay transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="mt-4 leading-7 text-charcoal/64">{project.shortDescription}</p>
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-walnut">View Transformation</p>
      </div>
    </Link>
  );
}
