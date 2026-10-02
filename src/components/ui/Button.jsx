import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const variants = {
  primary: "bg-charcoal text-ivory hover:bg-umber",
  light: "bg-ivory text-charcoal hover:bg-white",
  outline: "border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  ghost: "text-charcoal hover:bg-charcoal/5",
};

export default function Button({
  children,
  href,
  to,
  variant = "primary",
  className = "",
  icon = true,
  ...props
}) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-walnut ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
