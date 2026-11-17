import type { Metadata } from "next";
import Link from "next/link";
import { content, photos, type Plate } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip, Phones } from "@/components/espalier";

export const metadata: Metadata = {
  title: { absolute: content.seo.title },
  description: content.seo.description,
};

const fieldPhotos: Record<string, readonly Plate[]> = {
  "01 TUINONTWERP": [photos.ontwerpBorder, photos.grindbed],
  "02 AANLEG": [photos.terras, photos.indexTuin],
  "03 ONDERHOUD": [photos.ervoor, photos.erna, photos.hoogwerker],
  "04 ADVIES": [photos.leibomen],
};

const morePhotos: Record<string, Plate> = {
  "/onderhoudsvrije-gazons": photos.gazon,
  "/planten": photos.rhododendron,
  "/producten": photos.tuinhuis,
  "/onkruidbestrijding": photos.mosTegels,
  "/bodembedekking": photos.grind,
};

export default function HomePage() {
  const { home, phone } = content;
  return (
    <SiteChrome>
      <div className="field-body wide">
        <p className="branch-label">{content.company.legal}</p>
        <h1>{home.h1}</h1>
        <p className="lede">{home.lead}</p>
        <Phones />
        <div className="btn-row">
          <a className="btn btn-ink" href={phone.primaryTel} data-cta="bellen">
            Bellen
          </a>
          <Link className="btn" href="/offerte" data-cta="offerte">
            Offerte
          </Link>
        </div>
        <PhotoPlates photos={[photos.banner]} />
      </div>

      {home.fields.map((field) => (
        <section key={field.label}>
          <Branch label={field.label} />
          <div className="field-body wide">
            <div className="with-plate">
              <div className="copy">
                <h2>{field.title}</h2>
                <p>{field.text}</p>
                <Link className="link-more" href={field.href}>
                  {field.link}
                </Link>
              </div>
              <PhotoPlates photos={fieldPhotos[field.label]} />
            </div>
          </div>
        </section>
      ))}

      {home.more.map((field) => {
        const plate = morePhotos[field.href];
        return (
          <section key={field.href}>
            <Branch />
            <div className="field-body wide">
              <div className={plate ? "with-plate" : undefined}>
                <div className="copy">
                  <h2 className="beat-title">{field.title}</h2>
                  <p>{field.text}</p>
                  <Link className="link-more" href={field.href}>
                    {field.link}
                  </Link>
                </div>
                {plate ? <PhotoPlates photos={[plate]} /> : null}
              </div>
            </div>
          </section>
        );
      })}

      <CallStrip />
    </SiteChrome>
  );
}
