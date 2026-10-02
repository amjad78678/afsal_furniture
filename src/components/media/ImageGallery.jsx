import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ResponsiveImage from "./ResponsiveImage";
import Lightbox from "./Lightbox";

export default function ImageGallery({ images = [], title }) {
  const [index, setIndex] = useState(null);
  const [canOpenLightbox, setCanOpenLightbox] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setCanOpenLightbox(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!images.length) return null;

  return (
    <section className="py-14">
      {title && <h2 className="mb-7 font-display text-4xl text-charcoal">{title}</h2>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((item, itemIndex) => (
          <motion.div
            key={`${item.src}-${itemIndex}`}
            role={canOpenLightbox ? "button" : undefined}
            tabIndex={canOpenLightbox ? 0 : undefined}
            onClick={() => canOpenLightbox && setIndex(itemIndex)}
            onKeyDown={(event) => {
              if (canOpenLightbox && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                setIndex(itemIndex);
              }
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: Math.min(itemIndex * 0.04, 0.2) }}
            whileTap={canOpenLightbox ? { scale: 0.985 } : undefined}
            className={`${itemIndex % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""} group text-left ${
              canOpenLightbox ? "cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-walnut" : ""
            }`}
            aria-label={canOpenLightbox ? `Open ${item.alt}` : undefined}
          >
            <ResponsiveImage
              src={item.src}
              alt={item.alt}
              className={`${itemIndex % 5 === 0 ? "aspect-[4/3]" : "aspect-[5/4]"} rounded-sm`}
              imgClassName="transition duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
      {canOpenLightbox && index !== null && <Lightbox images={images} index={index} setIndex={setIndex} onClose={() => setIndex(null)} />}
    </section>
  );
}
