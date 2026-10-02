const img = (id, params = "auto=format&fit=crop&w=1100&q=78") =>
  `https://images.unsplash.com/${id}?${params}`;

export const projectCategories = [
  "Kitchen",
  "Wardrobe",
  "Bedroom",
  "Living Room",
  "TV Unit",
  "Office",
  "Custom Furniture",
  "Interior Fit-out",
];

export const categories = [
  {
    name: "Modular Kitchens",
    filter: "Kitchen",
    image: img("photo-1556912173-3bb406ef7e77"),
    alt: "Modern warm kitchen cabinetry with island",
  },
  {
    name: "Wardrobes",
    filter: "Wardrobe",
    image: img("photo-1616594039964-ae9021a400a0"),
    alt: "Elegant wardrobe and bedroom storage",
  },
  {
    name: "Bedrooms",
    filter: "Bedroom",
    image: img("photo-1618221195710-dd6b41faaea6"),
    alt: "Warm modern bedroom interior",
  },
  {
    name: "Living Rooms",
    filter: "Living Room",
    image: img("photo-1600210491892-03d54c0aaf87"),
    alt: "Contemporary living room with custom furniture",
  },
  {
    name: "TV Units",
    filter: "TV Unit",
    image: img("photo-1615873968403-89e068629265"),
    alt: "Custom living room television wall unit",
  },
  {
    name: "Office Furniture",
    filter: "Office",
    image: img("photo-1497366754035-f200968a6e72"),
    alt: "Modern office interior with fitted furniture",
  },
  {
    name: "Custom Furniture",
    filter: "Custom Furniture",
    image: img("photo-1618220179428-22790b461013"),
    alt: "Custom wood furniture in an interior setting",
  },
  {
    name: "Interior Fit-outs",
    filter: "Interior Fit-out",
    image: img("photo-1600607687939-ce8a6c25118c"),
    alt: "Completed interior fit-out with modern finishes",
  },
];
