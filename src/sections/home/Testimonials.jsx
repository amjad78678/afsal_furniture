import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-ivory px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="09 · Client Notes" title="Demo testimonials ready to be replaced." text="These placeholder reviews keep the layout prepared for real customer feedback." />
        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.location}-${index}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.48, delay: Math.min(index * 0.06, 0.18) }}
              whileTap={{ scale: 0.985 }}
              className="min-w-[82vw] border border-charcoal/10 bg-white p-6 shadow-soft sm:min-w-[420px] lg:min-w-0"
            >
              <p className="text-lg leading-8 text-charcoal/70">“{item.review}”</p>
              <div className="mt-8 border-t border-charcoal/10 pt-5">
                <h3 className="font-bold text-charcoal">{item.name}</h3>
                <p className="text-sm uppercase tracking-[0.16em] text-charcoal/50">{item.projectType} · {item.location}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
