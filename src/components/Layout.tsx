import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "./Logo";

const FIND_CLINIC_HREF = "/peptide-therapy/denver-colorado";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative px-1 py-2 text-sm font-semibold transition ${
    isActive
      ? "text-accent-600 after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:bg-accent-500"
      : "text-ink-soft hover:text-ink"
  }`;

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Thin navy announcement strip */}
      <div className="bg-brand-700 text-[12px] font-medium tracking-wide text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
          <span className="text-brand-100">
            Verified peptide therapy clinics &middot; Launching 2026
          </span>
          <Link
            to="/for-clinics"
            className="hidden text-white/90 transition hover:text-accent-300 sm:inline"
          >
            Are you a clinic? Get listed &rarr;
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            <NavLink to="/" end className={navLinkClass}>
              Patients
            </NavLink>
            <NavLink to="/conditions" className={navLinkClass}>
              Conditions
            </NavLink>
            <NavLink to="/for-clinics" className={navLinkClass}>
              For Clinics
            </NavLink>
          </nav>
          <Link to={FIND_CLINIC_HREF} className="btn-primary !px-5 !py-2.5 text-xs">
            Find a clinic
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 bg-brand-800 text-brand-100">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <img
                src="/logo.png"
                alt="PeptideMaps"
                className="h-8 w-auto brightness-0 invert"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
                Verified peptide therapy clinics, indexed city by city. Find a
                trusted provider near you.
              </p>
            </div>
            <FooterCol
              title="Patients"
              links={[
                ["Find clinics", FIND_CLINIC_HREF],
                ["For patients", "/for-patients"],
                ["Conditions", "/conditions"],
              ]}
            />
            <FooterCol
              title="Clinics"
              links={[
                ["For clinics", "/for-clinics"],
                ["Get listed", "/for-clinics#schedule"],
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Privacy", "/privacy"],
              ]}
            />
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-brand-200 md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 PeptideMaps, LLC</p>
            <p className="max-w-2xl text-brand-200/70">
              PeptideMaps is a directory service. We do not provide medical
              advice or treatment. Always consult a licensed physician before
              beginning peptide therapy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link
              to={to}
              className="text-brand-200 transition hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
