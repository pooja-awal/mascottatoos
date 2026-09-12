import Link from "next/link";
import type { MouseEventHandler } from "react";

type Props = {
  size?: "sm" | "md";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
};

/** The single "Book Appointment" CTA style, reused everywhere it appears. */
export default function BookAppointmentButton({
  size = "md",
  className = "",
  onClick,
}: Props) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={`btn-sweep btn-sweep-outline inline-flex items-center justify-center border border-foreground bg-transparent font-semibold text-foreground transition-colors duration-300 ${sizeClasses[size]} ${className}`}
    >
      Book Appointment
    </Link>
  );
}
