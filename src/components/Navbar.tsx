/* Barra de navegação principal. Links e telefone vêm de src/config/site.ts */
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={site.images.logo} alt={site.name} className="h-10 w-10" />
          <span className="text-xl font-bold text-ink">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {site.nav.map((l) => {
            const active = pathname === l.path;
            return (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-brand border-b-2 border-brand pb-1"
                    : "text-ink hover:text-brand"
                }`}
              >
                {l.name}
              </Link>
            );
          })}
        </div>

        {/* Phone (desktop) */}
        <div className="hidden items-center gap-2 text-sm text-ink md:flex">
          <Phone size={16} className="text-brand" />
          <span>{site.contact.phonePrimary}</span>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-ink hover:bg-surface md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {site.nav.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-surface hover:text-brand"
              >
                {l.name}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 px-3 py-2 text-sm text-ink">
              <Phone size={16} className="text-brand" />
              {site.contact.phonePrimary}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}