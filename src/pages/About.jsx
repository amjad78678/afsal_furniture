import { useEffect } from "react";
import { categories } from "../data/categories";
import Button from "../components/ui/Button";
import ResponsiveImage from "../components/media/ResponsiveImage";
import { getWhatsAppUrl } from "../config/business";
import { setPageMeta } from "../utils/seo";

export default function About() {
  useEffect(() => setPageMeta({ title: "About", description: "Learn about Elegance Furniture's approach to furniture and interior fitting projects." }), []);

  return (
    <main className="bg-ivory">
      <section className="px-5 pb-20 pt-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">About Elegance</p>
            <h1 className="mt-4 font-display text-6xl leading-none text-charcoal sm:text-8xl">Built around the complete interior journey.</h1>
          </div>
          <p className="text-xl leading-9 text-charcoal/68">
            Elegance Furniture is presented as a modern furniture and interior fitting studio, focused on showing how every project moves from planning and delivery into careful installation and final finishing.
          </p>
        </div>
      </section>
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <ResponsiveImage src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=78" alt="Warm finished interior" className="aspect-[4/5] rounded-sm lg:col-span-2" />
          <div className="flex flex-col justify-end bg-charcoal p-8 text-ivory">
            <h2 className="font-display text-5xl">Our Approach</h2>
            <p className="mt-5 leading-8 text-ivory/68">
              The site is designed around transformation: before photographs, site delivery, fitting, finishing and the final reveal.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-porcelain px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-5xl text-charcoal">What We Create</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <div key={item.name} className="border border-charcoal/10 bg-white p-5">
                <p className="text-lg font-semibold text-charcoal">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl text-charcoal">Crafted with attention to sequence and detail.</h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/65">
            Each project can be documented through the moments customers care about: what arrived, how it was fitted and how the final space feels.
          </p>
          <Button href={getWhatsAppUrl()} className="mt-8">Start a Conversation</Button>
        </div>
      </section>
    </main>
  );
}
