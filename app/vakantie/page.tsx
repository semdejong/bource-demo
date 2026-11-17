import type { Metadata } from "next";
import Link from "next/link";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, Phones } from "@/components/espalier";

const page = content.pages.vakantie;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function VakantiePage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body wide">
        <h1>{page.title}</h1>
        <div className="with-plate">
          <div className="copy">
            <p className="lede">{page.paragraphs[0]}</p>
          </div>
          <PhotoPlates photos={[photos.indexTuin, photos.gazon]} />
        </div>
      </div>
      <Branch />
      <div className="field-body">
        <h2 className="beat-title">Bijkomend voordeel</h2>
        <p className="lede">{page.paragraphs[1]}</p>
      </div>
      <Branch />
      <div className="field-body">
        <h2 className="beat-title">{page.cta}</h2>
        <Phones />
        <Link className="btn btn-ink" href="/offerte" data-cta="offerte">
          Offerte
        </Link>
        <Also links={page.also} />
      </div>
    </SiteChrome>
  );
}
