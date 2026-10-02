import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BeforeAfterSlider from "../components/media/BeforeAfterSlider";
import ImageGallery from "../components/media/ImageGallery";
import ResponsiveImage from "../components/media/ResponsiveImage";
import YouTubeEmbed from "../components/media/YouTubeEmbed";
import RelatedProjects from "../components/projects/RelatedProjects";
import ProjectWhatsAppCTA from "../components/projects/ProjectWhatsAppCTA";
import TransformationStory from "../components/transformation/TransformationStory";
import EmptyState from "../components/ui/EmptyState";
import { getProjectBySlug } from "../services/projectService";
import { setPageMeta } from "../utils/seo";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      setPageMeta({
        title: `${project.title} Installation`,
        description: `Explore the complete transformation of ${project.title}, including before photos, furniture delivery, installation and the completed interior.`,
        image: project.coverImage,
      });
    }
  }, [project]);

  if (!project) {
    return (
      <main className="bg-ivory px-5 py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <EmptyState title="Project Not Found" text="This transformation could not be found." action={{ href: "/projects", label: "Back to Projects" }} />
        </div>
      </main>
    );
  }

  const allFinal = project.finalImages || [];

  return (
    <main className="bg-ivory">
      <section className="relative min-h-[76svh] overflow-hidden bg-charcoal text-white">
        <ResponsiveImage src={project.heroImage} alt={`${project.title} completed interior`} loading="eager" className="absolute inset-0 h-full w-full opacity-68" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/35 to-charcoal/80" />
        <div className="relative z-10 mx-auto flex min-h-[76svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-8">
          <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white/75">
            <ArrowLeft className="h-4 w-4" /> Projects
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-oak">{project.category}</p>
          <h1 className="mt-4 max-w-5xl font-display text-6xl leading-none sm:text-8xl">{project.title}</h1>
          <p className="mt-5 text-lg text-white/72">{project.location} · Completed {project.completedDate}</p>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/72">{project.description}</p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(project.details).map(([key, value]) => (
            <div key={key} className="border border-charcoal/10 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">{label(key)}</p>
              <p className="mt-2 text-lg text-charcoal">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <TransformationStory project={project} />

      {project.comparisons?.length > 0 && (
        <section className="bg-ivory px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 font-display text-5xl text-charcoal">See the Difference</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {project.comparisons.map((comparison) => <BeforeAfterSlider key={comparison.title} {...comparison} />)}
            </div>
          </div>
        </section>
      )}

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ImageGallery title="Before Installation" images={project.beforeImages} />
        <ImageGallery title="Furniture Arrives" images={project.shipmentImages} />
        <ImageGallery title="Installation in Progress" images={project.installationImages} />
        <ImageGallery title="The Finishing Touches" images={project.finishingImages} />
      </div>

      {project.videos?.length > 0 && (
        <section className="bg-porcelain px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 font-display text-5xl text-charcoal">Project Videos</h2>
            <div className="grid gap-6">
              {project.videos.map((video) => <YouTubeEmbed key={video.title} video={video} />)}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ivory px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 font-display text-5xl text-charcoal">Completed Interior</h2>
          {allFinal[0] && <ResponsiveImage src={allFinal[0].src} alt={allFinal[0].alt} className="mb-5 aspect-[16/9] rounded-sm" />}
          <ImageGallery images={allFinal.slice(1)} />
        </div>
      </section>

      <ProjectWhatsAppCTA project={project} />
      <RelatedProjects project={project} />
    </main>
  );
}

const label = (value) => value.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
