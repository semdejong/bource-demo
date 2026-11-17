import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import MailForm from "@/components/MailForm";
import SiteChrome from "@/components/SiteChrome";
import { Branch, Phones } from "@/components/espalier";

const page = content.pages.offerte;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function OffertePage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
        <Phones />
      </div>
      <Branch />
      <div className="field-body">
        <h2 className="beat-title">Kies een onderwerp</h2>
        <ul className="tasks">
          {content.form.diensten.map((dienst, index) => (
            <li key={dienst}>
              <span className="task-node" aria-hidden="true" />
              <span className="task-stub" aria-hidden="true" />
              <span className="task-copy">
                <Link href={content.nav[index].href}>{dienst}</Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Branch />
      <div className="field-body">
        <h2 className="beat-title">Het bericht</h2>
        <MailForm kind="offerte" />
      </div>
    </SiteChrome>
  );
}
