import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip } from "@/components/espalier";

const page = content.pages.tuinadvies;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function TuinadviesPage() {
  return (
    <SiteChrome>
      <Branch label="04 ADVIES" />
      <div className="field-body wide">
        <div className="with-plate">
          <div className="copy">
            <h1>{page.title}</h1>
            <p className="lede">{page.paragraphs[0]}</p>
            <p>{page.paragraphs[1]}</p>
          </div>
          <PhotoPlates photos={[photos.leibomen]} />
        </div>
      </div>
      <Branch />
      <div className="field-body">
        <h2>Huis te koop</h2>
        <p>{page.paragraphs[2]}</p>
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
