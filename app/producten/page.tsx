import type { Metadata } from "next";
import Link from "next/link";
import { content, photos, type Plate } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip } from "@/components/espalier";

const page = content.pages.producten;

const plates: (readonly Plate[])[] = [
  [photos.gazon, photos.klaprozen],
  [],
  [photos.vlonder, photos.terras],
  [],
  [photos.tuinhuis],
  [photos.vijverrand, photos.indexVijver],
];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ProductenPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
      </div>
      {page.items.map((item, index) => (
        <section key={item}>
          <Branch />
          <div className="field-body wide">
            <div className={plates[index].length ? "with-plate" : undefined}>
              <div className="copy">
                <h2 className="beat-title">{item}</h2>
                {index === 0 ? (
                  <Link className="link-more" href="/onderhoudsvrije-gazons">
                    Onderhoudsvrije gazons en borders
                  </Link>
                ) : null}
                {index === 2 ? (
                  <Link className="link-more" href="/tuinontwerp#aanleg">
                    Aanleg
                  </Link>
                ) : null}
              </div>
              {plates[index].length ? <PhotoPlates photos={plates[index]} /> : null}
            </div>
          </div>
        </section>
      ))}
      <Branch />
      <div className="field-body">
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
