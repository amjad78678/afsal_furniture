import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({ children, className = "", delay = 0, ...props }) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      className={className}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
