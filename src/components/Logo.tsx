import { Link } from "react-router-dom";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="PeptideMaps home">
      <img
        src="/logo.png"
        alt="PeptideMaps"
        className="h-8 w-auto md:h-9"
      />
    </Link>
  );
}
