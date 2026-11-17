import type { Metadata } from "next";
import Link from "next/link";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip } from "@/components/espalier";

const page = content.pages.tuinonderhoud;

const taskPhotos = [
  undefined,
  undefined,
  [photos.gazon],
  [photos.hoogwerker],
  [photos.snoei],
  undefined,
  undefined,
  [photos.leibomen],
] as const;

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
      {page.tasks.map((task, index) => (
        <section key={task.title}>
          <Branch />
          <div className="field-body wide">
            <div className={taskPhotos[index] ? "with-plate" : undefined}>
              <div className="copy">
                <h2 className="beat-title">{task.title}</h2>
                {"href" in task && task.href ? (
                  <Link className="link-more" href={task.href}>
                    {task.link}
                  </Link>
                ) : null}
              </div>
              {taskPhotos[index] ? <PhotoPlates photos={taskPhotos[index]} /> : null}
            </div>
          </div>
        </section>
      ))}
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
