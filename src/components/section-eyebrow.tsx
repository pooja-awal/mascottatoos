type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Shared "eyebrow" label used above section headings: a white box, black text, and a plus icon. */
export default function SectionEyebrow({ children, className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-label border border-foreground bg-foreground px-4 py-2.5 text-xs text-background ${className}`}
    >
      <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0" aria-hidden>
        <rect x="5" y="0" width="2" height="12" fill="currentColor" />
        <rect x="0" y="5" width="12" height="2" fill="currentColor" />
      </svg>
      {children}
    </div>
  );
}
