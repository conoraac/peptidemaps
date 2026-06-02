import { Link } from "react-router-dom";

const SCHEDULE_HREF = "#schedule";

export default function ForClinics() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-14 md:pt-20">
          <span className="pill">For peptide clinics</span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Get more verified peptide patients.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            PeptideMaps connects verified peptide clinics with patients
            actively searching for treatment in their area. If you run a
            legitimate peptide practice and want a steady channel of qualified
            patients without fighting ad platforms that won't run your
            campaigns, this is built for you. Below, see how it works, what
            you get, and how to list your clinic.
          </p>
          <a href={SCHEDULE_HREF} className="btn-primary mt-8">
            Schedule a call with our team
          </a>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 pb-20">
        <Section title="Why clinics can't rely on Google or Meta ads for peptide marketing">
          <p>
            If you've tried to run paid ads for your peptide practice, you
            already know the problem. Google and Meta restrict or outright ban
            advertising for peptides, GLP-1s, and most hormone-related
            therapies. Campaigns get disapproved, accounts get flagged, and
            the compliance goalposts move constantly. Even when an ad slips
            through, it rarely lasts.
          </p>
          <p>
            This leaves most peptide clinics stuck. The demand is there,
            patients are searching every day, but the usual paid channels are
            closed off. The result is that clinics compete for the same
            handful of organic spots or pay agencies to chase rankings that
            take months to materialize.
          </p>
          <p>
            We built PeptideMaps because we know this problem from both sides.
            Between the two founders, we bring over twenty years in SEO and
            performance marketing, including running an agency and fifteen
            years in digital marketing. We've spent careers getting restricted
            and difficult verticals to rank and convert when paid channels
            were off the table. PeptideMaps applies that playbook to peptide
            therapy: capture the organic search demand, verify the supply,
            and route qualified patients directly to legitimate clinics.
          </p>
        </Section>

        <Section title="How PeptideMaps works for clinics">
          <p>
            PeptideMaps is a verified directory and patient-routing platform.
            Patients searching for peptide therapy clinics in their city find
            PeptideMaps, compare verified providers, and book a consultation.
            As a listed clinic, you appear in front of those patients at the
            exact moment they're looking for care.
          </p>
          <p>
            The model is simple. We handle the search visibility and the
            patient acquisition. You handle the medicine. When a patient is
            ready, they book directly through a calendar synced with yours,
            so the lead lands as a scheduled consultation, not a cold name to
            chase.
          </p>
        </Section>

        <Section title="What you get as a PeptideMaps listed clinic">
          <p>
            A listed clinic gets a verified profile that builds patient trust
            before the first call, placement in front of patients actively
            searching for peptide therapy in your area, and qualified patient
            leads that arrive as booked consultations rather than raw contact
            forms. You also get a verification badge that signals to patients
            you've met a clinical-legitimacy standard, which matters
            enormously in a space crowded with questionable operators.
          </p>
          <p>
            Because peptide patient leads from PeptideMaps come from organic
            search intent, they tend to be higher quality than the clicks
            you'd buy on a paid platform even if those platforms would run
            your ads. These are people already looking for what you offer.
          </p>
        </Section>

        <Section title="How patients find your clinic on PeptideMaps">
          <p>
            Patients reach your clinic through search. PeptideMaps ranks for
            the terms patients actually use, from "peptide therapy clinics"
            and "peptide clinics" to local searches like "peptide near me" in
            each city we cover. When a patient lands on a city or peptide
            page, they see verified providers, compare credentials and
            patient reviews, and book a consultation with the clinic that
            fits.
          </p>
          <p>
            That means your visibility doesn't depend on you winning the SEO
            race yourself. You inherit the directory's ranking power. As
            PeptideMaps grows its footprint across cities, listed clinics
            ride that growth instead of competing against it.
          </p>
        </Section>

        <Section title="PeptideMaps verification process">
          <p>
            Every clinic on PeptideMaps is reviewed before it's listed.
            Verification covers active medical licensing, compliant
            prescribing and dispensing practices, and a baseline of
            patient-safety standards including proper intake, evaluation, and
            monitoring. We review credentials and confirm the practice
            operates legitimately.
          </p>
          <p>
            This matters for you, not just for patients. A verified directory
            that turns away questionable operators is one patients can trust,
            and that trust is what makes the leads convert. Being listed
            alongside other vetted clinics raises your credibility rather
            than burying you in a sea of unvetted listings.
          </p>
        </Section>

        <Section title="How listings work">
          <p>
            Listings are handled directly with our team rather than through a
            self-serve checkout, because we verify every clinic before it
            goes live and we want to make sure PeptideMaps is the right fit
            for your practice. We'll walk you through how placement works,
            what verification involves, and what to expect once you're
            listed.
          </p>
          <p>
            Early clinics that join before launch get founding-clinic
            positioning and locked-in terms. To learn how listings work and
            whether your practice qualifies, schedule a call with our team.
          </p>
          <a href={SCHEDULE_HREF} className="btn-primary mt-3">
            Schedule a call with our team
          </a>
        </Section>

        <Section title="Why now is the right time to claim your listing">
          <p>
            PeptideMaps is building its search footprint city by city ahead
            of launch. The clinics that list early are the ones indexed and
            ranking when patient traffic arrives, and they hold the founding
            positions in their market before those spots fill.
          </p>
          <p>
            Peptide therapy demand is growing fast and the organic search
            landscape is still wide open in most cities. That window doesn't
            stay open. Once a market's directory positions are claimed and
            the pages are ranking, later entrants compete for what's left.
            Listing now means establishing your clinic in your market while
            the advantage is still available.
          </p>
        </Section>

        <Section title="Frequently asked questions from clinic owners">
          <Faq q="How do patients actually reach my clinic?">
            Patients find PeptideMaps through organic search, compare verified
            providers, and book a consultation through a calendar synced with
            yours. Leads arrive as scheduled consultations.
          </Faq>
          <Faq q="Do I have to manage SEO or marketing myself?">
            No. That's the entire point. PeptideMaps handles search
            visibility and patient acquisition so you can focus on patient
            care. You inherit the directory's ranking power instead of
            competing for it alone.
          </Faq>
          <Faq q="What makes the leads higher quality than paid ads?">
            PeptideMaps leads come from patients actively searching for
            peptide therapy, so intent is high. And unlike Google or Meta,
            the platform isn't at risk of banning your category, so the
            channel is stable.
          </Faq>
          <Faq q="What does verification require?">
            Active medical licensing, compliant prescribing and dispensing
            practices, and a baseline of patient-safety standards. We review
            your credentials before listing.
          </Faq>
          <Faq q="How much does a listing cost?">
            Listings are handled directly with our team based on your market
            and placement. Schedule a call and we'll walk you through how it
            works.
          </Faq>
          <Faq q="Can I start before the platform launches?">
            Yes, and it's an advantage. Early clinics get founding
            positioning and are indexed and ranking when patient traffic
            arrives. Schedule a call to get started.
          </Faq>
        </Section>

        <section id="schedule" className="mt-16 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-10 text-white shadow-card">
          <h2 className="font-display text-3xl tracking-tight text-white md:text-4xl">
            Ready to get listed?
          </h2>
          <p className="mt-3 max-w-2xl text-brand-50/90">
            If you run a legitimate peptide practice and want a stable
            channel of qualified patients in a vertical where paid ads don't
            work, PeptideMaps was built for you. Schedule a call with our
            team to learn how listings work and claim your position before
            launch.
          </p>
          <a
            href={SCHEDULE_HREF}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-800 transition hover:bg-accent-50"
          >
            Schedule a call with our team
          </a>
          <p className="mt-6 text-xs text-brand-100/70">
            Prefer email?{" "}
            <Link to="/privacy" className="underline">
              See how we handle your data
            </Link>{" "}
            or write{" "}
            <a href="mailto:charlie@peptidemaps.ai" className="underline">
              charlie@peptidemaps.ai
            </a>
            .
          </p>
        </section>
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
