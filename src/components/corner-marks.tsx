const CORNER_CLASSES = [
  "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
];

/**
 * 16px "+" crop marks centered on the corners of a framed card. Place inside
 * a `relative` wrapper that has the same box as the card.
 */
export default function CornerMarks({
  corners = [0, 1, 2, 3],
}: {
  corners?: number[];
}) {
  return (
    <>
      {corners.map((i) => (
        <svg
          key={i}
          viewBox="0 0 16 16"
          aria-hidden
          className={`pointer-events-none absolute z-10 h-4 w-4 text-foreground/70 ${CORNER_CLASSES[i]}`}
        >
          <path
            d="M8 1v14M1 8h14"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      ))}
    </>
  );
}
