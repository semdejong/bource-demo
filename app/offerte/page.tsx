import type { Metadata } from "next";
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
        <MailForm kind="offerte" />
      </div>
    </SiteChrome>
  );
}
