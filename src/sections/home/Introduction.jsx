import AnimatedSection from "../../components/ui/AnimatedSection";

export default function Introduction() {
  return (
    <AnimatedSection id="intro" className="bg-ivory px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.6fr_1.2fr]">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">01 · Our Approach</p>
        <div>
          <h2 className="font-display text-5xl leading-none text-charcoal sm:text-7xl">
            Furniture is more than the finished result.
          </h2>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-charcoal/68">
            At Elegance Furniture, every project begins with an empty space and moves through preparation, delivery, installation and meticulous finishing before becoming a completed interior.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
