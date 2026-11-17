import type { Metadata } from "next";
import Link from "next/link";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip, Phones } from "@/components/espalier";

export const metadata: Metadata = {
  title: { absolute: content.seo.title },
  description: content.seo.description,
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
        <PhotoPlates photos={[photos.banner, photos.indexTuin, photos.indexVijver]} />
      </div>

      {home.fields.map((field) => (
        <section key={field.label}>
          <Branch label={field.label} />
          <div className={field.label === "04 ADVIES" ? "field-body wide" : "field-body"}>
            {field.label === "04 ADVIES" ? (
              <div className="with-plate">
                <div className="copy">
                  <h2>{field.title}</h2>
                  <p>{field.text}</p>
                  <Link className="link-more" href={field.href}>
                    {field.link}
                  </Link>
                </div>
                <PhotoPlates photos={[photos.leibomen]} />
              </div>
            ) : (
              <>
                <h2 id={field.label}>{field.title}</h2>
                <p>{field.text}</p>
                <Link className="link-more" href={field.href}>
                  {field.link}
                </Link>
              </>
            )}
          </div>
        </section>
      ))}

      {home.more.map((field) => (
        <section key={field.href}>
          <Branch />
          <div className="ledger-field">
            <h2>{field.title}</h2>
            <p>{field.text}</p>
            <Link className="link-more" href={field.href}>
              {field.link}
            </Link>
          </div>
        </section>
      ))}

      <CallStrip />
    </SiteChrome>
  );
}
