export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-charcoal/10 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/70">
      {children}
    </span>
  );
}
