import { useMemo, useState } from "react";

const TIMES = ["9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"];

function nextDays(n: number) {
  const days: Date[] = [];
  const now = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push(d);
  }
  return days;
}

type Props = {
  clinicName: string;
  peptidesOffered?: string[];
  gameday?: boolean;
};

const GAMEDAY_OPTIONS = [
  "Testosterone Replacement Therapy (TRT)",
  "Weight Loss & Metabolic Health",
  "Recovery & Performance",
  "Growth Hormone & Anti-Aging",
  "Sexual Wellness",
  "Not sure yet — help me decide",
];

export default function BookingWidget({
  clinicName,
  peptidesOffered = [],
  gameday = false,
}: Props) {
  const days = useMemo(() => nextDays(14), []);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [peptide, setPeptide] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dropdownOptions = gameday ? GAMEDAY_OPTIONS : peptidesOffered;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!date || !time) {
      setError("Please select a date and time.");
      return;
    }
    if (!name.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please check your information and try again.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 700);
  };

  if (done) {
    return (
      <div className="card p-6">
        <p className="font-display text-xl text-ink">Request sent</p>
        <p className="mt-2 text-sm text-ink-muted">
          {clinicName} will confirm your appointment shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6">
      <h3 className="font-display text-xl text-ink">Book a consultation</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Select a time. We'll confirm with {clinicName}.
      </p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Choose a date
        </p>
        <div className="mt-2 grid grid-cols-7 gap-1.5">
          {days.map((d) => {
            const isActive =
              date && d.toDateString() === date.toDateString();
            return (
              <button
                key={d.toISOString()}
                onClick={() => setDate(d)}
                type="button"
                className={`rounded-lg px-2 py-2 text-center text-xs transition ${
                  isActive
                    ? "bg-brand-600 text-white"
                    : "bg-slate-50 text-ink hover:bg-accent-50"
                }`}
              >
                <div className="text-[10px] uppercase tracking-wide opacity-80">
                  {d.toLocaleDateString(undefined, { weekday: "short" })}
                </div>
                <div className="font-semibold">{d.getDate()}</div>
              </button>
            );
          })}
        </div>
      </div>

      {date && (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Available times — {date.toLocaleDateString(undefined, { month: "short", day: "numeric" })}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {TIMES.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTime(t)}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  time === t
                    ? "bg-brand-600 text-white"
                    : "border border-ink/10 bg-white text-ink hover:border-brand-500"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-5 space-y-3">
        <input
          className="field"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="field"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="field"
          placeholder="Phone (optional)"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {dropdownOptions.length > 0 ? (
          <select
            className="field"
            value={peptide}
            onChange={(e) => setPeptide(e.target.value)}
          >
            <option value="">
              {gameday ? "What are you looking for?" : "Peptide of interest"}
            </option>
            {dropdownOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        ) : (
          <input
            className="field"
            placeholder="Peptide of interest"
            value={peptide}
            onChange={(e) => setPeptide(e.target.value)}
          />
        )}

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button type="submit" disabled={submitting} className="btn-primary w-full">
          {submitting ? "Sending…" : "Request booking"}
        </button>
      </form>
    </div>
  );
}
