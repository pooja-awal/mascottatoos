type Props = {
  children: React.ReactNode;
  className?: string;
};

/** White badge above section headings: orange plus, 12px/600 uppercase label. */
export default function SectionEyebrow({ children, className = "" }: Props) {
  return (
    <div
      className={`inline-flex h-8 items-center gap-2 bg-foreground py-2 pr-6 pl-3 text-xs leading-[14.4px] font-semibold text-background uppercase ${className}`}
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-accent" aria-hidden>
        <path
          d="M8 2v12M2 8h12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      {children}
    </div>
  );
}
