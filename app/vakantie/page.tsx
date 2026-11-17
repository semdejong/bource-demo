import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import SiteChrome from "@/components/SiteChrome";
import { Branch, Phones } from "@/components/espalier";

const page = content.pages.vakantie;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function VakantiePage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="lede">{page.cta}</p>
        <Phones />
        <Link className="btn btn-ink" href="/offerte" data-cta="offerte">
          Offerte
        </Link>
      </div>
    </SiteChrome>
  );
}
