import { Link } from "react-router-dom";

// "Find Clinics Near You" CTA — link DOWN to city pages.
// Default to /peptide-therapy/denver-colorado until a city picker exists.
const FIND_CLINICS_HREF = "/peptide-therapy/denver-colorado";

export default function ForPatients() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-14 md:pt-20">
          <span className="pill">For patients</span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Find a verified peptide therapy clinic near you.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            You've researched peptide therapy and you're ready to take the
            next step. This page is the practical guide to actually getting
            started: how to tell if peptide therapy is right for you, how to
            prepare for your first appointment, and how to find a verified
            clinic you can trust. PeptideMaps connects you with vetted local
            providers so you can book a consultation with confidence.
          </p>
          <Link to={FIND_CLINICS_HREF} className="btn-primary mt-8">
            Find clinics near you
          </Link>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 pb-20">
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
            mind. Weight and metabolic goals are the most common, usually
            involving GLP-1 peptides like semaglutide and tirzepatide.
            Recovery and repair goals often point toward peptides like
            BPC-157. Healthy-aging and longevity goals may involve sermorelin
            or NAD+ protocols. Sexual health is another area patients ask
            about.
          </p>
          <p>
            Your goal shapes the conversation with your provider, but it
            doesn't determine your protocol on its own. The right peptide,
            if any, depends on your full clinical picture and your provider's
            judgment. Knowing your goal just helps you find a clinic that
            focuses on it.
          </p>
          {/* TODO once national peptide pages exist, link semaglutide / tirzepatide / BPC-157 / sermorelin to /peptide-therapy/<slug>. Left as plain text per content brief. */}
        </Section>

        <Section title="How patients use PeptideMaps">
          <p>
            PeptideMaps is free for patients. You search for peptide therapy
            in your city, compare verified clinics by credentials, services,
            and real patient reviews, and book a consultation directly
            through a calendar synced with the clinic's. No sorting through
            ads, no guessing which providers are legitimate. We've already
            done the vetting.
          </p>
          <p>
            The goal is simple: get you from "I'm considering peptide
            therapy" to a booked consultation with a clinic you can trust,
            without the usual friction.
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
            fuller breakdown of how peptide therapy cost works, see our{" "}
            <Link
              to="/peptide-therapy"
              className="font-medium text-accent-600 underline-offset-4 hover:underline"
            >
              main peptide therapy guide
            </Link>
            .
          </p>
        </Section>

        <Section title="How to prepare for your first peptide therapy appointment">
          <p>
            A little preparation makes your first consultation far more
            productive. Before you go, it helps to write down your primary
            goal and any symptoms or concerns, gather your relevant health
            history including current medications and supplements, and bring
            any recent lab work you already have. Come with questions about
            the provider's experience, monitoring approach, and what success
            looks like for your goal.
          </p>
          <p>
            A good first appointment is a two-way evaluation. Your provider
            is assessing whether peptide therapy is appropriate for you, and
            you're assessing whether this is a clinic you trust. Expect a
            review of your history, a discussion of your goals, and likely
            an order for baseline lab work before any protocol is
            recommended. Be cautious of any provider ready to sell you
            peptides without that evaluation.
          </p>
        </Section>

        <Section title="Find verified clinics near you">
          <p>
            When you're ready, finding a clinic is the easy part. PeptideMaps
            lists verified peptide therapy providers city by city, so you
            can compare local options and book directly. Search your city to
            see verified clinics near you.
          </p>
          <Link to={FIND_CLINICS_HREF} className="btn-primary mt-3">
            Find clinics near you
          </Link>
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
              medical oversight should be treated with caution. This is one
              of the clearest signals of a legitimate clinic versus a
              questionable one.
            </p>
          </Faq>
          <Faq q="How do I know if a clinic on PeptideMaps is legitimate?">
            <p>
              Every clinic on PeptideMaps is reviewed before it's listed,
              covering active medical licensing, compliant prescribing
              practices, and patient-safety standards. The verification
              badge means a provider has met that baseline. Beyond that, you
              can compare credentials and real patient reviews on each
              clinic's profile before you book.
            </p>
          </Faq>
          <Faq q="What's the difference between a peptide clinic and a telehealth provider?">
            <p>
              An in-person peptide clinic offers face-to-face evaluation,
              on-site labs in many cases, and direct physical oversight,
              which some patients prefer for a medical therapy. A telehealth
              provider offers convenience and remote access, often at lower
              friction. Neither is automatically better. What matters is that
              whichever you choose operates legitimately, with proper
              evaluation, prescribing, and monitoring. PeptideMaps focuses on
              verified local clinics so you can find trusted in-person care
              near you.
            </p>
          </Faq>
        </Section>

        <div className="mt-12 flex justify-center">
          <Link to={FIND_CLINICS_HREF} className="btn-primary">
            Find clinics near you
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
      <div className="border-t border-ink/5 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-ink-soft">
        {children}
      </div>
    </details>
  );
}
