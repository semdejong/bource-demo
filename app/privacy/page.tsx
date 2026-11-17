import type { Metadata } from "next";
import { content } from "@/content";
import SiteChrome from "@/components/SiteChrome";
import { Branch } from "@/components/espalier";

const page = content.pages.privacy;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function PrivacyPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <a className="mail-link" href="https://sleads.nl" target="_blank" rel="noopener noreferrer">
            sleads.nl
          </a>
        </p>
      </div>
    </SiteChrome>
  );
}
