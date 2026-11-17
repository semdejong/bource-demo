import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip } from "@/components/espalier";

const page = content.pages.bodem;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function BodemPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body wide">
        <h1>{page.title}</h1>
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <PhotoPlates photos={[photos.grind, photos.schors]} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
