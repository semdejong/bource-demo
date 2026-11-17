import type { Metadata } from "next";
import { content } from "@/content";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip } from "@/components/espalier";

const page = content.pages.graf;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function GrafPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.paragraphs[0]}</p>
      </div>
      <Branch />
      <div className="field-body question-set">
        {page.questions.map((question) => (
          <p className="question" key={question}>
            {question}
          </p>
        ))}
        <p className="lede">{page.paragraphs[1]}</p>
      </div>
      <Branch />
      <div className="field-body">
        <h2 className="beat-title">Wat kan Hoveniersbedrijf Bource voor u doen</h2>
        {page.offer.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
