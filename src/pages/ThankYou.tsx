export default function ThankYou() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <span className="pill">Confirmation</span>
      <h1 className="mt-5 font-display text-4xl tracking-tight text-ink md:text-5xl">
        You're in. Founding spot secured.
      </h1>
      <p className="mt-4 text-lg text-ink-soft">
        Your $500 deposit is processed. We'll verify your clinic and activate
        your profile within 24 hours.
      </p>

      <h2 className="mt-12 font-display text-2xl text-ink">What happens next</h2>
      <ol className="mt-5 space-y-4 text-ink-soft">
        {[
          "Check your email for the receipt and verification request (sent in the next hour).",
          "Reply with your medical director name, state license number, and which peptides you offer. We verify in under 24 hours.",
          "We build your clinic profile and connect it to local search for your city.",
          "Patients searching peptide therapy in your city start booking directly into your inbox.",
        ].map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-100 text-sm font-semibold text-brand-800">
              {i + 1}
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
