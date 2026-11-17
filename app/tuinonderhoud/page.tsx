import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip, TaskList } from "@/components/espalier";

const page = content.pages.tuinonderhoud;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function TuinonderhoudPage() {
  return (
    <SiteChrome>
      <Branch label="03 ONDERHOUD" />
      <div className="field-body wide">
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
        <TaskList items={page.tasks} />
        <PhotoPlates
          photos={[photos.ervoor, photos.erna, photos.hoogwerker, photos.berthien, photos.snoei]}
        />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
