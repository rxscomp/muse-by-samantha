import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import museAngels from "@/assets/muse-angels.png";
import museWordmark from "@/assets/muse-wordmark.png";
import { Toaster } from "@/components/ui/sonner";
import { footerQuotes, site } from "@/lib/site-content";

const navLinks = [
  { to: "/gallery", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Inquire" },
] as const;

export function SiteLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [footerQuote, setFooterQuote] = useState(footerQuotes[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const storageKey = "muse-footer-quote-index";
    const storedIndex = window.localStorage.getItem(storageKey);
    const lastIndex = storedIndex === null ? -1 : Number(storedIndex);
    const quoteIndexes = footerQuotes.map((_, index) => index);
    const availableIndexes =
      footerQuotes.length > 1
        ? quoteIndexes.filter((index) => index !== lastIndex)
        : quoteIndexes;
    const nextIndex =
      availableIndexes[Math.floor(Math.random() * availableIndexes.length)] ?? 0;

    window.localStorage.setItem(storageKey, String(nextIndex));
    setFooterQuote(footerQuotes[nextIndex]);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className={`sticky top-0 z-50 flex flex-col items-start gap-5 px-6 py-5 transition-colors md:flex-row md:items-center md:justify-between md:px-10 md:py-6 ${
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-background/0"
        }`}
      >
        <Link
          to="/"
          className="inline-flex min-h-12 items-end gap-2 leading-none"
          aria-label={site.navName}
        >
          <img
            src={museWordmark}
            alt="Muse"
            className="block h-[42px] w-auto md:h-[50px]"
          />
          <span className="font-display italic text-[13px] md:text-sm tracking-normal text-foreground/75 -translate-y-1.5">
            by Samantha
          </span>
        </Link>
        <div className="flex w-full justify-between gap-4 text-[9px] font-mono tracking-[0.18em] uppercase md:w-auto md:justify-start md:gap-12 md:text-[10px] md:tracking-[0.2em]">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors hover:text-accent ${active ? "text-accent" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="px-6 md:px-10 py-14 border-t border-border mt-24">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row xl:justify-between xl:items-end gap-6 xl:gap-16">
          <blockquote className="font-display text-lg md:text-xl leading-snug text-center xl:text-left max-w-2xl mx-auto xl:mx-0">
            <p className="whitespace-pre-line">"{footerQuote.text}"</p>
            <cite className="block mt-5 not-italic text-sm md:text-base text-muted-foreground">
              {footerQuote.author}
            </cite>
          </blockquote>
          <div className="flex flex-col items-center gap-4">
            <img
              src={museAngels}
              alt=""
              aria-hidden="true"
              className="pointer-events-none w-40 max-w-full -translate-y-3 brightness-0 opacity-80 md:w-48 xl:w-52 xl:translate-y-0"
              loading="lazy"
            />
            <div className="flex gap-8 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                Instagram
              </a>
              <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
                Email
              </a>
            </div>
            <p className="font-mono text-[9px] text-muted-foreground/70 uppercase tracking-[0.2em]">
              (c) 2026 {site.name}
            </p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
