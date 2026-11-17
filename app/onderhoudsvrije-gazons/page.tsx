import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip } from "@/components/espalier";

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
        <div className="with-plate">
          <div className="copy">
            <p className="lede">{page.paragraphs[0]}</p>
          </div>
          <PhotoPlates photos={[photos.gazon]} />
        </div>
      </div>
      <Branch />
      <div className="field-body wide">
        <h2 className="beat-title">Genietpakket</h2>
        <p className="lede">{page.paragraphs[1]}</p>
        <PhotoPlates photos={[photos.klaprozen, photos.indexTuin]} />
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
