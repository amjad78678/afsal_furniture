import Button from "../../components/ui/Button";
import { getWhatsAppUrl } from "../../config/business";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-5 py-24 text-white lg:px-8">
      <img
        src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=78"
        alt="Elegant completed interior with custom furniture"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="font-display text-5xl leading-none sm:text-7xl">Planning Your Next Interior?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/74">
          Tell us about your space and the furniture you have in mind. Start the conversation directly through WhatsApp.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={getWhatsAppUrl()} variant="light">Chat on WhatsApp</Button>
          <Button to="/projects" variant="outline" className="border-white/35 text-white hover:bg-white hover:text-charcoal">Explore Projects</Button>
        </div>
      </div>
    </section>
  );
}
