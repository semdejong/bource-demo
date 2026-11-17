import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip } from "@/components/espalier";

const page = content.pages.onkruid;

const targetPhotos = [
  [photos.onkruidVoegen],
  [],
  [],
  [photos.mosTegels, photos.mosVoegen],
] as const;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function OnkruidPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
      </div>
      {page.targets.map((target, index) => (
        <section key={target}>
          <Branch />
          <div className="field-body wide">
            <div className={targetPhotos[index].length ? "with-plate" : undefined}>
              <div className="copy">
                <h2 className="beat-title">{target}</h2>
              </div>
              {targetPhotos[index].length ? <PhotoPlates photos={targetPhotos[index]} /> : null}
            </div>
          </div>
        </section>
      ))}
      <Branch />
      <div className="field-body">
        <h2 className="beat-title">Tweecomponentenproduct</h2>
        <p className="lede">{page.body}</p>
      </div>
      <Branch />
      <div className="field-body wide">
        <h2 className="beat-title">{page.advantagesTitle}</h2>
        <ul className="tasks">
          {page.advantages.map((item) => (
            <li key={item}>
              <span className="task-node" aria-hidden="true" />
              <span className="task-stub" aria-hidden="true" />
              <span className="task-copy">{item}</span>
            </li>
          ))}
        </ul>
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
