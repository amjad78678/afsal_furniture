import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { business, getWhatsAppUrl } from "../../config/business";
import { navigation } from "../../data/navigation";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${
          solid ? "border-b border-charcoal/10 bg-ivory/92 shadow-sm backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className={`${solid ? "text-charcoal" : "text-white"} transition`}>
            <span className="block font-display text-2xl leading-none tracking-[0.08em]">ELEGANCE</span>
            <span className="text-xs uppercase tracking-[0.28em]">{business.tagline}</span>
          </Link>
          <nav className={`hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.16em] lg:flex ${solid ? "text-charcoal" : "text-white"}`}>
            {navigation.map((item) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => `transition hover:opacity-70 ${isActive ? "opacity-100" : "opacity-78"}`}>
                {item.label}
              </NavLink>
            ))}
            <Button href={getWhatsAppUrl()} variant={solid ? "primary" : "light"} className="px-4 py-2">
              WhatsApp
            </Button>
          </nav>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`rounded-full border p-3 lg:hidden ${solid ? "border-charcoal/15 text-charcoal" : "border-white/25 text-white"}`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
