import Link from "next/link";
import type { MouseEventHandler } from "react";

type Props = {
  size?: "sm" | "md";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
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
      className={`btn ${size === "sm" ? "btn-sm" : "btn-lg"} ${className}`}
    >
      Book Appointment
    </Link>
  );
}
