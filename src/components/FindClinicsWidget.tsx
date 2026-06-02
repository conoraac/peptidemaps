import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { STATES } from "../data/states";

export const TREATMENTS = [
  "Testosterone Replacement Therapy (TRT)",
  "Weight Loss & Metabolic Health",
  "Recovery & Performance",
  "Growth Hormone & Anti-Aging",
  "Sexual Wellness",
];

type Props = {
  defaultStateName?: string;
  lockedLocationLabel?: string;
  lockedStateSlug?: string;
};

export default function FindClinicsWidget({
  defaultStateName = "Colorado",
  lockedLocationLabel,
  lockedStateSlug,
}: Props) {
  const navigate = useNavigate();
  const [treatment, setTreatment] = useState(TREATMENTS[0]);
  const [stateName, setStateName] = useState(defaultStateName);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lockedStateSlug) {
      navigate(`/peptide-therapy/${lockedStateSlug}`);
      return;
    }
    const slug = STATES.find((s) => s.name === stateName)?.slug ?? "colorado";
    navigate(`/peptide-therapy/${slug}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="card flex flex-col gap-3 p-4 md:flex-row md:items-end md:gap-3"
    >
      <div className="flex-1">
        <label className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Treatment
        </label>
        <select
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          className="field mt-1"
        >
          {TREATMENTS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Location
        </label>
        {lockedLocationLabel ? (
          <div className="field mt-1 bg-slate-50">{lockedLocationLabel}</div>
        ) : (
          <select
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
            className="field mt-1"
          >
            {STATES.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
          </select>
        )}
      </div>

      <button type="submit" className="btn-primary md:self-stretch">
        Find clinics
      </button>
    </form>
  );
}
