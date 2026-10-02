export const business = {
  name: "Elegance Furniture",
  tagline: "Furniture & Interiors",
  phone: "+917306149125",
  whatsapp: "917306149125",
  email: "",
  instagram: "",
  facebook: "",
  youtube: "",
  address: "",
  serviceArea: "Kerala",
  googleMapsUrl: "",
  locationEmbedUrl: "",
  defaultWhatsAppMessage:
    "Hi Elegance Furniture, I found your website and would like to know more about your furniture and interior services.",
};

export const getWhatsAppUrl = (message = business.defaultWhatsAppMessage) => {
  const number = business.whatsapp || business.phone || "";
  const encodedMessage = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${encodedMessage}` : `https://wa.me/?text=${encodedMessage}`;
};
