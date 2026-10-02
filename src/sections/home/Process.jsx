import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";

const steps = ["Consultation", "Planning & Design", "Furniture Preparation", "Shipment & Delivery", "Installation & Fitting", "Final Handover"];

export default function Process() {
  return (
    <section className="bg-ivory px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="05 · Our Process" title="Clear stages. Careful execution." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              className="border border-charcoal/10 bg-white p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="font-display text-5xl text-clay">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-lg font-bold uppercase tracking-[0.16em] text-charcoal">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
