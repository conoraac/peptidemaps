import { useState } from "react";
import { Link } from "react-router-dom";
import FindClinicsWidget from "../components/FindClinicsWidget";
import { STATES, COLORADO_CITIES, citySlug } from "../data/states";
import { citiesWithClinicsByState } from "../data/clinics";

export default function TrtHub() {
  const [openState, setOpenState] = useState<string | null>("colorado");

  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-cream to-cream" />
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 md:pt-20">
          <span className="pill">Men's health · TRT</span>
          <h1 className="mt-5 font-display text-4xl tracking-tight text-ink md:text-5xl">
            Testosterone Replacement Therapy (TRT) Clinics
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            Find verified TRT and men's health clinics near you. Book a
            consultation directly.
          </p>

          <div className="mt-10 max-w-3xl">
            <FindClinicsWidget />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl tracking-tight text-ink">
          Browse TRT clinics by state
        </h2>
        <p className="mt-2 text-ink-muted">
          Expand a state to see cities with verified clinics.
        </p>

        <div className="mt-8 divide-y divide-ink/5 overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-card">
          {STATES.map((s) => {
            const isOpen = openState === s.slug;
            const isColorado = s.slug === "colorado";
            const cities = isColorado
              ? COLORADO_CITIES
              : citiesWithClinicsByState(s.slug);
            const linkedCities = new Set(citiesWithClinicsByState(s.slug));

            return (
              <div key={s.slug}>
                <button
                  onClick={() => setOpenState(isOpen ? null : s.slug)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-cream/70"
                >
                  <span className="font-display text-lg text-ink">{s.name}</span>
                  <span className="text-ink-muted">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="bg-cream/40 px-5 pb-6 pt-2">
                    {cities.length === 0 ? (
                      <p className="text-sm text-ink-muted">No clinics listed yet</p>
                    ) : (
                      <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:grid-cols-3">
                        {cities.map((city) => {
                          const hasLink = linkedCities.has(city);
                          return (
                            <li key={city}>
                              {hasLink ? (
                                <Link
                                  to={`/peptide-therapy/${citySlug(city, s.slug)}`}
                                  className="text-brand-700 underline-offset-4 hover:underline"
                                >
                                  {city}
                                </Link>
                              ) : (
                                <span className="text-ink-muted/70">{city}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
