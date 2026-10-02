import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import EmptyState from "../ui/EmptyState";

export default function ProjectGrid({ projects }) {
  if (!projects.length) {
    return <EmptyState title="No projects in this category yet" text="Try another filter or explore all transformations." />;
  }

  return (
    <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence>
        {projects.map((project, index) => (
          <motion.div
            layout
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
          >
            <ProjectCard project={project} large={index % 7 === 0} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
