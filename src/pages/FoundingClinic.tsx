import { useState } from "react";

export default function FoundingClinic() {
  const [clinicName, setClinicName] = useState("");
  const [cityState, setCityState] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!clinicName.trim()) next.clinicName = "Clinic name required";
    if (!cityState.trim()) next.cityState = "City, State required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "Invalid email";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitting(true);
    setTimeout(() => {
      window.location.href = "/thank-you";
    }, 700);
  };

  return (
    <div>
      <section id="waitlist" className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-cream to-cream" />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
          <div className="grid items-start gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="pill">Founding clinic spot · 25 spots</span>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
                AI working 24/7 to bring peptide therapy patients to your clinic.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                PeptideMaps puts your clinic in front of patients searching for
                semaglutide, BPC-157, sermorelin, and more in your city. They
                book directly into your calendar.
              </p>

              <div className="mt-7 rounded-2xl border border-brand-700/15 bg-white/70 p-6 backdrop-blur">
                <p className="font-display text-lg font-semibold text-ink">
                  $500 today locks your founding clinic spot.
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                  <li>· Top listing in your area through end of 2026.</li>
                  <li>· Platform launches end of July 2026, then $500/month grandfathered forever.</li>
                  <li>· Standard rate at launch: $2,500/month.</li>
                  <li>· Only the first 25 clinics get the founding rate.</li>
                  <li>· No contracts, no rate increases ever.</li>
                </ul>
              </div>
            </div>

            <div className="card p-7">
              <p className="font-display text-xl font-semibold text-ink">
                Fill in the form to get started:
              </p>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    maxLength={120}
                    placeholder="Clinic name"
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                    className="field"
                  />
                  {errors.clinicName && (
                    <p className="mt-1 text-xs text-red-600">{errors.clinicName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    required
                    maxLength={120}
                    placeholder="City, State"
                    value={cityState}
                    onChange={(e) => setCityState(e.target.value)}
                    className="field"
                  />
                  {errors.cityState && (
                    <p className="mt-1 text-xs text-red-600">{errors.cityState}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="field"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full"
                >
                  {submitting ? "Submitting…" : "Secure your spot"}
                </button>
                <p className="text-center text-xs text-ink-muted">
                  We verify your clinic and activate your profile within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
          Why PeptideMaps
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          Higher-intent patients than ads, on a flat rate that never changes.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Booked appointments on your calendar",
              body: "Patients searched, decided, and booked directly into your schedule. You walk in Monday to consults already on the books. No phone tag, no no-shows from cold ads, no sales pitch required.",
            },
            {
              title: "Higher-value patients than paid ads",
              body: "These aren't curious clickers. They're patients ready to start semaglutide, BPC-157, or sermorelin protocols this month.",
            },
            {
              title: "Lock in $500 for life",
              body: "The first 25 clinics lock in $500/month forever. Standard rate at launch: $2,500/month. No contracts, no rate increases, ever.",
            },
          ].map((s) => (
            <div key={s.title} className="card p-6">
              <p className="font-display text-xl font-semibold text-ink">
                {s.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#waitlist" className="btn-primary">
            Secure your spot
          </a>
        </div>
      </section>
    </div>
  );
}
