import { motion } from "framer-motion";
import { getWhatsAppUrl } from "../../config/business";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-soft-pulse fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f56] text-white shadow-[0_18px_42px_rgba(31,143,86,0.34)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f8f56] sm:bottom-7 sm:right-7"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />
    </motion.a>
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M16.01 3.2A12.68 12.68 0 0 0 5.15 22.42L3.53 28.8l6.53-1.54A12.69 12.69 0 1 0 16.01 3.2Zm0 22.96c-1.95 0-3.85-.55-5.48-1.6l-.39-.25-3.86.91.94-3.76-.26-.4a10.22 10.22 0 1 1 9.05 5.1Zm5.62-7.65c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}
