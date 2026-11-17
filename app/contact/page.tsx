import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import MailForm from "@/components/MailForm";
import SiteChrome from "@/components/SiteChrome";
import { Branch, MailAddress, Phones } from "@/components/espalier";

const page = content.pages.contact;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <p className="branch-label">{content.company.legal}</p>
        <h1>{page.title}</h1>
        <p className="lede">
          {content.company.name}. {page.intro}
        </p>
        <Phones />
        <MailAddress />
      </div>
      <Branch />
      <div className="field-body">
        <h2 className="beat-title">Waarover u kunt bellen</h2>
        <ul className="tasks">
          {content.nav
            .filter((item) => item.href !== "/contact")
            .map((item) => (
              <li key={item.href}>
                <span className="task-node" aria-hidden="true" />
                <span className="task-stub" aria-hidden="true" />
                <span className="task-copy">
                  <Link href={item.href}>{item.label}</Link>
                </span>
              </li>
            ))}
        </ul>
      </div>
      <Branch />
      <div className="field-body">
        <h2>Bericht sturen</h2>
        <MailForm kind="contact" />
      </div>
    </SiteChrome>
  );
}
