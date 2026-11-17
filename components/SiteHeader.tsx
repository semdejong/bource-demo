"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";

const menu = [
  { href: "/", label: "Welkom" },
  ...content.nav.map((item) => ({ href: item.href, label: item.label })),
  { href: "/offerte", label: "Offerte" },
  { href: "/privacy", label: "Privacy" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const media = window.matchMedia("(min-width: 1210px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="site-header" data-section="header">
      <a className="skip" href="#inhoud">
        Ga naar inhoud
      </a>
      <div className="site-header-inner">
        <div className="header-bar">
          <Link href="/" className="wordmark">
            {content.company.name.split(" ")[0]}
            <br className="wordmark-break" /> {content.company.name.split(" ").slice(1).join(" ")}
          </Link>
          <nav className="desk-nav" aria-label="Hoofdmenu">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              >
                {item.short}
              </Link>
            ))}
          </nav>
          <a className="btn btn-ink" href={content.phone.primaryTel} data-cta={ctaType(content.phone.primaryTel)}>
            Bellen
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Sluit" : "Menu"}
          </button>
        </div>
        <div className="header-branch" aria-hidden="true">
          <span className="branch-node" />
          <span className="branch-line" />
        </div>
      </div>
      {open ? (
        <>
          <button type="button" className="menu-backdrop" aria-label="Sluit menu" onClick={() => setOpen(false)} />
          <nav id={menuId} className="mobiel-menu" aria-label="Mobiel menu">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="menu-link"
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="branch-node" aria-hidden="true" />
                <span className="menu-stub" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </>
      ) : null}
    </header>
  );
}
