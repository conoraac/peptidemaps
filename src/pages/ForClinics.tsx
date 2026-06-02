import { Link } from "react-router-dom";

const SCHEDULE_HREF = "#schedule";

export default function ForClinics() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="pill">For peptide clinics</span>
              <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight text-ink md:text-7xl">
                Get more{" "}
                <span className="relative whitespace-nowrap">
                  verified
                  <span className="absolute inset-x-0 -bottom-1 -z-10 h-[6px] rounded bg-accent-200" />
                </span>{" "}
                peptide patients.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                PeptideMaps connects verified peptide clinics with patients
                actively searching for treatment in their area — without fighting
                ad platforms that won't run your campaigns.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={SCHEDULE_HREF} className="btn-primary">
                  Schedule a call with our team
                </a>
                <a
                  href="#how-it-works"
                  className="text-sm font-semibold text-accent-600 hover:text-accent-700"
                >
                  See how it works &rarr;
                </a>
              </div>
            </div>

            <FoundingClinicCard />
          </div>
        </div>
      </section>

      {/* Navy stat band */}
      <section className="bg-brand-700 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <Stat
              value="20+"
              label="Years in SEO"
              body="Two founders, two decades getting restricted verticals to rank when paid channels were off the table."
            />
            <Stat
              value="25"
              label="Founding clinic spots"
              body="Locked-in founding-clinic rate for the first 25 clinics that join before launch."
            />
            <Stat
              value="$0"
              label="Ad spend required"
              body="Patients come through organic search demand, not paid acquisition. The channel doesn't break when Meta bans your category."
            />
          </div>
        </div>
      </section>

      <article id="how-it-works" className="mx-auto max-w-3xl px-5 pb-20 pt-20">
        <Section title="Why clinics can't rely on Google or Meta ads for peptide marketing">
          <p>
            If you've tried to run paid ads for your peptide practice, you
            already know the problem. Google and Meta restrict or outright ban
            advertising for peptides, GLP-1s, and most hormone-related
            therapies. Campaigns get disapproved, accounts get flagged, and
            the compliance goalposts move constantly. Even when an ad slips
            through, it rarely lasts.
          </p>

          {/* Compare cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="card p-5">
              <div className="flex items-center gap-2 text-red-600">
                <span aria-hidden>&times;</span>
                <p className="text-xs font-semibold uppercase tracking-widest">
                  Paid ads
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2"><span className="text-red-400">&times;</span>Campaigns disapproved without warning</li>
                <li className="flex gap-2"><span className="text-red-400">&times;</span>Accounts flagged, banned mid-quarter</li>
                <li className="flex gap-2"><span className="text-red-400">&times;</span>Cost-per-click escalates with restrictions</li>
                <li className="flex gap-2"><span className="text-red-400">&times;</span>Channel can vanish overnight</li>
              </ul>
            </div>
            <div className="card border-accent-300/40 bg-accent-50/40 p-5">
              <div className="flex items-center gap-2 text-accent-700">
                <span aria-hidden>&#10003;</span>
                <p className="text-xs font-semibold uppercase tracking-widest">
                  PeptideMaps
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2"><span className="text-accent-600">&#10003;</span>Organic search demand, captured city by city</li>
                <li className="flex gap-2"><span className="text-accent-600">&#10003;</span>Verified directory inherits ranking power</li>
                <li className="flex gap-2"><span className="text-accent-600">&#10003;</span>Flat-rate, locked-in founding pricing</li>
                <li className="flex gap-2"><span className="text-accent-600">&#10003;</span>Stable channel — no platform-policy risk</li>
              </ul>
            </div>
          </div>

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
          </p>

          {/* Numbered flow */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["01", "We rank", "PeptideMaps captures organic search demand in your city."],
              ["02", "Patient compares", "They see verified providers, credentials, and reviews on your profile."],
              ["03", "Patient books", "They book a consultation directly on your calendar."],
            ].map(([n, t, body]) => (
              <div key={n} className="card p-5">
                <p className="font-display text-3xl font-semibold text-accent-500">
                  {n}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-ink">
                  {t}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <p>
            We handle the search visibility and the patient acquisition. You
            handle the medicine. Leads land as scheduled consultations, not
            cold names to chase.
          </p>
        </Section>

        <Section title="What you get as a PeptideMaps listed clinic">
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            {[
              ["Verified clinic profile", "Builds patient trust before the first call. Credentials, services, and reviews on one page."],
              ["Top placement in your city", "Appear in front of patients searching for peptide therapy in your local market."],
              ["Booked consultations", "Qualified leads arrive as scheduled appointments, not raw contact forms."],
              ["Verification badge", "Signal you've met a clinical-legitimacy standard in a space crowded with questionable operators."],
            ].map(([t, body]) => (
              <div key={t} className="card p-5">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent-50 text-accent-700">
                  <span aria-hidden>&#10003;</span>
                </div>
                <p className="mt-3 font-display text-base font-semibold text-ink">
                  {t}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p>
            Because peptide patient leads from PeptideMaps come from organic
            search intent, they tend to be higher quality than the clicks
            you'd buy on a paid platform — even if those platforms would run
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
            Verification covers:
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
            {[
              "Active state medical licensing",
              "Compliant prescribing and dispensing practices",
              "Proper patient intake and evaluation processes",
              "Ongoing monitoring and follow-up standards",
              "Confirmation the practice operates legitimately",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white p-4">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-xs font-bold text-white">
                  &#10003;
                </span>
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            This matters for you, not just for patients. A verified directory
            that turns away questionable operators is one patients can trust,
            and that trust is what makes the leads convert.
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

        <section
          id="schedule"
          className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-10 text-white shadow-card"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-300">
            Founding clinic spots open
          </span>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-white md:text-4xl">
            Ready to get listed?
          </h2>
          <p className="mt-3 max-w-2xl text-brand-100">
            If you run a legitimate peptide practice and want a stable
            channel of qualified patients in a vertical where paid ads don't
            work, PeptideMaps was built for you. Schedule a call with our
            team to learn how listings work and claim your position before
            launch.
          </p>
          <a
            href={SCHEDULE_HREF}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-accent-400"
          >
            Schedule a call with our team
          </a>
          <p className="mt-6 text-xs text-brand-200/70">
            Prefer email? Write{" "}
            <a href="mailto:charlie@peptidemaps.ai" className="underline">
              charlie@peptidemaps.ai
            </a>
            . See how we handle your data in our{" "}
            <Link to="/privacy" className="underline">
              privacy policy
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}

function FoundingClinicCard() {
  return (
    <div className="card overflow-hidden p-0">
      <div className="bg-brand-700 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-accent-300">
        Founding clinic spot
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between">
          <p className="font-display text-5xl font-semibold tracking-tight text-ink">
            4
            <span className="text-2xl text-ink-muted">/25</span>
          </p>
          <span className="pill bg-accent-50 text-accent-700">21 spots left</span>
        </div>
        <p className="mt-2 text-sm text-ink-muted">
          Founding clinics claimed across launch markets.
        </p>

        <div className="mt-5 space-y-2.5">
          {[
            ["Top listing in your area through 2026", true],
            ["Founding rate locked forever after launch", true],
            ["Verification badge on your profile", true],
            ["Standard rate at launch: $2,500/mo", false],
          ].map(([label, active]) => (
            <div
              key={label as string}
              className="flex items-start gap-2 text-sm"
            >
              <span
                className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-bold ${
                  active
                    ? "bg-accent-500 text-white"
                    : "bg-ink/10 text-ink-muted"
                }`}
              >
                {active ? "✓" : "—"}
              </span>
              <span className={active ? "text-ink" : "text-ink-muted line-through"}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-ink/10 pt-4">
          <p className="text-xs uppercase tracking-widest text-ink-muted">
            Recently claimed
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["Front Range Peptide Co.", "Denver, CO"],
              ["Austin Peptide Therapy", "Austin, TX"],
              ["Lakeshore Men's Wellness", "Chicago, IL"],
            ].map(([name, loc]) => (
              <li key={name} className="flex items-center justify-between">
                <span className="font-medium text-ink">{name}</span>
                <span className="text-xs text-ink-muted">{loc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Stat({
  value,
  label,
  body,
}: {
  value: string;
  label: string;
  body: string;
}) {
  return (
    <div>
      <p className="font-display text-5xl font-semibold tracking-tight text-white md:text-6xl">
        {value}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-accent-300">
        {label}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-brand-100">{body}</p>
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
