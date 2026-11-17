import type { Metadata } from "next";
import { content, photos } from "@/content";
import PhotoPlates from "@/components/PhotoPlates";
import SiteChrome from "@/components/SiteChrome";
import { Also, Branch, CallStrip } from "@/components/espalier";

const page = content.pages.planten;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function PlantenPage() {
  return (
    <SiteChrome>
      <Branch />
      <div className="field-body">
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
      </div>
      {page.groups.map((group) => (
        <section key={group.name} id={group.name.toLowerCase().replace(/\s+/g, "-")}>
          <Branch />
          <div className="field-body wide">
            <div className={group.name === "Rhododendrons" ? "with-plate" : undefined}>
              <div className="copy">
                <h2 className="beat-title">{group.name}</h2>
                {group.range ? <p className="latin">{group.range}</p> : null}
                {group.name === "Buxus" ? (
                  <ul className="tasks">
                    {page.forms.map((form) => (
                      <li key={form}>
                        <span className="task-node" aria-hidden="true" />
                        <span className="task-stub" aria-hidden="true" />
                        <span className="task-copy">{form}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {group.name === "Rhododendrons" ? <PhotoPlates photos={[photos.rhododendron]} /> : null}
            </div>
          </div>
        </section>
      ))}
      <Branch />
      <div className="field-body">
        <Also links={page.also} />
      </div>
      <CallStrip />
    </SiteChrome>
  );
}
