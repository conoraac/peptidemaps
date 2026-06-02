import { useParams, Link } from "react-router-dom";
import { clinicBySlug } from "../data/clinics";
import BookingWidget from "../components/BookingWidget";
import NotFound from "./NotFound";

export default function ClinicProfile() {
  const { slug = "" } = useParams();
  const clinic = clinicBySlug(slug);
  if (!clinic) return <NotFound />;

  const isGameday = clinic.slug === "gameday-mens-health-englewood";

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <nav className="text-sm text-ink-muted">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span className="px-2">/</span>
        <Link
          to={`/peptide-therapy/${clinic.stateSlug}`}
          className="hover:text-ink"
        >
          {clinic.state}
        </Link>
        <span className="px-2">/</span>
        <Link
          to={`/peptide-therapy/${clinic.city.toLowerCase().replace(/\s+/g, "-")}-${clinic.stateSlug}`}
          className="hover:text-ink"
        >
          {clinic.city}
        </Link>
        <span className="px-2">/</span>
        <span className="text-ink">{clinic.name}</span>
      </nav>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-4xl tracking-tight text-ink md:text-5xl">
          {clinic.name}
        </h1>
        {clinic.verified && (
          <span className="pill bg-brand-600 text-white">Verified</span>
        )}
      </div>
      <p className="mt-2 text-ink-soft">
        {clinic.city}, {clinic.state}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="pill">{clinic.peptidesOffered.length} peptide(s) offered</span>
        {clinic.medicalDirector && (
          <span className="pill">Medical director: {clinic.medicalDirector}</span>
        )}
        {clinic.pharmacyPartner && (
          <span className="pill">Pharmacy: {clinic.pharmacyPartner}</span>
        )}
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          {isGameday && <GamedayRatingCallout />}

          {isGameday && (
            <section className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                ["Verified provider", "License and credentials confirmed by PeptideMaps"],
                ["Accepting new patients", "Currently booking new patient consultations"],
                ["In-person & telehealth", "Visit the Englewood clinic or consult remotely"],
                ["Physician-supervised", "Protocols overseen by licensed medical staff"],
              ].map(([title, body]) => (
                <div key={title} className="card p-5">
                  <p className="font-display text-base font-semibold text-ink">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{body}</p>
                </div>
              ))}
            </section>
          )}

          <section className="mt-10">
            <h2 className="font-display text-2xl text-ink">About</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {clinic.name} is a verified peptide therapy provider in{" "}
              {clinic.city}, {clinic.state}. Our team works with patients to
              design personalized protocols using evidence-based peptide
              therapies, supported by licensed medical oversight and a trusted
              pharmacy partner.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl text-ink">Treatments & therapies</h2>
            {isGameday ? (
              <ul className="mt-4 space-y-3">
                {[
                  ["Testosterone Replacement Therapy (TRT)", "For low energy, low libido, brain fog, and loss of muscle mass associated with low testosterone.", "Hormone optimization protocols."],
                  ["Weight Loss & Metabolic Health", "Medically supervised weight management and metabolic support.", "Tesamorelin and supporting protocols."],
                  ["Recovery & Performance", "Faster recovery from injury and training, joint and tissue repair.", "BPC-157."],
                  ["Growth Hormone & Anti-Aging", "Improved sleep, body composition, energy, and recovery through GH support.", "Sermorelin, Ipamorelin."],
                  ["Sexual Wellness", "Treatment for ED, low libido, and sexual performance.", "Physician-recommended protocols."],
                ].map(([t, body, italics]) => (
                  <li key={t} className="card p-5">
                    <p className="font-display text-base font-semibold text-ink">{t}</p>
                    <p className="mt-1 text-sm text-ink-soft">{body}</p>
                    <p className="mt-1 text-xs italic text-ink-muted">{italics}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">Available therapies:</span>{" "}
                {clinic.peptidesOffered.join(", ")}
              </p>
            )}
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl text-ink">What to expect</h2>
            <ol className="mt-4 space-y-3 text-ink-soft">
              {[
                ["Request a time.", "Pick a date and slot that works for you."],
                ["Clinic confirms.", `The ${clinic.name} team reaches out to verify your appointment.`],
                ["Consultation.", "Review your goals, history, and a personalized peptide plan."],
              ].map(([t, body], i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-100 text-sm font-semibold text-brand-800">
                    {i + 1}
                  </span>
                  <span>
                    <span className="font-semibold text-ink">{t}</span> {body}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {isGameday ? (
            <section className="mt-10">
              <h2 className="font-display text-2xl text-ink">Provider credentials</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                <li>· Clinic Type: Men's Health & Peptide Therapy</li>
                <li>· Medical Oversight: Licensed physician-supervised</li>
                <li>· Specialties: TRT, Peptide Therapy, Weight Loss, Sexual Wellness, Anti-Aging</li>
                <li>· Telehealth: Available</li>
                <li>· Languages: English</li>
              </ul>
            </section>
          ) : (
            clinic.medicalDirector && (
              <section className="mt-10">
                <h2 className="font-display text-2xl text-ink">Provider credentials</h2>
                <p className="mt-3 text-ink-soft">
                  · Medical Director: {clinic.medicalDirector}
                </p>
              </section>
            )
          )}

          {isGameday && (
            <>
              <section className="mt-10">
                <h2 className="font-display text-2xl text-ink">
                  What patients come in for
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink-soft md:grid-cols-3">
                  {[
                    "Low energy & fatigue",
                    "Low testosterone / TRT",
                    "Weight loss & metabolic health",
                    "Muscle recovery & performance",
                    "Sexual wellness / ED",
                    "Anti-aging & longevity",
                    "Sleep & stress",
                    "Injury recovery",
                  ].map((p) => (
                    <div key={p} className="rounded-xl bg-cream/70 px-3 py-2 ring-1 ring-ink/5">
                      {p}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-ink">Patient reviews</h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Reviews are collected from verified patients after their visit.
                </p>
                <blockquote className="mt-4 border-l-4 border-brand-300 bg-cream/60 p-4 text-sm italic text-ink-soft">
                  Clinics cannot pay to alter or remove reviews. PeptideMaps does
                  not publish reviews containing private health information.
                </blockquote>
                <div className="mt-4 card p-5 text-sm text-ink-muted">
                  Verified patient reviews will appear here as patients complete
                  consultations through PeptideMaps.
                </div>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-ink">
                  Frequently asked questions
                </h2>
                <div className="mt-4 space-y-3">
                  {[
                    ["Is Gameday Men's Health Englewood accepting new patients?", "Yes. New patient consultations can be requested directly on this page."],
                    ["What conditions does this clinic treat?", "Low testosterone, low energy, weight management, sexual wellness, recovery, and longevity through peptide and hormone therapy."],
                    ["Do I need to know which peptide I want?", "No. You describe your goals and symptoms; the clinic's medical team recommends a protocol."],
                    ["Is treatment physician-supervised?", "Yes. All protocols are overseen by licensed medical staff."],
                    ["Where is the clinic located?", "750 W Hampden Ave, Suite 501, Englewood, CO 80110."],
                    ["Is telehealth available?", "Yes, both in-person and remote consultations are offered."],
                  ].map(([q, a]) => (
                    <details
                      key={q}
                      className="group card overflow-hidden p-0"
                    >
                      <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-display text-base font-semibold text-ink">
                        {q}
                        <span className="text-ink-muted group-open:rotate-45 transition">+</span>
                      </summary>
                      <p className="border-t border-ink/5 bg-cream/40 px-5 py-4 text-sm text-ink-soft">
                        {a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-ink">Location</h2>
                <p className="mt-3 text-ink-soft">
                  <span className="font-semibold text-ink">Gameday Men's Health Englewood</span>
                  <br />
                  750 W Hampden Ave, Suite 501, Englewood, CO 80110
                  <br />
                  Phone: (833) 339-4263
                </p>
                <div className="mt-4 aspect-[16/8] w-full overflow-hidden rounded-2xl border border-ink/5 bg-gradient-to-br from-brand-100 via-cream to-brand-50">
                  <div className="grid h-full place-items-center text-sm text-ink-muted">
                    Google Maps embed
                  </div>
                </div>
              </section>
            </>
          )}
        </div>

        <aside className="md:sticky md:top-6 md:self-start">
          <BookingWidget
            clinicName={clinic.name}
            peptidesOffered={clinic.peptidesOffered}
            gameday={isGameday}
          />
        </aside>
      </div>
    </div>
  );
}

function GamedayRatingCallout() {
  return (
    <div className="rounded-2xl border border-brand-700/15 bg-gradient-to-r from-brand-50 to-cream p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white font-display text-xl font-bold text-brand-800 ring-1 ring-brand-700/10">
          5.0
        </div>
        <div>
          <p className="text-lg text-brand-700">★★★★★</p>
          <p className="text-sm text-ink-soft">70 Google reviews</p>
          <p className="mt-2 max-w-md text-sm text-ink-soft">
            Patients consistently rate Gameday Men's Health Englewood 5 stars
            for care and results.
          </p>
          <p className="mt-1 text-xs italic text-ink-muted">
            Rating sourced from Google Business Profile.
          </p>
        </div>
      </div>
    </div>
  );
}
