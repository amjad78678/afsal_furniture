import { Link } from "react-router-dom";
import { business, getWhatsAppUrl } from "../../config/business";
import { categories } from "../../data/categories";
import { navigation } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-16 text-ivory lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.35fr_0.7fr_0.8fr_1fr]">
        <div>
          <p className="font-display text-4xl">ELEGANCE</p>
          <p className="mt-1 text-xs uppercase tracking-[0.28em] text-ivory/70">{business.tagline}</p>
          <p className="mt-6 max-w-sm leading-7 text-ivory/64">
            Furniture and interior fitting work presented through the complete transformation journey.
          </p>
        </div>
        <FooterColumn title="Explore">
          {navigation.map((item) => (
            <Link key={item.href} to={item.href}>{item.label}</Link>
          ))}
        </FooterColumn>
        <FooterColumn title="Categories">
          {categories.slice(0, 6).map((item) => (
            <Link key={item.name} to={`/projects?category=${encodeURIComponent(item.filter)}`}>{item.name}</Link>
          ))}
        </FooterColumn>
        <FooterColumn title="Contact">
          <a href={getWhatsAppUrl()}>WhatsApp</a>
          {business.phone && <a href={`tel:${business.phone}`}>{business.phone}</a>}
          {business.email && <a href={`mailto:${business.email}`}>{business.email}</a>}
          {business.instagram && <a href={business.instagram}>Instagram</a>}
          {business.googleMapsUrl && <a href={business.googleMapsUrl}>Google Maps</a>}
          <span>{business.address || business.serviceArea}</span>
        </FooterColumn>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-ivory/54 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
        <span>Version 1 frontend portfolio.</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="flex flex-col gap-3 text-sm text-ivory/64">
      <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-ivory">{title}</h3>
      {children}
    </div>
  );
}
