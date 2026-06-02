import { Link } from "react-router-dom";
import { CONDITIONS } from "../data/conditions";

const FIND_CLINICS_HREF = "/peptide-therapy/denver-colorado";

export default function Conditions() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-14 md:pt-20">
          <span className="pill">Conditions</span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Peptide therapy by condition.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Different goals call for different peptides. Whether you're
            focused on weight, recovery, sleep, or healthy aging, this is the
            starting point for understanding how peptide therapy is used for
            specific conditions and goals, and for finding a verified clinic
            to guide you. Browse by goal below, then explore the options
            patients discuss with their providers.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-ink-muted">
            This page is educational. It explains what patients pursue
            peptide therapy for, not what you should take. The right peptide,
            if any, is always a clinical decision made with a licensed
            provider.
          </p>
          <Link to={FIND_CLINICS_HREF} className="btn-primary mt-7">
            Find verified clinics near you
          </Link>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-5 pb-20">
        <Section title="Browse by health goal">
          <p>
            Choose the goal that fits what you're looking for. Each links to
            a fuller guide on how peptide therapy is used for that condition
            and what to discuss with a provider.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {CONDITIONS.map((c) => (
              <Link
                key={c.slug}
                to={`/conditions/${c.slug}`}
                className="card group flex flex-col p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <p className="font-display text-lg font-semibold text-ink group-hover:text-accent-600">
                  {c.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {c.blurb}
                </p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent-600">
                  Read the guide →
                </span>
              </Link>
            ))}
          </div>
        </Section>

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
            Goals like sleep, cognitive function, gut health, sexual health,
            and hormone optimization each have their own associated peptides
            that a provider may discuss. The condition guides linked above
            go deeper on each.
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
            Any source offering peptides for these conditions without a
            prescription or oversight should be treated with caution.
          </p>
        </Section>

        <Section title="What to expect at a verified peptide clinic">
          <p>
            A first visit at a verified peptide clinic follows a consistent
            pattern no matter your goal. The provider reviews your health
            history and what you're trying to achieve, usually orders lab
            work to establish baselines, and determines whether peptide
            therapy is appropriate. From there they design any protocol
            around your individual needs and set a plan for monitoring and
            follow-up.
          </p>
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
            process matter so much. Discuss your specific situation with a
            qualified clinic.
          </Faq>
          <Faq q="Are these peptides FDA-approved?">
            It varies by compound. Some peptides have FDA approval for
            specific indications, while others are used off-label or are
            still under research. A provider can tell you the regulatory
            status of any peptide relevant to your goal and what that means
            for you.
          </Faq>
          <Faq q="How much does peptide therapy cost?">
            Peptide therapy is typically a cash-pay service not covered by
            insurance, and pricing varies by clinic, peptide, and protocol.
            Comparing verified clinics directly is the best way to
            understand what you're paying for.
          </Faq>
        </Section>

        <div className="mt-12 flex justify-center">
          <Link to={FIND_CLINICS_HREF} className="btn-primary">
            Find verified clinics near you
          </Link>
        </div>

        <p className="mt-10 text-center text-xs text-ink-muted">
          PeptideMaps is a directory service. We do not provide medical
          advice or treatment. Always consult a licensed provider.
        </p>
      </article>
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
