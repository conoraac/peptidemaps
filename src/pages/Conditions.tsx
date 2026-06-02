import { Link } from "react-router-dom";
import { CONDITIONS } from "../data/conditions";

const FIND_CLINICS_HREF = "/peptide-therapy/denver-colorado";

export default function Conditions() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:pt-20">
          <div className="grid items-start gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="pill">Conditions</span>
              <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight text-ink md:text-7xl">
                Peptide therapy by{" "}
                <span className="relative whitespace-nowrap">
                  condition
                  <span className="absolute inset-x-0 -bottom-1 -z-10 h-[6px] rounded bg-accent-200" />
                </span>
                .
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Different goals call for different peptides. Whether you're
                focused on weight, recovery, sleep, or healthy aging, this
                is the starting point for understanding how peptide therapy
                is used for specific conditions and goals.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to={FIND_CLINICS_HREF} className="btn-primary">
                  Find verified clinics
                </Link>
                <a
                  href="#goals"
                  className="text-sm font-semibold text-accent-600 hover:text-accent-700"
                >
                  Browse all conditions &darr;
                </a>
              </div>
            </div>

            <PopularConditionsCard />
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

      <article id="goals" className="mx-auto max-w-6xl px-5 pb-20 pt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
          Browse by goal
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          Choose the goal that fits what you're looking for.
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Each links to a fuller guide on how peptide therapy is used for
          that condition and what to discuss with a provider.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((c, i) => (
            <Link
              key={c.slug}
              to={`/conditions/${c.slug}`}
              className="card group relative flex flex-col p-6 transition hover:-translate-y-0.5 hover:border-accent-300"
            >
              {i < 3 && (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent-700">
                  Popular
                </span>
              )}
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-700 font-display text-sm font-semibold text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-ink group-hover:text-accent-700">
                {c.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {c.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.peptides.map((p) => (
                  <span key={p} className="pill">
                    {p}
                  </span>
                ))}
              </div>
              <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-accent-600">
                Read the guide &rarr;
              </span>
            </Link>
          ))}
        </div>
      </article>

      <article className="mx-auto max-w-3xl px-5 pb-20">
        <Section title="How peptide therapy works for each condition">
          <p>
            Peptides are short chains of amino acids that act as signaling
            molecules in the body. Different peptides signal different
            processes, which is why peptide therapy is approached goal by
            goal rather than as a single treatment.
          </p>
          <p>
            For weight and metabolic goals, patients most often discuss GLP-1
            peptides like semaglutide and tirzepatide. For recovery and
            injury, the conversation often centers on peptides like BPC-157.
            For anti-aging and longevity, growth hormone peptides like
            sermorelin and protocols involving NAD+ come up frequently.
          </p>
          <p>
            What stays constant across every goal is the process: an
            evaluation, lab work where appropriate, a personalized plan, and
            ongoing monitoring. Peptide therapy is not a one-size-fits-all
            protocol.
          </p>
        </Section>

        <Section title="Are peptides prescribed for these conditions?">
          <p>
            Legitimate peptide therapy is prescribed and supervised by a
            licensed provider after an evaluation, regardless of the goal.
            Some peptides are FDA-approved for specific uses, while many are
            used off-label with less established evidence, and the
            regulatory picture varies from one compound to the next.
          </p>
          <p>
            This is why the starting point for any condition is a
            consultation, not a purchase. A provider determines whether a
            given peptide is appropriate for your goal and your health
            history, and whether peptide therapy makes sense for you at all.
          </p>
        </Section>

        <Section title="What to expect at a verified peptide clinic">
          {/* Mini 3-step */}
          <div className="mt-2 grid gap-3 md:grid-cols-3">
            {[
              ["Evaluation", "Provider reviews your health history, goals, and any prior labs."],
              ["Plan", "Personalized protocol designed around your individual needs."],
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
          <p>
            Every clinic on PeptideMaps is reviewed for licensing, compliant
            practices, and patient-safety standards before it's listed, so
            you can start that conversation with a provider you can trust.
          </p>
        </Section>

        <Section title="How to choose the right peptide for your goal">
          <p>
            The honest answer is that you don't choose alone. Choosing the
            right peptide is a clinical decision, made with a provider who
            weighs your goal against your full health picture. What you can
            do is come informed: know your primary goal, understand the
            general landscape for that goal using the condition guides here,
            and bring good questions to your consultation.
          </p>
          <p>
            Be skeptical of anyone, online or in person, who promises a
            specific peptide will deliver a specific result without
            evaluating you first. The right approach matches the peptide to
            the patient, not the other way around.
          </p>
        </Section>

        <Section title="Frequently asked questions">
          <Faq q="Is peptide therapy safe?">
            Safety depends on the specific peptide, the dose, and proper
            medical supervision. Some peptides are FDA-approved for specific
            uses, and many are used off-label with less established
            evidence. This is why a licensed provider and a consultation-first
            process matter so much.
          </Faq>
          <Faq q="Are these peptides FDA-approved?">
            It varies by compound. Some peptides have FDA approval for
            specific indications, while others are used off-label or are
            still under research. A provider can tell you the regulatory
            status of any peptide relevant to your goal.
          </Faq>
          <Faq q="How much does peptide therapy cost?">
            Peptide therapy is typically a cash-pay service not covered by
            insurance, and pricing varies by clinic, peptide, and protocol.
            Comparing verified clinics directly is the best way to
            understand what you're paying for.
          </Faq>
        </Section>

        {/* Final CTA */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-10 text-white">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-300">
            Find your clinic
          </span>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-white md:text-4xl">
            Compare verified clinics in your city.
          </h2>
          <p className="mt-3 max-w-2xl text-brand-100">
            See which clinics in your area offer the peptides relevant to
            your goal, and book directly with them.
          </p>
          <Link
            to={FIND_CLINICS_HREF}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-accent-400"
          >
            Find verified clinics
          </Link>
        </section>

        <p className="mt-10 text-center text-xs text-ink-muted">
          PeptideMaps is a directory service. We do not provide medical
          advice or treatment. Always consult a licensed provider.
        </p>
      </article>
    </div>
  );
}

function PopularConditionsCard() {
  const popular = CONDITIONS.slice(0, 4);
  return (
    <div className="card overflow-hidden p-0">
      <div className="bg-brand-700 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-accent-300">
        Most-asked-about conditions
      </div>
      <ul className="divide-y divide-ink/10">
        {popular.map((c, i) => (
          <li key={c.slug}>
            <Link
              to={`/conditions/${c.slug}`}
              className="flex items-center justify-between px-6 py-4 transition hover:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-50 font-display text-sm font-semibold text-accent-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-ink">
                    {c.short}
                  </p>
                  <p className="text-xs text-ink-muted">
                    {c.peptides.join(" · ")}
                  </p>
                </div>
              </div>
              <span className="text-ink-muted">&rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
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
    <section className="mt-14">
      <h2 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group mt-3 card overflow-hidden p-0">
      <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-display text-base font-semibold text-ink">
        {q}
        <span className="text-ink-muted transition group-open:rotate-45">+</span>
      </summary>
      <p className="border-t border-ink/5 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-ink-soft">
        {children}
      </p>
    </details>
  );
}
