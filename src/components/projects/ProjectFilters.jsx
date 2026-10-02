import { projectCategories } from "../../data/categories";

export default function ProjectFilters({ value, onChange }) {
  const filters = ["All", ...projectCategories];
  return (
    <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 py-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold uppercase tracking-[0.14em] transition ${
            value === filter ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/12 bg-white text-charcoal/70 hover:border-charcoal/40"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
