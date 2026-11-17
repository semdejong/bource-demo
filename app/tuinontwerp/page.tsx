import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip } from "@/components/espalier";

const page = content.pages.tuinontwerp;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function TuinontwerpPage() {
  return (
    <SiteChrome>
      <Branch label="01 TUINONTWERP" />
      <div className="field-body wide">
        <h1>{page.title}</h1>
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph} className="lede">
            {paragraph}
          </p>
        ))}
        <PhotoPlates photos={[photos.ontwerpBorder, photos.grindbed, photos.ontwerpSchets]} />
      </div>
      <Branch label="02 AANLEG" />
      <div className="field-body" id="aanleg">
        <h2>Aanleg</h2>
        <p>{page.aanleg}</p>
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
