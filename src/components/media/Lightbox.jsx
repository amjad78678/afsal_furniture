import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Lightbox({ images, index, setIndex, onClose }) {
  const image = images?.[index];

  useEffect(() => {
    if (!image) return undefined;
    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setIndex((index + 1) % images.length);
      if (event.key === "ArrowLeft") setIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [image, images, index, onClose, setIndex]);

  if (!image) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex min-h-[100dvh] items-center justify-center bg-charcoal/96 px-3 py-5 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <button
          aria-label="Close gallery"
          type="button"
          onClick={onClose}
          className="fixed right-3 top-3 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white text-charcoal shadow-soft ring-1 ring-charcoal/10 sm:right-5 sm:top-5"
        >
          <X className="h-5 w-5" />
        </button>
        {images.length > 1 && (
          <button
            aria-label="Previous image"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIndex((index - 1 + images.length) % images.length);
            }}
            className="fixed bottom-5 left-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/20 sm:bottom-auto sm:left-5 sm:top-1/2"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        <motion.figure
          key={image.src}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.18 }}
          onClick={(event) => event.stopPropagation()}
          className="flex max-h-[calc(100dvh-6.5rem)] w-full max-w-6xl flex-col items-center justify-center"
        >
          <img src={image.src} alt={image.alt} className="max-h-[calc(100dvh-10rem)] w-full object-contain" />
          <figcaption className="mt-3 flex w-full max-w-4xl items-center justify-between gap-4 px-1 text-xs leading-5 text-white/78 sm:text-sm">
            <span className="line-clamp-2">{image.alt}</span>
            <span className="shrink-0">
              {index + 1} / {images.length}
            </span>
          </figcaption>
        </motion.figure>
        {images.length > 1 && (
          <button
            aria-label="Next image"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIndex((index + 1) % images.length);
            }}
            className="fixed bottom-5 right-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/20 sm:bottom-auto sm:right-5 sm:top-1/2"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
