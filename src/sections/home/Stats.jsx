import { useEffect, useRef, useState } from "react";
import { stats } from "../../data/stats";

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start;
      const tick = (time) => {
        start ||= time;
        const progress = Math.min((time - start) / 900, 1);
        setCount(Math.round(value * progress));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="bg-porcelain px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="border-l border-charcoal/12 pl-5">
            <p className="font-display text-6xl text-charcoal"><Counter value={item.value} suffix={item.suffix} /></p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-charcoal/55">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
