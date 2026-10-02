import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import Button from "../../components/ui/Button";
import { getWhatsAppUrl } from "../../config/business";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const heroImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1900&q=78";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const imageRef = useRef(null);
  const reduce = usePrefersReducedMotion();
  const scrollToIntro = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  useEffect(() => {
    if (reduce || !imageRef.current) return undefined;
    const tween = gsap.fromTo(imageRef.current, { scale: 1.08 }, { scale: 1, duration: 2.2, ease: "power2.out" });
    return () => tween.kill();
  }, [reduce]);

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-charcoal text-white">
      <img ref={imageRef} src={heroImage} alt="Premium completed interior with warm modern furniture" className="absolute inset-0 h-full w-full object-cover opacity-68" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-charcoal/25 to-charcoal/72" />
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-36 lg:px-8">
        <motion.p
          variants={reveal}
          initial={reduce ? false : "hidden"}
          animate="show"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 max-w-max border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/78"
        >
          Furniture & Interiors
        </motion.p>
        <motion.h1
          variants={reveal}
          initial={reduce ? false : "hidden"}
          animate="show"
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-display text-6xl leading-[0.88] sm:text-7xl lg:text-8xl"
        >
          Transforming Spaces. Crafting Timeless Interiors.
        </motion.h1>
        <motion.div
          variants={reveal}
          initial={reduce ? false : "hidden"}
          animate="show"
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="text-lg leading-8 text-white/76">
            From the first delivery to the final fitting, discover how Elegance Furniture transforms everyday spaces into beautifully crafted interiors.
          </p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button to="/projects" variant="light">Explore Our Work</Button>
            <Button href={getWhatsAppUrl()} variant="outline" className="border-white/35 text-white hover:bg-white hover:text-charcoal">
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
        <button
          type="button"
          onClick={scrollToIntro}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label="Scroll to introduction"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
