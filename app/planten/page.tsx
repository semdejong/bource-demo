import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Branch, CallStrip } from "@/components/espalier";

const page = content.pages.planten;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function PlantenPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body wide">
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
        <div>
          {page.groups.map((group) => (
            <div className="ledger-row" key={group.name}>
              <span className="task-node" aria-hidden="true" />
              <span className="task-stub" aria-hidden="true" />
              <div className="task-copy">
                <p className="ledger-k">{group.name}</p>
                {group.range ? <p className="ledger-v">{group.range}</p> : null}
              </div>
            </div>
          ))}
        </div>
        <PhotoPlates photos={[photos.rhododendron]} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
