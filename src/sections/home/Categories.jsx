import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResponsiveImage from "../../components/media/ResponsiveImage";
import SectionHeader from "../../components/ui/SectionHeader";
import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <section className="bg-porcelain px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="06 · Categories" title="Furniture for every part of the interior." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.48, delay: Math.min(index * 0.035, 0.18) }}
              whileTap={{ scale: 0.985 }}
            >
              <Link to={`/projects?category=${encodeURIComponent(category.filter)}`} className="group relative block overflow-hidden rounded-sm">
                <ResponsiveImage src={category.image} alt={category.alt} className="aspect-[4/5]" imgClassName="transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 font-display text-3xl leading-none text-white">{category.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
