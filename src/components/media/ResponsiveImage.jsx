import { useState } from "react";

export default function ResponsiveImage({ src, alt, className = "", imgClassName = "", loading = "lazy" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-oak/10 ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="flex h-full min-h-64 items-center justify-center bg-ivory p-6 text-center text-sm text-charcoal/55">
          Image temporarily unavailable
        </div>
      )}
    </div>
  );
}
