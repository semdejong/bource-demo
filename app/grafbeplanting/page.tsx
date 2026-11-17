import type { Metadata } from "next";
import { content } from "@/content";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip, TaskList } from "@/components/espalier";

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
      {page.questions.map((question) => (
        <section key={question}>
          <Branch />
          <div className="field-body">
            <p className="question">{question}</p>
          </div>
        </section>
      ))}
      <Branch />
      <div className="field-body">
        <p className="lede">{page.paragraphs[1]}</p>
        <h2 className="beat-title">Wat kan Hoveniersbedrijf Bource voor u doen</h2>
        {page.offer.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <TaskList items={page.steps} />
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
