import { Link, useParams } from "react-router-dom";
import { findCondition, CONDITIONS } from "../data/conditions";
import NotFound from "./NotFound";

const FIND_CLINICS_HREF = "/peptide-therapy/denver-colorado";

export default function ConditionDetail() {
  const { slug = "" } = useParams();
  const condition = findCondition(slug);
  if (!condition) return <NotFound />;

  const others = CONDITIONS.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <div>
      <section className="relative">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-12 md:pt-16">
          <nav className="text-sm text-ink-muted">
            <Link to="/" className="hover:text-ink">Home</Link>
            <span className="px-2">/</span>
            <Link to="/conditions" className="hover:text-ink">Conditions</Link>
            <span className="px-2">/</span>
            <span className="text-ink">{condition.name}</span>
          </nav>

          <h1 className="mt-5 font-display text-4xl tracking-tight text-ink md:text-5xl">
            {condition.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            {condition.blurb}
          </p>
          <Link to={FIND_CLINICS_HREF} className="btn-primary mt-7">
            Find verified clinics near you
          </Link>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 pb-20">
        <div className="mt-10 rounded-2xl border border-amber-300/30 bg-amber-50/40 p-5 text-sm text-amber-900">
          <p className="font-semibold">Placeholder content</p>
          <p className="mt-1 text-amber-900/80">
            This is a stub for the {condition.name} condition guide. The full
            page copy hasn't been written yet — drop the long-form content
            into <code>src/pages/ConditionDetail.tsx</code> (or split it out
            per slug) when ready. The route, breadcrumb, and CTA already
            work.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-ink">
            What patients discuss with their provider
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Generic placeholder paragraph. Replace with the full guide for
            {" "}
            {condition.name.toLowerCase()}: how peptide therapy is approached
            for this goal, which compounds patients ask about most often,
            and what to discuss with a licensed provider during your
            consultation.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl text-ink">
            Explore other conditions
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/conditions/${c.slug}`}
                className="card p-4 text-sm text-ink-soft transition hover:-translate-y-0.5"
              >
                <p className="font-display text-base font-semibold text-ink">
                  {c.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <Link to={FIND_CLINICS_HREF} className="btn-primary">
            Find verified clinics near you
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-ink-muted">
          PeptideMaps is a directory service. We do not provide medical
          advice or treatment. Always consult a licensed provider.
        </p>
      </article>
    </div>
  );
}
