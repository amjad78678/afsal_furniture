export default function SectionHeader({ eyebrow, title, text, align = "left", className = "" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-clay">{eyebrow}</p>}
      <h2 className="font-display text-4xl leading-none text-charcoal sm:text-5xl lg:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-charcoal/68 sm:text-lg">{text}</p>}
    </div>
  );
}
