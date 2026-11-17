import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip } from "@/components/espalier";

const page = content.pages.tuinontwerp;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function TuinontwerpPage() {
  return (
    <SiteChrome>
      <Branch label="01 TUINONTWERP" />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.beats[0].text}</p>
      </div>
      {page.beats.slice(1).map((beat) => (
        <section key={beat.title}>
          <Branch />
          <div className="field-body">
            <h2 className="beat-title">{beat.title}</h2>
            <p>{beat.text}</p>
          </div>
        </section>
      ))}
      <Branch />
      <div className="field-body wide">
        <PhotoPlates photos={[photos.ontwerpBorder, photos.grindbed, photos.ontwerpSchets]} />
      </div>
      <Branch label="02 AANLEG" />
      <div className="field-body wide" id="aanleg">
        <h2>Aanleg</h2>
        <p className="lede">{page.aanleg}</p>
        <PhotoPlates photos={[photos.terras, photos.indexTuin]} />
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
