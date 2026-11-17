import type { Metadata } from "next";
import { content, photos, type Plate } from "@/content";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip, Hung, TaskList } from "@/components/espalier";

const page = content.pages.onkruid;

const targetPhotos: (readonly Plate[])[] = [
  [photos.onkruidVoegen],
  [],
  [],
  [photos.mosTegels, photos.mosVoegen],
];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

function zin(value: string) {
  return value.charAt(0).toLocaleUpperCase("nl-NL") + value.slice(1);
}

export default function OnkruidPage() {
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
          items={page.targets.map((target, index) => ({
            title: zin(target),
            photos: targetPhotos[index],
          }))}
        />
      </div>
      <Branch />
      <div className="field-body">
        <h2 className="beat-title">Tweecomponentenproduct</h2>
        <p className="lede">{page.body}</p>
      </div>
      <Branch />
      <div className="field-body wide">
        <h2 className="beat-title">{page.advantagesTitle}</h2>
        <TaskList items={page.advantages} />
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
