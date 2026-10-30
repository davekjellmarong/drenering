"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export interface NavItem {
  href: string;
  title: string;
}

export function Header({ guides }: { guides: NavItem[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const guidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setGuidesOpen(false);
  }, [pathname]);

  // Close the guides dropdown when clicking elsewhere.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!guidesRef.current?.contains(event.target as Node)) setGuidesOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const links: NavItem[] = [
    { href: "/drenering/pris", title: "Pris" },
    { href: "/drenering#byer", title: "Finn firma i din by" },
    { href: "/hvordan-funker-det", title: "Slik fungerer det" },
  ];

  const isActive = (href: string) => pathname === href.split("#")[0];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" aria-label="DinDrenering, til forsiden">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hovedmeny">
          <div className="relative" ref={guidesRef}>
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-ink-800 hover:text-brand-600"
              aria-expanded={guidesOpen}
              onClick={() => setGuidesOpen((open) => !open)}
            >
              Guider <ChevronDown className="h-4 w-4" />
            </button>
            {guidesOpen && (
              <div className="absolute left-0 top-9 w-72 rounded-xl border border-border bg-white p-2 shadow-lg">
                {guides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="block rounded-lg px-3 py-2 text-sm text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {guide.title}
                  </Link>
                ))}
                <Link
                  href="/drenering"
                  className="mt-1 block rounded-lg border-t border-border px-3 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50"
                >
                  Alle guider →
                </Link>
              </div>
            )}
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-brand-600 ${
                isActive(link.href) ? "text-brand-600" : "text-ink-800"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/tilbud"
            className="hidden rounded-lg bg-clay-500 px-4 py-2 text-sm font-semibold text-white hover:bg-clay-600 sm:inline-block"
          >
            Få gratis tilbud
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-ink-900 lg:hidden"
            aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-white px-4 pb-6 pt-2 lg:hidden"
          aria-label="Mobilmeny"
        >
          <p className="px-2 pt-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
            Guider
          </p>
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block rounded-lg px-2 py-2.5 text-base text-ink-900 hover:bg-brand-50"
            >
              {guide.title}
            </Link>
          ))}
          <div className="my-3 border-t border-border" />
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-2 py-2.5 text-base font-medium text-ink-900 hover:bg-brand-50"
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/tilbud"
            className="mt-4 block rounded-lg bg-clay-500 px-4 py-3 text-center font-semibold text-white"
          >
            Få gratis tilbud
          </Link>
        </nav>
      )}
    </header>
  );
}
