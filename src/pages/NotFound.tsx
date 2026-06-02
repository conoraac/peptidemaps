import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-32 text-center">
      <p className="text-5xl font-bold text-accent-600">404</p>
      <h1 className="mt-4 font-display text-3xl tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-2 text-ink-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-8 inline-flex">
        Go home
      </Link>
    </section>
  );
}
