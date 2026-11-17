import type { Metadata } from "next";
import { content } from "@/content";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip, TaskList } from "@/components/espalier";

const page = content.pages.groeigarantie;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function GroeigarantiePage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="question">{page.question}</p>
        <p className="lede">{page.paragraphs[0]}</p>
      </div>
      <Branch />
      <div className="field-body">
        <h2 className="beat-title">Wat eronder valt</h2>
        <TaskList items={page.covered} />
      </div>
      <Branch />
      <div className="field-body">
        <h2 className="beat-title">De afspraak</h2>
        <TaskList items={page.terms} />
        <p className="statement">{page.paragraphs[1]}</p>
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
