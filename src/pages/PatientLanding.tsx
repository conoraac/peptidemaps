import { useState } from "react";
import { Link } from "react-router-dom";

export default function PatientLanding() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 700);
  };

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-cream to-cream" />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="pill">Launching soon</span>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
                Find the best peptide therapy clinics near you.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                PeptideMaps connects patients with verified peptide clinics
                offering semaglutide, BPC-157, sermorelin, and more. Compare
                providers, read real reviews, and book directly.
              </p>

              <div className="mt-8 max-w-md">
                {done ? (
                  <div className="card p-6">
                    <p className="font-display text-xl text-ink">
                      You're on the list.
                    </p>
                    <p className="mt-2 text-sm text-ink-muted">
                      We'll email you the moment PeptideMaps launches in your
                      area.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="card p-3 sm:flex sm:items-center sm:gap-2">
                    <input
                      type="email"
                      required
                      maxLength={255}
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="field border-0 shadow-none focus:ring-0"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary mt-2 w-full sm:mt-0 sm:w-auto"
                    >
                      {submitting ? "Joining…" : "Join Waitlist"}
                    </button>
                  </form>
                )}
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
                <p className="mt-3 text-xs text-ink-muted">
                  Are you a clinic?{" "}
                  <Link
                    to="/founding-clinic"
                    className="font-medium text-brand-700 underline-offset-4 hover:underline"
                  >
                    See clinic plans →
                  </Link>
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="card p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                  Featured clinic
                </p>
                <div className="mt-4 flex items-start gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 font-display text-lg font-semibold text-brand-800">
                    GM
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">
                      Gameday Men's Health Englewood
                    </p>
                    <p className="text-sm text-ink-muted">Englewood, CO</p>
                    <p className="mt-1 text-sm">
                      <span className="text-brand-700">★★★★★</span>{" "}
                      <span className="text-ink-muted">5.0 · 70 reviews</span>
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["TRT", "Semaglutide", "BPC-157", "Sermorelin"].map((p) => (
                    <span key={p} className="pill">
                      {p}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-ink/5 bg-cream/60 p-4">
                  <p className="text-xs font-semibold text-ink-soft">
                    Sample availability
                  </p>
                  <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
                    {["Mon", "Tue", "Wed", "Thu"].map((d) => (
                      <div key={d} className="rounded-lg bg-white p-2 text-center shadow-sm ring-1 ring-ink/5">
                        <p className="font-semibold text-ink">{d}</p>
                        <p className="mt-1 text-[11px] text-ink-muted">9:00 · 1:00</p>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to="/clinic/gameday-mens-health-englewood"
                  className="btn-secondary mt-5 w-full"
                >
                  View clinic & book →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
          How it works
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          From search to first consult in under 5 minutes.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Search and discover",
              body: "Enter your goal or peptide and your city. We surface verified clinics ranked by trust score and proximity.",
            },
            {
              n: "02",
              title: "Compare and evaluate",
              body: "Review clinic profiles, verified credentials, real patient reviews, and transparent pricing side by side.",
            },
            {
              n: "03",
              title: "Book and begin",
              body: "Pick your clinic and book a consultation directly. Get confirmation and prep guidance instantly.",
            },
          ].map((s) => (
            <div key={s.n} className="card p-6">
              <p className="font-display text-sm font-semibold text-brand-700">
                Step {s.n}
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-ink">
                {s.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
