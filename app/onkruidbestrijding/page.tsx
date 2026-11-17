import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip, TaskList } from "@/components/espalier";

const page = content.pages.onkruid;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function OnkruidPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body wide">
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <TaskList items={page.targets} />
        <p>{page.body}</p>
      </div>
      <Branch />
      <div className="field-body wide">
        <h2>{page.advantagesTitle}</h2>
        <TaskList items={page.advantages} />
        <PhotoPlates photos={[photos.mosTegels, photos.mosVoegen, photos.onkruidVoegen]} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
