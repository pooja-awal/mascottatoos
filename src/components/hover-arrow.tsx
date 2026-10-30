/**
 * 24px arrow that, inside a `group`, slides out to the left on hover while a
 * second copy slides in from the right (the reference's card arrow).
 */
export default function HoverArrow() {
  return (
    <span className="relative block h-6 w-6 shrink-0 overflow-hidden" aria-hidden>
      <span className="flex w-[58px] gap-[10px] transition-transform duration-300 ease-out group-hover:-translate-x-[34px]">
        {[0, 1].map((i) => (
          <svg key={i} viewBox="0 0 24 24" className="h-6 w-6 shrink-0">
            <path
              d="M7 12h10m-4-4 4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        ))}
      </span>
    </span>
  );
}
