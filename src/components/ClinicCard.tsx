import { Link } from "react-router-dom";
import type { Clinic } from "../data/clinics";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ClinicCard({ clinic }: { clinic: Clinic }) {
  return (
    <article className="card overflow-hidden">
      <div className="grid gap-6 p-6 md:grid-cols-[auto_1fr] md:items-center">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 font-display text-lg font-semibold text-brand-800">
          {initials(clinic.name)}
        </div>

        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {clinic.name}
          </p>
          <p className="text-sm text-ink-muted">
            Men's Health & Peptide Therapy Clinic
          </p>
          {clinic.rating && (
            <p className="mt-1 text-sm">
              <span className="text-accent-500">★</span>{" "}
              <span className="font-semibold text-ink">{clinic.rating.toFixed(1)}</span>{" "}
              <span className="text-ink-muted">· {clinic.reviewCount} reviews</span>
            </p>
          )}
          {clinic.address && (
            <p className="mt-1 text-sm text-ink-muted">{clinic.address}</p>
          )}
          <p className="mt-2 text-xs font-medium text-accent-600">
            Accepting new patients · Telehealth available
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/5 bg-slate-50 px-6 py-4">
        <div className="flex flex-wrap gap-1.5">
          {clinic.peptidesOffered.slice(0, 4).map((p) => (
            <span key={p} className="pill">
              {p}
            </span>
          ))}
          {clinic.peptidesOffered.length > 4 && (
            <span className="pill">+{clinic.peptidesOffered.length - 4} more</span>
          )}
        </div>
        <Link to={`/clinic/${clinic.slug}`} className="btn-primary text-xs">
          View clinic →
        </Link>
      </div>
    </article>
  );
}
