import type { Metadata } from "next";
import { content } from "@/content";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip } from "@/components/espalier";

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
        <p className="statement">{page.paragraphs[1]}</p>
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
