import Button from "./Button";

export default function EmptyState({ title = "Nothing to show yet", text, action }) {
  return (
    <div className="rounded-sm border border-charcoal/10 bg-white p-8 text-center shadow-soft">
      <h2 className="font-display text-3xl text-charcoal">{title}</h2>
      {text && <p className="mx-auto mt-3 max-w-xl text-charcoal/65">{text}</p>}
      {action && (
        <Button to={action.href} className="mt-6">
          {action.label}
        </Button>
      )}
    </div>
  );
}
