import { Link, useParams } from "react-router-dom";
import { findCondition, CONDITIONS } from "../data/conditions";
import NotFound from "./NotFound";

const FIND_CLINICS_HREF = "/peptide-therapy/denver-colorado";

export default function ConditionDetail() {
  const { slug = "" } = useParams();
  const condition = findCondition(slug);
  if (!condition) return <NotFound />;

  const others = CONDITIONS.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <div>
      <section className="relative">
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-12 md:pt-16">
          <nav className="text-sm text-ink-muted">
            <Link to="/" className="hover:text-ink">Home</Link>
            <span className="px-2">/</span>
            <Link to="/conditions" className="hover:text-ink">Conditions</Link>
            <span className="px-2">/</span>
            <span className="text-ink">{condition.short}</span>
          </nav>

          <span className="pill mt-5">Condition guide</span>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] tracking-tight text-ink md:text-6xl">
            {condition.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            {condition.blurb}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {condition.peptides.map((p) => (
              <span key={p} className="pill">
                {p}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to={FIND_CLINICS_HREF} className="btn-primary">
              Find verified clinics
            </Link>
            <Link
              to="/conditions"
              className="text-sm font-semibold text-accent-600 hover:text-accent-700"
            >
              See all conditions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="border-y border-ink/10 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-5 text-sm font-medium text-ink-soft md:grid-cols-3">
          <TrustBadge label="Educational · not medical advice" />
          <TrustBadge label="Provider-supervised therapy only" />
          <TrustBadge label="Verified clinics only" />
        </div>
      </section>

      <article className="mx-auto max-w-6xl px-5 pb-20 pt-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          {/* Main column */}
          <div>
            <div className="rounded-2xl border border-amber-300/30 bg-amber-50/50 p-5 text-sm text-amber-900">
              <p className="font-semibold">Placeholder content</p>
              <p className="mt-1 text-amber-900/80">
                Stub for the {condition.name} guide. Long-form copy hasn't
                landed yet — the route, breadcrumb, peptide pills, and CTAs
                are all live and ready.
              </p>
            </div>

            <Section title="What patients discuss with their provider">
              <p>
                Patients pursuing{" "}
                <span className="font-medium text-ink">
                  {condition.short.toLowerCase()}
                </span>{" "}
                goals often start by talking through one of the following
                peptides with their provider. Whether any of these are
                appropriate for you depends on your full clinical picture
                and a proper evaluation.
              </p>

              <div className="mt-6 space-y-3">
                {condition.peptides.map((p) => (
                  <div
                    key={p}
                    className="flex items-start gap-4 rounded-xl border border-ink/10 bg-white p-4"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-50 font-display text-sm font-semibold text-accent-700">
                      {p
                        .split(/[-\s]/)
                        .map((s) => s[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </div>
                    <div>
                      <p className="font-display text-base font-semibold text-ink">
                        {p}
                      </p>
                      <p className="text-xs text-ink-muted">
                        Frequently discussed for {condition.short.toLowerCase()}.
                        Ask a verified provider about clinical evidence,
                        dosing, and monitoring for your case.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="What to expect at a verified peptide clinic">
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  ["Evaluation", "Health history, goals, and any prior labs reviewed."],
                  ["Plan", "Personalized protocol designed around your needs."],
                  ["Monitoring", "Ongoing follow-up and adjustment based on response."],
                ].map(([t, body], i) => (
                  <div key={t} className="card p-5">
                    <p className="font-display text-2xl font-semibold text-accent-500">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-display text-base font-semibold text-ink">
                      {t}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Before you book">
              <ul className="space-y-2 text-sm text-ink-soft">
                {[
                  "Write down your primary goal and any symptoms",
                  "Note any current medications or supplements",
                  "Bring any recent lab work you already have",
                  "Prepare questions about clinical evidence and monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="md:sticky md:top-24 md:self-start">
            <div className="card overflow-hidden p-0">
              <div className="bg-brand-700 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-accent-300">
                Discuss with a provider
              </div>
              <div className="p-6">
                <p className="font-display text-lg font-semibold text-ink">
                  Ready to start the conversation?
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Find a verified clinic that offers protocols relevant to{" "}
                  {condition.short.toLowerCase()} in your city.
                </p>
                <Link
                  to={FIND_CLINICS_HREF}
                  className="btn-primary mt-5 w-full"
                >
                  Find clinics
                </Link>
              </div>
            </div>

            <div className="card mt-4 overflow-hidden p-0">
              <div className="border-b border-ink/10 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-ink-muted">
                Other conditions
              </div>
              <ul className="divide-y divide-ink/10">
                {others.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/conditions/${c.slug}`}
                      className="flex items-center justify-between px-6 py-3 transition hover:bg-slate-50"
                    >
                      <span className="text-sm font-medium text-ink">
                        {c.short}
                      </span>
                      <span className="text-ink-muted">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <p className="mt-12 text-center text-xs text-ink-muted">
          PeptideMaps is a directory service. We do not provide medical
          advice or treatment. Always consult a licensed provider.
        </p>
      </article>
    </div>
  );
}

function TrustBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-500/10 text-sm text-accent-600">
        ✓
      </span>
      <span>{label}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}
