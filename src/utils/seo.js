import { business } from "../config/business";

export const setPageMeta = ({ title, description, image, url } = {}) => {
  const pageTitle = title ? `${title} | ${business.name}` : `${business.name} | ${business.tagline}`;
  const pageDescription =
    description ||
    "Explore complete furniture and interior transformations, from first delivery to final fitting.";

  document.title = pageTitle;
  upsertMeta("name", "description", pageDescription);
  upsertMeta("property", "og:title", pageTitle);
  upsertMeta("property", "og:description", pageDescription);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:url", url || window.location.href);
  if (image) upsertMeta("property", "og:image", image);
};

export const injectLocalBusinessJsonLd = () => {
  const id = "local-business-jsonld";
  document.getElementById(id)?.remove();
  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.tagline,
    telephone: business.phone || undefined,
    address: business.address || undefined,
    areaServed: business.serviceArea,
    url: window.location.origin,
    sameAs: [business.instagram, business.facebook, business.youtube].filter(Boolean),
  });
  document.head.appendChild(script);
};

const upsertMeta = (attr, key, content) => {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};
