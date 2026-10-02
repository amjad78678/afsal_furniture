import projects from "../data/projects";

export const getProjects = () => projects;

export const getFeaturedProjects = () => projects.filter((project) => project.featured);

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

export const getRelatedProjects = (project, limit = 3) =>
  projects
    .filter((item) => item.slug !== project.slug && item.category === project.category)
    .concat(projects.filter((item) => item.slug !== project.slug && item.category !== project.category))
    .slice(0, limit);

export const getProjectMediaCount = (project) =>
  [
    project.beforeImages,
    project.shipmentImages,
    project.installationImages,
    project.finishingImages,
    project.finalImages,
  ].reduce((total, group) => total + (group?.length || 0), 0);
