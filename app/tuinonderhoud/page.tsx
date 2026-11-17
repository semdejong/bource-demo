import type { Metadata } from "next";
import { content, photos, type Plate } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip, Hung } from "@/components/espalier";

const page = content.pages.tuinonderhoud;

const taskPhotos: (readonly Plate[] | undefined)[] = [
  undefined,
  undefined,
  [photos.gazon],
  [photos.hoogwerker],
  [photos.snoei],
  undefined,
  undefined,
  [photos.leibomen],
];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function TuinonderhoudPage() {
  return (
    <SiteChrome>
      <Branch label="03 ONDERHOUD" />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
      </div>
      <Branch />
      <div className="field-body wide">
        <Hung
          items={page.tasks.map((task, index) => ({
            title: task.title,
            href: "href" in task ? task.href : undefined,
            link: "link" in task ? task.link : undefined,
            photos: taskPhotos[index],
          }))}
        />
      </div>
      <Branch />
      <div className="field-body wide">
        <h2 className="beat-title">Voor en na</h2>
        <p>{page.hedge}</p>
        <PhotoPlates photos={[photos.ervoor, photos.erna, photos.berthien]} />
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
