import { Armchair } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-5 pt-20 text-charcoal" role="status" aria-live="polite">
      <div className="text-center">
        <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
          <span className="furniture-loader-ring absolute inset-0 rounded-full border border-walnut/20" />
          <span className="furniture-loader-ring furniture-loader-ring-delay absolute inset-3 rounded-full border border-oak/35" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-charcoal text-ivory shadow-soft">
            <Armchair className="furniture-loader-chair h-8 w-8" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-7 font-display text-3xl leading-none">Preparing the space</p>
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.28em] text-clay">
          Crafting interiors<span className="loading-dots" aria-hidden="true" />
        </p>
        <span className="sr-only">Loading Elegance Furniture content</span>
      </div>
    </div>
  );
}
