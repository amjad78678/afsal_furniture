# Elegance Furniture

A V1 frontend portfolio website for a modern furniture and interior fitting company. It is built around the transformation story: before, shipment arrival, installation, finishing details and final transformation.

## Tech Stack

- React.js with Vite
- JavaScript only
- Tailwind CSS
- React Router
- Framer Motion
- GSAP ScrollTrigger
- Lucide React

## Installation

```bash
npm install
npm run dev
npm run build
```

## Folder Structure

```text
src/
  components/
  config/
  data/
  pages/
  sections/
  services/
  styles/
  utils/
```

## Editing Business Information

Update `src/config/business.js` for the business name, phone, WhatsApp number, email, Instagram, address, Google Maps URL and default WhatsApp message.

The WhatsApp number should be stored in international format without `+`, spaces or dashes. Example: `919999999999`.

## Updating Website Content

- Project data lives in `src/data/projects.js`.
- Categories live in `src/data/categories.js`.
- Stats live in `src/data/stats.js`.
- Testimonials live in `src/data/testimonials.js`.
- Navigation lives in `src/data/navigation.js`.

## Creating a Project

Add a new object to the array in `src/data/projects.js`. Keep the same shape:

```js
{
  slug: "my-project",
  title: "My Project",
  category: "Kitchen",
  location: "Kozhikode, Kerala",
  completedDate: "2026",
  featured: true,
  coverImage: "/images/projects/my-project/cover.jpg",
  heroImage: "/images/projects/my-project/final/01.jpg",
  details: {},
  beforeImages: [{ src: "/images/projects/my-project/before/01.jpg", alt: "Before installation" }],
  shipmentImages: [],
  installationImages: [],
  finishingImages: [],
  finalImages: [],
  videos: [],
  comparisons: []
}
```

## Replacing Demo Images

All demo Unsplash image URLs are inside data files. Replace them with local paths such as:

```text
/images/projects/modern-walnut-kitchen/final/01.jpg
```

Recommended future structure:

```text
public/
  images/
    hero/
    categories/
    projects/
      modern-walnut-kitchen/
        cover.jpg
        before/01.jpg
        shipment/01.jpg
        installation/01.jpg
        finishing/01.jpg
        final/01.jpg
```

## Adding Media

- Add before photos to `beforeImages`.
- Add shipment photos to `shipmentImages`.
- Add installation photos to `installationImages`.
- Add finishing photos to `finishingImages`.
- Add completed photos to `finalImages`.
- Add before/after sliders to `comparisons`.
- Add YouTube videos to `videos` using `youtubeId` or `youtubeUrl`.

Empty arrays are hidden automatically.

## Filters

The projects page reads `?category=Kitchen` from the URL. Homepage category cards link to `/projects` with this query parameter.

## Backend Later

Components consume `src/services/projectService.js` rather than importing the project array everywhere. Later, those service functions can be changed to call `/api/projects` without rewriting the customer-facing UI.

## Deployment

The project includes:

- `vercel.json` for Vercel React Router rewrites
- `netlify.toml` for Netlify redirects

Run `npm run build` before deployment.
