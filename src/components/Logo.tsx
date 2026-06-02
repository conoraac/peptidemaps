import { Link } from "react-router-dom";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="16" cy="16" r="15" fill="#2b724f" />
        <path
          d="M10 10v12M10 10c4 0 6 2 6 4s-2 4-6 4M22 22V10l-4 6 4 6z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        PeptideMaps
      </span>
    </Link>
  );
}
