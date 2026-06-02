import { Link } from "react-router-dom";

// "Find Clinics Near You" CTA — link DOWN to city pages.
// Default to /peptide-therapy/denver-colorado until a city picker exists.
const FIND_CLINICS_HREF = "/peptide-therapy/denver-colorado";

const GOALS = [
  {
    title: "Weight & metabolic",
    peptides: ["Semaglutide", "Tirzepatide"],
    href: "/conditions/weight-loss",
  },
  {
    title: "Recovery & repair",
    peptides: ["BPC-157"],
    href: "/conditions/recovery",
  },
  {
    title: "Anti-aging & longevity",
    peptides: ["Sermorelin", "NAD+"],
    href: "/conditions/anti-aging",
  },
  {
    title: "Sexual wellness",
    peptides: ["Physician protocols"],
    href: "/conditions/sexual-health",
  },
];

const PREP_ITEMS = [
  "Write down your primary goal and any symptoms or concerns",
  "Gather your relevant health history, current medications, and supplements",
  "Bring any recent lab work you already have",
  "Prepare questions about the provider's experience and monitoring approach",
];

export default function ForPatients() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:pt-20">
          <div className="grid items-start gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="pill">For patients</span>
              <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight text-ink md:text-7xl">
                Find a{" "}
                <span className="relative whitespace-nowrap">
                  verified
                  <span className="absolute inset-x-0 -bottom-1 -z-10 h-[6px] rounded bg-accent-200" />
                </span>{" "}
                peptide clinic near you.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                You've researched peptide therapy and you're ready to take the
                next step. This is the practical guide to actually getting
                started: how to tell if it's right for you, how to prepare
                for your first appointment, and how to find a clinic you can
                trust.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to={FIND_CLINICS_HREF} className="btn-primary">
                  Find clinics near you
                </Link>
                <Link
                  to="/conditions"
                  className="text-sm font-semibold text-accent-600 hover:text-accent-700"
                >
                  Browse by condition &rarr;
                </Link>
              </div>
            </div>

            <PatientHeroCard />
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="border-y border-ink/10 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-5 text-sm font-medium text-ink-soft md:grid-cols-3">
          <TrustBadge label="Free for patients" />
          <TrustBadge label="Every clinic verified" />
          <TrustBadge label="Book directly with the clinic" />
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 pb-20 pt-16">
        <Section title="Is peptide therapy right for you?">
          <p>
            Peptide therapy isn't for everyone, and a good provider will tell
            you so. It tends to suit people pursuing specific, defined goals
            like weight management, recovery support, or healthy aging, who
            are willing to work within a medically supervised plan that
            includes lab work and follow-up. It's less suited to anyone
            looking for a quick fix without oversight.
          </p>
          <p>
            The honest answer to whether it's right for you comes from a
            consultation, not a web page. A legitimate clinic evaluates your
            health history, your goals, and your labs before recommending
            anything. If you want the full background on how peptide therapy
            works before you book, start with our{" "}
            <Link
              to="/peptide-therapy"
              className="font-medium text-accent-600 underline-offset-4 hover:underline"
            >
              guide to peptide therapy
            </Link>
            .
          </p>
        </Section>

        <Section title="Peptide therapy by goal">
          <p>
            Most patients come to peptide therapy with one of a few goals in
            mind. Your goal shapes the conversation with your provider, but
            it doesn't determine your protocol on its own.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {GOALS.map((g) => (
              <Link
                key={g.title}
                to={g.href}
                className="card group p-5 transition hover:-translate-y-0.5 hover:border-accent-300"
              >
                <p className="font-display text-lg font-semibold text-ink group-hover:text-accent-700">
                  {g.title}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.peptides.map((p) => (
                    <span key={p} className="pill">
                      {p}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent-600">
                  Read the guide &rarr;
                </p>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="How patients use PeptideMaps">
          <p>
            PeptideMaps is free for patients. You search for peptide therapy
            in your city, compare verified clinics by credentials, services,
            and real patient reviews, and book a consultation directly
            through a calendar synced with the clinic's. No sorting through
            ads, no guessing which providers are legitimate.
          </p>
        </Section>

        <Section title="What does peptide therapy cost?">
          <p>
            Peptide therapy is typically a cash-pay service not covered by
            insurance, and pricing varies by clinic, peptide, and protocol.
            GLP-1 protocols are often billed monthly and may bundle
            medication, visits, and monitoring, while recovery and
            healthy-aging peptides are usually priced per protocol.
          </p>
          <p>
            Because the structures differ so much, comparing clinics directly
            is the best way to understand what you're paying for. For a
            fuller breakdown, see our{" "}
            <Link
              to="/peptide-therapy"
              className="font-medium text-accent-600 underline-offset-4 hover:underline"
            >
              main peptide therapy guide
            </Link>
            .
          </p>
        </Section>

        <Section title="How to prepare for your first appointment">
          <p>
            A little preparation makes your first consultation far more
            productive. Before you go:
          </p>
          <ol className="mt-5 space-y-3">
            {PREP_ITEMS.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-xl border border-ink/10 bg-white p-4"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-500 font-display text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-ink">{item}</span>
              </li>
            ))}
          </ol>
          <p>
            A good first appointment is a two-way evaluation. Your provider
            is assessing whether peptide therapy is appropriate for you, and
            you're assessing whether this is a clinic you trust. Be cautious
            of any provider ready to sell you peptides without that
            evaluation.
          </p>
        </Section>

        <Section title="Questions patients ask before their first appointment">
          <Faq q="Do I need a prescription for peptide therapy?">
            <p>
              Yes. Legitimate peptide therapy is prescribed and supervised by
              a licensed provider after an evaluation.{" "}
              <a
                href="https://www.fda.gov/drugs"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="font-medium text-accent-600 underline-offset-4 hover:underline"
              >
                Peptides are prescription treatments
              </a>
              , and any source offering them without a prescription or
              medical oversight should be treated with caution.
            </p>
          </Faq>
          <Faq q="How do I know if a clinic on PeptideMaps is legitimate?">
            <p>
              Every clinic on PeptideMaps is reviewed before it's listed,
              covering active medical licensing, compliant prescribing
              practices, and patient-safety standards. The verification badge
              means a provider has met that baseline.
            </p>
          </Faq>
          <Faq q="What's the difference between a peptide clinic and a telehealth provider?">
            <p>
              An in-person peptide clinic offers face-to-face evaluation,
              on-site labs in many cases, and direct physical oversight. A
              telehealth provider offers convenience and remote access. What
              matters is that whichever you choose operates legitimately,
              with proper evaluation, prescribing, and monitoring.
            </p>
          </Faq>
        </Section>

        {/* Final CTA */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-10 text-white">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-300">
            Ready when you are
          </span>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-white md:text-4xl">
            Find verified clinics near you.
          </h2>
          <p className="mt-3 max-w-2xl text-brand-100">
            Search your city to see verified peptide therapy providers.
            Compare credentials and reviews, then book directly.
          </p>
          <Link
            to={FIND_CLINICS_HREF}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-accent-400"
          >
            Find clinics near you
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

function PatientHeroCard() {
  return (
    <div className="card overflow-hidden p-0">
      <div className="bg-brand-700 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-accent-300">
        Find a clinic
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Your city
        </p>
        <div className="mt-2 flex items-center justify-between rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm">
          <span className="text-ink">Denver, Colorado</span>
          <span className="text-xs text-ink-muted">12 clinics</span>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Your goal
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Weight loss", "Recovery", "Anti-aging", "Sexual wellness"].map(
            (g, i) => (
              <span
                key={g}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  i === 0
                    ? "bg-accent-500 text-white"
                    : "bg-slate-50 text-ink-soft"
                }`}
              >
                {g}
              </span>
            ),
          )}
        </div>

        <div className="mt-6 border-t border-ink/10 pt-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Top result
          </p>
          <div className="mt-3 flex items-start gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-50 font-display text-sm font-semibold text-accent-700">
              FR
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-ink">
                Front Range Peptide Co.
              </p>
              <p className="text-xs text-ink-muted">Denver, CO</p>
              <p className="mt-0.5 text-xs">
                <span className="text-accent-500">★ 4.8</span>{" "}
                <span className="text-ink-muted">· 24 reviews</span>
              </p>
            </div>
          </div>
        </div>
      </div>
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
      <div className="border-t border-ink/5 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-ink-soft">
        {children}
      </div>
    </details>
  );
}
