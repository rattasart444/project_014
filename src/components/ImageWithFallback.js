"use client";

import { useState } from "react";

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackClassName = "",
  priority,
  ...props
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`bg-stone/10 flex items-center justify-center ${fallbackClassName}`}
        {...props}
      >
        <div className="text-center text-stone/40">

          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="mx-auto mb-2"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              ry="2"
            />

            <circle
              cx="8.5"
              cy="8.5"
              r="1.5"
            />

            <polyline points="21 15 16 10 5 21" />
          </svg>

          <span className="text-xs tracking-wider">
            LUNAR WATCH
          </span>

        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}