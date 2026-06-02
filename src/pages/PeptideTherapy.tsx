import { useParams, Link } from "react-router-dom";
import {
  STATES,
  findStateBySlug,
  citySlug as makeCitySlug,
} from "../data/states";
import {
  clinicsByCity,
  clinicsByState,
  citiesWithClinicsByState,
  type Clinic,
} from "../data/clinics";
import ClinicCard from "../components/ClinicCard";
import FindClinicsWidget from "../components/FindClinicsWidget";
import NotFound from "./NotFound";

function parseSegment(segment: string) {
  const state = findStateBySlug(segment);
  if (state) return { mode: "state" as const, state };

  for (const s of STATES) {
    const suffix = `-${s.slug}`;
    if (segment.endsWith(suffix)) {
      const citySlug = segment.slice(0, -suffix.length);
      const city = citySlug
        .split("-")
        .map((p) => p[0]?.toUpperCase() + p.slice(1))
        .join(" ");
      return { mode: "city" as const, state: s, city, citySlug };
    }
  }
  return { mode: "unknown" as const };
}

export default function PeptideTherapy() {
  const { segment = "" } = useParams();
  const parsed = parseSegment(segment);

  if (parsed.mode === "unknown") {
    return <NotFound />;
  }

  if (parsed.mode === "state") {
    const stateClinics = clinicsByState(parsed.state.slug);
    const cities = citiesWithClinicsByState(parsed.state.slug);
    return (
      <div className="mx-auto max-w-6xl px-5 py-12">
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: parsed.state.name },
          ]}
        />
        <h1 className="mt-5 font-display text-4xl tracking-tight text-ink md:text-5xl">
          Peptide Therapy in {parsed.state.name}
        </h1>
        {stateClinics.length === 0 ? (
          <p className="mt-6 text-ink-muted">
            No clinics listed yet in {parsed.state.name}.
          </p>
        ) : (
          <ul className="mt-8 grid gap-2 text-sm md:grid-cols-2">
            {cities.map((city) => {
              const count = clinicsByCity(city, parsed.state.slug).length;
              return (
                <li key={city}>
                  <Link
                    to={`/peptide-therapy/${makeCitySlug(city, parsed.state.slug)}`}
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-accent-600 hover:bg-accent-50"
                  >
                    {city}
                    <span className="text-ink-muted">
                      ({count} {count === 1 ? "clinic" : "clinics"})
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  // city mode
  const { state, city, citySlug } = parsed;
  const baseClinics = clinicsByCity(city, state.slug);
  const isEnglewoodCO = city === "Englewood" && state.slug === "colorado";

  const dummyClinics: Clinic[] = isEnglewoodCO
    ? [
        {
          id: "d1",
          name: "Summit Men's Wellness",
          slug: "summit-mens-wellness-englewood",
          city: "Englewood",
          state: "Colorado",
          stateSlug: "colorado",
          peptidesOffered: ["TRT", "Sermorelin", "BPC-157"],
          status: "active",
          rating: 4.9,
          reviewCount: 42,
          address: "Englewood, CO",
          verified: true,
        },
        {
          id: "d2",
          name: "Front Range Hormone Health",
          slug: "front-range-hormone-health-englewood",
          city: "Englewood",
          state: "Colorado",
          stateSlug: "colorado",
          peptidesOffered: ["TRT", "Semaglutide", "Ipamorelin"],
          status: "active",
          rating: 4.8,
          reviewCount: 31,
          address: "Englewood, CO",
          verified: true,
        },
        {
          id: "d3",
          name: "Mile High Vitality Clinic",
          slug: "mile-high-vitality-clinic-englewood",
          city: "Englewood",
          state: "Colorado",
          stateSlug: "colorado",
          peptidesOffered: ["TRT", "BPC-157", "Tesamorelin"],
          status: "active",
          rating: 4.8,
          reviewCount: 58,
          address: "Englewood, CO",
          verified: true,
        },
      ]
    : [];

  const allClinics = [...baseClinics, ...dummyClinics];

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: state.name, to: `/peptide-therapy/${state.slug}` },
          { label: city },
        ]}
      />

      <h1 className="mt-5 font-display text-4xl tracking-tight text-ink md:text-5xl">
        {isEnglewoodCO
          ? `Testosterone Replacement Therapy in ${city}, ${state.name}`
          : `Peptide Therapy in ${city}, ${state.name}`}
      </h1>
      {isEnglewoodCO && (
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">
          Verified TRT and men's health clinics in {city}. Book a consultation
          directly.
        </p>
      )}

      {isEnglewoodCO && (
        <div className="mt-8 max-w-3xl">
          <FindClinicsWidget
            lockedLocationLabel={`${city}, ${state.name}`}
            lockedStateSlug={state.slug}
          />
          <p className="mt-3 text-sm text-ink-muted">
            {allClinics.length} verified clinics in {city}, {state.name}
          </p>
        </div>
      )}

      {allClinics.length === 0 ? (
        <p className="mt-8 text-ink-muted">No clinics listed yet in {city}.</p>
      ) : (
        <div className="mt-10 grid gap-5">
          {allClinics.map((c) => (
            <ClinicCard key={c.id} clinic={c} />
          ))}
        </div>
      )}

      {isEnglewoodCO && (
        <aside className="fixed bottom-4 right-4 z-30 hidden w-80 rounded-2xl border border-amber-300/40 bg-white p-5 shadow-card lg:block">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-700">
            Sponsored
          </p>
          <p className="mt-2 font-display text-base font-semibold text-ink">
            Cherry Creek Men's TRT & Hormone Clinic
          </p>
          <p className="mt-1 text-sm">
            <span className="text-accent-500">★ 4.9</span>{" "}
            <span className="text-ink-muted">· 38 reviews</span>
          </p>
          <p className="mt-1 text-sm text-ink-muted">Englewood, CO</p>
          <p className="mt-2 text-xs text-ink-soft">
            TRT · Hormone Optimization · Telehealth
          </p>
          <p className="mt-3 text-xs font-medium text-accent-600">Learn more →</p>
        </aside>
      )}
    </div>
  );
}

function Breadcrumb({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav className="text-sm text-ink-muted">
      {items.map((item, i) => (
        <span key={i}>
          {item.to ? (
            <Link to={item.to} className="hover:text-ink">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="px-2 text-ink-muted/60">/</span>}
        </span>
      ))}
    </nav>
  );
}
