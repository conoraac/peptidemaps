import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "./Logo";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-ink/5 bg-cream/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="flex items-center gap-1 text-sm font-medium">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-brand-50 text-brand-800"
                    : "text-ink-soft hover:text-ink"
                }`
              }
            >
              Patients
            </NavLink>
            <NavLink
              to="/founding-clinic"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-brand-50 text-brand-800"
                    : "text-ink-soft hover:text-ink"
                }`
              }
            >
              For Clinics
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-ink/5 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-ink-muted">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© 2026 PeptideMaps, LLC</p>
            <Link to="/privacy" className="hover:text-ink underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-ink-muted/80">
            PeptideMaps is a directory service. We do not provide medical advice or
            treatment. Always consult a licensed physician before beginning peptide
            therapy.
          </p>
        </div>
      </footer>
    </div>
  );
}
