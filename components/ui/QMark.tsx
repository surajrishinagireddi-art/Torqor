import React from "react";

/**
 * Renders the official TORQOR Q logo-mark image.
 * Uses mix-blend-mode:screen so the black background of the JPEG
 * disappears on every dark surface.
 *
 * Pass `height` as an em string (e.g. "0.87em") to keep it
 * proportional to whatever font-size the parent uses.
 */
interface QMarkProps {
  /** Height relative to surrounding font-size, e.g. "0.87em" */
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  /** set to true for decorative/background instances */
  decorative?: boolean;
}

export default function QMark({
  height = "0.87em",
  className,
  style,
  decorative = false,
}: QMarkProps) {
  return (
    <img
      src="/q-mark.png"
      alt={decorative ? "" : "Q"}
      aria-hidden={decorative}
      className={className}
      style={{
        height,
        width: "auto",
        display: "block",
        flexShrink: 0,
        ...style,
      }}
    />
  );
}
