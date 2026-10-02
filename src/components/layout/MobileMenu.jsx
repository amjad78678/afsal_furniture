import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import Button from "../ui/Button";
import { getWhatsAppUrl } from "../../config/business";

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-charcoal text-ivory lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between px-5 py-5">
            <span className="font-display text-2xl">ELEGANCE</span>
            <button aria-label="Close menu" onClick={onClose} className="rounded-full border border-white/15 p-3">
              <X className="h-5 w-5" />
            </button>
          </div>
          <motion.nav
            className="flex flex-col gap-2 px-5 pt-10"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {navigation.map((item) => (
              <motion.div key={item.href} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                <NavLink to={item.href} onClick={onClose} className="block border-b border-white/10 py-5 font-display text-5xl">
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
            <Button href={getWhatsAppUrl()} variant="light" className="mt-8" onClick={onClose}>
              WhatsApp
            </Button>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
