import { motion } from "framer-motion";
import ResponsiveImage from "../../components/media/ResponsiveImage";
import SectionHeader from "../../components/ui/SectionHeader";
import { getProjects } from "../../services/projectService";

export default function RecentInstallations() {
  const images = getProjects().flatMap((project) => [project.finalImages[0], project.installationImages[0], project.finishingImages[0]].filter(Boolean)).slice(0, 9);
  return (
    <section className="bg-ivory px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="07 · Recent Installations" title="A closer look at work in progress and finished rooms." />
        <div className="mt-10 grid auto-rows-[180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((item, index) => (
            <motion.div
              key={`${item.src}-${index}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.48, delay: Math.min(index * 0.035, 0.18) }}
              className={index % 6 === 0 ? "row-span-2 sm:col-span-2" : ""}
            >
              <ResponsiveImage src={item.src} alt={item.alt} className="h-full rounded-sm" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
