import type { Metadata } from "next";
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
        <h2>Bericht sturen</h2>
        <MailForm kind="contact" />
      </div>
    </SiteChrome>
  );
}
