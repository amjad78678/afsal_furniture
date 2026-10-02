import { getWhatsAppUrl } from "../../config/business";
import Button from "../ui/Button";

export default function ProjectWhatsAppCTA({ project }) {
  const message = `Hi Elegance Furniture,\n\nI saw your "${project.title}" project on your website.\n\nI'm interested in doing something similar for my space.\n\nCould you please share more details?`;
  return (
    <section className="bg-charcoal px-5 py-16 text-ivory lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-oak">Interested in Something Similar?</p>
          <h2 className="mt-3 font-display text-4xl">Discuss this transformation for your space.</h2>
        </div>
        <Button href={getWhatsAppUrl(message)} variant="light">Discuss This Project</Button>
      </div>
    </section>
  );
}
