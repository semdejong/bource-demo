import type { Metadata } from "next";
import { content, photos, type Plate } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip, Hung } from "@/components/espalier";

const page = content.pages.bodem;

const materialPhotos: Record<string, readonly Plate[]> = {
  grind: [photos.grind],
};

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

function zin(value: string) {
  return value.charAt(0).toLocaleUpperCase("nl-NL") + value.slice(1);
}

export default function BodemPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.paragraphs[0]}</p>
      </div>
      <Branch />
      <div className="field-body wide">
        <Hung
          items={page.materials.map((material) => ({
            title: zin(material),
            photos: materialPhotos[material],
          }))}
        />
      </div>
      <Branch />
      <div className="field-body wide">
        <p className="pull">{page.paragraphs[1]}</p>
        <PhotoPlates photos={[photos.schors]} />
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
