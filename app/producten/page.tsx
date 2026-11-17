import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip, TaskList } from "@/components/espalier";

const page = content.pages.producten;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ProductenPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body wide">
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
        <TaskList items={page.items} />
        <PhotoPlates photos={[photos.tuinhuis, photos.vlonder, photos.vijverrand, photos.terras]} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
