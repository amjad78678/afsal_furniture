import { CheckCircle2 } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";

const benefits = ["Custom Designs", "Quality Materials", "Professional Installation", "Attention to Detail", "Complete Project Execution", "Reliable Service"];

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal px-5 py-20 text-ivory lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader eyebrow="08 · Why Choose Elegance" title="Made to feel considered from start to finish." className="text-ivory [&_h2]:text-ivory [&_p]:text-ivory/64" />
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <div key={item} className="flex items-center gap-3 border border-white/10 bg-white/[0.03] p-5">
              <CheckCircle2 className="h-5 w-5 text-oak" />
              <span className="font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
