import type { Metadata } from "next";
import { content, photos, type Plate } from "@/content";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip, Hung } from "@/components/espalier";

const page = content.pages.producten;

const plates: (readonly Plate[])[] = [
  [photos.gazon, photos.klaprozen],
  [],
  [photos.vlonder, photos.terras],
  [],
  [photos.tuinhuis],
  [photos.vijverrand, photos.indexVijver],
];

const links: Record<number, { href: string; label: string }> = {
  0: { href: "/onderhoudsvrije-gazons", label: "Onderhoudsvrije gazons en borders" },
  2: { href: "/tuinontwerp#aanleg", label: "Aanleg" },
};

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

function zin(value: string) {
  return value.charAt(0).toLocaleUpperCase("nl-NL") + value.slice(1);
}

export default function ProductenPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
      </div>
      <Branch />
      <div className="field-body wide">
        <Hung
          items={page.items.map((item, index) => ({
            title: zin(item),
            href: links[index]?.href,
            link: links[index]?.label,
            photos: plates[index],
          }))}
        />
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
