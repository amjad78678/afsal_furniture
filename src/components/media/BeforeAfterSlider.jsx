import { useRef, useState } from "react";
import { ArrowLeftRight } from "lucide-react";

export default function BeforeAfterSlider({ before, after, beforeAlt, afterAlt, title }) {
  const ref = useRef(null);
  const [position, setPosition] = useState(50);
  const [touched, setTouched] = useState(false);

  const update = (clientX) => {
    const box = ref.current.getBoundingClientRect();
    const next = ((clientX - box.left) / box.width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
    setTouched(true);
  };

  return (
    <div>
      {title && <h3 className="mb-4 font-display text-2xl text-charcoal">{title}</h3>}
      <div
        ref={ref}
        className="group relative aspect-[4/3] cursor-grab touch-none select-none overflow-hidden rounded-sm bg-charcoal shadow-soft active:cursor-grabbing sm:aspect-[16/10]"
        onPointerDown={(event) => {
          event.preventDefault();
          event.currentTarget.setPointerCapture(event.pointerId);
          update(event.clientX);
        }}
        onPointerMove={(event) => {
          if (event.buttons === 1) {
            event.preventDefault();
            update(event.clientX);
          }
        }}
      >
        <img src={after} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={before} alt={beforeAlt} className="h-full w-full max-w-none object-cover" loading="lazy" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-charcoal/78 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-charcoal">
          After
        </span>
        {!touched && (
          <span className="absolute bottom-4 left-1/2 max-w-[calc(100%-2rem)] -translate-x-1/2 whitespace-nowrap rounded-full bg-white/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal sm:px-4 sm:text-xs sm:tracking-[0.16em]">
            Drag to compare
          </span>
        )}
        <input
          aria-label="Before and after comparison position"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => {
            setPosition(Number(event.target.value));
            setTouched(true);
          }}
          className="sr-only"
        />
        <div className="absolute inset-y-0 w-px bg-white" style={{ left: `${position}%` }} />
        <div
          className={`absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-charcoal/80 text-white shadow-lg ${
            touched ? "" : "before-after-handle-hint"
          }`}
          style={{ left: `${position}%` }}
        >
          <ArrowLeftRight className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
