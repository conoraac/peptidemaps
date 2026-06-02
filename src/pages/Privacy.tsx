export default function Privacy() {
  return (
    <article className="prose-pm mx-auto max-w-3xl px-5 py-16 text-ink-soft">
      <h1 className="font-display text-4xl tracking-tight text-ink">Privacy Policy</h1>
      <p className="mt-2 text-sm italic text-ink-muted">Last updated: May 11, 2026</p>

      <Section title="Who We Are">
        We are PeptideMaps, a product operated by Abstrax AI Holdings, LLC. We
        are building a directory platform connecting patients to verified
        medical clinics offering peptide therapy. PeptideMaps is currently in
        pre-launch validation. This policy explains how we handle your
        information.
      </Section>

      <Section title="Information We Collect">
        When you submit a clinic signup form, we collect:
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>Clinic name</li>
          <li>City and state</li>
          <li>Email address</li>
          <li>Phone number (collected via Stripe checkout)</li>
          <li>Billing address (collected via Stripe checkout)</li>
          <li>Payment information (processed and stored by Stripe, never seen by us)</li>
        </ul>
        <p className="mt-3">
          We may also collect additional clinic verification details during
          onboarding (medical director name, state license number, peptides
          offered, pharmacy partner).
        </p>
      </Section>

      <Section title="How We Use Your Information">
        We use the information you provide to:
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>Verify your clinic's eligibility for the platform</li>
          <li>Communicate with you about your account and the platform</li>
          <li>Process your founding member deposit</li>
          <li>Eventually match qualified patient leads to your clinic</li>
          <li>Send service-related emails (verification requests, updates, billing notifications)</li>
        </ul>
        <p className="mt-3">
          We do not sell your data. We do not share your data with third
          parties except as needed to operate the platform (e.g., Stripe for
          payment processing, Supabase for database hosting).
        </p>
      </Section>

      <Section title="Payment Processing">
        All payments are processed by Stripe. Your card information is
        collected, encrypted, and stored by Stripe in accordance with their
        privacy policy. We never see or store your full card number.
      </Section>

      <Section title="Data Storage">
        Your information is stored securely in Supabase. We use
        industry-standard practices to protect your data. No system is 100%
        secure, but we take reasonable steps to safeguard your information.
      </Section>

      <Section title="Refunds">
        The $500 founding member deposit is fully refundable if we do not
        deliver a qualified patient lead to your clinic within 12 months of
        activation. To request a refund, email charlie@peptidemaps.ai.
      </Section>

      <Section title="Your Rights">
        You can request to:
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>Access the data we have about you</li>
          <li>Correct inaccurate data</li>
          <li>Delete your account and data</li>
          <li>Receive a copy of your data</li>
        </ul>
        <p className="mt-3">
          To make any of these requests, email charlie@peptidemaps.ai. We will
          respond within 30 days.
        </p>
      </Section>

      <Section title="Cookies and Tracking">
        We may use cookies and analytics tools (such as Plausible) to
        understand how visitors use our site. We do not use cookies for
        advertising or third-party tracking.
      </Section>

      <Section title="Communications">
        By submitting the clinic form, you agree to receive emails from us
        related to your account, the platform, and your onboarding. You can opt
        out of non-essential communications at any time by emailing
        charlie@peptidemaps.ai.
      </Section>

      <Section title="Changes to This Policy">
        We may update this privacy policy as the platform evolves. We will
        notify users of material changes via email. Continued use of the
        platform after changes constitutes acceptance.
      </Section>

      <Section title="Contact">
        For questions about this policy or your data, email
        charlie@peptidemaps.ai.
      </Section>

      <p className="mt-10 text-sm text-ink-muted">
        PeptideMaps is operated by Abstrax AI Holdings, LLC.
      </p>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl text-ink">{title}</h2>
      <div className="mt-3 leading-relaxed">{children}</div>
    </section>
  );
}
