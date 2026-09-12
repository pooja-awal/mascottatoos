const CORNER_CLASSES = [
  "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
];

/**
 * Decorative "+" crop marks for the corners of a framed photo. Place inside
 * a `relative` wrapper alongside the bordered image container. Each mark is
 * translated by half its own size so it stays centered on the exact corner
 * point regardless of font size.
 */
export default function CornerMarks() {
  return (
    <>
      {CORNER_CLASSES.map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={`pointer-events-none absolute z-10 text-3xl leading-none font-light text-foreground/70 ${pos}`}
        >
          +
        </span>
      ))}
    </>
  );
}
