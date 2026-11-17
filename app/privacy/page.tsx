import type { Metadata } from "next";
import { content } from "@/content";
import SiteChrome from "@/components/SiteChrome";
import { Branch } from "@/components/espalier";

const page = content.pages.privacy;
const labels = ["Concept", "Geen cookies", "Formulieren", "Vragen"] as const;

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
      </div>
      {page.paragraphs.map((paragraph, index) => (
        <section key={labels[index]}>
          <Branch />
          <div className="field-body">
            <h2 className="beat-title">{labels[index]}</h2>
            <p>{paragraph}</p>
            {index === page.paragraphs.length - 1 ? (
              <p>
                <a className="mail-link" href="https://sleads.nl" target="_blank" rel="noopener noreferrer">
                  sleads.nl
                </a>
              </p>
            ) : null}
          </div>
        </section>
      ))}
    </SiteChrome>
  );
}
