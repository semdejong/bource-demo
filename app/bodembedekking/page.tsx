import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip } from "@/components/espalier";

const page = content.pages.bodem;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function BodemPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.paragraphs[0]}</p>
      </div>
      {page.materials.map((material) => (
        <section key={material}>
          <Branch />
          <div className="field-body wide">
            <div className={material === "grind" ? "with-plate" : undefined}>
              <div className="copy">
                <h2 className="beat-title">{material.charAt(0).toUpperCase() + material.slice(1)}</h2>
              </div>
              {material === "grind" ? <PhotoPlates photos={[photos.grind]} /> : null}
            </div>
          </div>
        </section>
      ))}
      <Branch />
      <div className="field-body wide">
        <p className="statement">{page.paragraphs[1]}</p>
        <PhotoPlates photos={[photos.schors]} />
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
