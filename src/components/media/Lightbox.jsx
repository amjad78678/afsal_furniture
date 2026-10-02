import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

export default function Lightbox({ images, index, setIndex, onClose }) {
  const image = images?.[index];

  useEffect(() => {
    if (!image) return undefined;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setIndex((index + 1) % images.length);
      if (event.key === "ArrowLeft") setIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [image, images, index, onClose, setIndex]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/94 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
      >
        <button aria-label="Close gallery" onClick={onClose} className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white">
          <X className="h-5 w-5" />
        </button>
        {images.length > 1 && (
          <button
            aria-label="Previous image"
            onClick={() => setIndex((index - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 rounded-full bg-white/10 p-3 text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        <motion.figure
          key={image.src}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-h-[86vh] max-w-6xl"
        >
          <img src={image.src} alt={image.alt} className="max-h-[78vh] w-full object-contain" />
          <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm text-white/78">
            <span>{image.alt}</span>
            <span>
              {index + 1} / {images.length}
            </span>
          </figcaption>
        </motion.figure>
        {images.length > 1 && (
          <button
            aria-label="Next image"
            onClick={() => setIndex((index + 1) % images.length)}
            className="absolute right-4 top-1/2 rounded-full bg-white/10 p-3 text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
