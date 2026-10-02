import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ResponsiveImage from "../media/ResponsiveImage";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const stageText = {
  before: ["01", "Before", "The original room or empty space before the fitting work begins."],
  shipment: ["02", "Furniture Arrives", "Packaged furniture, components and materials arrive at site for installation."],
  installation: ["03", "Installation Begins", "Cabinetry, panels and custom furniture are aligned, fitted and secured."],
  finishing: ["04", "Details Come Together", "Handles, trims, lighting and final adjustments bring precision to the work."],
  final: ["05", "Final Transformation", "The completed interior is revealed with every detail ready for everyday use."],
};

export default function TransformationStory({ project, preview = false }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const reduce = usePrefersReducedMotion();
  const stages = useMemo(() => buildStages(project), [project]);

  useEffect(() => {
    if (reduce || !containerRef.current) return undefined;
    const ctx = gsap.context(() => {
      stages.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `[data-stage="${index}"]`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [reduce, stages]);

  if (!stages.length) return null;
  const activeStage = stages[active] || stages[0];

  return (
    <section ref={containerRef} className={`${preview ? "bg-charcoal text-ivory" : "bg-porcelain text-charcoal"} px-5 py-20 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className={`mb-4 text-xs font-bold uppercase tracking-[0.28em] ${preview ? "text-oak" : "text-clay"}`}>The Transformation Story</p>
          <h2 className="font-display text-4xl leading-none sm:text-6xl">
            {preview ? "From Empty Space to Finished Interior" : "The Transformation Story"}
          </h2>
          <p className={`mt-5 leading-8 ${preview ? "text-ivory/68" : "text-charcoal/65"}`}>
            Follow the complete journey behind every installation, from the first room photograph to the final handover.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.2fr]">
          <aside className="hidden lg:sticky lg:top-28 lg:block lg:h-fit">
            <div className="space-y-4">
              {stages.map((stage, index) => (
                <button
                  key={stage.key}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`flex w-full items-center gap-4 border-l px-4 py-3 text-left transition ${
                    active === index
                      ? preview
                        ? "border-oak text-white"
                        : "border-walnut text-charcoal"
                      : preview
                        ? "border-white/12 text-white/45"
                        : "border-charcoal/12 text-charcoal/45"
                  }`}
                >
                  <span className="font-display text-3xl">{stage.number}</span>
                  <span className="text-sm font-bold uppercase tracking-[0.18em]">{stage.title}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 hidden overflow-hidden rounded-sm lg:block">
              <ResponsiveImage src={activeStage.image.src} alt={activeStage.image.alt} className="aspect-[4/5]" />
            </div>
          </aside>
          <div className="mobile-story-timeline space-y-8">
            {stages.map((stage, index) => (
              <motion.article
                key={stage.key}
                data-stage={index}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.58, delay: Math.min(index * 0.04, 0.18), ease: [0.22, 1, 0.36, 1] }}
                className={`mobile-story-stage grid gap-5 border-t pt-8 ${preview ? "border-white/10" : "border-charcoal/10"} sm:grid-cols-[0.25fr_1fr]`}
              >
                <span className="mobile-story-number font-display text-5xl text-clay">{stage.number}</span>
                <div>
                  <h3 className="font-display text-4xl">{stage.title}</h3>
                  <p className={`mt-3 max-w-2xl leading-8 ${preview ? "text-ivory/65" : "text-charcoal/64"}`}>{stage.description}</p>
                  <ResponsiveImage src={stage.image.src} alt={stage.image.alt} className="mt-6 aspect-[16/10] rounded-sm" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const buildStages = (project) =>
  [
    ["before", project.beforeImages?.[0]],
    ["shipment", project.shipmentImages?.[0]],
    ["installation", project.installationImages?.[0]],
    ["finishing", project.finishingImages?.[0]],
    ["final", project.finalImages?.[0]],
  ]
    .filter(([, image]) => image)
    .map(([key, image]) => {
      const [number, title, description] = stageText[key];
      return { key, number, title, description, image };
    });
