import Link from "next/link";
import { content } from "@/content";
import { Branch, MailAddress, Phones } from "@/components/espalier";

const links = [
  { href: "/", label: "Welkom" },
  ...content.nav.map((item) => ({ href: item.href, label: item.label })),
  { href: "/offerte", label: "Offerte" },
  { href: "/privacy", label: "Privacy" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" data-section="footer">
      <Branch />
      <p className="footer-name">{content.company.name}</p>
      <p className="footer-legal">{content.company.legal}</p>
      <Phones />
      <MailAddress />
      <nav className="footer-nav" aria-label="Footer">
        {links.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <p className="footer-meta">
        <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer">
          Concept door Sleads
        </a>
      </p>
    </footer>
  );
}
