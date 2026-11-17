import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip } from "@/components/espalier";

const page = content.pages.gazons;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function GazonsPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body wide">
        <h1>{page.title}</h1>
        <p className="statement">{page.statement}</p>
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <PhotoPlates photos={[photos.gazon, photos.klaprozen]} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
